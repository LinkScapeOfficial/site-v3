"use client";

import * as React from "react";
import { ThemeProvider as NextThemes, useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemes
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemes>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-muted"
    >
      {/* Rendered only after mount: the server cannot know the stored theme,
          and guessing produces a hydration mismatch. */}
      {mounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={dark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {dark ? (
              <Moon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            ) : (
              <Sun className="h-[18px] w-[18px]" strokeWidth={1.75} />
            )}
          </motion.span>
        </AnimatePresence>
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
