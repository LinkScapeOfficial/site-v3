import type { Metadata } from "next";
import PageHero from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import WorkFilter from "@/components/work-filter";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Research, software, and events from LinkScape, a youth-led open-source and AI nonprofit.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow={`${work.length} projects`}
        title="Work"
        lede="Two research projects, two tools, one hackathon."
      />
      <Section>
        <h2 className="sr-only">All work</h2>
        <WorkFilter />
      </Section>
    </>
  );
}
