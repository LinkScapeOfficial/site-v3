#!/usr/bin/env python3
"""
Convert the public subset of LinkScape's .docx governance pack into Markdown
with YAML front matter, ready for rendering at /governance/[id].

These are policy documents, so the bias throughout is toward keeping text.
Only material that is demonstrably page furniture is dropped: the cover block,
signature grids, approval tables, maintenance logs, and printed tables of
contents. Everything else is preserved, and the script refuses to write
anything if a document trips a correctness guard.

Source of truth stays in LinkScape/. Re-runnable: revise a document there, run
this again, and the site picks up the new version.

Usage:  python3 scripts/docx_to_md.py
Output: src/content/governance/*.md
"""

import os
import re

import docx
from docx.table import Table, _Cell
from docx.text.paragraph import Paragraph

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "LinkScape")
OUT = os.path.join(ROOT, "src", "content", "governance")

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
# ---------------------------------------------------------------------------
# The public set. Everything else in the pack stays internal; see PLAN.md 0.2.
# (id, relative path, domain, summary shown on the governance index)
# ---------------------------------------------------------------------------
PUBLIC = [
    ("G-01", "governance/G-01_Mission_Vision_Values.docx", "Governance",
     "Mission, Vision & Values",
     "The mission, the vision, and the five values that decide how we work."),
    ("G-02", "governance/G-02_Organizational_Ordinance.docx", "Governance",
     "Organizational Ordinance",
     "The founding instrument of the organization and the authority it establishes."),
    ("G-03", "governance/G-03_Organizational_Bylaws.docx", "Governance",
     "Organizational Bylaws",
     "How LinkScape is constituted, who holds office, and how decisions are made."),
    ("G-04", "governance/G-04_Leadership_Roster.docx", "Governance",
     "Leadership Roster & Organizational Chart",
     "Who leads LinkScape, what each role is accountable for, and how reporting runs."),
    ("G-05", "governance/G-05_Conflict_of_Interest_Policy.docx", "Governance",
     "Conflict of Interest Policy",
     "How we identify, disclose, and manage conflicts of interest."),
    ("G-06", "governance/G-06_HCB_Fiscal_Sponsorship_Summary.docx", "Governance",
     "Fiscal Sponsorship Summary",
     "What fiscal sponsorship means and how our relationship with Hack Club works."),
    ("G-08", "governance/G-08_Advisory_Board_Charter.docx", "Governance",
     "Advisory Board Charter",
     "The remit of the advisory board and the limits of its authority."),
    ("G-11", "governance/G-11_Dissolution_Procedures.docx", "Governance",
     "Dissolution Procedures",
     "What happens to our work and our funds if LinkScape ever winds down."),

    ("PP-01", "people/PP-01_Code_of_Conduct.docx", "People",
     "Code of Conduct",
     "The behaviour we expect of everyone in our spaces, and what follows if it is breached."),
    ("PP-06", "people/PP-06_Anti-Harassment_Policy.docx", "People",
     "Anti-Harassment Policy",
     "Our anti-harassment commitment, reporting routes, and response obligations."),
    ("PP-12", "people/PP-12_Volunteer_Time_Commitment_Policy.docx", "People",
     "Volunteer Time Commitment Policy",
     "What we ask of members' time, and what we promise not to ask."),
    ("PP-13", "people/PP-13_DEI_Statement_and_Initiatives.docx", "People",
     "DEI Statement & Initiatives",
     "Our position on diversity, equity, and inclusion, and the work behind it."),

    ("E-01", "ethics/E-01_Responsible_AI_Policy.docx", "Ethics",
     "Responsible AI Policy",
     "The rules we hold ourselves to when we build and release AI systems."),
    ("E-02", "ethics/E-02_Data_Privacy_Policy.docx", "Ethics",
     "Data Privacy Policy",
     "What data we collect, how we protect it, and the additional care minors are owed."),
    ("E-03", "ethics/E-03_Research_Ethics_Guidelines.docx", "Ethics",
     "Research Ethics Guidelines",
     "Integrity standards for the research we publish."),
    ("E-04", "ethics/E-04_Model_Card_Template.docx", "Ethics",
     "Model Card Template",
     "The disclosure template every model we release is documented against."),
    ("E-06", "ethics/E-06_Open_Source_Contribution_Policy.docx", "Ethics",
     "Open Source Contribution Policy",
     "How we license, attribute, and accept contributions to our open work."),
    ("E-07", "ethics/E-07_Environmental_Impact_Statement.docx", "Ethics",
     "Environmental Impact Statement",
     "The environmental cost of our compute, stated openly."),

    ("I-01", "impact/I-01_Theory_of_Change.docx", "Impact",
     "Theory of Change",
     "The chain of reasoning from what we do to the change we intend to cause."),
    ("I-02", "impact/I-02_Impact_Measurement_Framework.docx", "Impact",
     "Impact Measurement Framework",
     "The indicators we track, and our commitment to reporting misses as well as gains."),
    ("I-06", "impact/I-06_Partnership_Framework.docx", "Impact",
     "Partnership Framework",
     "How we evaluate, structure, and exit partnerships."),

    ("F-04", "finance/F-04_Fundraising_Guidelines.docx", "Finance",
     "Fundraising Guidelines",
     "How we raise money, what we will accept, and what we will not."),
]

