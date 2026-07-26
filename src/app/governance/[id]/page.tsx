import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

import PageHero from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import DocBody from "@/components/doc-body";
import { DocContents, ReadingProgress } from "@/components/doc-contents";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { allDocs, getDoc } from "@/lib/governance";
import { site } from "@/content/site";

export function generateStaticParams() {
  return allDocs().map((d) => ({ id: d.id.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const doc = getDoc(id);
  if (!doc) return { title: "Not found" };
  return {
    title: `${doc.title} (${doc.id})`,
    description: doc.summary,
  };
}

export default async function GovernanceDoc({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doc = getDoc(id);
  if (!doc) notFound();

  const docs = allDocs();
  const index = docs.findIndex((d) => d.id === doc.id);
  const prev = docs[index - 1];
  const next = docs[index + 1];

  const meta = [
    { k: "Deliverable", v: doc.id },
    { k: "Document ID", v: doc.documentId },
    { k: "Version", v: doc.version },
    { k: "Effective", v: doc.effectiveDate },
    { k: "Last updated", v: doc.lastUpdated },
    { k: "Owner", v: doc.owner },
    { k: "Review cycle", v: doc.reviewCycle },
  ].filter((r) => r.v);

  return (
    <>
      <ReadingProgress />

      <PageHero eyebrow={`${doc.domain} · ${doc.id}`} title={doc.title} lede={doc.summary}>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Chip tone="green">{doc.status}</Chip>
          {doc.version ? (
            <Chip tone="neutral" mono>
              v{doc.version}
            </Chip>
          ) : null}
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <a href={`/governance/${doc.id}.pdf`}>
              <Download className="mr-2 h-3.5 w-3.5" />
              Download PDF
            </a>
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Contents rail */}
          <aside className="order-first border-b border-border lg:order-last lg:border-b-0 lg:border-l">
            <div className="lg:sticky lg:top-20">
              <DocContents sections={doc.sections} />
            </div>
          </aside>

          {/* Document */}
          <article className="lg:col-span-3">
            {/* -mr-px clips the trailing rule on every row, which `last:` can
                only do for the final cell. */}
            <dl className="-mr-px grid grid-cols-2 overflow-hidden border-b border-border sm:grid-cols-3">
              {meta.map((row) => (
                <div
                  key={row.k}
                  className="border-b border-r border-border px-5 py-3.5"
                >
                  <dt className="mono-label">{row.k}</dt>
                  <dd className="mt-1 font-mono text-[13px] font-medium">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="p-6 sm:p-9">
              <DocBody content={doc.content} />

              <div className="mt-14 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
                <p>{site.fiscalSponsor.statement}</p>
                <p className="mt-2">
                  This page and the PDF are both generated from the source
                  document in LinkScape&apos;s organizational pack. Cover
                  furniture and approval blocks are omitted here; the text of
                  the policy is reproduced in full.
                </p>
              </div>
            </div>
          </article>
        </div>
      </Section>

      <Section topBorder={false}>
        <div className="flex items-center justify-between border-b border-border px-4 py-5">
          <Link
            href="/governance"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All documents
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/governance/${prev.id.toLowerCase()}`}
              className="row-hover border-b border-r border-border p-6"
            >
              <p className="mono-label">Previous · {prev.id}</p>
              <p className="mt-1.5 font-medium tracking-tight">{prev.title}</p>
            </Link>
          ) : (
            <div className="border-b border-r border-border" />
          )}
          {next ? (
            <Link
              href={`/governance/${next.id.toLowerCase()}`}
              className="row-hover border-b border-border p-6 sm:text-right"
            >
              <p className="mono-label">Next · {next.id}</p>
              <p className="mt-1.5 flex items-center gap-2 font-medium tracking-tight sm:justify-end">
                {next.title}
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </p>
            </Link>
          ) : (
            <div className="border-b border-border" />
          )}
        </div>
      </Section>
    </>
  );
}
