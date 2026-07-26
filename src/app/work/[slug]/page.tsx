import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, AlertTriangle } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import PageHero from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/animations/blur-fade";
import Figure from "@/components/figure";
import { work, bySlug, pillarLabels } from "@/content/work";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = bySlug(slug);
  if (!item) return { title: "Not found" };
  return { title: item.name, description: item.summary };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = bySlug(slug);
  if (!item) notFound();

  const others = work.filter((w) => w.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={item.type} title={item.name} lede={item.summary}>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Chip tone="neutral" mono>
            {item.year}
          </Chip>
          <Chip
            tone={item.status === "Under review" ? "amber" : "green"}
          >
            {item.status}
          </Chip>
          {item.pillars.map((p) => (
            <Chip key={p} tone="blue">
              {pillarLabels[p]}
            </Chip>
          ))}
        </div>

        {item.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {item.links.map((l, i) => (
              <Button
                key={l.href}
                asChild
                variant={i === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                <Link href={l.href}>
                  {l.kind === "repo" ? (
                    <SiGithub className="mr-2 h-4 w-4" />
                  ) : null}
                  {l.label}
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            ))}
          </div>
        ) : null}
      </PageHero>

      {item.notice ? (
        <Section>
          <div className="flex items-start gap-3 border-b border-border bg-gh-yellow-0/50 px-4 py-5 dark:bg-gh-yellow-5/10 sm:px-6">
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-gh-yellow-5"
              strokeWidth={2}
            />
            <p className="text-sm leading-relaxed text-foreground/85">
              {item.notice}
            </p>
          </div>
        </Section>
      ) : null}

      <Section topBorder={!item.notice}>
        <div className="grid grid-cols-1 lg:grid-cols-7">
          {/* Narrative */}
          <div className="border-b border-border p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
            {item.figures?.[0] ? (
              <BlurFade inView>
                <Figure figure={item.figures[0]} priority />
              </BlurFade>
            ) : null}

            <div className="space-y-5 text-[15.5px] leading-[1.75] text-foreground/85">
              {item.body.map((p, i) => (
                <BlurFade key={i} inView delay={i * 0.04}>
                  <p>{p}</p>
                </BlurFade>
              ))}
            </div>

            {item.figures && item.figures.length > 1 ? (
              <div className="mt-2">
                {item.figures.slice(1).map((f) => (
                  <BlurFade key={f.src} inView>
                    <Figure figure={f} />
                  </BlurFade>
                ))}
              </div>
            ) : null}

            {item.results ? (
              <BlurFade inView>
                <div className="mt-12">
                  <p className="mono-label mb-3">Results</p>
                  <h2 className="mb-4 text-lg font-semibold tracking-tight">
                    {item.results.caption}
                  </h2>
                  <div className="scroll-x -mx-2 px-2">
                    <table className="w-full min-w-[420px] border-collapse text-sm">
                      <thead>
                        <tr>
                          {item.results.columns.map((c) => (
                            <th
                              key={c}
                              className="border border-border bg-muted px-3 py-2 text-left font-semibold"
                            >
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {item.results.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className={
                              ri === item.results!.rows.length - 1
                                ? "font-semibold"
                                : ""
                            }
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`border border-border px-3 py-2 ${
                                  ci > 0 ? "font-mono tabular-nums" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {item.results.footnote ? (
                    <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                      {item.results.footnote}
                    </p>
                  ) : null}
                </div>
              </BlurFade>
            ) : null}

            {item.credit ? (
              <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
                {item.credit}
              </p>
            ) : null}
          </div>

          {/* Facts rail */}
          <aside className="flex flex-col lg:col-span-2">
            {item.facts?.map((f) => (
              <div key={f.label} className="border-b border-border px-6 py-5">
                <p className="mono-label">{f.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed">{f.value}</p>
              </div>
            ))}
            {item.stack.length > 0 ? (
              <div className="border-b border-border px-6 py-5">
                <p className="mono-label mb-3">Built with</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>

      {/* Onward */}
      <Section topBorder={false}>
        <div className="flex items-center justify-between border-b border-border px-4 py-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>
        </div>
        <div className="-mb-px -mr-px grid grid-cols-1 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/work/${o.slug}`}
              className="row-hover border-b border-r border-border p-6"
            >
              <p className="mono-label">{o.type}</p>
              <p className="mt-2 font-semibold tracking-tight">{o.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {o.tagline}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
