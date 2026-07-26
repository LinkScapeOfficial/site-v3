"use client";

import { motion, useReducedMotion } from "framer-motion";

/** A hairline that sweeps once when a section header enters the viewport. */
export default function RevealLine() {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className="absolute bottom-[-1px] left-0 right-0 h-px origin-left bg-gradient-to-r from-gh-blue-4/70 via-gh-blue-3/30 to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduce ? { duration: 0 } : { duration: 1, ease: [0.16, 1, 0.3, 1] }
      }
    />
  );
}
