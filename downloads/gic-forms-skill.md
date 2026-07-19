# GIC Forms Skill

Programmatic access to GIC Forms via the bridge worker API.
Follows the shared GIC skill shape (`docs/GIC_SKILL_SHAPE.md`).

## Prerequisites / Auth

Set your API key in the environment:
```bash
export GIC_API_KEY=gic_live_xxxx   # subscriber or gift key
# OR
export GIC_API_KEY=gic_admin_xxxx  # admin key (full access)
```

Or store it once in the shared GIC credentials file
`~/.config/gic/credentials.json` (chmod 600):
```json
{ "gicApiKey": { "forms": "gic_live_xxxx" } }
```
The env var wins over the file. Credentials are sent only to the GIC Forms
bridge as the `X-GIC-API-Key` header and are never stored server-side.

Optionally override the bridge URL (leave unset to use production):
```bash
export GIC_BRIDGE_URL=https://your-worker.workers.dev
```

Get a key from: GIC Forms → Settings → API Keys (requires Pro/Business subscription).
Or ask the admin to create a gift key for you.

**Google Forms/Sheets are NOT available via API key** — they require browser OAuth.

## Commands

### Create a form from a prompt
```bash
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js createForm "Employee onboarding form with name, department, start date, and equipment needs"

# Write raw YAML directly to a file:
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js createForm "Employee onboarding form" --output yaml > form.yaml
```

### Edit an existing form
```bash
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js editForm form.yaml "Add a required phone number field after the email field"

# Write the updated YAML directly:
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js editForm form.yaml "Add a required phone number field after the email field" --output yaml > form.updated.yaml
```

### Validate a form
```bash
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js validateForm form.yaml
# Or from stdin:
cat form.yaml | GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js validateForm -
```

### Deploy to Tally
```bash
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js deployToTally form.yaml --tally-token $TALLY_TOKEN
```

### Deploy to Formbricks
```bash
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js deployToFormbricks form.yaml \
  --formbricks-key $FORMBRICKS_KEY \
  --formbricks-env $FORMBRICKS_ENV_ID
```

### Upload to ONA
```bash
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js uploadToONA form.yaml --ona-token $ONA_TOKEN
```

### Upload to KoboToolbox
```bash
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js uploadToKobo form.yaml --kobo-token $KOBO_TOKEN
```

### SurveyMonkey (Pro/Business required)
```bash
# List surveys
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js smListSurveys --sm-token $SM_TOKEN

# Import a survey as GIC YAML
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js smImport --sm-token $SM_TOKEN --survey-id 123456789
```

## Admin Commands (requires gic_admin_* key)

### Create a gift key for someone
```bash
GIC_API_KEY=$GIC_ADMIN_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js adminCreateKey \
  --label "Maria" \
  --plan business \
  --note "sister"
# → Prints the raw key once. Share it with the recipient.
```

### List all keys
```bash
GIC_API_KEY=$GIC_ADMIN_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js adminListKeys
```

### Revoke a key
```bash
GIC_API_KEY=$GIC_ADMIN_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js adminRevokeKey gkid_abc123
```

## Workflow Examples

### End-to-end: create, validate, deploy
```bash
# 1. Create
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js createForm "Patient intake form" --output yaml > /tmp/patient-intake.yaml

# 2. Validate
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js validateForm /tmp/patient-intake.yaml

# 3. Deploy
GIC_API_KEY=$GIC_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js deployToTally /tmp/patient-intake.yaml --tally-token $TALLY_TOKEN
```

### Gift a key, then use it
```bash
# Admin creates gift key
GIC_API_KEY=$GIC_ADMIN_API_KEY node $CLAUDE_PROJECT_PATH/cli/gic-forms.js adminCreateKey --label "TestUser" --plan business
# → shows: { "rawKey": "gic_live_..." }

# User uses the gift key
GIC_API_KEY=gic_live_... node $CLAUDE_PROJECT_PATH/cli/gic-forms.js createForm "A simple survey"
```

## Errors

| Status | Meaning | What to do |
|---|---|---|
| 401 | Invalid/missing key | Get one from GIC Forms → Settings → API Keys, or ask the admin for a gift key |
| 402 | Subscription required | This feature needs a Pro/Business plan |
| 403 | Route not permitted for this key/plan | Explain the gate (e.g. SurveyMonkey import is Pro+) |
| 429 | Rate limit | Wait, retry once, then report honestly |
| 5xx | Bridge/provider failure | Report; at most one retry |

## How Claude Should Use This Skill

1. Check auth: `GIC_API_KEY` env var, then `~/.config/gic/credentials.json` (`gicApiKey.forms`). If missing, tell the user how to get a key.
2. Run the appropriate CLI command using Bash.
3. Parse the JSON output and explain results in plain language.
4. For `createForm` or `editForm`, add `--output yaml` when the goal is to save or display raw YAML directly.
5. On error, map through the table above and explain clearly.

## Finding the CLI Path

The CLI is at `cli/gic-forms.js` relative to the project root.
Use `$CLAUDE_PROJECT_PATH` if set, or find it with:
```bash
find . -name "gic-forms.js" -path "*/cli/*" 2>/dev/null | head -1
```