# Applied on publication: Tz-yun is the correct spelling, and the ACL
# manuscript is under review rather than accepted. Amend the sources to match.
CORRECTIONS = [
    ("Yz-yun Hsiao", "Tz-yun Hsiao"),
    ("Our ACL-accepted NLP research and our AI-music project are examples of pillar-one output.",
     "Our NLP research, submitted to ACL Rolling Review 2027 and pending decision, "
     "and our AI-music project are examples of pillar-one output."),
    ("NLP/AI research (e.g. ACL-accepted work)",
     "NLP/AI research (e.g. work under review at ACL Rolling Review 2027)"),
    ("an ACL-accepted paper",
     "a paper submitted to ACL Rolling Review 2027, decision pending"),
    ("ACL-accepted work", "work under review at ACL Rolling Review 2027"),
    ("ACL-accepted research",
     "research submitted to ACL Rolling Review 2027, decision pending"),
]

# Every correction above is a whole phrase, because a bare substitution of
# "ACL-accepted" produces ungrammatical text wherever an article precedes it.
# Nothing may reach the site still claiming acceptance, so publication fails
# loudly rather than shipping a wrong claim quietly.
FORBIDDEN = [
    ("ACL-accepted", "claims a paper acceptance that has not issued"),
    ("Yz-yun", "misspells a fellow's name"),
]

# ---------------------------------------------------------------------------
# Page furniture. These are dropped only when they appear as a HEADING, never
# when the same word merely starts a paragraph: "Approval: Dissolution shall
# be approved by..." is an operative clause, not a section to delete.
# ---------------------------------------------------------------------------
DROP_HEADINGS = (
    "approval and adoption",
    "approval",
    "approvals",
    "document maintenance log",
    "maintenance log",
    "version history",
    "document history",
    "signatures",
    "signature",
    "document information",
    "document control",
    # The page has its own contents rail; a flat printed one is noise.
    "table of contents",
    "contents",
)

NOISE_LINES = re.compile(
    r"^(\s*[—–-]{1,2}\s*end of [a-z ]+\s*[—–-]{1,2}\s*|generated:.*|"
    r"document classification:.*|for updates or corrections.*|"
    r"this document is a quick reference guide.*|page \d+( of \d+)?)$",
    re.I,
)

# A numbered section: "3.", "3.1", "3.1.2".
HEADING_RE = re.compile(r"^(\d+)(?:\.(\d+))?(?:\.(\d+))?\.?\s+(\S.*)$")

# The Ordinance is organised into PARTs, the Bylaws into ARTICLEs. Both sit
# above the numbered sections and take the top heading slot.
DIVISION_RE = re.compile(
    r"^(PART|ARTICLE)\s+([IVXLC]+|\d+)\s*[-–—:.]?\s*(.*)$", re.I
)

META_KEYS = {
    "document id": "documentId",
    "version": "version",
    "effective date": "effectiveDate",
    "last updated": "lastUpdated",
    "owner": "owner",
    "review cycle": "reviewCycle",
    "priority": "priority",
    "status": "status",
    "deliverable": "deliverable",
    "fiscal sponsor": "fiscalSponsor",
    "document type": "documentType",
    "organization": "organization",
}

