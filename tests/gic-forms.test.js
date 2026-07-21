'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { EventEmitter } = require('node:events');
const gic = require('../cli/gic-forms.js');

test('argument parsing keeps positionals and boolean flags', () => {
  const parsed = gic.parseCliArgs(['node', 'cli/gic-forms.js', 'site-install', '--file', 'README.md', '--dry-run']);
  assert.equal(parsed.command, 'site-install');
  assert.equal(parsed.flags.file, 'README.md');
  assert.equal(parsed.flags['dry-run'], true);
});

test('embed output escapes URL and label in every mode', () => {
  const input = { url: 'https://example.test/a?x=1&y="bad"', label: '<Apply>', mode: 'button' };
  const html = gic.generateEmbed(input);
  assert.match(html, /&amp;/);
  assert.match(html, /&quot;/);
  assert.match(html, /&lt;Apply&gt;/);
  assert.match(gic.generateEmbed({ url: 'https://example.test', mode: 'link' }), /^<a href=/);
  assert.match(gic.generateEmbed({ url: 'https://example.test', mode: 'iframe' }), /title=/);
  assert.match(gic.generateEmbed({ id: 'abc123', mode: 'link' }), /https:\/\/f\.gic\.mx\/f\/abc123/);
});

test('site markers install idempotently and remove safely', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gic-forms-'));
  const file = path.join(dir, 'README.md');
  fs.writeFileSync(file, '# Site\n');
  const first = gic.installSite(file, { url: 'https://f.gic.mx/f/a', mode: 'link' });
  const second = gic.installSite(file, { url: 'https://f.gic.mx/f/a', mode: 'link' });
  assert.equal(first.changed, true); assert.equal(second.changed, false);
  assert.deepEqual(gic.inspectSite(file).managedBlocks, 1);
  assert.equal(gic.verifySite(file).ok, true);
  assert.equal(gic.removeSite(file).changed, true);
  assert.equal(gic.inspectSite(file).managedBlocks, 0);

  const html = path.join(dir, 'index.html');
  fs.writeFileSync(html, '<!doctype html><html><body><h1>Site</h1></body></html>');
  gic.installSite(html, { url: 'https://f.gic.mx/f/a', mode: 'button' });
  const installedHtml = fs.readFileSync(html, 'utf8');
  assert.ok(installedHtml.indexOf('GIC_FORMS_MANAGED_START') < installedHtml.indexOf('</body>'));
  assert.ok(installedHtml.indexOf('</body>') < installedHtml.indexOf('</html>'));

  fs.writeFileSync(html, '<!doctype html><html><body><h1>Site</h1></body></html>\n<!-- GIC_FORMS_MANAGED_START -->\n<a href="old">Old</a>\n<!-- GIC_FORMS_MANAGED_END -->');
  gic.installSite(html, { url: 'https://f.gic.mx/f/new', mode: 'button' });
  const movedHtml = fs.readFileSync(html, 'utf8');
  assert.equal((movedHtml.match(/GIC_FORMS_MANAGED_START/g) || []).length, 1);
  assert.ok(movedHtml.indexOf('GIC_FORMS_MANAGED_START') < movedHtml.indexOf('</body>'));
});

test('import normalization accepts GIC JSON and YAML subset', async () => {
  const json = await gic.importForm(JSON.stringify({ title: 'Feedback', fields: [{ name: 'email', type: 'email', required: true }] }));
  assert.equal(json.title, 'Feedback'); assert.equal(json.questions[0].name, 'email');
  const yaml = await gic.importForm('title: Check-in\npages:\n  - id: 1\n    name: mood\n    label: Mood\n    type: text\n');
  assert.equal(yaml.title, 'Check-in'); assert.equal(yaml.questions[0].label, 'Mood');
  await assert.rejects(() => gic.importForm('http://127.0.0.1/private', { authorizeRemote: true }), /public host/);
  await assert.rejects(() => gic.importForm('http://[::ffff:127.0.0.1]/private', { authorizeRemote: true }), /public host/);
  await assert.rejects(() => gic.importForm('http://[::ffff:7f00:1]/private', { authorizeRemote: true }), /public host/);
  await assert.rejects(() => gic.importForm('http://[0:0:0:0:0:ffff:7f00:1]/private', { authorizeRemote: true }), /public host/);
});

test('mocked HTTP lifecycle uses safe readable routes', async t => {
  const calls = [];
  const originalRequest = http.request;
  http.request = (options, callback) => {
    let payload = '';
    const req = new EventEmitter(); req.write = chunk => { payload += chunk; }; req.end = () => {
      const res = new EventEmitter(); res.statusCode = 200;
      calls.push({ method: options.method, url: options.path, key: options.headers['X-GIC-API-Key'], payload: payload ? JSON.parse(payload) : {} });
      const body = options.path.includes('/export') ? 'id,name\n1,Ada\n' : JSON.stringify({ ok: true, route: options.path });
      process.nextTick(() => { callback(res); res.emit('data', body); res.emit('end'); });
    }; return req;
  };
  t.after(() => { http.request = originalRequest; });
  const oldUrl = process.env.GIC_BRIDGE_URL, oldKey = process.env.GIC_API_KEY;
  process.env.GIC_BRIDGE_URL = 'http://mocked-gic-forms.test'; process.env.GIC_API_KEY = 'test-only-key';
  t.after(() => { process.env.GIC_BRIDGE_URL = oldUrl; process.env.GIC_API_KEY = oldKey; });
  await gic.publishForm('title: Demo\npages:\n');
  await gic.listForms(); await gic.updateForm('f1', 'title: Demo\npages:\n');
  await gic.setFormState('pause', 'f1'); await gic.deleteForm('f1'); await gic.listResponses('f1'); await gic.deleteResponse('f1', 'r1');
  assert.equal(await gic.exportResponses('f1'), 'id,name\n1,Ada\n');
  assert.deepEqual(calls.map(c => c.method), ['POST', 'POST', 'POST', 'POST', 'POST', 'POST', 'POST', 'POST']);
  assert.deepEqual(calls.map(c => c.url.split('?')[0]), ['/forms/publish', '/forms/list', '/forms/update', '/forms/pause', '/forms/delete', '/forms/responses/list', '/forms/responses/delete', '/forms/responses/export']);
  assert.equal(calls[0].payload.schema.title, 'Demo');
  assert.equal(calls[2].payload.schema.title, 'Demo');
  assert.equal(calls[3].payload.resume, false);
  assert.equal(calls[6].payload.responseKey, 'r1');
  assert.ok(calls.every(c => c.key === 'test-only-key'));
});
