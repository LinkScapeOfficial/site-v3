import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import RevealLine from "@/components/animations/reveal-line";

interface SectionProps {
  children: ReactNode;
  className?: string;
  topBorder?: boolean;
  id?: string;
}

/** A ruled band of the lattice. */
export function Section({
  children,
  className,
  topBorder = true,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "surface relative",
        topBorder && "border-t border-border",
        className,
      )}
    >
      <div className="linkscape-wrapper">
        <div className="lattice flex flex-col">{children}</div>
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 border-b border-border px-4 py-12 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        {eyebrow ? <p className="mono-label mb-3">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {lede ? (
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {lede}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
      <RevealLine />
    </div>
  );
}

export function LatticeSpacer({ className }: { className?: string }) {
  return (
    <div className="surface linkscape-wrapper">
      <div
        className={cn(
          "diagonal-hatch h-12 border-x border-b border-border",
          className,
        )}
      />
    </div>
  );
}
