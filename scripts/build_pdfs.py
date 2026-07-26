#!/usr/bin/env python3
"""Render the public governance Markdown into print-quality PDFs.

Runs after docx_to_md.py. Requires pandoc and Google Chrome.

    python3 scripts/build_pdfs.py  ->  public/governance/*.pdf
"""

import os
import re
import html
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MD = os.path.join(ROOT, "src", "content", "governance")
OUT = os.path.join(ROOT, "public", "governance")

CHROME_CANDIDATES = (
    os.environ.get("CHROME_PATH"),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
)


def find_chrome():
    for path in CHROME_CANDIDATES:
        if path and os.path.exists(path):
            return path
        if path and shutil.which(path):
            return shutil.which(path)
    return None

CSS = """
@page { size: A4; margin: 20mm 18mm 22mm 18mm; }
* { box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 10.5pt; line-height: 1.62; color: #24292f; margin: 0;
  -webkit-font-smoothing: antialiased;
}
.masthead {
  border-bottom: 2px solid #24292f; padding-bottom: 14px; margin-bottom: 26px;
}
.masthead .org {
  font-size: 8.5pt; letter-spacing: .16em; text-transform: uppercase;
  color: #6e7781; font-weight: 600;
}
.masthead h1 {
  font-size: 21pt; margin: 8px 0 0; letter-spacing: -.02em; font-weight: 650;
}
.masthead .sub { color: #57606a; font-size: 10pt; margin-top: 6px; }
.meta {
  width: 100%; border-collapse: collapse; margin: 0 0 30px;
  font-size: 8.8pt;
}
.meta td {
  border: 1px solid #d0d7de; padding: 6px 9px; vertical-align: top;
}
.meta td.k {
  background: #f6f8fa; color: #57606a; width: 21%;
  font-weight: 600; letter-spacing: .04em; text-transform: uppercase; font-size: 7.6pt;
}
.meta td.v { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
h2 {
  font-size: 13pt; margin: 26px 0 9px; letter-spacing: -.01em;
  border-bottom: 1px solid #eaeef2; padding-bottom: 5px; font-weight: 650;
  page-break-after: avoid;
}
h3 { font-size: 11pt; margin: 19px 0 7px; font-weight: 650; page-break-after: avoid; }
h4 { font-size: 10pt; margin: 15px 0 6px; font-weight: 650; page-break-after: avoid; }
p { margin: 0 0 10px; }
ul, ol { margin: 0 0 12px; padding-left: 20px; }
li { margin-bottom: 4px; }
blockquote {
  margin: 14px 0; padding: 10px 14px; border-left: 3px solid #0969da;
  background: #f6f8fa; color: #24292f; font-size: 10pt;
}
blockquote p:last-child { margin-bottom: 0; }
table {
  width: 100%; border-collapse: collapse; margin: 12px 0 16px; font-size: 9pt;
  page-break-inside: avoid;
}
th, td { border: 1px solid #d0d7de; padding: 6px 8px; text-align: left; vertical-align: top; }
th { background: #f6f8fa; font-weight: 650; }
code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 9pt; }
pre {
  background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 6px;
  padding: 10px 12px; overflow: auto; font-size: 8.6pt; line-height: 1.45;
  page-break-inside: avoid;
}
.footer {
  margin-top: 34px; padding-top: 12px; border-top: 1px solid #d0d7de;
  font-size: 8pt; color: #6e7781; line-height: 1.5;
}
"""


def read_front_matter(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    if not m:
        return {}, text
    fm = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip().strip('"')
    return fm, m.group(2)


def main():
    chrome = find_chrome()
    if not chrome:
        sys.exit("Chrome not found. Set CHROME_PATH to its executable.")
    if not shutil.which("pandoc"):
        sys.exit("pandoc not found on PATH")

    os.makedirs(OUT, exist_ok=True)
    tmp = tempfile.mkdtemp(prefix="ls-pdf-")
    files = sorted(f for f in os.listdir(MD) if f.endswith(".md"))
    built = 0

    for name in files:
        src = os.path.join(MD, name)
        fm, body = read_front_matter(src)
        doc_id = fm.get("id", name[:-3])

        body_html = subprocess.run(
            ["pandoc", "-f", "gfm", "-t", "html5", "--wrap=none"],
            input=body, capture_output=True, text=True, check=True,
        ).stdout

        meta_rows = [
            ("Document ID", fm.get("documentId", "")),
            ("Deliverable", doc_id),
            ("Version", fm.get("version", "")),
            ("Effective date", fm.get("effectiveDate", "")),
            ("Owner", fm.get("owner", "")),
            ("Review cycle", fm.get("reviewCycle", "")),
            ("Status", fm.get("status", "Adopted")),
        ]
        rows = "".join(
            f'<tr><td class="k">{html.escape(k)}</td>'
            f'<td class="v">{html.escape(v)}</td></tr>'
            for k, v in meta_rows if v
        )

        title = html.escape(fm.get("title", ""))
        domain = html.escape(fm.get("domain", ""))
        summary = html.escape(fm.get("summary", ""))
        document_id = html.escape(fm.get("documentId", ""))
        version = html.escape(fm.get("version", ""))
        effective = html.escape(fm.get("effectiveDate", ""))

        page = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>{doc_id} {title} &mdash; LinkScape</title>
<style>{CSS}</style></head>
<body>
<div class="masthead">
  <div class="org">LinkScape &middot; {domain}</div>
  <h1>{title}</h1>
  <div class="sub">{summary}</div>
</div>
<table class="meta">{rows}</table>
{body_html}
<div class="footer">
LinkScape operates as a fiscally sponsored project of The Hack Foundation dba
Hack Club, a 501(c)(3) nonprofit. Hack Club holds the charitable status and
every dollar moves through Hack Club Bank.<br>
{doc_id} &middot; {document_id} &middot; version {version} &middot;
effective {effective} &middot; linkscape.app/governance/{doc_id.lower()}
</div>
</body></html>"""

        html_path = os.path.join(tmp, f"{doc_id}.html")
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(page)

        pdf_path = os.path.join(OUT, f"{doc_id}.pdf")
        subprocess.run(
            [chrome, "--headless", "--disable-gpu", "--no-pdf-header-footer",
             f"--print-to-pdf={pdf_path}", f"file://{html_path}"],
            capture_output=True, check=True,
        )
        size = os.path.getsize(pdf_path)
        print(f"  {doc_id:6s} {fm.get('title','')[:46]:48s} {size/1024:7.1f} KB")
        built += 1

    shutil.rmtree(tmp, ignore_errors=True)
    print(f"\n{built} PDFs written to public/governance/")


if __name__ == "__main__":
    main()
