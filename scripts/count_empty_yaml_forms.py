#!/usr/bin/env python3
"""Report YAML form files that appear empty.

Empty means one of:
- zero-byte file
- invalid YAML
- missing `inputSchema.properties.pages`
- `pages` is present but empty

When `docs/forms-index.json` is present, the script uses its `questionCount`
metadata as a fast path and only falls back to YAML parsing for files that are
not covered by the index or look suspicious.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

try:
    import yaml
except ImportError as exc:  # pragma: no cover
    raise SystemExit(
        "PyYAML is required to run this script. Install it with `python3 -m pip install pyyaml`."
    ) from exc


IGNORED_FILE_NAMES = {"meta.yaml", "meta.yml"}
IGNORED_TOP_LEVEL_DIRS = {".github"}


def should_scan_yaml(path: Path, root: Path) -> bool:
    relative = path.relative_to(root)
    if path.name in IGNORED_FILE_NAMES:
        return False
    if relative.parts and relative.parts[0] in IGNORED_TOP_LEVEL_DIRS:
        return False
    return True


def classify_yaml(path: Path) -> str | None:
    if path.stat().st_size == 0:
        return "zero-byte"

    try:
        data = yaml.safe_load(path.read_text(encoding="utf-8"))
    except Exception:
        return "invalid-yaml"

    if not isinstance(data, dict):
        return "missing-inputSchema"

    input_schema = data.get("inputSchema")
    if not isinstance(input_schema, dict):
        return "missing-inputSchema"

    properties = input_schema.get("properties")
    if not isinstance(properties, dict):
        return "missing-properties"

    pages = properties.get("pages")
    if not isinstance(pages, list) or len(pages) == 0:
        return "missing-or-empty-pages"

    return None


def load_index(root: Path) -> dict[str, dict]:
    index_path = root / "docs" / "forms-index.json"
    if not index_path.exists():
        return {}

    try:
        payload = json.loads(index_path.read_text(encoding="utf-8"))
    except Exception:
        return {}

    forms = payload.get("forms")
    if not isinstance(forms, list):
        return {}

    return {
        str(item.get("filePath")): item
        for item in forms
        if isinstance(item, dict) and isinstance(item.get("filePath"), str)
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "root",
        nargs="?",
        default=".",
        help="Repository root to scan. Defaults to the current directory.",
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="Print each empty YAML form path and reason.",
    )
    args = parser.parse_args()

    root = Path(args.root).resolve()
    yaml_files = sorted(
        path
        for path in list(root.rglob("*.yaml")) + list(root.rglob("*.yml"))
        if should_scan_yaml(path, root)
    )
    indexed_forms = load_index(root)

    empty_forms: list[tuple[Path, str]] = []
    for path in yaml_files:
        relative_path = str(path.relative_to(root))
        if path.stat().st_size == 0:
            empty_forms.append((path, "zero-byte"))
            continue

        indexed = indexed_forms.get(relative_path)
        if indexed is not None:
            question_count = indexed.get("questionCount")
            if question_count == 0:
                empty_forms.append((path, "questionCount-zero"))
            continue

        reason = classify_yaml(path)
        if reason is not None:
            empty_forms.append((path, reason))

    print(f"Scanned {len(yaml_files)} YAML files under {root}")
    if indexed_forms:
        print(f"Used docs/forms-index.json fast path for {len(indexed_forms)} files")
    print(f"Empty YAML forms: {len(empty_forms)}")

    if args.list:
        for path, reason in empty_forms:
            print(f"{path.relative_to(root)}\t{reason}")

    return 0 if not empty_forms else 1


if __name__ == "__main__":
    sys.exit(main())
