import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

/**
 * Bordered cells rather than floating cards. Trailing rules are clipped by the
 * parent, which keeps the grid flush at any column count.
 */
export function LatticeGrid({
  cols = 3,
  children,
  className,
}: {
  cols?: 2 | 3 | 4 | 5;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "-mb-px -mr-px grid grid-cols-1 overflow-hidden",
        COLS[cols],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function LatticeCell({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border-b border-r border-border p-6",
        interactive && "row-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
