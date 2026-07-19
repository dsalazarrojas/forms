#!/usr/bin/env node
/**
 * GIC Forms CLI — programmatic access to the GIC Forms Bridge Worker
 *
 * Usage (as library):
 *   const gic = require('./cli/gic-forms.js');
 *   const result = await gic.createForm('Employee onboarding form');
 *
 * Usage (as CLI):
 *   GIC_API_KEY=gic_live_xxx node cli/gic-forms.js createForm "My prompt"
 *   GIC_API_KEY=gic_live_xxx node cli/gic-forms.js validateForm ./form.yaml
 *   GIC_API_KEY=gic_live_xxx node cli/gic-forms.js deployToTally ./form.yaml --tally-token $TALLY_TOKEN
 *   GIC_API_KEY=gic_admin_xxx node cli/gic-forms.js adminCreateKey --label "Maria" --plan business --note "sister"
 *
 * Environment variables:
 *   GIC_API_KEY     — required: your GIC API key (gic_live_* or gic_admin_*)
 *   GIC_BRIDGE_URL  — optional: override bridge URL (default: production worker)
 *
 * Note: Google Forms/Sheets are NOT available via API key (browser OAuth required).
 */

'use strict';

const https = require('https');
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_BRIDGE_URL = 'https://gic-forms-bridge.dsalazar.workers.dev';

function getBridgeUrl() {
  return (process.env.GIC_BRIDGE_URL || DEFAULT_BRIDGE_URL).replace(/\/$/, '');
}

const CREDS_FILE = path.join(
  process.env.HOME || process.env.USERPROFILE || '',
  '.config', 'gic', 'credentials.json'
);

function readCredsFile() {
  try {
    return JSON.parse(fs.readFileSync(CREDS_FILE, 'utf8'));
  } catch {
    return null;
  }
}

function getApiKey() {
  if (process.env.GIC_API_KEY) return process.env.GIC_API_KEY;
  const creds = readCredsFile();
  return (creds && creds.gicApiKey && creds.gicApiKey.forms) || '';
}

// ─────────────────────────────────────────────────────────────────────────────
// HTTP helper (Node.js built-in only — no npm dependencies)
// ─────────────────────────────────────────────────────────────────────────────

