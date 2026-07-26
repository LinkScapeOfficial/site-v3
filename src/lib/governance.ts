import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "src", "content", "governance");

export interface GovernanceMeta {
  id: string;
  title: string;
  domain: string;
  summary: string;
  documentId: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  owner: string;
  reviewCycle: string;
  status: string;
  source: string;
}

export interface GovernanceDoc extends GovernanceMeta {
  content: string;
  /** Top-level sections, for the in-page contents rail. */
  sections: { id: string; label: string }[];
}

/** Matches the "## 1 Purpose and Scope" headings the converter emits. */
const H2_SOURCE = /^##\s+([\dIVXLC.]+)\s+(.+)$/gm;

export function slugifyHeading(num: string, _label: string) {
  return `s-${num.replace(/\./g, "-")}`;
}

function parse(file: string): GovernanceDoc {
  const raw = fs.readFileSync(path.join(DIR, file), "utf-8");
  const { data, content } = matter(raw);
  const meta = data as GovernanceMeta;

  // Fresh per document: a shared /g regex carries lastIndex between calls.
  const heading = new RegExp(H2_SOURCE.source, "gm");
  const sections: { id: string; label: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = heading.exec(content)) !== null) {
    sections.push({ id: slugifyHeading(m[1], m[2]), label: `${m[1]}. ${m[2]}` });
  }

  return { ...meta, content, sections };
}

let cache: GovernanceDoc[] | null = null;

export function allDocs(): GovernanceDoc[] {
  if (cache) return cache;
  if (!fs.existsSync(DIR)) return [];
  cache = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parse)
    .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  return cache;
}

export function getDoc(id: string): GovernanceDoc | undefined {
  return allDocs().find((d) => d.id.toLowerCase() === id.toLowerCase());
}

export const DOMAIN_ORDER = [
  "Governance",
  "People",
  "Ethics",
  "Impact",
  "Finance",
];

export function docsByDomain() {
  const docs = allDocs();
  // Unlisted domains are appended so nothing disappears from the index.
  const order = [
    ...DOMAIN_ORDER,
    ...docs.map((d) => d.domain).filter((d) => !DOMAIN_ORDER.includes(d)),
  ];
  return Array.from(new Set(order))
    .map((domain) => ({ domain, docs: docs.filter((d) => d.domain === domain) }))
    .filter((g) => g.docs.length > 0);
}
