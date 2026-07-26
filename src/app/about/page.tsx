import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import PageHero from "@/components/layout/page-hero";
import {
  Section,
  SectionHeader,
  LatticeSpacer,
} from "@/components/layout/section";
import { LatticeGrid } from "@/components/layout/lattice";
import Spotlight from "@/components/animations/spotlight";
import BlurFade from "@/components/animations/blur-fade";
import { Button } from "@/components/ui/button";
import { site, pillars, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "LinkScape is a youth-led open-source and AI nonprofit, fiscally sponsored by Hack Club. This is what we do and how we are put together.",
};

const milestones = [
  {
    date: "December 2022",
    title: "LinkScape is founded",
    body: "Thomas Wu starts the organization around a simple premise: students should be building real things, in the open, together.",
  },
  {
    date: "2023",
    title: "The first public repositories",
    body: "The earliest work goes up on GitHub, including the first version of this site. The habit of releasing by default takes hold well before any policy tells us to.",
  },
  {
    date: "March 2025",
    title: "SH Hacks",
    body: "A weekend hackathon for middle and high school students in Shanghai, run alongside AdventureX and Spark Lab.",
  },
  {
    date: "2025",
    title: "LinkDown and Ollmao",
    body: "Two pieces of software people outside the organization actually use, one for saving video and one for running AI models locally on a Mac.",
  },
  {
    date: "February 2026",
    title: "The first governance documents",
    body: "Mission, vision and values, the fiscal sponsorship summary, and the first leadership roster. The organization starts writing down how it intends to behave.",
  },
  {
    date: "July 2026",
    title: "A CTO, and the full pack",
    body: "Zigao Wang is appointed CTO and takes ownership of the H100 fleet and platform security. The documentation reaches seventy-seven deliverables spanning governance, finance, ethics, security, people, and impact.",
  },
];

const facts = [
  { k: "Founded", v: site.founded },
  { k: "Structure", v: "Fiscally sponsored project" },
  { k: "Fiscal sponsor", v: "Hack Club, 501(c)(3)" },
  { k: "Team", v: "Three officers, three members, three fellows" },
  { k: "Compute", v: "80× NVIDIA H100" },
  { k: "Release default", v: "Open source" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={`Founded ${site.founded}`}
        title="About"
        lede="A youth-led AI nonprofit, run by students, backed by Hack Club, and governed by documents you can read on this site."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="border-b border-border p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
            <BlurFade inView>
              <p className="mono-label">Why we exist</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Talent is everywhere. Compute is not.
              </h2>
              <div className="mt-6 space-y-5 text-[15.5px] leading-[1.75] text-foreground/85">
                <p>
                  Plenty of teenagers could do serious AI work. Almost none of
                  them can finish a training run on a school laptop, and almost
                  none have a researcher who will read their code and say what
                  is wrong with it.
                </p>
                <p>
                  LinkScape supplies both. Members get an 80-GPU cluster, a
                  problem worth a month of their time, and review from people a
                  few years ahead of them. The work that comes out goes to peer
                  review and onto GitHub under an open licence.
                </p>
                <p>
                  Ten of us run this, split between universities and high
                  schools. We are the people doing the work and the people it
                  aims to reach, which keeps the programs honest about what
                  actually helps.
                </p>
                <p>
                  Every figure on this site comes from a record we can produce.
                  We state our research at the stage it has reached, and we
                  publish the misses alongside the wins.
                </p>
              </div>
            </BlurFade>
          </div>

          <aside className="flex flex-col">
            {facts.map((row) => (
              <div key={row.k} className="border-b border-border px-8 py-5">
                <p className="mono-label">{row.k}</p>
                <p className="mt-1.5 text-sm font-medium tracking-tight">
                  {row.v}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </Section>

      <Section topBorder={false}>
        <SectionHeader
          eyebrow="Mission"
          title="Three pillars"
          lede="Build in the open, train the next people, keep the room going."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/governance/g-01">
                Read the full statement
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          }
        />
        <LatticeGrid cols={3}>
          {pillars.map((p, i) => (
            <Spotlight key={p.key} className="border-b border-r border-border">
              <div className="flex h-full flex-col p-7">
                <span className="mono-label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-relaxed">
                  {p.line}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Spotlight>
          ))}
        </LatticeGrid>
      </Section>

      <Section topBorder={false}>
        <SectionHeader
          eyebrow="Values"
          title="Five commitments, not five adjectives"
          lede="Each one commits us to a specific behaviour. They exist to settle arguments."
        />
        <div className="flex flex-col">
          {values.map((v, i) => (
            <div
              key={v.name}
              className="row-hover grid grid-cols-1 gap-4 border-b border-border px-4 py-7 sm:grid-cols-12 sm:gap-6 sm:px-6"
            >
              <div className="sm:col-span-1">
                <span className="mono-label">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="sm:col-span-4">
                <h3 className="text-base font-semibold tracking-tight">
                  {v.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {v.line}
                </p>
              </div>
              <div className="sm:col-span-7">
                <p className="text-sm leading-relaxed text-foreground/80">
                  {v.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <LatticeSpacer />

      <Section topBorder={false}>
        <SectionHeader eyebrow="History" title="How we got here" />
        <ol className="flex flex-col">
          {milestones.map((m) => (
            <li
              key={m.title}
              className="row-hover grid grid-cols-1 gap-2 border-b border-border px-4 py-7 sm:grid-cols-12 sm:gap-6 sm:px-6"
            >
              <div className="sm:col-span-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {m.date}
                </span>
              </div>
              <div className="sm:col-span-9">
                <h3 className="text-base font-semibold tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section topBorder={false}>
        <SectionHeader
          eyebrow="Structure"
          title="How LinkScape is legally constituted"
          lede="The exact arrangement, in plain terms."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-border p-8 lg:border-r">
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/85">
              <p>
                LinkScape operates as a fiscally sponsored project of The Hack
                Foundation, doing business as Hack Club, a 501(c)(3) nonprofit.
                Hack Club holds the charitable status. Every donation, grant, and
                expense moves through Hack Club Bank.
              </p>
              <p>
                For a donor this is straightforward: your gift is tax-deductible
                and Hack Club issues the receipt. For us it means their approval
                process governs our spending and their auditors review our books,
                and our time goes into programs instead of corporate paperwork.
              </p>
              <p>
                LinkScape itself is a program, not a separately incorporated
                charity. We say so plainly wherever the distinction matters.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-7 rounded-full">
              <Link href="/governance/g-06">
                Read the sponsorship summary
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col">
            {[
              { k: "Charitable status held by", v: "Hack Club, 501(c)(3)" },
              { k: "Receipts issued by", v: "Hack Club Bank" },
              { k: "Audited by", v: "Hack Club, alongside its other programs" },
              { k: "LinkScape's legal form", v: "A sponsored program" },
            ].map((row) => (
              <div key={row.k} className="border-b border-border px-8 py-5">
                <p className="mono-label">{row.k}</p>
                <p className="mt-1.5 text-sm leading-relaxed">{row.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section topBorder={false}>
        <div className="-mr-px grid grid-cols-1 sm:grid-cols-3">
          {[
            {
              href: "/governance",
              label: "Governance",
              body: "Seventy-seven documents listed, twenty-two published in full.",
            },
            {
              href: "/work",
              label: "Work",
              body: "Two research projects, two tools, one hackathon.",
            },
            {
              href: "/join",
              label: "Join",
              body: "What membership involves and how to start.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="row-hover group border-b border-r border-border p-7"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold tracking-tight">{c.label}</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
