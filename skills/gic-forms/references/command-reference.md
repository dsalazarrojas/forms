# Command reference

The CLI is intentionally dependency-free. Lifecycle routes use the bridge API under `/forms/*`, including `/forms/responses/*`; the CLI sends the API key only as `X-GIC-API-Key`.

`site-install`, `site-remove`, and `site-verify` require `--file`; Markdown and HTML are detected from the extension. Installation emits a single managed block and updates it deterministically. `--dry-run` returns proposed content without writing.

The original commands remain supported: `createForm`, `editForm`, `validateForm`, `deployToTally`, `deployToFormbricks`, `uploadToONA`, `uploadToKobo`, `smListSurveys`, `smImport`, `adminCreateKey`, `adminListKeys`, and `adminRevokeKey`.
