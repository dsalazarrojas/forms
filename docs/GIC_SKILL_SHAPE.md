# GIC Skill Shape (SKL-501)

The shared conventions every GIC product skill follows. Products: forms
(`gic-forms`), onePageApps (`gic-onepageapps`), photoFilters (`gic-photofilters`).
This file lives in the forms repo (the template product) and is referenced by the
other repos' skills.

## Layout per repo

```
<repo>/.claude/commands/gic-<product>.md   # the skill — also the distributable artifact
<repo>/cli/gic-<product>.js                # zero-dependency Node CLI (built-ins only)
```

## Section order inside every skill file

1. Title + one-line purpose
2. **Prerequisites / Auth** — env vars, creds file, where to get a key
3. **Commands** — one fenced example per subcommand
4. **Workflow example** — the golden end-to-end run
5. **Errors** — the standard table (below)
6. **How Claude Should Use This Skill** — the 5-step contract
7. **Finding the CLI Path**

## 1. Auth env vars

- `GIC_API_KEY` — value `gic_live_*` (subscriber/gift) or `gic_admin_*` (admin).
  Sent to the product bridge as the `X-GIC-API-Key` header. Each CLI is
  responsible for translating an admin key to whatever admin header its own
  bridge expects (forms: same header; onePageApps: `X-GIC-Admin-Key`). The
  user-facing rule is always just "set GIC_API_KEY".
- `GIC_BRIDGE_URL` — optional bridge override; production default baked into the CLI.
- `CF_ACCOUNT_ID` + `CF_API_TOKEN` — the user's own Cloudflare credentials.
  The **same pair** serves onePageApps BYO deploys and photoFilters custom
  filters (BYOK): one Cloudflare onboarding covers both products.

## 2. Local credentials file

`~/.config/gic/credentials.json`, mode `0600`, written by each CLI's setup
subcommand. Env vars always win over the file. Shared across all products with
namespaced keys:

```json
{
  "gicApiKey": {
    "forms": "gic_live_...",
    "onepageapps": "gic_live_..."
  },
  "cloudflare": {
    "accountId": "...",
    "apiToken": "..."
  }
}
```

Rules: never persisted server-side; sent only to the documented endpoints; the
skill text states this explicitly wherever creds are collected.

## 3. Mode selection (products with deploy targets)

Explicit flags: `--gic` (temporary GIC-hosted, plan limits apply — free tier:
1 app, 7-day TTL) vs `--byo` (permanent, the user's own free Cloudflare
account). If neither flag is given, the agent asks the user:
"temporary GIC-hosted URL (expires per plan) or permanent on your own free
Cloudflare account?"

## 4. Standard error table

| Status | Meaning | What the agent does |
|---|---|---|
| 401 | Invalid/missing key | Point to where keys come from (product Settings → API Keys) |
| 402 | Subscription required | Explain the plan gate; link pricing |
| 403 | Route/plan not permitted (photoFilters: `custom_filter_requires_byok`) | Explain the specific gate and the unlock path |
| 429 | Rate limit / daily allowance | Wait, retry once, then report honestly |
| 5xx | Bridge/provider failure | Report; at most one retry |

## 5. "How Claude Should Use This Skill" — the 5 steps

1. Check auth (env var, then creds file). If missing, tell the user how to get it.
2. Run the appropriate CLI subcommand via Bash.
3. Parse the JSON output and explain results in plain language.
4. Use output flags (`--output yaml`, `--out file`) when the goal is a saved artifact.
5. On error, map through the standard table and explain clearly.

## Auth copy paragraph (AUTH-704 — reuse verbatim on skill pages and skill files)

> **How GIC apps handle access.** No accounts, no passwords. Three lightweight
> keys cover everything: a `GIC_API_KEY` for programmatic access to a product's
> bridge, your own Cloudflare credentials (`CF_ACCOUNT_ID` / `CF_API_TOKEN`)
> when you deploy to or transform with your own Cloudflare account, and — on the
> web — short-lived tokens issued after Stripe checkout. Credentials you bring
> stay on your machine or in your browser; GIC never stores them server-side.
