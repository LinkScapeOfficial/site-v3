import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";

import PageHero from "@/components/layout/page-hero";
import { Section, SectionHeader } from "@/components/layout/section";
import { LatticeGrid } from "@/components/layout/lattice";
import Spotlight from "@/components/animations/spotlight";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "How to join LinkScape as a member, contribute to our open-source work, come to an event, or partner with us.",
};

const paths = [
  {
    title: "Become a member",
    who: "Students who finish what they start",
    body: "You get cluster access, a project that matters, code review, and a vote on what we take on next. Tell us about something you built and what broke. That beats a resume.",
    action: { label: "Write to us", href: `mailto:${site.email.general}` },
  },
  {
    title: "Contribute to the code",
    who: "Anyone, member or not",
    body: "Our repositories are open. Pick up an issue, send a pull request, or file a bug we missed. Contributors who stay usually become members.",
    action: { label: "Browse our repositories", href: site.social.github },
  },
  {
    title: "Come to an event",
    who: "Middle and high school students",
    body: "Our hackathons are built for people who have never shipped anything. Arrive Saturday with nothing, demo something that runs on Sunday, leave with people you keep building with.",
    action: { label: "See SH Hacks", href: "https://www.shhacks.com/" },
  },
  {
    title: "Partner with us",
    who: "Companies, nonprofits, and schools",
    body: "Offer a venue, compute, mentors, or funding and we will run a program with it. We assess every partnership against our published framework.",
    action: { label: "Read the framework", href: "/governance/i-06" },
  },
];

const expectations = [
  {
    k: "Time",
    v: "A few hours a week, agreed with you up front. School comes first. Tell us early when a term gets heavy and we will reassign the work.",
  },
  {
    k: "Conduct",
    v: "Everyone agrees to the Code of Conduct. Some members are minors, so the standard is high and we enforce it.",
  },
  {
    k: "Openness",
    v: "Your work ships open source under your own name. Keeping something closed requires a written reason.",
  },
  {
    k: "Honesty",
    v: "Report what your experiment actually did. A failed run written up clearly is worth more than a vague success.",
  },
];

export default function Join() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Join us"
        lede="Four ways in. Three of them start today, without asking us first."
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-11 rounded-full px-6">
            <Link href={site.social.discord}>
              <SiDiscord className="mr-2 h-4 w-4" />
              Join the Discord
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-full border-border bg-background px-6"
          >
            <Link href={`mailto:${site.email.general}`}>
              <Mail className="mr-2 h-4 w-4" />
              {site.email.general}
            </Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Four routes"
          title="How people usually arrive"
          lede="Most members arrived through more than one of these."
        />
        <LatticeGrid cols={2}>
          {paths.map((p) => (
            <Spotlight key={p.title} className="border-b border-r border-border">
              <div className="flex h-full flex-col p-7">
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mono-label mt-2">{p.who}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <Link
                  href={p.action.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  {p.action.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Spotlight>
          ))}
        </LatticeGrid>
      </Section>

      <Section topBorder={false}>
        <SectionHeader
          eyebrow="Before you write to us"
          title="What we ask, and what we promise"
          lede="Four things, agreed up front."
        />
        <div className="flex flex-col">
          {expectations.map((e) => (
            <div
              key={e.k}
              className="row-hover grid grid-cols-1 gap-2 border-b border-border px-4 py-6 sm:grid-cols-12 sm:gap-6 sm:px-6"
            >
              <div className="sm:col-span-3">
                <p className="mono-label">{e.k}</p>
              </div>
              <p className="text-sm leading-relaxed text-foreground/85 sm:col-span-9">
                {e.v}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section topBorder={false}>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {[
            {
              href: "/governance/pp-01",
              label: "Code of Conduct",
              body: "What everyone agrees to.",
            },
            {
              href: "/governance/pp-12",
              label: "Time commitment",
              body: "The hours we ask for, in writing.",
            },
            {
              href: "/governance/e-06",
              label: "Contributing",
              body: "Licensing, attribution, and how we accept pull requests.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="row-hover group border-b border-r border-border p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold tracking-tight">{c.label}</p>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section topBorder={false}>
        <div className="flex flex-col gap-5 border-b border-border p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Read the code first
            </h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Fourteen public repositories. The fastest way to decide whether you
              want to be here.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 rounded-full">
            <Link href={site.social.github}>
              <SiGithub className="mr-2 h-4 w-4" />
              LinkScapeOfficial
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
