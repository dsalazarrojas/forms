(function () {
  'use strict';

  // ─── Configuration ──────────────────────────────────────────────────────────
  const DEFAULT_BRIDGE_URL = 'https://f.gic.mx';
  let BRIDGE_URL = '';
  let BRIDGE_CONFIG_ERROR = '';
  let _lastAiDiagnostics = null;

  // After registering at console.cloud.google.com, set your OAuth client ID here.
  const GOOGLE_CLIENT_ID = '704840528244-3ai3u4vhj3dlqdfs7spj2kdfgbt9quja.apps.googleusercontent.com';
  let _bridgeCsrfToken = '';
  let _bridgeCsrfTokenExpiresAt = 0;

  function getGoogleClientId() {
    const configured = window.GIC_GOOGLE_CLIENT_ID
      || localStorage.getItem('gic-google-client-id')
      || GOOGLE_CLIENT_ID;
    return String(configured || '').trim();
  }

  function getAllowedBridgeHosts() {
    const hosts = new Set([
      String(window.location.hostname || '').toLowerCase(),
      'forms.gic.mx'
    ]);
    const configuredBridge = window.GIC_BRIDGE_URL || localStorage.getItem('gic-bridge-url') || DEFAULT_BRIDGE_URL;
    if (configuredBridge) {
      try {
        hosts.add(new URL(configuredBridge, window.location.href).hostname.toLowerCase());
      } catch (_) {
        // Ignore invalid overrides here; resolveBridgeUrl will surface the error later.
      }
    }
    if (Array.isArray(window.GIC_BRIDGE_ALLOWED_HOSTS)) {
      window.GIC_BRIDGE_ALLOWED_HOSTS.forEach(host => {
        const normalized = String(host || '').trim().toLowerCase();
        if (normalized) {
          hosts.add(normalized);
        }
      });
    }
    return Array.from(hosts);
  }

  // ─── Internal helpers ────────────────────────────────────────────────────────
  function resolveBridgeUrl(rawUrl) {
    const trimmed = String(rawUrl || '').trim();
    if (!trimmed) {
      return '';
    }

    let parsed;
    try {
      parsed = new URL(trimmed, window.location.href);
    } catch (_) {
      throw new Error('DEFAULT_BRIDGE_URL must be a valid absolute HTTPS URL.');
    }

    const allowedHosts = getAllowedBridgeHosts();
    const hostname = parsed.hostname.toLowerCase();
    const isLocalDev = hostname === 'localhost' || hostname === '127.0.0.1';

    if (parsed.protocol !== 'https:' && !isLocalDev) {
      throw new Error('DEFAULT_BRIDGE_URL must use HTTPS outside local development.');
    }

    if (!allowedHosts.includes(hostname)) {
      throw new Error(`Bridge host "${parsed.hostname}" is not in the allowed host list.`);
    }

    return parsed.origin;
  }

  function parseJsonResponse(text, context) {
    if (!text) {
      return {};
    }

    try {
      return JSON.parse(text);
    } catch (_) {
      throw new Error(`${context} returned invalid JSON.`);
    }
  }

  function requireBridge() {
    if (BRIDGE_CONFIG_ERROR) {
      throw new Error(BRIDGE_CONFIG_ERROR);
    }

    if (!BRIDGE_URL) {
      throw new Error(
        'The GIC Bridge Worker is not configured. ' +
        'Deploy cloudflare-bridge-worker.js to your Cloudflare account, ' +
        'then set DEFAULT_BRIDGE_URL in deploy-integrations.js ' +
        'or localStorage.setItem("gic-bridge-url", "https://your-worker.workers.dev").'
      );
    }
  }

  async function getBridgeCsrfToken(forceRefresh) {
    requireBridge();
    const now = Date.now();
    if (!forceRefresh && _bridgeCsrfToken && now < _bridgeCsrfTokenExpiresAt - 30 * 1000) {
      return _bridgeCsrfToken;
    }

    const response = await fetch(`${BRIDGE_URL}/auth/csrf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}'
    });
    const text = await response.text();
    if (!response.ok) {
      throw new Error(`Bridge auth error (${response.status}): ${text.slice(0, 300)}`);
    }

    const data = parseJsonResponse(text, 'Bridge auth');
    _bridgeCsrfToken = data.csrfToken || '';
    _bridgeCsrfTokenExpiresAt = now + Math.max(60, Number(data.expiresIn || 0)) * 1000;
    if (!_bridgeCsrfToken) {
      throw new Error('Bridge auth token missing.');
    }
    return _bridgeCsrfToken;
  }

  async function fetchBridgeJson(path, payload, retried) {
    const csrfToken = await getBridgeCsrfToken(Boolean(retried));
    const response = await fetch(`${BRIDGE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(payload)
    });
    const text = await response.text();

    if ((response.status === 401 || response.status === 403) && !retried) {
      _bridgeCsrfToken = '';
      _bridgeCsrfTokenExpiresAt = 0;
      return fetchBridgeJson(path, payload, true);
    }

    if (!response.ok) {
      throw new Error(`${path} error (${response.status}): ${text.slice(0, 300)}`);
    }

    return parseJsonResponse(text, path);
  }

  async function fetchAuthedBridgeResponse(path, payload, extraHeaders, retried) {
    requireBridge();
    const csrfToken = await getBridgeCsrfToken(Boolean(retried));
    const headers = {
      'Content-Type': 'application/json',
      ...buildAuthHeaders(),
      ...(extraHeaders || {}),
      'X-CSRF-Token': csrfToken
    };
    const response = await fetch(`${BRIDGE_URL}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload || {})
    });

    if ((response.status === 401 || response.status === 403) && !retried) {
      _bridgeCsrfToken = '';
      _bridgeCsrfTokenExpiresAt = 0;
      return fetchAuthedBridgeResponse(path, payload, extraHeaders, true);
    }

    handleAuthError(response.status);
    return response;
  }

  function makeRequestId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return `gic-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  async function fetchAuthedBridgeJson(path, payload, extraHeaders, retried) {
    const response = await fetchAuthedBridgeResponse(path, payload, extraHeaders, retried);
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`${path} error (${response.status}): ${text.slice(0, 300)}`);
    }
    return response.json();
  }

  async function fetchFormBridgeResponse(path, payload, retried) {
    requireBridge();
    const csrfToken = await getBridgeCsrfToken(Boolean(retried));
    const headers = {
      'Content-Type': 'application/json',
      ...buildAuthHeaders(),
      'X-CSRF-Token': csrfToken
    };
    const response = await fetch(`${BRIDGE_URL}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload || {})
    });

    if ((response.status === 401 || response.status === 403) && !retried && !(payload && payload.mgmtToken)) {
      _bridgeCsrfToken = '';
      _bridgeCsrfTokenExpiresAt = 0;
      return fetchFormBridgeResponse(path, payload, true);
    }

    return response;
  }

  async function fetchFormBridgeJson(path, payload, retried) {
    const response = await fetchFormBridgeResponse(path, payload, retried);
    const text = await response.text();
    const data = text ? parseJsonResponse(text, path) : {};
    if (!response.ok) {
      const err = new Error((data && data.error) || `${path} error (${response.status})`);
      err.status = response.status;
      err.body = data;
      throw err;
    }
    return data;
  }

  // ─── XLSForm workbook (SheetJS — for in-browser download only) ──────────────
  // Conversion for platform deployments happens server-side in the bridge worker.
  function buildXlsFormWorkbook(form) {
    if (!window.XLSX) throw new Error('SheetJS (XLSX) library not loaded.');

    const title = String(form?.title || 'Untitled Survey');
    const questions = Array.isArray(form?.questions) ? form.questions : [];

    function slugify(text) {
      return String(text || '').toLowerCase()
        .replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '_')
        .replace(/_+/g, '_').replace(/^_+|_+$/g, '') || 'form';
    }

    const surveyRows  = [['type', 'name', 'label::English', 'hint', 'required']];
    const choicesRows = [['list_name', 'name', 'label::English']];
    const settingsRows = [
      ['form_title', 'form_id', 'version'],
      [title, slugify(title), '1']
    ];

    for (const q of questions) {
      const type = String(q.type || 'text');
      let xlsType = type === 'number' ? 'integer' : type === 'email' ? 'text' : type;

      if (type === 'select_one' || type === 'select_multiple') {
        const listName = `${q.name}_list`;
        xlsType = `${type} ${listName}`;
        for (const opt of (q.options || [])) {
          choicesRows.push([
            listName,
            String(opt.name || slugify(opt.label) || `opt_${choicesRows.length}`),
            String(opt.label || '')
          ]);
        }
      }

      surveyRows.push([
        xlsType,
        String(q.name || `q_${surveyRows.length}`),
        String(q.label || ''),
        String(q.hint || ''),
        q.required ? 'yes' : 'no'
      ]);
    }

    const wb = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(wb, window.XLSX.utils.aoa_to_sheet(surveyRows),  'survey');
    window.XLSX.utils.book_append_sheet(wb, window.XLSX.utils.aoa_to_sheet(choicesRows), 'choices');
    window.XLSX.utils.book_append_sheet(wb, window.XLSX.utils.aoa_to_sheet(settingsRows),'settings');
    return wb;
  }

  function buildXlsFormBlob(form) {
    const wb = buildXlsFormWorkbook(form);
    const buf = window.XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    return new Blob([buf], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
  }

  // ─── Platform deploy calls (conversion happens in the bridge worker) ─────────

  async function deployToTally(form, apiToken) {
    requireBridge();
    return fetchBridgeJson('/deploy/tally', { form, tallyToken: apiToken });
  }

  async function deployToFormbricks(form, apiKey, environmentId, host) {
    requireBridge();
    return fetchBridgeJson('/deploy/formbricks', { form, formbricksKey: apiKey, formbricksEnv: environmentId, formbricksHost: host });
  }

  async function uploadToONA(form, token, projectId) {
    requireBridge();
    return fetchBridgeJson('/deploy/ona', { form, onaToken: token, onaProject: projectId });
  }

  async function uploadToKobo(form, token, server) {
    requireBridge();
    return fetchBridgeJson('/deploy/kobo', { form, koboToken: token, koboServer: server });
  }

  // ─── Google OAuth (GIS implicit token flow) ──────────────────────────────────
  let _googleAccessToken = null;

  function connectGoogle() {
    return new Promise((resolve, reject) => {
      const googleClientId = getGoogleClientId();
      if (!googleClientId) {
        reject(new Error(
          'Google OAuth is not configured. ' +
          'Register your project at console.cloud.google.com, ' +
          'enable Google Forms API + Google Sheets API, ' +
          'create an OAuth client ID (Web application), ' +
          'add https://forms.gic.mx to authorized origins, ' +
          'then set GOOGLE_CLIENT_ID in deploy-integrations.js ' +
          'or localStorage.setItem("gic-google-client-id", "123...apps.googleusercontent.com").'
        ));
        return;
      }

      function startFlow() {
        const client = window.google.accounts.oauth2.initTokenClient({
          client_id: googleClientId,
          scope: [
            'https://www.googleapis.com/auth/forms.body',
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive.file'
          ].join(' '),
          callback(response) {
            if (response.error) { reject(new Error(response.error_description || response.error)); return; }
            _googleAccessToken = response.access_token;
            resolve(response.access_token);
          }
        });
        client.requestAccessToken({ prompt: 'select_account' });
      }

      if (window.google?.accounts?.oauth2) {
        startFlow();
      } else {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.onload = startFlow;
        script.onerror = () => reject(new Error('Failed to load Google Identity Services.'));
        document.head.appendChild(script);
      }
    });
  }

  // ─── Google Forms API (direct browser call — no conversion needed server-side)
  async function createGoogleForm(form) {
    if (!_googleAccessToken) throw new Error('Sign in with Google first.');
    const title = String(form?.title || 'Untitled Survey');
    const questions = Array.isArray(form?.questions) ? form.questions : [];

    const createRes = await fetch('https://forms.googleapis.com/v1/forms', {
      method: 'POST',
      headers: { Authorization: `Bearer ${_googleAccessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ info: { title } })
    });
    if (!createRes.ok) {
      const t = await createRes.text().catch(() => '');
      throw new Error(`Google Forms create error (${createRes.status}): ${t.slice(0, 300)}`);
    }

    const formData = await createRes.json();
    const formId = formData.formId;

    const TYPE_MAP = {
      select_one: 'MULTIPLE_CHOICE', select_multiple: 'CHECKBOX',
      date: 'DATE', time: 'TIME', datetime: 'DATE',
      image: 'FILE_UPLOAD', video: 'FILE_UPLOAD', audio: 'FILE_UPLOAD', file: 'FILE_UPLOAD'
    };

    const requests = questions.map((q, index) => {
      const gType = TYPE_MAP[q.type];
      const item = {
        title: String(q.label || q.name || `Question ${index + 1}`),
        description: String(q.hint || '')
      };

      if (gType === 'FILE_UPLOAD') {
        item.questionItem = { question: { required: Boolean(q.required), fileUploadQuestion: {} } };
      } else if (gType === 'MULTIPLE_CHOICE' || gType === 'CHECKBOX') {
        item.questionItem = { question: { required: Boolean(q.required), choiceQuestion: {
          type: gType,
          options: (q.options || []).map(opt => ({ value: String(opt.label || opt.name || '') }))
        }}};
      } else if (gType === 'DATE') {
        item.questionItem = { question: { required: Boolean(q.required),
          dateQuestion: { includeTime: q.type === 'datetime', includeYear: true }
        }};
      } else if (gType === 'TIME') {
        item.questionItem = { question: { required: Boolean(q.required), timeQuestion: { duration: false } }};
      } else {
        const isParagraph = ['note','geopoint','geoshape','geotrace'].includes(q.type);
        item.questionItem = { question: { required: Boolean(q.required), textQuestion: { paragraph: isParagraph } }};
      }

      return { createItem: { item, location: { index } } };
    });

    if (requests.length > 0) {
      const updateRes = await fetch(`https://forms.googleapis.com/v1/forms/${formId}:batchUpdate`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${_googleAccessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ requests })
      });
      if (!updateRes.ok) {
        const t = await updateRes.text().catch(() => '');
        throw new Error(`Google Forms update error (${updateRes.status}): ${t.slice(0, 300)}`);
      }
    }

    return { url: `https://docs.google.com/forms/d/${formId}/edit`, formId };
  }

  // ─── Google Sheets API (direct browser call) ─────────────────────────────────
  async function createGoogleSheet(form) {
    if (!_googleAccessToken) throw new Error('Sign in with Google first.');
    const title = String(form?.title || 'Untitled Survey');
    const questions = Array.isArray(form?.questions) ? form.questions : [];

    function slugify(text) {
      return String(text || '').toLowerCase()
        .replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '_')
        .replace(/_+/g, '_').replace(/^_+|_+$/g, '') || 'form';
    }

    const surveyRows  = [['type', 'name', 'label::English', 'hint', 'required']];
    const choicesRows = [['list_name', 'name', 'label::English']];
    const settingsRows = [['form_title', 'form_id', 'version'], [title, slugify(title), '1']];

    for (const q of questions) {
      const type = String(q.type || 'text');
      let xlsType = type === 'number' ? 'integer' : type;
      if (type === 'select_one' || type === 'select_multiple') {
        const listName = `${q.name}_list`;
        xlsType = `${type} ${listName}`;
        for (const opt of (q.options || [])) {
          choicesRows.push([listName, String(opt.name || slugify(opt.label) || `opt_${choicesRows.length}`), String(opt.label || '')]);
        }
      }
      surveyRows.push([xlsType, String(q.name || `q_${surveyRows.length}`), String(q.label || ''), String(q.hint || ''), q.required ? 'yes' : 'no']);
    }

    function toRowData(rows) {
      return rows.map(row => ({
        values: row.map(cell => ({ userEnteredValue: { stringValue: String(cell == null ? '' : cell) } }))
      }));
    }

    const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
      method: 'POST',
      headers: { Authorization: `Bearer ${_googleAccessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        properties: { title: `${title} – XLSForm` },
        sheets: [
          { properties: { title: 'survey',   index: 0 }, data: [{ rowData: toRowData(surveyRows)   }] },
          { properties: { title: 'choices',  index: 1 }, data: [{ rowData: toRowData(choicesRows)  }] },
          { properties: { title: 'settings', index: 2 }, data: [{ rowData: toRowData(settingsRows) }] }
        ]
      })
    });

    if (!res.ok) {
      const t = await res.text().catch(() => '');
      throw new Error(`Google Sheets error (${res.status}): ${t.slice(0, 300)}`);
    }

    const data = await res.json();
    return { url: data.spreadsheetUrl, spreadsheetId: data.spreadsheetId };
  }

  // ─── Bridge URL accessor (for pro-gate.js) ────────────────────────────────────
  function getBridgeUrl() {
    return BRIDGE_URL || '';
  }

  // ─── Auth headers helper ──────────────────────────────────────────────────────
  function buildAuthHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    const gate = window.GICProGate;
    if (!gate) return headers;

    const jwt = gate.getJWT();
    const byoKey = gate.getBYOKey();
    const byoUrl = gate.getBYOBaseUrl();

    if (jwt) {
      headers['Authorization'] = `Bearer ${jwt}`;
    } else if (byoKey) {
      headers['X-LLM-Key'] = byoKey;
      if (byoUrl) headers['X-LLM-Base-URL'] = byoUrl;
    }
    return headers;
  }

  function handleAuthError(status) {
    if ((status === 401 || status === 403) && window.GICProGate) {
      const err = new Error('auth_required');
      err.authRequired = true;
      throw err;
    }
  }

  // ─── AI endpoints ─────────────────────────────────────────────────────────────

  async function aiCreate(prompt, options) {
    return fetchAuthedBridgeJson('/ai/create', { prompt, options: options || {} });
  }

  async function aiCreateStream(prompt, onChunk, options) {
    const requestId = makeRequestId();
    _lastAiDiagnostics = {
      requestId,
      endpoint: `${BRIDGE_URL}/ai/create/stream`,
      startedAt: new Date().toISOString()
    };
    const response = await fetchAuthedBridgeResponse(
      '/ai/create/stream',
      { prompt, options: options || {} },
      { 'X-Request-ID': requestId }
    );
    const workerRequestId = response.headers.get('x-request-id')
      || response.headers.get('x-correlation-id')
      || response.headers.get('x-ai-request-id');
    _lastAiDiagnostics.status = response.status;
    _lastAiDiagnostics.workerRequestId = workerRequestId || null;
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      const error = new Error(`AI create stream error (${response.status}) [${requestId}]: ${text.slice(0, 300)}`);
      error.requestId = requestId;
      error.workerRequestId = workerRequestId || null;
      error.status = response.status;
      throw error;
    }
    return consumeSSE(response, onChunk, _lastAiDiagnostics);
  }

  async function aiEdit(yaml, instruction, options) {
    return fetchAuthedBridgeJson('/ai/edit', { yaml, instruction, options: options || {} });
  }

  async function aiEditStream(yaml, instruction, onChunk, options) {
    const requestId = makeRequestId();
    _lastAiDiagnostics = {
      requestId,
      endpoint: `${BRIDGE_URL}/ai/edit/stream`,
      startedAt: new Date().toISOString()
    };
    const response = await fetchAuthedBridgeResponse(
      '/ai/edit/stream',
      { yaml, instruction, options: options || {} },
      { 'X-Request-ID': requestId }
    );
    const workerRequestId = response.headers.get('x-request-id')
      || response.headers.get('x-correlation-id')
      || response.headers.get('x-ai-request-id');
    _lastAiDiagnostics.status = response.status;
    _lastAiDiagnostics.workerRequestId = workerRequestId || null;
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      const error = new Error(`AI edit stream error (${response.status}) [${requestId}]: ${text.slice(0, 300)}`);
      error.requestId = requestId;
      error.workerRequestId = workerRequestId || null;
      error.status = response.status;
      throw error;
    }
    return consumeSSE(response, onChunk, _lastAiDiagnostics);
  }

  async function consumeSSE(response, onChunk, diagnostics) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let fullText = '';

    function processLine(rawLine) {
      const line = rawLine.replace(/\r$/, '');
      if (!line.startsWith('data:')) return;
      const data = line.slice(5).replace(/^\s/, '').trim();
      if (data === '[DONE]') return;
      let parsed;
      try {
        parsed = JSON.parse(data);
      } catch (_) {
        if (data) {
          fullText += data;
          if (typeof onChunk === 'function') onChunk(data, fullText);
        }
        return;
      }
      if (parsed && parsed.error) {
        const error = new Error(String(parsed.error));
        error.requestId = diagnostics?.requestId || null;
        error.workerRequestId = diagnostics?.workerRequestId || null;
        throw error;
      }
      const chunk = parsed?.text || parsed?.delta || parsed?.content || '';
      if (chunk) {
        fullText += chunk;
        if (typeof onChunk === 'function') onChunk(chunk, fullText);
      }
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) processLine(line);
    }
    buffer += decoder.decode();
    if (buffer) processLine(buffer);
    if (diagnostics) diagnostics.completedAt = new Date().toISOString();
    if (fullText === '') {
      const requestId = diagnostics?.requestId ? ` [${diagnostics.requestId}]` : '';
      const error = new Error(`AI stream ended with no content${requestId}. The AI service may be temporarily unavailable — please try again.`);
      error.requestId = diagnostics?.requestId || null;
      error.workerRequestId = diagnostics?.workerRequestId || null;
      throw error;
    }
    return fullText;
  }

  async function checkBridgeHealth() {
    requireBridge();
    const startedAt = Date.now();
    const response = await fetch(`${BRIDGE_URL}/health`, { method: 'GET', cache: 'no-store' });
    const text = await response.text().catch(() => '');
    return {
      ok: response.ok,
      status: response.status,
      latencyMs: Date.now() - startedAt,
      body: text.slice(0, 500)
    };
  }

  // ─── SurveyMonkey endpoints ───────────────────────────────────────────────────

  async function smListSurveys(smToken) {
    return fetchAuthedBridgeJson('/surveymonkey/list', { token: smToken });
  }

  async function smImport(smToken, surveyId) {
    return fetchAuthedBridgeJson('/surveymonkey/import', { token: smToken, surveyId });
  }

  async function smExport(smToken, yaml) {
    return fetchAuthedBridgeJson('/surveymonkey/export', { token: smToken, yaml });
  }

  async function publishForm(schema) {
    return fetchFormBridgeJson('/forms/publish', { schema });
  }

  async function updateForm(formId, mgmtToken, schema) {
    return fetchFormBridgeJson('/forms/update', { formId, mgmtToken, schema });
  }

  async function pauseForm(formId, mgmtToken, resume) {
    return fetchFormBridgeJson('/forms/pause', { formId, mgmtToken, resume: Boolean(resume) });
  }

  async function deletePublishedForm(formId, mgmtToken) {
    return fetchFormBridgeJson('/forms/delete', { formId, mgmtToken });
  }

  async function listResponses(formId, mgmtToken, options) {
    const opts = options || {};
    return fetchFormBridgeJson('/forms/responses/list', {
      formId, mgmtToken,
      limit: opts.limit,
      cursor: opts.cursor
    });
  }

  async function deleteResponse(formId, mgmtToken, responseKey) {
    return fetchFormBridgeJson('/forms/responses/delete', { formId, mgmtToken, responseKey });
  }

  async function exportResponsesCsv(formId, mgmtToken) {
    const response = await fetchFormBridgeResponse('/forms/responses/export', { formId, mgmtToken });
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      const data = text ? parseJsonResponse(text, '/forms/responses/export') : {};
      const err = new Error((data && data.error) || `Export failed (${response.status})`);
      err.status = response.status;
      throw err;
    }
    const blob = await response.blob();
    const disposition = response.headers.get('Content-Disposition') || '';
    const match = /filename="([^"]+)"/.exec(disposition);
    const filename = match ? match[1] : `${formId}-responses.csv`;
    return { blob, filename };
  }

  async function openStripePortal(returnUrl) {
    const result = await fetchAuthedBridgeJson('/stripe/portal', {
      returnUrl: returnUrl || `${window.location.origin}/preview.html`
    });
    return result;
  }

  // ─── Public API ──────────────────────────────────────────────────────────────
  window.GICDeployIntegrations = {
    getBridgeUrl,
    getBridgeCsrfToken,    // exposed for pro-gate.js key management calls
    buildXlsFormWorkbook,
    buildXlsFormBlob,
    deployToTally,
    deployToFormbricks,
    uploadToONA,
    uploadToKobo,
    connectGoogle,
    createGoogleForm,
    createGoogleSheet,
    // AI
    aiCreate,
    aiCreateStream,
    checkBridgeHealth,
    getLastAiDiagnostics: () => _lastAiDiagnostics ? { ..._lastAiDiagnostics } : null,
    aiEdit,
    aiEditStream,
    openStripePortal,
    publishForm,
    updateForm,
    pauseForm,
    deletePublishedForm,
    listResponses,
    deleteResponse,
    exportResponsesCsv,
    // SurveyMonkey
    smListSurveys,
    smImport,
    smExport
  };

  try {
    BRIDGE_URL = resolveBridgeUrl(window.GIC_BRIDGE_URL || localStorage.getItem('gic-bridge-url') || DEFAULT_BRIDGE_URL);
  } catch (error) {
    BRIDGE_CONFIG_ERROR = error.message || 'Bridge worker URL is invalid.';
  }
})();