# Metadata appears as "Key: value" in running text as well as in tables. The
# value ends where the next recognised key begins, so an effective date does
# not swallow the amendment history that follows it on the same line.
INLINE_KEY = re.compile(
    r"\b(document id|version|last updated|effective date|owner|review cycle|"
    r"status|priority|document type|fiscal sponsor|date)\s*[::]?\s*",
    re.I,
)
META_KEYS["date"] = "lastUpdated"

# Acronyms that must survive the sentence-casing of an ALL-CAPS heading.
ACRONYMS = {
    "AI", "HCB", "DEI", "IP", "NLP", "ML", "GPU", "FAQ", "PR", "QA", "KPI",
    "LLM", "API", "PII", "MOU", "NDA", "DUA", "CEO", "CFO", "CTO", "PM",
    "US", "EU", "ID", "IT", "HR", "R&D", "OSS", "LS",
}
SMALL_WORDS = {
    "a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or",
    "the", "to", "with", "from", "into",
}

# Box-drawing only: slashes and pipes appear in ordinary prose and dates.
BOX_CHARS = set("│├└┌┐┘─┬┴┼")


# Proper nouns whose casing is not recoverable from an ALL-CAPS heading.
PROPER_NOUNS = {"linkscape": "LinkScape", "hackclub": "HackClub"}


def title_case(text):
    """Sentence an ALL-CAPS heading, keeping acronyms and proper nouns."""
    if not text.isupper():
        return text
    out = []
    for i, w in enumerate(text.split()):
        core = w.strip("()[].,:;")
        if core.lower() in PROPER_NOUNS:
            out.append(w.replace(core, PROPER_NOUNS[core.lower()]))
        elif core.upper() in ACRONYMS:
            out.append(w.replace(core, core.upper()))
        elif i and w.lower() in SMALL_WORDS:
            out.append(w.lower())
        else:
            out.append(w[:1].upper() + w[1:].lower())
    return " ".join(out)


def iter_block_items(parent):
    """Yield Paragraph and Table objects in true document order."""
    for child in parent.element.body.iterchildren():
        if child.tag == W + "p":
            yield Paragraph(child, parent)
        elif child.tag == W + "tbl":
            yield Table(child, parent)


# Style names are unreliable: many documents mark bullets with Word's default
# "List Paragraph". The numbering reference is authoritative.
def numbering_formats(document):
    """numId -> {ilvl: numFmt} from numbering.xml."""
    try:
        part = document.part.numbering_part
    except (KeyError, NotImplementedError, AttributeError):
        return {}, {}
    root = part.element
    abstract = {}
    for an in root.findall(W + "abstractNum"):
        aid = an.get(W + "abstractNumId")
        levels = {}
        for lvl in an.findall(W + "lvl"):
            ilvl = lvl.get(W + "ilvl")
            fmt = lvl.find(W + "numFmt")
            levels[ilvl] = fmt.get(W + "val") if fmt is not None else "bullet"
        abstract[aid] = levels
    concrete = {}
    for num in root.findall(W + "num"):
        nid = num.get(W + "numId")
        ref = num.find(W + "abstractNumId")
        if ref is not None:
            concrete[nid] = abstract.get(ref.get(W + "val"), {})
    return concrete, abstract


def list_info(paragraph, numbering):
    """(ordered, depth) if this paragraph is a list item, else None."""
    pPr = paragraph._p.pPr
    numPr = pPr.numPr if pPr is not None else None
    if numPr is not None and numPr.numId is not None:
        nid = str(numPr.numId.val)
        ilvl = str(numPr.ilvl.val) if numPr.ilvl is not None else "0"
        fmt = numbering.get(nid, {}).get(ilvl, "bullet")
        return (fmt != "bullet", int(ilvl))
    name = paragraph.style.name if paragraph.style is not None else ""
    if name == "List Number":
        return (True, 0)
    if name == "List Bullet":
        return (False, 0)
    return None


# ---------------------------------------------------------------------------
# Tables
# ---------------------------------------------------------------------------
def cell_lines(cell):
    return [p.text.strip() for p in cell.paragraphs if p.text.strip()]


