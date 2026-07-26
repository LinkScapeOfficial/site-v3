import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import PageHero from "@/components/layout/page-hero";
import { Section, SectionHeader } from "@/components/layout/section";
import { LatticeGrid } from "@/components/layout/lattice";
import Spotlight from "@/components/animations/spotlight";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support LinkScape. Donations are tax-deductible and processed by Hack Club Bank, our fiscal sponsor.",
};

const uses = [
  {
    title: "Events",
    body: "Venue, food, and materials for hackathons and workshops, so a student can attend for close to nothing.",
  },
  {
    title: "Compute and tooling",
    body: "The cluster time and subscriptions that let a member run an experiment their laptop cannot finish.",
  },
  {
    title: "Research and release",
    body: "Datasets, evaluation runs, and the work of turning a prototype into something other people can install.",
  },
];

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Support the work"
        title="Donate"
        lede="Your donation puts a student in front of hardware they could never afford. Tax-deductible, receipted by Hack Club."
      />

      <Section>
        <SectionHeader
          eyebrow="Where it goes"
          title="What your money actually pays for"
          lede="Nobody here draws a salary. All of it goes to programs."
        />
        <LatticeGrid cols={3}>
          {uses.map((u) => (
            <Spotlight key={u.title} className="border-b border-r border-border">
              <div className="flex h-full flex-col p-7">
                <h3 className="text-base font-semibold tracking-tight">
                  {u.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {u.body}
                </p>
              </div>
            </Spotlight>
          ))}
        </LatticeGrid>
      </Section>

      <Section topBorder={false}>
        <div className="flex flex-col gap-5 border-b border-border p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          <Image
            src="https://assets.hackclub.com/flag-orpheus-left.svg"
            alt="Hack Club"
            width={140}
            height={42}
            className="h-9 w-auto shrink-0"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold tracking-tight">
              How the money is handled
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Your gift is tax-deductible under Hack Club&apos;s 501(c)(3)
              status and Hack Club Bank sends the receipt.{" "}
              {site.fiscalSponsor.statement}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <Link
                href="/governance/g-06"
                className="inline-flex items-center gap-1 underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Sponsorship summary
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/governance/f-04"
                className="inline-flex items-center gap-1 underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Fundraising guidelines
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section topBorder={false}>
        <div className="border-b border-border">
          <iframe
            src={site.fiscalSponsor.donate}
            title="Donate to LinkScape through Hack Club Bank"
            name="donateFrame"
            height="780"
            width="100%"
            loading="lazy"
            allowFullScreen
            className="w-full border-0"
          />
        </div>
        <p className="px-4 py-5 text-xs leading-relaxed text-muted-foreground sm:px-6">
          The form above is hosted by Hack Club Bank. If it does not load, you
          can donate directly at{" "}
          <Link
            href={site.fiscalSponsor.donate}
            className="underline underline-offset-2"
          >
            hcb.hackclub.com
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
