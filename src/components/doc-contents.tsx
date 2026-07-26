"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** A reading-progress hairline pinned under the header. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-16 z-40 h-[2px] origin-left bg-gh-blue-4"
      style={{ scaleX: reduce ? 1 : scaleX }}
    />
  );
}

/** Section rail that highlights whichever section is in view. */
export function DocContents({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string | null>(
    sections[0]?.id ?? null,
  );

  useEffect(() => {
    // The instance is reused across documents, so reset the highlight.
    setActive(sections[0]?.id ?? null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -65% 0px", threshold: 0 },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav aria-label="Document contents" className="p-6 lg:p-7">
      <p className="mono-label mb-4">Contents</p>
      <ul className="flex flex-col gap-0.5 border-l border-border">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={cn(
                "relative -ml-px block border-l py-1.5 pl-4 text-[13px] leading-snug transition-colors",
                active === s.id
                  ? "border-foreground font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:border-gh-gray-3 hover:text-foreground",
              )}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