def cell_text(cell):
    return " ".join(cell_lines(cell)).strip()


def row_cells(tr):
    """The distinct cells of a row.

    `tr.cells` expands a horizontally-merged cell into one entry per grid
    column, so its text repeats. Reading the underlying `tc` elements gives
    the real cells instead. Deduplicating by text would be wrong: a fill-in
    template legitimately repeats "[fill in]" across adjacent columns, and
    collapsing those silently deletes fields.
    """
    return [cell_text(_Cell(tc, tr)) for tc in tr._tr.tc_lst]


def is_metadata_table(rows):
    hits = 0
    for r in rows:
        for i, cell in enumerate(r):
            if i + 1 < len(r) and cell.strip().lower().rstrip(":") in META_KEYS:
                hits += 1
            elif INLINE_KEY.match(cell.strip()) and ":" in cell:
                hits += 1
    return hits >= 2


def is_signature_table(rows):
    """A grid of officers and signature lines, not a callout mentioning one."""
    if not rows or max(len(r) for r in rows) < 2:
        return False
    header = " ".join(rows[0]).lower()
    if "signature" in header and "name" in header:
        return True
    joined = " ".join(c for r in rows for c in r).lower()
    return "_____" in joined and ("date" in joined or "signature" in joined)


def md_escape(text):
    return text.replace("|", "\\|").replace("\n", " ")


def render_table(rows):
    if not rows or not any(any(c for c in r) for r in rows):
        return ""
    # Blank rows are kept exactly as authored. In a reporting template the
    # empty rows are the form itself, and dropping them leaves a header with
    # nothing to fill in.
    width = max(len(r) for r in rows)
    rows = [r + [""] * (width - len(r)) for r in rows]
    lines = [
        "| " + " | ".join(md_escape(c) for c in rows[0]) + " |",
        "| " + " | ".join("---" for _ in rows[0]) + " |",
    ]
    for r in rows[1:]:
        lines.append("| " + " | ".join(md_escape(c) for c in r) + " |")
    return "\n".join(lines)


def harvest_inline_meta(text, meta):
    keys = list(INLINE_KEY.finditer(text))
    for i, m in enumerate(keys):
        start = m.end()
        end = keys[i + 1].start() if i + 1 < len(keys) else len(text)
        value = text[start:end].strip(" \t|·-–—")
        value = re.split(r"\s{2,}|\s\|\s", value)[0].strip()
        # An unlabelled continuation such as "First Amendment: ..." is history.
        value = re.split(r"\s+(?=[A-Z][A-Za-z ()\.]{2,30}:)", value)[0].strip()
        key = META_KEYS.get(m.group(1).strip().lower())
        if key and value:
            meta.setdefault(key, value)
    return bool(keys)


# ---------------------------------------------------------------------------
# Headings
# ---------------------------------------------------------------------------
def classify_heading(text, style, in_body=True):
    """Return (kind, number, label) or None.

    kind is "division" for PART/ARTICLE, "numbered" for 3 / 3.1 / 3.1.2, and
    "plain" for a styled heading that carries no number, such as E-01's
    Executive Summary. Plain headings used to be discarded as cover furniture,
    which cost that policy its scope clause.
    """
    styled = style.startswith("Heading") if style else False

    m = DIVISION_RE.match(text)
    if m and (text.isupper() or styled):
        return ("division", m.group(2).upper(), title_case(m.group(3).strip()))

    m = HEADING_RE.match(text)
    if m and len(m.group(4)) < 120:
        num = ".".join(x for x in (m.group(1), m.group(2), m.group(3)) if x)
        return ("numbered", num, title_case(m.group(4)))

    if styled and len(text) < 120:
        return ("plain", "", title_case(text))

    # An ALL-CAPS standalone line short enough to be a heading. Only once the
    # body has started: on the cover page these are the organisation banner
    # and the document title, not sections.
    if in_body and text.isupper() and 3 < len(text) < 80 and not text.endswith("."):
        return ("plain", "", title_case(text))

    return None


def heading_depth(kind, num, has_divisions):
    if kind == "division":
        return 2
    base = 3 if has_divisions else 2
    if kind == "plain":
        return base
    return min(base + len(num.split(".")) - 1, 6)


