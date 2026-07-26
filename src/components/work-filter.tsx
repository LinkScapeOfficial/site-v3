"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import WorkCard from "@/components/work-card";
import { work, workTypes, type WorkType } from "@/content/work";
import { cn } from "@/lib/utils";

export default function WorkFilter() {
  const [active, setActive] = useState<WorkType | "all">("all");
  const reduce = useReducedMotion();

  const shown = active === "all" ? work : work.filter((w) => w.type === active);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-5">
        <LayoutGroup id="work-filter">
          {workTypes.map((t) => {
            const count =
              t.key === "all"
                ? work.length
                : work.filter((w) => w.type === t.key).length;
            const on = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                aria-pressed={on}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                  on
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {on ? (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 34 }
                    }
                  />
                ) : null}
                <span className="relative z-10">
                  {t.label}
                  <span
                    className={cn(
                      "ml-1.5 font-mono text-[11px]",
                      on ? "opacity-70" : "opacity-60",
                    )}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>

      <motion.div
        layout
        className="-mb-px -mr-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((item) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
              }
              className="flex"
            >
              <WorkCard item={item} className="w-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
