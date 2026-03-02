"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = [
  "Software Engineer",
  "Physicist",
  "Mathematician",
  "Educator",
  "Dog Trainer",
  "Entrepreneur",
];

const HOLD_MS = 3000;

export function RoleCycler() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ROLES.length),
      HOLD_MS
    );
    return () => clearInterval(id);
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <span className="text-accent">{ROLES.join(", ")}</span>
    );
  }

  return (
    <span className="relative inline-block overflow-hidden h-[1.2em] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          className="inline-block text-accent"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
