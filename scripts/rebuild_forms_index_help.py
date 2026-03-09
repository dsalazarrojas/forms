#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "docs" / "forms-index.json"


def strip_thinking_blocks(text: str) -> str:
    return re.sub(r"<thinking>[\s\S]*?</thinking>\s*", "", text, flags=re.IGNORECASE)


def strip_markdown(text: str) -> str:
    text = strip_thinking_blocks(text)
    text = re.sub(r"`{1,3}([^`]*)`{1,3}", r"\1", text)
    text = re.sub(r"!\[[^\]]*\]\([^)]+\)", " ", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"^\s{0,3}#{1,6}\s*", "", text, flags=re.M)
    text = re.sub(r"^\s*[-*+]\s+", "", text, flags=re.M)
    text = re.sub(r"^\s*\d+\.\s+", "", text, flags=re.M)
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)
    text = re.sub(r"\*(.*?)\*", r"\1", text)
    text = re.sub(r"_{1,2}(.*?)_{1,2}", r"\1", text)
    text = re.sub(r"\r\n?", "\n", text)
    text = re.sub(r"\n{2,}", "\n\n", text)
    return text.strip()


def make_help_snippet(help_path: Path, max_chars: int = 220) -> str:
    raw = help_path.read_text(encoding="utf-8", errors="ignore")
    text = strip_markdown(raw)
    if not text:
        return ""

    paragraphs = [re.sub(r"\s+", " ", part).strip() for part in re.split(r"\n\n+", text) if part.strip()]
    banned = (
        "to help me create",
        "let's first analyze",
        "field-by-field explanation",
        "how to complete this form",
    )

    chosen = ""
    for paragraph in paragraphs:
        low = paragraph.lower()
        if any(token in low for token in banned):
            continue
        if len(paragraph) < 40:
            continue
        chosen = paragraph
        break

    if not chosen and paragraphs:
        chosen = paragraphs[0]

    if not chosen:
        return ""

    chosen = re.sub(r"\s+", " ", chosen).strip()
    if len(chosen) <= max_chars:
        return chosen

    clipped = chosen[:max_chars].rsplit(" ", 1)[0].rstrip(" ,;:")
    return f"{clipped}..."


def main() -> None:
    data = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    forms = data.get("forms", [])

    help_count = 0
    snippet_count = 0

    for form in forms:
        form_path = form.get("filePath")
        if not form_path:
            form.pop("hasHelp", None)
            form.pop("helpSnippet", None)
            continue

        help_path = (ROOT / form_path).with_suffix(".help.md")
        has_help = help_path.exists()

        if has_help:
            help_count += 1
            snippet = make_help_snippet(help_path)
            form["hasHelp"] = True
            if snippet:
                form["helpSnippet"] = snippet
                snippet_count += 1
            else:
                form.pop("helpSnippet", None)
        else:
            form.pop("hasHelp", None)
            form.pop("helpSnippet", None)

    data["generatedAt"] = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    INDEX_PATH.write_text(json.dumps(data, ensure_ascii=True, separators=(",", ":")), encoding="utf-8")

    print(json.dumps({
        "totalForms": len(forms),
        "hasHelp": help_count,
        "helpSnippets": snippet_count,
        "indexPath": str(INDEX_PATH),
    }))


if __name__ == "__main__":
    main()
