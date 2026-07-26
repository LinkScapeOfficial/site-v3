import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";

import PageHero from "@/components/layout/page-hero";
import { Section, SectionHeader } from "@/components/layout/section";
import DocRegisterTable from "@/components/doc-register-table";
import Spotlight from "@/components/animations/spotlight";
import { Chip } from "@/components/ui/chip";
import { docsByDomain, allDocs } from "@/lib/governance";
import { registerStats } from "@/content/doc-register";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "LinkScape's governance, ethics, people, and impact documents, published in full and available as PDFs.",
};

const DOMAIN_BLURB: Record<string, string> = {
  Governance:
    "What LinkScape is, who decides what, and what happens if we wind down.",
  People:
    "The behaviour we expect and the protections everyone in our spaces gets.",
  Ethics: "How we build AI, handle data, and license what we release.",
  Impact: "What our programs aim to change and how we measure it.",
  Finance: "How we raise money and what we accept.",
};

export default function GovernancePage() {
  const groups = docsByDomain();
  const docs = allDocs();

  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Governance"
        lede="The rules we run on. Twenty-two documents published in full, and a register of all seventy-seven so you can see what exists."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="border-b border-border p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/85">
              <p>
                Read our constitution, our code of conduct, our AI ethics policy,
                and our privacy policy in full below. Each one is also a PDF you
                can download and keep.
              </p>
              <p>
                Twenty-two of our {registerStats.total} documents are published
                here. The other {registerStats.total - registerStats.published}{" "}
                cover security controls, financial procedure, HR, and internal
                templates. Publishing our access controls would weaken them, and
                the rest describe how we run rather than what we stand for.
              </p>
              <p>
                The register below lists all {registerStats.total} anyway, marked
                published or internal, so you can see exactly what we hold back.
              </p>
            </div>
          </div>
          <aside className="flex flex-col">
            {[
              { k: "Total deliverables", v: String(registerStats.total) },
              { k: "Published in full", v: String(registerStats.published) },
              { k: "Domains", v: "8" },
              { k: "Review cycle", v: "Annual" },
              { k: "Fiscal sponsor", v: site.fiscalSponsor.short },
            ].map((row) => (
              <div key={row.k} className="border-b border-border px-8 py-5">
                <p className="mono-label">{row.k}</p>
                <p className="mt-1.5 font-mono text-sm font-medium">{row.v}</p>
              </div>
            ))}
          </aside>
        </div>
      </Section>

      {groups.map((group, gi) => (
        <Section key={group.domain} topBorder={gi === 0}>
          <SectionHeader
            eyebrow={`${group.docs.length} ${group.docs.length === 1 ? "document" : "documents"}`}
            title={group.domain}
            lede={DOMAIN_BLURB[group.domain]}
          />
          <div className="flex flex-col">
            {group.docs.map((doc) => (
              <Spotlight key={doc.id} className="border-b border-border">
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                  <Link
                    href={`/governance/${doc.id.toLowerCase()}`}
                    className="group flex flex-1 items-start gap-4"
                  >
                    <FileText
                      className="mt-0.5 hidden h-8 w-8 shrink-0 text-muted-foreground sm:block"
                      strokeWidth={1.25}
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {doc.id}
                        </span>
                        <h3 className="text-base font-semibold tracking-tight">
                          {doc.title}
                        </h3>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {doc.summary}
                      </p>
                      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground">
                        {doc.version ? <span>v{doc.version}</span> : null}
                        {doc.effectiveDate ? (
                          <span>Effective {doc.effectiveDate}</span>
                        ) : doc.lastUpdated ? (
                          <span>Updated {doc.lastUpdated}</span>
                        ) : null}
                        {doc.documentId ? <span>{doc.documentId}</span> : null}
                      </div>
                    </div>
                  </Link>

                  <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                    <Chip tone="green">{doc.status}</Chip>
                    <a
                      href={`/governance/${doc.id}.pdf`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Download className="h-3 w-3" />
                      PDF
                    </a>
                  </div>
                </div>
              </Spotlight>
            ))}
          </div>
        </Section>
      ))}

      <Section topBorder={false}>
        <DocRegisterTable />
        <div className="px-4 py-6 text-xs leading-relaxed text-muted-foreground sm:px-6">
          Pages and PDFs are generated from the source documents and regenerated
          whenever one is revised. {site.fiscalSponsor.statement}
        </div>
      </Section>
    </>
  );
}
