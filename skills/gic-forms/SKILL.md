---
name: gic-forms
description: "Manage GIC Forms from Codex using the zero-dependency Node CLI: create and validate YAML, publish and update hosted forms, pause or delete them, generate accessible embeds, list/delete/export responses, install forms into Markdown or HTML with deterministic managed markers, and import local or authorized public forms. Use for GIC Forms lifecycle, embed, response, site integration, or import requests."
---

# GIC Forms

Use the bundled `scripts/gic-forms.js` when the repository does not already contain `cli/gic-forms.js`; otherwise use the repository CLI. It requires Node.js built-ins only.

## Auth and safety

Read `GIC_API_KEY` from the environment, falling back to `~/.config/gic/credentials.json` at `gicApiKey.forms`. Never print, echo, commit, or persist keys, tokens, or secrets. The default bridge is `https://f.gic.mx`; use `GIC_BRIDGE_URL` only for an intentional override.

Map HTTP failures plainly: 401 authentication, 402 plan required, 403 permission, 404 missing resource, 409 state conflict, 429 rate limit, and 5xx provider/service failure. Retry only when the caller asks or the operation is safely repeatable.

## Workflows

Use readable lifecycle commands:

```sh
node cli/gic-forms.js publish form.yaml --slug my-form
node cli/gic-forms.js forms-list
node cli/gic-forms.js update FORM_ID form.yaml
node cli/gic-forms.js pause FORM_ID
node cli/gic-forms.js resume FORM_ID
node cli/gic-forms.js delete FORM_ID
node cli/gic-forms.js responses-list FORM_ID
node cli/gic-forms.js responses-delete FORM_ID RESPONSE_KEY
node cli/gic-forms.js responses-export FORM_ID --out responses.csv
```

Use `--output json` for machine-readable results. CSV export is written directly to `--out`.

Generate accessible HTML with `embed --mode link|button|iframe`; provide `--label` for a meaningful accessible name. For a site file, always pass one explicit `--file`:

```sh
node cli/gic-forms.js site-inspect --file README.md
node cli/gic-forms.js site-install --file README.md --mode button --url https://f.gic.mx/f/FORM_ID
node cli/gic-forms.js site-verify --file README.md
node cli/gic-forms.js site-remove --file README.md --dry-run
```

Site operations use `GIC_FORMS_MANAGED_START/END` markers, replace at most the managed block, are idempotent, and never invoke git. Require `--dry-run` when previewing a change.

Import local GIC YAML/JSON directly. Public GIC-hosted HTML URLs are allowed; a generic remote URL requires the explicit `--authorize-remote` flag, which acknowledges ownership/authorization to fetch it:

```sh
node cli/gic-forms.js import form.yaml
node cli/gic-forms.js import https://f.gic.mx/f/FORM_ID
node cli/gic-forms.js import https://example.com/form.html --authorize-remote
```

Keep the legacy camelCase commands and SurveyMonkey commands available for existing workflows. Read [references/command-reference.md](references/command-reference.md) when exact flags or route behavior matters.
