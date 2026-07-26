"use client";

import { motion, useReducedMotion } from "framer-motion";

/** The ruled paper behind a hero. */
export default function GridField({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`grid-field pointer-events-none absolute inset-0 ${className ?? ""}`}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={
        reduce ? { duration: 0 } : { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
      }
    />
  );
}
