import { cn } from "@/lib/utils";
import BlurFadeStagger from "@/components/animations/blur-fade-stagger";
import GridField from "@/components/animations/grid-field";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  size?: "default" | "tall";
  className?: string;
}

/** The dashed lattice hero shared by every page. */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
  size = "default",
  className,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <GridField />
      <div className="hero-shine pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24" />
      <div className="linkscape-wrapper relative">
        <div
          className={cn(
            "lattice-dashed flex flex-col gap-4 px-4",
            size === "tall" ? "pb-24 pt-52 sm:pt-72" : "pb-16 pt-32",
            className,
          )}
        >
          <BlurFadeStagger initialDelay={0.08}>
            {eyebrow ? <p className="mono-label">{eyebrow}</p> : null}
            <h1 className="heading-gradient w-full text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
            {lede ? (
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {lede}
              </p>
            ) : null}
            {children}
          </BlurFadeStagger>
        </div>
      </div>
    </section>
  );
}
