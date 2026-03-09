#!/usr/bin/env python3
from __future__ import annotations

import html
import json
import re
from collections import Counter, defaultdict
from datetime import date
from pathlib import Path
from urllib.parse import quote


ROOT = Path(__file__).resolve().parents[1]
DOCS_INDEX = ROOT / "docs" / "forms-index.json"
GUIDES_DIR = ROOT / "guides"
CATEGORIES_DIR = ROOT / "categories"
SITE_URL = "https://forms.gic.mx"
TODAY = date.today().isoformat()

MAX_GUIDES = 240
MAX_PER_CATEGORY = 8
MIN_CATEGORY_GUIDES = 3


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-{2,}", "-", value).strip("-")
    return value or "form-guide"


def humanize_category(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("_", " ")).strip().title()


def clean_title(value: str) -> str:
    value = (value or "").replace("_", " ").strip()
    value = re.sub(r"\s+", " ", value)
    return value


def quality_title(value: str) -> bool:
    if not value:
        return False
    if "_" in value:
        return False
    if len(value) < 8:
        return False
    first = value[0]
    if first.isalpha() and not first.isupper():
        return False
    return True


def strip_markdown(text: str) -> str:
    text = re.sub(r"<thinking>[\s\S]*?</thinking>", " ", text, flags=re.I)
    text = re.sub(r"`{1,3}([^`]*)`{1,3}", r"\1", text)
    text = re.sub(r"!\[[^\]]*\]\([^)]+\)", " ", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"^\s{0,3}#{1,6}\s*", "", text, flags=re.M)
    text = re.sub(r"^\s*[-*+]\s+", "", text, flags=re.M)
    text = re.sub(r"^\s*\d+\.\s+", "", text, flags=re.M)
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)
    text = re.sub(r"\*(.*?)\*", r"\1", text)
    text = re.sub(r"_{1,2}(.*?)_{1,2}", r"\1", text)
    text = text.replace("\t", " ")
    text = re.sub(r"\r\n?", "\n", text)
    text = re.sub(r"\n{2,}", "\n\n", text)
    return text.strip()


def compress_text(text: str, max_sentences: int = 3, max_chars: int = 320) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    if not text:
        return ""
    sentences = re.split(r"(?<=[.!?])\s+", text)
    chosen = []
    total = 0
    for sentence in sentences:
        sentence = sentence.strip()
        if not sentence:
            continue
        if total and total + len(sentence) + 1 > max_chars:
            break
        chosen.append(sentence)
        total += len(sentence) + 1
        if len(chosen) >= max_sentences:
            break
    if chosen:
        return " ".join(chosen)
    return text[: max_chars - 1].rstrip(" ,;:") + "..."


def looks_overly_programmatic(text: str) -> bool:
    low = text.lower()
    flags = (
        "help guide purpose",
        "how to complete this form",
        "field-by-field explanation",
        "to complete this form",
        "this help guide",
        "let's first analyze",
    )
    return any(flag in low for flag in flags)


def extract_paragraphs(help_path: Path, fallback: str) -> list[str]:
    text = fallback or ""
    if help_path.exists():
        text = help_path.read_text(encoding="utf-8", errors="ignore")
    text = strip_markdown(text)
    parts = [re.sub(r"\s+", " ", part).strip() for part in re.split(r"\n\n+", text) if part.strip()]
    filtered = []
    banned = (
        "to help me create",
        "let's first analyze",
        "the form appears to be",
        "this help guide assumes",
    )
    for part in parts:
        low = part.lower()
        if any(token in low for token in banned):
            continue
        if len(part) < 60:
            continue
        filtered.append(compress_text(part))
        if len(filtered) == 3:
            break
    if filtered:
        return filtered
    if fallback:
        return [compress_text(fallback)]
    return []


def build_default_paragraphs(title: str, category_label: str, qcount: int, question_types: str) -> list[str]:
    return [
        (
            f"{title} is a reusable {category_label.lower()} template with {qcount} fields. "
            "Use it as a starting point when you need a structured workflow rather than building a form from scratch."
        ),
        (
            f"The current schema includes field types such as {question_types}. "
            "Review labels, required fields, and any organization-specific wording before publishing."
        ),
        (
            "This template is most useful when you need a draft that can be adapted quickly, "
            "tested in the live preview, and exported to your preferred collection workflow."
        ),
    ]


def meta_description(form: dict, category_label: str) -> str:
    title = clean_title(form.get("title", "Untitled Form"))
    qcount = int(form.get("questionCount") or 0)
    return (
        f"{title}: a free {category_label.lower()} form template with {qcount} fields, "
        "completion guidance, downloads, and a live preview."
    )


