import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CircleArrowRight } from "lucide-react";
import { MarkGithubIcon } from "@primer/octicons-react";

import PageHero from "@/components/layout/page-hero";
import { Section, SectionHeader, LatticeSpacer } from "@/components/layout/section";
import { LatticeGrid, LatticeCell } from "@/components/layout/lattice";
import StatCell, { type Stat } from "@/components/stat-cell";
import WorkCard from "@/components/work-card";
import PartnerMarquee from "@/components/partner-marquee";
import Spotlight from "@/components/animations/spotlight";
import BlurFade from "@/components/animations/blur-fade";
import { Button } from "@/components/ui/button";
import { site, pillars } from "@/content/site";
import { featured } from "@/content/work";
import { byTier } from "@/content/team";

const stats: Stat[] = [
  {
    value: 80,
    prefix: "×",
    label: "NVIDIA H100 GPUs",
    note: "Members train on the same class of hardware as a corporate lab.",
  },
  {
    value: 14,
    label: "Public repositories",
    note: "Everything we have shipped, free to read and reuse.",
  },
  {
    value: 9,
    label: "People on the team",
    note: "Three officers, three members, three fellows.",
  },
  {
    label: "Students reached",
    note: "We publish this once our program records are verified.",
  },
];

export default function Home() {
  const leadership = byTier("leadership");

  return (
    <>
      <PageHero
        size="tall"
        eyebrow="Youth-led · open source · AI"
        title={site.tagline}
        lede="We give high-school and university students an 80-GPU cluster, a real research problem, and someone to review their code. Everything they build ships open source."
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            asChild
            className="h-12 rounded-full px-6 shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl active:scale-95 active:shadow-sm"
          >
            <Link href="/work">
              Explore our work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-border bg-background px-6 shadow-sm transition-all hover:scale-[1.03] active:scale-95"
          >
            <Link href="/join">Join us</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-12 rounded-full px-5 text-muted-foreground hover:text-foreground"
          >
            <Link href={site.social.github}>
              <MarkGithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </PageHero>
      <Section>
        <div className="-mb-px -mr-px grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCell key={s.label} stat={s} />
          ))}
        </div>
      </Section>
      <Section topBorder={false}>
        <SectionHeader
          eyebrow="How the work is organized"
          title="Three pillars"
          lede="Every program serves at least one. The best ones serve all three."
        />
        <LatticeGrid cols={3}>
          {pillars.map((p, i) => (
            <Spotlight key={p.key} className="border-b border-r border-border">
              <div className="flex h-full flex-col p-7">
                <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
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
          eyebrow="Selected work"
          title="What we have built"
          lede="Two research projects, two tools people use daily, and the hackathon where most of us met."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/work">
                See everything
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          }
        />
        <div className="-mb-px -mr-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 6).map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <LatticeSpacer />
      <Section topBorder={false}>
        <div className="relative grid grid-cols-1 items-stretch lg:grid-cols-5">
          <div className="border-b border-border p-8 sm:p-12 lg:col-span-3 lg:border-b-0 lg:border-r">
            <BlurFade inView>
              <p className="mono-label">What makes it credible</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Eighty H100s, pointed at students
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  A training run that would take three weeks on a laptop
                  finishes here overnight. That single fact decides which ideas
                  a student can actually test, and it is why our members
                  co-author papers instead of reading them.
                </p>
                <p>
                  Access is tiered and every job is logged. The CTO signs off on
                  allocations under our compute policy, so a first-year member
                  and a research lead get different quotas and both know why.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/join">
                    Get access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="rounded-full">
                  <Link href="/work/cnm-bert">See what came out of it</Link>
                </Button>
              </div>
            </BlurFade>
          </div>

          <div className="flex flex-col justify-center gap-px bg-border lg:col-span-2">
            {[
              { k: "Cluster", v: "80× NVIDIA H100" },
              { k: "Access", v: "Tiered, logged, CTO-approved" },
              { k: "Cost to members", v: "Nothing" },
              { k: "Output licence", v: "Open source" },
            ].map((row) => (
              <div
                key={row.k}
                className="surface row-hover flex items-baseline justify-between px-8 py-5 sm:px-12"
              >
                <span className="mono-label">{row.k}</span>
                <span className="text-right text-sm font-medium tracking-tight">
                  {row.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section topBorder>
        <SectionHeader
          eyebrow="Who runs it"
          title="Meet the team"
          lede="Three officers run LinkScape. Each publishes their own address and answers it."
        />
        <LatticeGrid cols={3}>
          {leadership.map((person) => (
            <Spotlight key={person.name} className="border-b border-r border-border">
              <div className="flex h-full flex-col items-start gap-4 p-7">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-xl bg-muted object-cover"
                />
                <div>
                  <p className="font-semibold tracking-tight">{person.name}</p>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {person.remit}
                </p>
              </div>
            </Spotlight>
          ))}
        </LatticeGrid>
        <Link
          href="/team"
          className="row-hover group flex items-center justify-center gap-2 py-8"
        >
          <span className="text-base tracking-tight text-muted-foreground">
            Meet the members and fellows
          </span>
          <CircleArrowRight
            className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>
      </Section>
      <Section topBorder={false}>
        <SectionHeader
          eyebrow="Who we work with"
          title="Partners"
          lede="They fund the venues, the compute, and the events."
        />
        <div className="border-b border-border">
          <PartnerMarquee />
        </div>
      </Section>
      <Section topBorder={false}>
        <div className="flex flex-col gap-6 border-b border-border p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="flex items-center gap-5">
            <Image
              src="https://assets.hackclub.com/flag-orpheus-left.svg"
              alt="Hack Club"
              width={140}
              height={42}
              className="h-9 w-auto"
            />
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Backed by Hack Club
              </p>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Your donation is tax-deductible and Hack Club issues the
                receipt. {site.fiscalSponsor.statement}
              </p>
            </div>
          </div>
          <Button asChild className="shrink-0 rounded-full">
            <Link href="/donate">
              Support the work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
