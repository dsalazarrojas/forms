(function () {
  function sanitizeForm(form) {
    const codec = window.GICYamlCodec;
    return codec ? codec.sanitizeForm(form) : form;
  }

  function createWorkerScript(form, options) {
    const safeForm = sanitizeForm(form || { title: 'Untitled Survey', questions: [] });
    const yaml = String(options?.yaml || '');
    const payload = JSON.stringify(safeForm);
    const yamlLiteral = JSON.stringify(yaml);

    return `const SURVEY = ${payload};
const YAML_SOURCE = ${yamlLiteral};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  if (request.method === 'POST' && url.pathname === '/submit') {
    return handleSubmit(request);
  }

  if (request.method === 'GET' && url.pathname === '/form.yaml') {
    return new Response(YAML_SOURCE, {
      headers: {
        'content-type': 'text/yaml; charset=UTF-8',
        'cache-control': 'no-store'
      }
    });
  }

  return new Response(renderPage(), {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'cache-control': 'no-store'
    }
  });
}

async function handleSubmit(request) {
  const formData = await request.formData();
  const entries = {};

  for (const [key, value] of formData.entries()) {
    if (entries[key] === undefined) {
      entries[key] = value;
    } else if (Array.isArray(entries[key])) {
      entries[key].push(value);
    } else {
      entries[key] = [entries[key], value];
    }
  }

  return new Response(renderThankYou(entries), {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'cache-control': 'no-store'
    }
  });
}

function renderPage() {
  const fields = SURVEY.questions.map((question, index) => renderQuestion(question, index)).join('');
  return template(
    'Survey',
    actionPanel('YAML source', '<p class="muted">This deployment was generated from the graphical editor and includes a shareable YAML source endpoint.</p><a class="secondary-button" href="/form.yaml">Download YAML</a>') +
      actionPanel('Questionnaire', '<form action="/submit" method="post" class="survey-form">' + fields + '<button class="primary-button" type="submit">Submit</button></form>')
  );
}

function renderQuestion(question, index) {
  const type = question.type || 'text';
  const label = escapeHtml(question.label || question.name || ('Question ' + (index + 1)));
  const name = escapeHtml(question.name || ('question_' + (index + 1)));
  const hint = question.hint ? '<p class="hint">' + escapeHtml(question.hint) + '</p>' : '';
  const required = question.required ? 'required' : '';
  const requiredLabel = question.required ? '<span class="required">*</span>' : '';

  if (type === 'note') {
    return '<section class="note-card"><h3>' + label + '</h3>' + hint + '</section>';
  }

  let control = '';
  if (type === 'select_one') {
    control = '<select name="' + name + '" ' + required + '><option value="">Select an option</option>' +
      question.options.map(option => '<option value="' + escapeHtml(option.label) + '">' + escapeHtml(option.label) + '</option>').join('') +
      '</select>';
  } else if (type === 'select_multiple') {
    control = '<div class="choice-list">' + question.options.map((option, optionIndex) =>
      '<label class="choice-item"><input type="checkbox" name="' + name + '" value="' + escapeHtml(option.label) + '"><span>' + escapeHtml(option.label) + '</span></label>'
    ).join('') + '</div>';
  } else if (type === 'date') {
    control = '<input type="date" name="' + name + '" ' + required + '>';
  } else if (type === 'time') {
    control = '<input type="time" name="' + name + '" ' + required + '>';
  } else if (type === 'datetime') {
    control = '<input type="datetime-local" name="' + name + '" ' + required + '>';
  } else if (type === 'decimal') {
    control = '<input type="number" step="0.01" name="' + name + '" ' + required + '>';
  } else if (type === 'integer' || type === 'number') {
    control = '<input type="number" step="1" name="' + name + '" ' + required + '>';
  } else if (type === 'email') {
    control = '<input type="email" name="' + name + '" ' + required + '>';
  } else if (type === 'audio') {
    control = '<input type="file" accept="audio/*" name="' + name + '" ' + required + '>';
  } else if (type === 'image') {
    control = '<input type="file" accept="image/*" name="' + name + '" ' + required + '>';
  } else if (type === 'video') {
    control = '<input type="file" accept="video/*" name="' + name + '" ' + required + '>';
  } else if (type === 'file') {
    control = '<input type="file" name="' + name + '" ' + required + '>';
  } else if (type === 'geopoint' || type === 'geoshape' || type === 'geotrace') {
    control = '<textarea name="' + name + '" rows="3" ' + required + ' placeholder="Enter coordinates or a location description"></textarea>';
  } else if (type === 'trigger') {
    control = '<button type="button" class="secondary-button" onclick="this.closest(\'section\').classList.toggle(\'triggered\')">Trigger action</button>';
  } else {
    control = '<input type="text" name="' + name + '" ' + required + '>';
  }

  return '<section><label>' + label + requiredLabel + '</label>' + control + hint + '</section>';
}

function renderThankYou(entries) {
  const rows = Object.keys(entries).sort().map(key => {
    const rawValue = entries[key];
    const value = Array.isArray(rawValue) ? rawValue.join(', ') : String(rawValue || '');
    return '<tr><th>' + escapeHtml(key) + '</th><td>' + escapeHtml(value) + '</td></tr>';
  }).join('');

  return template(
    'Submission received',
    actionPanel('Thank you', '<p class="muted">This lightweight Cloudflare deployment confirms the response in-browser and keeps the questionnaire self-contained.</p><table><tbody>' + rows + '</tbody></table><div class="button-row"><a class="secondary-button" href="/">Back to survey</a><a class="secondary-button" href="/form.yaml">Download YAML</a></div>')
  );
}

function actionPanel(title, body) {
  return '<div class="panel"><h2>' + title + '</h2>' + body + '</div>';
}

function template(title, body) {
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + escapeHtml(SURVEY.title || title) + '</title><style>' + styles() + '</style></head><body><main class="page"><header class="hero"><p class="eyebrow">Cloudflare deployment</p><h1>' + escapeHtml(SURVEY.title || title) + '</h1><p class="muted">Generated from forms.gic.mx using the PRD-aligned graphical editor.</p></header>' + body + '</main></body></html>';
}

function styles() {
  return [
    'body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#f8fafc;color:#0f172a;}',
    '.page{max-width:880px;margin:0 auto;padding:32px 18px 48px;}',
    '.hero{margin-bottom:24px;}',
    '.eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;font-weight:700;color:#ec5b13;margin-bottom:10px;}',
    'h1{font-size:clamp(2rem,4vw,2.8rem);margin:0 0 10px;}',
    'h2{margin:0 0 12px;font-size:1.1rem;}',
    '.panel{background:#fff;border:1px solid #e2e8f0;border-radius:22px;padding:20px 22px;box-shadow:0 12px 40px rgba(15,23,42,.06);margin-bottom:18px;}',
    '.survey-form{display:flex;flex-direction:column;gap:18px;}',
    'section{display:flex;flex-direction:column;gap:8px;}',
    'label{font-weight:600;}',
    'input,select,textarea{width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:12px;padding:12px 14px;font:inherit;background:#fff;color:#0f172a;}',
    '.choice-list{display:flex;flex-direction:column;gap:10px;}',
    '.choice-item{display:flex;align-items:center;gap:10px;font-weight:500;}',
    '.choice-item input{width:auto;}',
    '.primary-button,.secondary-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;padding:12px 18px;font-weight:700;text-decoration:none;cursor:pointer;font:inherit;}',
    '.primary-button{background:#ec5b13;color:#fff;border:none;}',
    '.secondary-button{background:#fff;color:#ec5b13;border:1px solid rgba(236,91,19,.35);}',
    '.button-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px;}',
    '.hint,.muted{color:#475569;line-height:1.6;}',
    '.note-card{background:#fff7ed;border:1px solid rgba(236,91,19,.2);border-left:4px solid #ec5b13;border-radius:16px;padding:18px;}',
    '.required{color:#dc2626;margin-left:4px;}',
    'table{width:100%;border-collapse:collapse;margin-top:14px;}',
    'th,td{text-align:left;padding:12px 10px;border-top:1px solid #e2e8f0;vertical-align:top;}',
    'th{width:30%;font-size:.9rem;color:#334155;}',
    '@media (max-width:640px){.page{padding:24px 14px 40px}.panel{padding:18px}}'
  ].join('');
}

function escapeHtml(text) {
  return String(text == null ? '' : text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
`;
  }

  window.GICCloudflareWorker = {
    createWorkerScript
  };
})();
