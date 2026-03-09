#!/usr/bin/env bash
set -euo pipefail

# Remove <thinking>...</thinking> blocks from .help.md files in fixed-size batches,
# committing and pushing each batch so GitHub is not hit with one massive change.
#
# Examples:
#   scripts/strip_thinking_help_docs_in_batches.sh
#   scripts/strip_thinking_help_docs_in_batches.sh --batch-size 5000 --sleep-seconds 600
#   scripts/strip_thinking_help_docs_in_batches.sh --max-batches 2 --dry-run

BATCH_SIZE=5000
SLEEP_SECONDS=600
COMMIT_PREFIX="Clean help docs thinking tags batch"
MAX_BATCHES=0
DRY_RUN=false
PUSH=true
REBASE_REMOTE="origin"
REBASE_BRANCH="main"
AUTOSTASH=true

usage() {
  cat <<EOF
Usage: $0 [options]

Options:
  --batch-size <n>        Files per batch (default: 5000)
  --sleep-seconds <n>     Pause between batches (default: 600)
  --commit-prefix <text>  Commit message prefix
  --max-batches <n>       Stop after n batches (0 = run until done)
  --no-push               Commit locally but do not push
  --remote <name>         Git remote for pull/push (default: origin)
  --branch <name>         Git branch for rebase/push (default: main)
  --no-autostash          Disable git pull --rebase --autostash
  --dry-run               Show how many files would be updated without editing
  --help                  Show this help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --batch-size)
      BATCH_SIZE="$2"
      shift 2
      ;;
    --sleep-seconds)
      SLEEP_SECONDS="$2"
      shift 2
      ;;
    --commit-prefix)
      COMMIT_PREFIX="$2"
      shift 2
      ;;
    --max-batches)
      MAX_BATCHES="$2"
      shift 2
      ;;
    --no-push)
      PUSH=false
      shift
      ;;
    --remote)
      REBASE_REMOTE="$2"
      shift 2
      ;;
    --branch)
      REBASE_BRANCH="$2"
      shift 2
      ;;
    --no-autostash)
      AUTOSTASH=false
      shift
      ;;
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      exit 2
      ;;
  esac
done

if ! [[ "$BATCH_SIZE" =~ ^[0-9]+$ ]] || [[ "$BATCH_SIZE" -lt 1 ]]; then
  echo "Error: --batch-size must be a positive integer" >&2
  exit 1
fi

if ! [[ "$SLEEP_SECONDS" =~ ^[0-9]+$ ]]; then
  echo "Error: --sleep-seconds must be a non-negative integer" >&2
  exit 1
fi

if ! [[ "$MAX_BATCHES" =~ ^[0-9]+$ ]]; then
  echo "Error: --max-batches must be a non-negative integer" >&2
  exit 1
fi

if [[ ! -d .git ]]; then
  echo "Error: run this script from the repository root" >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "Error: python3 is required" >&2
  exit 1
fi

find_candidates() {
  rg -l '<thinking>|</thinking>' . -g '*.help.md' | LC_ALL=C sort
}

clean_batch() {
  local batch_file="$1"
  python3 - "$batch_file" <<'PY'
from pathlib import Path
import re
import sys

batch_list = Path(sys.argv[1])
paths = [Path(line.strip()) for line in batch_list.read_text().splitlines() if line.strip()]
pattern = re.compile(r"<thinking>[\s\S]*?</thinking>\s*", re.IGNORECASE)

changed = 0
for path in paths:
    original = path.read_text(encoding="utf-8", errors="ignore")
    updated = pattern.sub("", original)
    updated = updated.lstrip()
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        changed += 1

print(changed)
PY
}

echo "Starting help-doc thinking-tag cleanup"
echo "batch size   : $BATCH_SIZE files"
echo "sleep        : $SLEEP_SECONDS seconds"
echo "max batches  : $MAX_BATCHES (0 = until done)"
echo "dry run      : $DRY_RUN"
echo "push         : $PUSH"
echo "remote       : $REBASE_REMOTE"
echo "branch       : $REBASE_BRANCH"
echo "autostash    : $AUTOSTASH"
if ! git diff --quiet; then
  echo "note         : tracked unstaged changes detected; autostash will protect them during rebase"
fi
echo

batch_num=0
while true; do
  if [[ "$MAX_BATCHES" -gt 0 && "$batch_num" -ge "$MAX_BATCHES" ]]; then
    echo "Reached max batches: $MAX_BATCHES"
    break
  fi

  batch_num=$((batch_num + 1))
  batch_file="$(mktemp)"
  find_candidates | sed -n "1,${BATCH_SIZE}p" > "$batch_file"
  batch_count="$(wc -l < "$batch_file" | tr -d ' ')"

  echo "Preparing batch $batch_num..."
  echo "Files in batch: $batch_count"

  if [[ "$batch_count" -eq 0 ]]; then
    rm -f "$batch_file"
    echo "No remaining .help.md files with <thinking> tags. Done."
    break
  fi

  if [[ "$DRY_RUN" == "true" ]]; then
    sed -n '1,20p' "$batch_file"
    rm -f "$batch_file"
    echo "Dry run only. Stopping after first batch preview."
    break
  fi

  changed="$(clean_batch "$batch_file")"
  rm -f "$batch_file"

  echo "Files changed in batch $batch_num: $changed"
  if [[ "$changed" -eq 0 ]]; then
    echo "Batch $batch_num produced no file changes."
    break
  fi

  git add -- '*.help.md'
  if git diff --cached --quiet; then
    echo "Batch $batch_num: nothing staged after cleanup."
    break
  fi

  git commit -m "$COMMIT_PREFIX $batch_num: $changed files"

  if [[ "$PUSH" == "true" ]]; then
    if [[ "$AUTOSTASH" == "true" ]]; then
      git pull --rebase --autostash "$REBASE_REMOTE" "$REBASE_BRANCH"
    else
      git pull --rebase "$REBASE_REMOTE" "$REBASE_BRANCH"
    fi
    git push "$REBASE_REMOTE" "$REBASE_BRANCH"
    echo "Batch $batch_num pushed successfully"
  else
    echo "Batch $batch_num committed locally without push"
  fi

  remaining="$(find_candidates | wc -l | tr -d ' ')"
  echo "Remaining files with <thinking> tags: $remaining"

  if [[ "$remaining" -eq 0 ]]; then
    echo "Cleanup complete."
    break
  fi

  if [[ "$SLEEP_SECONDS" -gt 0 ]]; then
    echo "Sleeping $SLEEP_SECONDS seconds before next batch..."
    sleep "$SLEEP_SECONDS"
  fi
done
