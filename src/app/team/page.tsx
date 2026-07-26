import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { MarkGithubIcon } from "@primer/octicons-react";

import PageHero from "@/components/layout/page-hero";
import { Section, SectionHeader } from "@/components/layout/section";
import Spotlight from "@/components/animations/spotlight";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { people, tiers, byTier } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The officers, members, and fellows behind LinkScape, and what each is accountable for.",
};

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow={`${people.length} people`}
        title="Team"
        lede="Three officers, three members, three fellows. Every officer publishes their own address."
      />

      {tiers.map((tier, ti) => {
        const group = byTier(tier.key);
        const isLeadership = tier.key === "leadership";

        return (
          <Section key={tier.key} topBorder={ti === 0}>
            <SectionHeader
              eyebrow={`${group.length} ${group.length === 1 ? "person" : "people"}`}
              title={tier.title}
              lede={tier.blurb}
            />

            <div
              className={
                isLeadership
                  ? "flex flex-col"
                  : "-mb-px -mr-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }
            >
              {group.map((person) =>
                isLeadership ? (
                  <Spotlight
                    key={person.name}
                    className="border-b border-border"
                  >
                    <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
                      <Image
                        src={person.imageUrl}
                        alt={person.name}
                        width={120}
                        height={120}
                        className="h-20 w-20 shrink-0 rounded-xl bg-muted object-cover sm:h-24 sm:w-24"
                      />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                            {person.name}
                          </h3>
                          {person.term ? (
                            <Chip tone="neutral" mono>
                              {person.term}
                            </Chip>
                          ) : null}
                        </div>
                        <p className="mt-1 text-base tracking-tight text-muted-foreground">
                          {person.role}
                        </p>
                        {person.remit ? (
                          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
                            {person.remit}
                          </p>
                        ) : null}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {person.email ? (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="rounded-full"
                            >
                              <Link href={`mailto:${person.email}`}>
                                <Mail className="mr-2 h-3.5 w-3.5" />
                                {person.email}
                              </Link>
                            </Button>
                          ) : null}
                          {person.github ? (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="rounded-full"
                            >
                              <Link href={person.github}>
                                <MarkGithubIcon className="mr-2 h-3.5 w-3.5" />
                                {person.github.replace(
                                  "https://github.com/",
                                  "",
                                )}
                              </Link>
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Spotlight>
                ) : (
                  <Spotlight
                    key={person.name}
                    className="border-b border-r border-border"
                  >
                    <div className="flex h-full flex-col items-start gap-4 p-6">
                      <Image
                        src={person.imageUrl}
                        alt={person.name}
                        width={96}
                        height={96}
                        className="h-16 w-16 rounded-xl bg-muted object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold tracking-tight">
                          {person.name}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {person.role}
                        </p>
                      </div>
                      {person.github ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="rounded-full"
                        >
                          <Link href={person.github}>
                            <MarkGithubIcon className="mr-2 h-3.5 w-3.5" />
                            {person.github.replace("https://github.com/", "")}
                          </Link>
                        </Button>
                      ) : null}
                    </div>
                  </Spotlight>
                ),
              )}
            </div>
          </Section>
        );
      })}

      <Section topBorder={false}>
        <div className="flex flex-col gap-5 border-b border-border p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Want to be on this page?
            </h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We take students who finish what they start. Write to{" "}
              <Link
                href={`mailto:${site.email.general}`}
                className="underline underline-offset-2"
              >
                {site.email.general}
              </Link>
              .
            </p>
          </div>
          <Button asChild className="shrink-0 rounded-full">
            <Link href="/join">How to join</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