def is_ascii_art(text):
    return sum(ch in BOX_CHARS for ch in text) >= 2


def convert(doc_id, rel_path, domain, title, summary):
    path = os.path.join(SRC, rel_path)
    d = docx.Document(path)
    numbering, _ = numbering_formats(d)

    blocks = list(iter_block_items(d))

    # Pre-pass: does this document use PART/ARTICLE divisions? If so the
    # numbered sections nest one level below them.
    has_divisions = any(
        isinstance(b, Paragraph)
        and b.text.strip()
        and (classify_heading(
            b.text.strip(),
            b.style.name if b.style is not None else "",
            in_body=False,
        ) or ("", "", ""))[0] == "division"
        for b in blocks
    )

    meta = {}
    parts = []
    seen_meta_table = False
    seen_heading = False
    skip_depth = None  # depth of the furniture heading we are skipping under
    prev_para = None
    art_run = []
    # Deliberate drops, so the guard can tell them from accidental ones.
    dropped = []

    def flush_art():
        if art_run:
            parts.append("```\n" + "\n".join(art_run) + "\n```")
            art_run.clear()

    for block in blocks:
        if isinstance(block, Table):
            rows = [row_cells(tr) for tr in block.rows]
            flat = [c for r in rows for c in r if c]

            if not seen_meta_table and is_metadata_table(rows):
                for r in rows:
                    for i in range(0, len(r) - 1):
                        k = r[i].strip().lower().rstrip(":")
                        if k in META_KEYS and r[i + 1].strip():
                            meta.setdefault(META_KEYS[k], r[i + 1].strip())
                    for c in r:
                        harvest_inline_meta(c, meta)
                seen_meta_table = True
                dropped.extend(flat)
                continue

            if is_signature_table(rows) or skip_depth is not None:
                dropped.extend(flat)
                continue

            # A cover banner or a strip of loose metadata, before any heading.
            if not seen_heading and len(flat) <= 3 and all(
                harvest_inline_meta(c, meta) or len(c) < 40 for c in flat
            ):
                dropped.extend(flat)
                continue

            if len(rows) == 1 and len(flat) == 1:
                lines = cell_lines(block.rows[0].cells[0])
                if lines[0].lower().rstrip(":") in DROP_HEADINGS:
                    for line in lines:
                        harvest_inline_meta(line, meta)
                    dropped.extend(lines)
                    continue
                # One-cell callout. Keep the label on its own line so it does
                # not run into the sentence that follows it.
                body = "\n> ".join(lines) if len(lines) > 1 else lines[0]
                flush_art()
                parts.append("> " + body)
                continue

            t = render_table(rows)
            if t:
                flush_art()
                parts.append(t)
            continue

        text = block.text.strip()
        if not text:
            continue
        if NOISE_LINES.match(text):
            dropped.append(text)
            continue
        if text == prev_para:
            continue

        style = block.style.name if block.style is not None else "Normal"
        head = classify_heading(text, style, in_body=seen_heading)

        if head:
            kind, num, label = head
            depth = heading_depth(kind, num, has_divisions)

            # Leave a furniture section at the next heading of the same or a
            # higher level, so subsections are not orphaned.
            if skip_depth is not None and depth <= skip_depth:
                skip_depth = None

            if label.lower().rstrip(":") in DROP_HEADINGS or (
                not num and text.lower().rstrip(":") in DROP_HEADINGS
            ):
                skip_depth = depth
                dropped.append(text)
                prev_para = text
                continue

            if skip_depth is not None:
                dropped.append(text)
                prev_para = text
                continue

            flush_art()
            seen_heading = True
            prefix = f"{num} " if num else ""
            if kind == "division":
                prefix = f"{num} "
            parts.append(f"{'#' * depth} {prefix}{label}")
            prev_para = text
            continue

        if skip_depth is not None:
            dropped.append(text)
            prev_para = text
            continue

        if is_ascii_art(text):
            # A diagram's root line has no box characters, so pull the short
            # label above it into the block.
            if not art_run and parts and len(parts[-1]) < 70 and not parts[
                -1
            ].endswith((".", ":", "```")) and not parts[-1].startswith("#"):
                art_run.append(parts.pop())
            art_run.append(block.text.rstrip())
            prev_para = text
            continue
        flush_art()

        if not seen_heading:
            # Cover page. Every real section carries a heading, and the
            # coverage guard catches any document where that stops being true.
            harvest_inline_meta(text, meta)
            dropped.append(text)
            prev_para = text
            continue

        info = list_info(block, numbering)
        if info:
            ordered, depth = info
            pad = "  " * min(depth, 3)
            parts.append(f"{pad}{'1.' if ordered else '-'} {text}")
        else:
            parts.append(text)

        prev_para = text

    flush_art()

    md = "\n\n".join(parts)
    md = re.sub(r"\n\n(?=\s*(- |1\. ))", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md).strip()

    for old, new in CORRECTIONS:
        md = md.replace(old, new)

    # Coverage guard. Silent omission is the real failure mode here, so
    # compare source vocabulary against what was published or deliberately cut.
    source_words = set()
    for block in blocks:
        if isinstance(block, Paragraph):
            source_words.update(re.findall(r"[a-z]{4,}", block.text.lower()))
        else:
            for tr in block.rows:
                for c in tr.cells:
                    source_words.update(
                        re.findall(r"[a-z]{4,}", cell_text(c).lower())
                    )
    published = set(re.findall(r"[a-z]{4,}", md.lower()))
    published |= set(re.findall(r"[a-z]{4,}", " ".join(dropped).lower()))
    if source_words:
        kept = len(source_words & published) / len(source_words)
        if kept < 0.995:
            lost = sorted(source_words - published)[:14]
            raise SystemExit(
                f"\n{doc_id}: refusing to publish. {kept:.1%} of the source "
                f"vocabulary is accounted for, so text was dropped without "
                f"being recognised as page furniture.\n  Missing words: "
                f"{', '.join(lost)}\n"
            )

    for phrase, why in FORBIDDEN:
        if phrase in md:
            line = next((l for l in md.splitlines() if phrase in l), "").strip()
            raise SystemExit(
                f"\n{doc_id}: refusing to publish. Text still contains "
                f"{phrase!r}, which {why}.\n  {line[:160]}\n"
                f"Add a whole-phrase entry to CORRECTIONS.\n"
            )

    fm = {
        "id": doc_id,
        "title": title,
        "domain": domain,
        "summary": summary,
        "documentId": meta.get("documentId", ""),
        "version": meta.get("version", ""),
        # Effective date and last-updated are different facts and are no longer
        # merged into one field.
        "effectiveDate": meta.get("effectiveDate", ""),
        "lastUpdated": meta.get("lastUpdated", ""),
        "owner": meta.get("owner", ""),
        "reviewCycle": meta.get("reviewCycle", ""),
        "source": rel_path,
        "status": "Adopted",
    }

    lines = ["---"]
    for k, v in fm.items():
        lines.append(f'{k}: "{str(v).replace(chr(34), chr(39))}"')
    lines.append("---")
    lines.append("")
    lines.append(md)
    lines.append("")
    return "\n".join(lines), fm


def main():
    os.makedirs(OUT, exist_ok=True)

    # Convert everything before writing, so a failure leaves no partial state.
    built = []
    for doc_id, rel, domain, title, summary in PUBLIC:
        built.append((doc_id, *convert(doc_id, rel, domain, title, summary)))

    expected = {f"{doc_id}.md" for doc_id, _, _ in built}
    for stale in os.listdir(OUT):
        if stale.endswith(".md") and stale not in expected:
            os.remove(os.path.join(OUT, stale))
            print(f"  removed stale {stale}")

    gaps = []
    for doc_id, text, fm in built:
        with open(os.path.join(OUT, f"{doc_id}.md"), "w", encoding="utf-8") as f:
            f.write(text)
        missing = [
            k for k in ("documentId", "version", "effectiveDate", "owner")
            if not fm[k]
        ]
        if missing:
            gaps.append((doc_id, missing))
        print(f"  {doc_id:6s} {fm['title'][:50]:52s} {len(text):6d} bytes")

    print(f"\n{len(built)} public documents written to src/content/governance/")
    if gaps:
        print("\nMetadata not present in the source document:")
        for doc_id, missing in gaps:
            print(f"  {doc_id:6s} missing {', '.join(missing)}")


if __name__ == "__main__":
    main()
