import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist.",
};

const elsewhere = [
  { href: "/work", label: "Work", body: "Two research projects, two tools, one hackathon." },
  { href: "/about", label: "About", body: "What LinkScape is and who runs it." },
  { href: "/governance", label: "Governance", body: "Our policies, published in full." },
  { href: "/join", label: "Join", body: "Four ways in." },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Nothing here"
        lede="This page moved when we reorganized the site. Try one of these."
      />
      <Section>
        <div className="-mr-px grid grid-cols-1 sm:grid-cols-2">
          {elsewhere.map((c) => (
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