def category_intro(category_label: str, count: int) -> str:
    return (
        f"Browse curated {category_label.lower()} templates from the GIC Forms library. "
        f"This page highlights {count} stronger examples with clearer titles, help content, and deployment guidance."
    )


def breadcrumb_ld(items: list[tuple[str, str]]) -> str:
    payload = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": name, "item": url}
            for i, (name, url) in enumerate(items)
        ],
    }
    return json.dumps(payload, ensure_ascii=True)


def page_shell(*, title: str, description: str, canonical_path: str, body: str, json_ld: list[str]) -> str:
    canonical_url = f"{SITE_URL}{canonical_path}"
    scripts = "\n".join(
        f'  <script type="application/ld+json">{payload}</script>' for payload in json_ld
    )
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <meta name="description" content="{html.escape(description)}">
  <link rel="canonical" href="{html.escape(canonical_url)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{html.escape(title)}">
  <meta property="og:description" content="{html.escape(description)}">
  <meta property="og:url" content="{html.escape(canonical_url)}">
  <meta name="twitter:card" content="summary_large_image">
  <style>
    :root {{
      --bg: #f8fafc;
      --card: #ffffff;
      --text: #0f172a;
      --muted: #475569;
      --line: #e2e8f0;
      --brand: #ec5b13;
      --brand-soft: #fff1e9;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: "Public Sans", "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top, rgba(236,91,19,.08), transparent 32rem),
        linear-gradient(180deg, #fff, var(--bg));
      line-height: 1.6;
    }}
    a {{ color: var(--brand); text-decoration: none; }}
    a:hover {{ text-decoration: underline; }}
    .wrap {{ max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }}
    .topbar {{
      position: sticky; top: 0; z-index: 10;
      backdrop-filter: blur(10px);
      background: rgba(255,255,255,.88);
      border-bottom: 1px solid rgba(226,232,240,.9);
    }}
    .topbar-inner {{
      display: flex; align-items: center; justify-content: space-between; gap: 1rem;
      min-height: 4rem;
    }}
    .brand {{
      display: inline-flex; align-items: center; gap: .75rem; font-weight: 800; color: var(--text);
    }}
    .brand-badge {{
      width: 2rem; height: 2rem; border-radius: .75rem; background: var(--brand);
      display: inline-flex; align-items: center; justify-content: center; color: #fff; font-size: 1rem;
    }}
    .nav {{ display: flex; gap: 1rem; flex-wrap: wrap; }}
    .nav a {{ color: var(--muted); font-weight: 600; }}
    .hero {{ padding: 4rem 0 2rem; }}
    .eyebrow {{
      display: inline-flex; align-items: center; gap: .5rem; font-size: .82rem; font-weight: 700;
      color: var(--brand); background: var(--brand-soft); padding: .45rem .8rem; border-radius: 999px;
    }}
    h1 {{ font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.08; margin: 1rem 0; }}
    h2 {{ font-size: 1.35rem; margin: 0 0 .85rem; }}
    h3 {{ font-size: 1.05rem; margin: 0 0 .65rem; }}
    p, li {{ color: var(--muted); }}
    main {{ padding-bottom: 4rem; }}
    .grid {{ display: grid; gap: 1.25rem; }}
    .grid-2 {{ grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); }}
    .card {{
      background: var(--card); border: 1px solid var(--line); border-radius: 1.25rem;
      padding: 1.25rem; box-shadow: 0 18px 50px rgba(15, 23, 42, 0.05);
    }}
    .pill {{
      display: inline-block; padding: .22rem .55rem; border-radius: 999px;
      font-size: .78rem; font-weight: 700; background: #f1f5f9; color: #334155;
    }}
    .cta-row {{ display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 1.25rem; }}
    .btn {{
      display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
      border-radius: .9rem; padding: .85rem 1.05rem; font-weight: 700;
      border: 1px solid transparent;
    }}
    .btn-primary {{ background: var(--brand); color: #fff; }}
    .btn-secondary {{ background: #fff; color: var(--text); border-color: var(--line); }}
    .list {{ margin: 0; padding-left: 1.1rem; }}
    .lede {{ font-size: 1.06rem; max-width: 68ch; }}
    footer {{ border-top: 1px solid var(--line); padding: 2rem 0 3rem; color: var(--muted); }}
    .muted {{ color: var(--muted); }}
    .section {{ margin-top: 1.5rem; }}
    .cards {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }}
    .small {{ font-size: .92rem; }}
    @media (max-width: 720px) {{
      .topbar-inner {{ align-items: flex-start; padding: .8rem 0; flex-direction: column; }}
      .hero {{ padding-top: 2.5rem; }}
    }}
  </style>
{scripts}
</head>
<body>
  <header class="topbar">
    <div class="wrap topbar-inner">
      <a class="brand" href="{SITE_URL}/">
        <span class="brand-badge">F</span>
        <span>GIC Forms</span>
      </a>
      <nav class="nav" aria-label="Main">
        <a href="{SITE_URL}/browse.html">Browse</a>
        <a href="{SITE_URL}/guides/">Guides</a>
        <a href="{SITE_URL}/categories/">Categories</a>
        <a href="{SITE_URL}/editorial-methodology.html">Methodology</a>
        <a href="{SITE_URL}/about.html">About</a>
      </nav>
    </div>
  </header>
  {body}
  <footer>
    <div class="wrap small">
      <p>GIC Forms publishes YAML form templates, guides, and deployment resources for data collection workflows. Forms are licensed under CC BY 4.0 and code is licensed under MIT.</p>
      <p>
        <a href="{SITE_URL}/privacy.html">Privacy</a> |
        <a href="{SITE_URL}/terms.html">Terms</a> |
        <a href="{SITE_URL}/contact.html">Contact</a> |
        <a href="https://github.com/dsalazarrojas/forms">GitHub</a>
      </p>
    </div>
  </footer>
</body>
</html>
"""


def select_guides(forms: list[dict]) -> list[dict]:
    selected = []
    per_category: Counter[str] = Counter()

    def score(item: dict) -> tuple:
        title = clean_title(item.get("title", ""))
        snippet = item.get("helpSnippet", "") or ""
        return (
            1 if item.get("hasHelp") else 0,
            1 if quality_title(title) else 0,
            min(int(item.get("questionCount") or 0), 50),
            len(snippet),
            title,
        )

    for form in sorted(forms, key=score, reverse=True):
        category = form.get("category") or "other_forms"
        title = clean_title(form.get("title", ""))
        if not form.get("hasHelp"):
            continue
        if not quality_title(title):
            continue
        qcount = int(form.get("questionCount") or 0)
        if qcount < 4 or qcount > 40:
            continue
        if per_category[category] >= MAX_PER_CATEGORY:
            continue
        per_category[category] += 1
        selected.append(form)
        if len(selected) >= MAX_GUIDES:
            break

    return selected


def write_page(path: Path, html_text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(html_text, encoding="utf-8")


def build_guides(forms: list[dict]) -> tuple[list[dict], dict[str, list[dict]]]:
    selected = select_guides(forms)
    by_category: dict[str, list[dict]] = defaultdict(list)

    for form in selected:
        title = clean_title(form["title"])
        category = form["category"]
        category_label = humanize_category(category)
        form_path = form["filePath"]
        xlsx_path = form.get("xlsxPath") or ""
        help_path = ROOT / form_path.replace(".yaml", ".help.md").replace(".yml", ".help.md")
        paragraphs = extract_paragraphs(help_path, form.get("helpSnippet", ""))
        types = [str(t).replace("_", " ") for t in form.get("questionTypes", [])[:5]]
        question_types = ", ".join(types) if types else "text"
        qcount = int(form.get("questionCount") or 0)
        lang = (form.get("language") or "en").upper()
        default_paragraphs = build_default_paragraphs(title, category_label, qcount, question_types)
        if not paragraphs:
            paragraphs = default_paragraphs
        else:
            normalized = []
            for i in range(3):
                paragraph = paragraphs[i] if i < len(paragraphs) else ""
                if not paragraph or looks_overly_programmatic(paragraph):
                    paragraph = default_paragraphs[i]
                normalized.append(paragraph)
            paragraphs = normalized
        slug = slugify(form["id"])
        form["guideSlug"] = slug
        form["guideUrl"] = f"/guides/{slug}.html"
        by_category[category].append(form)

        body = f"""
  <main class="wrap">
    <section class="hero">
      <span class="eyebrow">{html.escape(category_label)} Guide</span>
      <h1>{html.escape(title)}</h1>
      <p class="lede">{html.escape(paragraphs[0])}</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/preview.html?form={quote(form_path)}">Open Live Preview</a>
        <a class="btn btn-secondary" href="https://raw.githubusercontent.com/dsalazarrojas/forms/main/{html.escape(form_path)}">Download YAML</a>
        {f'<a class="btn btn-secondary" href="https://raw.githubusercontent.com/dsalazarrojas/forms/main/{html.escape(xlsx_path)}">Download XLSForm</a>' if xlsx_path else ''}
      </div>
    </section>
    <section class="grid grid-2">
      <article class="card">
        <h2>What This Template Includes</h2>
        <p>{html.escape(paragraphs[1] if len(paragraphs) > 1 else paragraphs[0])}</p>
        <ul class="list">
          <li>{qcount} fields in the current schema</li>
          <li>Common input types: {html.escape(question_types)}</li>
          <li>Language metadata: {html.escape(lang)}</li>
          <li>Category: {html.escape(category_label)}</li>
        </ul>
      </article>
      <article class="card">
        <h2>Recommended Review Before Publishing</h2>
        <ul class="list">
          <li>Replace placeholder organization names, legal language, and contact details.</li>
          <li>Confirm required fields, validation rules, and any consent language for your use case.</li>
          <li>Test the form in the live preview before downloading or deploying it.</li>
          <li>Adapt labels and hints for your audience instead of publishing the template unchanged.</li>
        </ul>
      </article>
    </section>
    <section class="section grid grid-2">
      <article class="card">
        <h2>When To Use This Form</h2>
        <p>{html.escape(paragraphs[2] if len(paragraphs) > 2 else paragraphs[-1])}</p>
      </article>
      <article class="card">
        <h2>Related Paths</h2>
        <p><span class="pill">YAML</span> {html.escape(form_path)}</p>
        <p><span class="pill">Preview</span> /preview.html?form={html.escape(form_path)}</p>
        <p><span class="pill">Category</span> <a href="/categories/{slugify(category)}.html">{html.escape(category_label)}</a></p>
      </article>
    </section>
  </main>
"""

        faq = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": f"Can I adapt the {title} template?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": (
                            "Yes. Review every question, label, and help note before publishing. "
                            "Most teams should customize branding, contact details, and required fields."
                        ),
                    },
                },
                {
                    "@type": "Question",
                    "name": "Which formats are available?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": (
                            "This guide links to the YAML source and, when available, the XLSForm file. "
                            "You can also open the live preview to test the template before download."
                        ),
                    },
                },
                {
                    "@type": "Question",
                    "name": "Is this the final version I should deploy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": (
                            "Treat it as a starting point. Validate wording, compliance requirements, "
                            "option lists, and field logic for your actual workflow."
                        ),
                    },
                },
            ],
        }

        page = page_shell(
            title=f"{title} Template Guide | GIC Forms",
            description=meta_description(form, category_label),
            canonical_path=form["guideUrl"],
            body=body,
            json_ld=[
                breadcrumb_ld(
                    [
                        ("Home", SITE_URL + "/"),
                        ("Guides", SITE_URL + "/guides/"),
                        (title, SITE_URL + form["guideUrl"]),
                    ]
                ),
                json.dumps(faq, ensure_ascii=True),
            ],
        )
        write_page(GUIDES_DIR / f"{slug}.html", page)

    return selected, by_category


def build_guide_index(selected: list[dict]) -> None:
    cards = []
    for form in selected[:90]:
        title = clean_title(form["title"])
        cat = humanize_category(form["category"])
        cards.append(
            f"""
        <article class="card">
          <p class="pill">{html.escape(cat)}</p>
          <h3>{html.escape(title)}</h3>
          <p>{html.escape(form.get("helpSnippet", "") or f"A curated {cat.lower()} template guide.")}</p>
          <p><a href="{html.escape(form['guideUrl'])}">Read guide</a></p>
        </article>
"""
        )

    body = f"""
  <main class="wrap">
    <section class="hero">
      <span class="eyebrow">Curated Guides</span>
      <h1>Template Guides For Stronger Crawlable Content</h1>
      <p class="lede">These guide pages turn selected templates into editorial resources with summaries, review notes, download links, and clearer category context.</p>
    </section>
    <section class="cards">
      {''.join(cards)}
    </section>
  </main>
"""
    page = page_shell(
        title="Template Guides | GIC Forms",
        description="Browse curated form template guides with clearer summaries, live preview links, and download paths.",
        canonical_path="/guides/",
        body=body,
        json_ld=[breadcrumb_ld([("Home", SITE_URL + "/"), ("Guides", SITE_URL + "/guides/")])],
    )
    write_page(GUIDES_DIR / "index.html", page)


def build_categories(by_category: dict[str, list[dict]]) -> list[tuple[str, str]]:
    category_pages = []
    index_cards = []
    for category, forms in sorted(by_category.items(), key=lambda item: (-len(item[1]), item[0])):
        if len(forms) < MIN_CATEGORY_GUIDES:
            continue
        category_slug = slugify(category)
        category_label = humanize_category(category)
        intro = category_intro(category_label, len(forms))
        cards = []
        for form in forms:
            cards.append(
                f"""
        <article class="card">
          <h3>{html.escape(clean_title(form['title']))}</h3>
          <p>{html.escape(form.get('helpSnippet', '') or 'Curated guide with live preview and download links.')}</p>
          <p><a href="{html.escape(form['guideUrl'])}">Open guide</a></p>
        </article>
"""
            )

        body = f"""
  <main class="wrap">
    <section class="hero">
      <span class="eyebrow">Category Landing Page</span>
      <h1>{html.escape(category_label)} Templates</h1>
      <p class="lede">{html.escape(intro)}</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/browse.html#category={html.escape(category)}">Browse category in the app</a>
        <a class="btn btn-secondary" href="/guides/">View all guides</a>
      </div>
    </section>
    <section class="cards">
      {''.join(cards)}
    </section>
  </main>
"""
        page = page_shell(
            title=f"{category_label} Templates | GIC Forms",
            description=intro,
            canonical_path=f"/categories/{category_slug}.html",
            body=body,
            json_ld=[
                breadcrumb_ld(
                    [
                        ("Home", SITE_URL + "/"),
                        ("Categories", SITE_URL + "/categories/"),
                        (category_label, f"{SITE_URL}/categories/{category_slug}.html"),
                    ]
                )
            ],
        )
        write_page(CATEGORIES_DIR / f"{category_slug}.html", page)
        category_pages.append((category_label, f"/categories/{category_slug}.html"))
        index_cards.append(
            f"""
        <article class="card">
          <h3>{html.escape(category_label)}</h3>
          <p>{html.escape(intro)}</p>
          <p><a href="/categories/{html.escape(category_slug)}.html">Browse {html.escape(category_label.lower())}</a></p>
        </article>
"""
        )

    body = f"""
  <main class="wrap">
    <section class="hero">
      <span class="eyebrow">Category Hubs</span>
      <h1>Category Pages Built From The Best Existing Templates</h1>
      <p class="lede">These landing pages give search engines and visitors a cleaner overview than the generic JS filter view alone.</p>
    </section>
    <section class="cards">
      {''.join(index_cards)}
    </section>
  </main>
"""
    index_page = page_shell(
        title="Template Categories | GIC Forms",
        description="Browse category landing pages for curated YAML form templates and related guides.",
        canonical_path="/categories/",
        body=body,
        json_ld=[breadcrumb_ld([("Home", SITE_URL + "/"), ("Categories", SITE_URL + "/categories/")])],
    )
    write_page(CATEGORIES_DIR / "index.html", index_page)
    return category_pages


def build_sitemap(selected: list[dict], category_pages: list[tuple[str, str]]) -> None:
    static_paths = [
        "/",
        "/browse.html",
        "/preview.html",
        "/guides/",
        "/categories/",
        "/about.html",
        "/contact.html",
        "/privacy.html",
        "/terms.html",
        "/editorial-methodology.html",
    ]
    guide_paths = [form["guideUrl"] for form in selected]
    category_paths = [path for _, path in category_pages]
    all_paths = static_paths + category_paths + guide_paths

    xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path in all_paths:
        xml.append("  <url>")
        xml.append(f"    <loc>{SITE_URL}{path}</loc>")
        xml.append(f"    <lastmod>{TODAY}</lastmod>")
        xml.append("  </url>")
    xml.append("</urlset>")
    text = "\n".join(xml) + "\n"
    (ROOT / "sitemap.xml").write_text(text, encoding="utf-8")
    (ROOT / "docs" / "sitemap.xml").write_text(text, encoding="utf-8")


def main() -> None:
    data = json.loads(DOCS_INDEX.read_text(encoding="utf-8"))
    forms = data["forms"]
    selected, by_category = build_guides(forms)
    build_guide_index(selected)
    category_pages = build_categories(by_category)
    build_sitemap(selected, category_pages)
    print(
        json.dumps(
            {
                "guides": len(selected),
                "categories": len(category_pages),
                "sitemap_urls": len(selected) + len(category_pages) + 10,
            },
            ensure_ascii=True,
        )
    )


if __name__ == "__main__":
    main()