function post(urlString, body, headers) {
  return new Promise((resolve, reject) => {
    const payload = typeof body === 'string' ? body : JSON.stringify(body);
    const url = new URL(urlString);
    const lib = url.protocol === 'https:' ? https : http;

    const req = lib.request({
      hostname: url.hostname,
      port:     url.port || (url.protocol === 'https:' ? 443 : 80),
      path:     url.pathname + url.search,
      method:   'POST',
      headers: {
        'Content-Type':   'application/json',
        'Content-Length': Buffer.byteLength(payload),
        ...headers
      }
    }, res => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 400) {
            const err = new Error(parsed.error || `HTTP ${res.statusCode}`);
            err.status = res.statusCode;
            err.response = parsed;
            reject(err);
          } else {
            resolve(parsed);
          }
        } catch (_) {
          if (res.statusCode >= 400) {
            const err = new Error(`HTTP ${res.statusCode}: ${data.slice(0, 200)}`);
            err.status = res.statusCode;
            reject(err);
          } else {
            resolve({ raw: data });
          }
        }
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function bridgePost(path, body, apiKey) {
  const key = apiKey || getApiKey();
  if (!key) {
    return Promise.reject(new Error(
      'No GIC API key found. Set GIC_API_KEY, or add it to ' +
      '~/.config/gic/credentials.json under {"gicApiKey":{"forms":"gic_live_..."}}.\n' +
      'Get a key from GIC Forms Settings → API Keys, or use your admin key.'
    ));
  }
  return post(`${getBridgeUrl()}${path}`, body, { 'X-GIC-API-Key': key });
}

// ─────────────────────────────────────────────────────────────────────────────
// YAML / file input helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Resolve yaml input:
 *   - '-'            → read from stdin
 *   - '*.yaml|*.yml' → read from file
 *   - otherwise      → treat as raw YAML string
 */
async function resolveYamlInput(input) {
  if (!input) throw new Error('No YAML input provided');

  if (input === '-') {
    return await readStdin();
  }

  if (/\.(yaml|yml)$/i.test(input)) {
    const resolved = path.resolve(input);
    if (!fs.existsSync(resolved)) throw new Error(`File not found: ${resolved}`);
    return fs.readFileSync(resolved, 'utf8');
  }

  return input; // raw YAML string
}

function readStdin() {
  return new Promise((resolve, reject) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => { data += chunk; });
    process.stdin.on('end', () => resolve(data));
    process.stdin.on('error', reject);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Public API — User-facing (works with subscriber keys, gift keys, admin key)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Generate a GIC YAML form from a natural-language prompt.
 * @param {string} prompt
 * @param {string} [apiKey] — override GIC_API_KEY env var
 * @returns {Promise<{yaml: string}>}
 */
async function createForm(prompt, apiKey) {
  if (!prompt) throw new Error('Missing prompt');
  return bridgePost('/ai/create', { prompt: String(prompt) }, apiKey);
}

/**
 * Edit an existing GIC YAML form with a natural-language instruction.
 * @param {string} yamlOrPath — YAML string, file path, or '-' for stdin
 * @param {string} instruction
 * @param {string} [apiKey]
 * @returns {Promise<{yaml: string}>}
 */
async function editForm(yamlOrPath, instruction, apiKey) {
  const yaml = await resolveYamlInput(yamlOrPath);
  if (!instruction) throw new Error('Missing instruction');
  return bridgePost('/ai/edit', { yaml, instruction: String(instruction) }, apiKey);
}

/**
 * Validate a GIC YAML form structure.
 * @param {string} yamlOrPath — YAML string, file path, or '-' for stdin
 * @param {string} [apiKey]
 * @returns {Promise<{valid: boolean, errors?: string[]}>}
 */
async function validateForm(yamlOrPath, apiKey) {
  const yaml = await resolveYamlInput(yamlOrPath);
  return bridgePost('/validate', { yaml }, apiKey);
}

/**
 * Deploy a GIC YAML form to Tally.
 * @param {string} yamlOrPath
 * @param {string} tallyToken
 * @param {string} [apiKey]
 */
async function deployToTally(yamlOrPath, tallyToken, apiKey) {
  const yaml = await resolveYamlInput(yamlOrPath);
  if (!tallyToken) throw new Error('Missing tallyToken');
  return bridgePost('/deploy/tally', { yaml, form: parseYamlToForm(yaml), tallyToken }, apiKey);
}

/**
 * Deploy a GIC YAML form to Formbricks.
 * @param {string} yamlOrPath
 * @param {string} apiKey — Formbricks API key
 * @param {string} envId  — Formbricks environment ID
 * @param {string} [host] — optional self-hosted URL
 * @param {string} [gicApiKey] — GIC API key
 */
async function deployToFormbricks(yamlOrPath, fbApiKey, envId, host, gicApiKey) {
  const yaml = await resolveYamlInput(yamlOrPath);
  if (!fbApiKey) throw new Error('Missing Formbricks API key');
  if (!envId) throw new Error('Missing Formbricks environment ID');
  return bridgePost('/deploy/formbricks', {
    yaml,
    form: parseYamlToForm(yaml),
    formbricksKey: fbApiKey,
    formbricksEnv: envId,
    formbricksHost: host || undefined
  }, gicApiKey);
}

/**
 * Upload a GIC YAML form to ONA.
 * @param {string} yamlOrPath
 * @param {string} onaToken
 * @param {string} [projectId]
 * @param {string} [gicApiKey]
 */
async function uploadToONA(yamlOrPath, onaToken, projectId, gicApiKey) {
  const yaml = await resolveYamlInput(yamlOrPath);
  if (!onaToken) throw new Error('Missing onaToken');
  return bridgePost('/deploy/ona', {
    yaml,
    form: parseYamlToForm(yaml),
    onaToken,
    onaProject: projectId || undefined
  }, gicApiKey);
}

/**
 * Upload a GIC YAML form to KoboToolbox.
 * @param {string} yamlOrPath
 * @param {string} koboToken
 * @param {string} [server]
 * @param {string} [gicApiKey]
 */
async function uploadToKobo(yamlOrPath, koboToken, server, gicApiKey) {
  const yaml = await resolveYamlInput(yamlOrPath);
  if (!koboToken) throw new Error('Missing koboToken');
  return bridgePost('/deploy/kobo', {
    yaml,
    form: parseYamlToForm(yaml),
    koboToken,
    koboServer: server || undefined
  }, gicApiKey);
}

/**
 * List SurveyMonkey surveys (requires Pro/Business API key).
 * @param {string} smToken — SurveyMonkey OAuth token
 * @param {string} [apiKey]
 */
async function smListSurveys(smToken, apiKey) {
  if (!smToken) throw new Error('Missing SurveyMonkey token');
  return bridgePost('/surveymonkey/list', { token: smToken }, apiKey);
}

/**
 * Import a SurveyMonkey survey as GIC YAML (requires Pro/Business API key).
 * @param {string} smToken
 * @param {string} surveyId
 * @param {string} [apiKey]
 */
async function smImport(smToken, surveyId, apiKey) {
  if (!smToken) throw new Error('Missing SurveyMonkey token');
  if (!surveyId) throw new Error('Missing surveyId');
  return bridgePost('/surveymonkey/import', { token: smToken, surveyId }, apiKey);
}

// ─────────────────────────────────────────────────────────────────────────────
// Admin API — requires GIC_ADMIN_API_KEY
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Create a gift API key (admin only).
 * @param {string} label    — descriptive name
 * @param {string} plan     — 'pro' or 'business'
 * @param {string} [note]   — who the key is for (not shown to key holder)
 * @param {string} [apiKey] — must be the admin key
 * @returns {Promise<{keyId: string, rawKey: string, label: string, plan: string, note: string}>}
 */
async function adminCreateKey(label, plan, note, apiKey) {
  if (!label) throw new Error('Missing label');
  if (!plan) throw new Error('Missing plan');
  return bridgePost('/admin/keys/create', { label, plan, note: note || '' }, apiKey);
}

/**
 * List all API keys across all customers (admin only).
 * @param {string} [apiKey]
 */
async function adminListKeys(apiKey) {
  return bridgePost('/admin/keys/list', {}, apiKey);
}

/**
 * Revoke any API key by keyId (admin only).
 * @param {string} keyId
 * @param {string} [apiKey]
 */
async function adminRevokeKey(keyId, apiKey) {
  if (!keyId) throw new Error('Missing keyId');
  return bridgePost('/admin/keys/revoke', { keyId }, apiKey);
}

// ─────────────────────────────────────────────────────────────────────────────
// YAML ↔ form-object bridge helper
// ─────────────────────────────────────────────────────────────────────────────

function slugify(text) {
  return String(text || '').toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '') || 'question';
}

function parseYamlScalar(raw) {
  const value = String(raw == null ? '' : raw).trim();
  if (!value) return '';
  if (value === 'null' || value === 'NULL' || value === '~') return null;
  if (value === 'true' || value === "'true'" || value === '"true"') return true;
  if (value === 'false' || value === "'false'" || value === '"false"') return false;
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1)
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'");
  }
  return value;
}

