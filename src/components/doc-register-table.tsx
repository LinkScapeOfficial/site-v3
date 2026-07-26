"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Lock } from "lucide-react";
import { docRegister, domains, type Access } from "@/content/doc-register";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib/utils";

/** The full register, published documents and internal ones alike. */
export default function DocRegisterTable() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Access | "all">("all");
  const reduce = useReducedMotion();

  const rows = docRegister.filter(
    (d) => filter === "all" || d.access === filter,
  );

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="row-hover flex w-full items-center justify-between gap-4 px-4 py-6 text-left sm:px-6"
      >
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            The complete register
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Every document we hold, across eight domains.
          </p>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
            }
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 border-t border-border px-4 py-4 sm:px-6">
              {(
                [
                  ["all", `All ${docRegister.length}`],
                  ["public", "Published"],
                  ["internal", "Internal"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs transition-colors",
                    filter === key
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="scroll-x border-t border-border">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead className="bg-muted">
                  <tr>
                    {["ID", "Document", "Domain", "Access"].map((h) => (
                      <th
                        key={h}
                        className="border-b border-border px-4 py-2.5 text-left font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((d) => (
                    <tr key={d.id} className="row-hover">
                      <td className="whitespace-nowrap border-b border-border px-4 py-2.5 font-mono text-xs text-muted-foreground">
                        {d.id}
                      </td>
                      <td className="border-b border-border px-4 py-2.5">
                        {d.access === "public" ? (
                          <Link
                            href={`/governance/${d.id.toLowerCase()}`}
                            className="font-medium underline decoration-border underline-offset-2 hover:decoration-foreground"
                          >
                            {d.title}
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">
                            {d.title}
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap border-b border-border px-4 py-2.5 text-xs text-muted-foreground">
                        {d.domain}
                      </td>
                      <td className="whitespace-nowrap border-b border-border px-4 py-2.5">
                        {d.access === "public" ? (
                          <Chip tone="green">Published</Chip>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Lock className="h-3 w-3" />
                            Internal
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="border-t border-border px-4 py-5 text-xs leading-relaxed text-muted-foreground sm:px-6">
              Internal documents cover security controls, financial procedure,
              HR, and operating templates. Ask us about any of them at
              founding@linkscape.app.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

