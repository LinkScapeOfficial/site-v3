"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Stat {
  /** Omit when the figure is not yet substantiated. */
  value?: number;
  /** Rendered before the number, e.g. the multiplication sign on the GPU count. */
  prefix?: string;
  suffix?: string;
  label: string;
  note?: string;
}

/** A ruled cell holding one figure. Without a `value` it renders a placeholder. */
export default function StatCell({
  stat,
  className,
}: {
  stat: Stat;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  // Start at the real figure so it survives without JS; the count-up is decoration.
  const [display, setDisplay] = useState(stat.value ?? 0);

  useEffect(() => {
    if (stat.value === undefined || !inView || reduce) return;
    const controls = animate(0, stat.value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, stat.value]);

  const pending = stat.value === undefined;

  return (
    <div
      ref={ref}
      className={cn(
        "row-hover group relative border-b border-r border-border px-6 py-8",
        className,
      )}
    >
      <div className="flex items-baseline gap-0.5 font-mono text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
        {pending ? (
          <span className="font-mono text-base font-normal text-muted-foreground/70">
            Not yet reported
          </span>
        ) : (
          <>
            {stat.prefix ? (
              <span className="text-xl text-muted-foreground sm:text-2xl">
                {stat.prefix}
              </span>
            ) : null}
            {/* Fixed locale so server and client agree on separators. */}
            <span>{display.toLocaleString("en-US")}</span>
            {stat.suffix ? (
              <span className="text-xl text-muted-foreground sm:text-2xl">
                {stat.suffix}
              </span>
            ) : null}
          </>
        )}
      </div>
      <p className="mt-2 text-sm font-medium tracking-tight">{stat.label}</p>
      {stat.note ? (
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {stat.note}
        </p>
      ) : null}
    </div>
  );
}