function normalizeOption(option, index) {
  if (option && typeof option === 'object') {
    const label = String(option.label || option.name || `Option ${index + 1}`);
    return {
      name: String(option.name || slugify(label) || `option_${index + 1}`),
      label
    };
  }
  const label = String(option == null ? '' : option) || `Option ${index + 1}`;
  return {
    name: slugify(label) || `option_${index + 1}`,
    label
  };
}

function finalizeQuestion(question, index) {
  const label = String(question.label || question.name || `Question ${index + 1}`);
  const name = String(question.name || slugify(label) || `question_${index + 1}`);
  return {
    id: Number.isFinite(Number(question.id)) ? Number(question.id) : index + 1,
    name,
    label,
    hint: question.hint == null ? '' : String(question.hint),
    type: String(question.type || 'text'),
    options: Array.isArray(question.options) ? question.options.map(normalizeOption) : [],
    required: Boolean(question.required)
  };
}

/**
 * Parse the canonical GIC YAML subset used in this repo:
 * inputSchema.properties.title + inputSchema.properties.pages.
 */
function parseYamlToForm(yamlText) {
  const lines = String(yamlText || '').replace(/\r\n?/g, '\n').split('\n');
  const form = { title: 'Untitled Survey', questions: [] };
  let inPages = false;
  let currentQuestion = null;
  let inOptions = false;
  let pendingOption = null;

  function flushPendingOption() {
    if (!pendingOption || !currentQuestion) return;
    currentQuestion.options.push(normalizeOption(pendingOption, currentQuestion.options.length));
    pendingOption = null;
  }

  function flushQuestion() {
    flushPendingOption();
    if (!currentQuestion) return;
    form.questions.push(finalizeQuestion(currentQuestion, form.questions.length));
    currentQuestion = null;
    inOptions = false;
  }

  for (const rawLine of lines) {
    const line = rawLine.replace(/\t/g, '    ');
    const trimmed = line.trim();
    const indent = line.length - line.trimStart().length;

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    if (!inPages) {
      const titleMatch = trimmed.match(/^title:\s*(.+)$/);
      if (titleMatch) {
        const title = parseYamlScalar(titleMatch[1]);
        form.title = title == null ? 'Untitled Survey' : String(title);
        continue;
      }
      if (trimmed === 'pages:') {
        inPages = true;
      }
      continue;
    }

    if (indent <= 4 && !trimmed.startsWith('-')) {
      flushQuestion();
      inPages = false;
      continue;
    }

    const questionStart = line.match(/^\s*-\s+id:\s*(.+)$/);
    if (questionStart && indent <= 6) {
      flushQuestion();
      currentQuestion = {
        id: parseYamlScalar(questionStart[1]),
        name: '',
        label: '',
        hint: '',
        type: 'text',
        options: [],
        required: false
      };
      continue;
    }

    if (!currentQuestion) {
      continue;
    }

    if (inOptions && indent <= 4) {
      flushPendingOption();
      inOptions = false;
    }

    if (inOptions) {
      const optionWithName = line.match(/^\s*-\s+name:\s*(.+)$/);
      if (optionWithName) {
        flushPendingOption();
        pendingOption = { name: String(parseYamlScalar(optionWithName[1]) || '').trim(), label: '' };
        continue;
      }

      const optionScalar = line.match(/^\s*-\s+(.+)$/);
      if (optionScalar) {
        flushPendingOption();
        currentQuestion.options.push(normalizeOption(parseYamlScalar(optionScalar[1]), currentQuestion.options.length));
        continue;
      }

      const optionLabel = line.match(/^\s*label:\s*(.+)$/);
      if (optionLabel && pendingOption) {
        pendingOption.label = String(parseYamlScalar(optionLabel[1]) || '').trim();
        continue;
      }

      const optionName = line.match(/^\s*name:\s*(.+)$/);
      if (optionName && pendingOption && !pendingOption.name) {
        pendingOption.name = String(parseYamlScalar(optionName[1]) || '').trim();
        continue;
      }

      if (indent >= 6 && !trimmed.startsWith('-')) {
        flushPendingOption();
        inOptions = false;
      }
    }

    const keyValue = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (!keyValue) {
      continue;
    }

    const key = keyValue[1];
    const rawValue = keyValue[2];
    const value = parseYamlScalar(rawValue);

    if (key === 'options') {
      if (String(rawValue).trim() === '[]') {
        currentQuestion.options = [];
        inOptions = false;
      } else {
        flushPendingOption();
        inOptions = true;
      }
      continue;
    }

    if (key === 'name') {
      currentQuestion.name = value == null ? '' : String(value);
      continue;
    }
    if (key === 'label') {
      currentQuestion.label = value == null ? '' : String(value);
      continue;
    }
    if (key === 'hint') {
      currentQuestion.hint = value == null ? '' : String(value);
      continue;
    }
    if (key === 'type') {
      currentQuestion.type = value == null ? 'text' : String(value);
      continue;
    }
    if (key === 'required') {
      currentQuestion.required = Boolean(value);
    }
  }

  flushQuestion();
  return form;
}

