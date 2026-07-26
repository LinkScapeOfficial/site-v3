import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const TONES = {
  neutral: "border-border bg-muted/60 text-muted-foreground",
  blue: "border-gh-blue-2/70 bg-gh-blue-0/70 text-gh-blue-6 dark:border-gh-blue-6 dark:bg-gh-blue-5/15 dark:text-gh-blue-2",
  green:
    "border-gh-green-2/70 bg-gh-green-0/70 text-gh-green-6 dark:border-gh-green-6 dark:bg-gh-green-5/15 dark:text-gh-green-2",
  purple:
    "border-gh-purple-2/70 bg-gh-purple-0/70 text-gh-purple-6 dark:border-gh-purple-6 dark:bg-gh-purple-5/15 dark:text-gh-purple-2",
  amber:
    "border-gh-yellow-2/70 bg-gh-yellow-0/70 text-gh-yellow-6 dark:border-gh-yellow-6 dark:bg-gh-yellow-5/15 dark:text-gh-yellow-1",
} as const;

export type ChipTone = keyof typeof TONES;

export function Chip({
  children,
  tone = "neutral",
  mono = false,
  className,
}: {
  children: ReactNode;
  tone?: ChipTone;
  mono?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium leading-5",
        mono && "font-mono text-[11px] tracking-tight",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