function getCliOutputMode(flags) {
  const requested = String(flags.output || flags.format || '').trim().toLowerCase();
  if (requested === 'yaml' || requested === 'raw') return 'yaml';
  return 'json';
}

function printCliResult(command, result, flags) {
  const outputMode = getCliOutputMode(flags);
  if ((command === 'createForm' || command === 'editForm') && outputMode === 'yaml') {
    const yaml = typeof result?.yaml === 'string' ? result.yaml : '';
    process.stdout.write(yaml.endsWith('\n') ? yaml : `${yaml}\n`);
    return;
  }
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI mode
// ─────────────────────────────────────────────────────────────────────────────

function parseCliArgs(argv) {
  const args = argv.slice(2); // skip node + script path
  const flags = {};
  const positional = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const val = args[i + 1] && !args[i + 1].startsWith('--') ? args[++i] : true;
      flags[key] = val;
    } else {
      positional.push(args[i]);
    }
  }

  return { command: positional[0], positional: positional.slice(1), flags };
}

async function runCli(argv) {
  const { command, positional, flags } = parseCliArgs(argv);

  if (!command || command === 'help' || command === '--help') {
    console.log(`GIC Forms CLI

Environment variables:
  GIC_API_KEY     Required. Your API key (gic_live_* or gic_admin_*)
  GIC_BRIDGE_URL  Optional. Override bridge URL.

Commands (user):
  createForm   "<prompt>" [--output yaml|json]
  editForm     <yaml|file|-> "<instruction>" [--output yaml|json]
  validateForm <yaml|file|->
  deployToTally     <yaml|file|-> --tally-token <TOKEN>
  deployToFormbricks <yaml|file|-> --formbricks-key <KEY> --formbricks-env <ENV_ID> [--formbricks-host <URL>]
  uploadToONA  <yaml|file|-> --ona-token <TOKEN> [--ona-project <ID>]
  uploadToKobo <yaml|file|-> --kobo-token <TOKEN> [--kobo-server <URL>]
  smListSurveys --sm-token <TOKEN>
  smImport     --sm-token <TOKEN> --survey-id <ID>

Commands (admin — requires gic_admin_* key):
  adminCreateKey --label "<name>" --plan <pro|business> [--note "<note>"]
  adminListKeys
  adminRevokeKey <keyId>
`);
    return;
  }

  let result;

  switch (command) {
    case 'createForm':
      result = await createForm(positional[0]);
      break;

    case 'editForm':
      result = await editForm(positional[0], positional[1]);
      break;

    case 'validateForm':
      result = await validateForm(positional[0]);
      break;

    case 'deployToTally':
      result = await deployToTally(positional[0], flags['tally-token']);
      break;

    case 'deployToFormbricks':
      result = await deployToFormbricks(
        positional[0],
        flags['formbricks-key'],
        flags['formbricks-env'],
        flags['formbricks-host']
      );
      break;

    case 'uploadToONA':
      result = await uploadToONA(positional[0], flags['ona-token'], flags['ona-project']);
      break;

    case 'uploadToKobo':
      result = await uploadToKobo(positional[0], flags['kobo-token'], flags['kobo-server']);
      break;

    case 'smListSurveys':
      result = await smListSurveys(flags['sm-token']);
      break;

    case 'smImport':
      result = await smImport(flags['sm-token'], flags['survey-id']);
      break;

    case 'adminCreateKey':
      result = await adminCreateKey(flags.label, flags.plan, flags.note);
      break;

    case 'adminListKeys':
      result = await adminListKeys();
      break;

    case 'adminRevokeKey':
      result = await adminRevokeKey(positional[0] || flags['key-id']);
      break;

    default:
      console.error(`Unknown command: ${command}\nRun with no arguments for help.`);
      process.exit(1);
  }

  printCliResult(command, result, flags);
}

// ─────────────────────────────────────────────────────────────────────────────
// Entry point
// ─────────────────────────────────────────────────────────────────────────────

if (require.main === module) {
  runCli(process.argv).catch(err => {
    const message = err.message || String(err);
    const extra = err.response ? `\nResponse: ${JSON.stringify(err.response)}` : '';
    console.error(`Error: ${message}${extra}`);
    process.exit(1);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Module exports
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {
  // User-facing
  createForm,
  editForm,
  validateForm,
  deployToTally,
  deployToFormbricks,
  uploadToONA,
  uploadToKobo,
  smListSurveys,
  smImport,
  // Admin-only
  adminCreateKey,
  adminListKeys,
  adminRevokeKey,
  // Internals (useful for custom integrations)
  bridgePost,
  resolveYamlInput,
  parseYamlToForm,
  getBridgeUrl
};
