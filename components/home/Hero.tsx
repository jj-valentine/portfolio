"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Circle } from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/Button";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const STATS = [
  { num: "12+", label: "years engineering" },
  { num: "8+", label: "years dog training" },
  { num: "20+", label: "years teaching" },
  { num: "250+", label: "dogs trained" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const content = (
    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Eyebrow pill */}
      <motion.div
        custom={0}
        variants={fadeUpVariants}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1 mb-8"
      >
        <Circle size={8} className="fill-blue-500/80 text-blue-500/80" />
        <span className="text-sm text-white/60">Seattle · Software · Dogs</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        custom={1}
        variants={fadeUpVariants}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
      >
        James Valentine
      </motion.h1>

      {/* GooeyText roles */}
      <motion.div
        custom={2}
        variants={fadeUpVariants}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        className="h-[70px] md:h-[90px] relative w-full mt-4"
      >
        <GooeyText
          texts={[
            "Software Engineer",
            "Physicist",
            "Mathematician",
            "Educator",
            "Dog Trainer",
            "Entrepreneur",
          ]}
          morphTime={1}
          cooldownTime={0.25}
          textClassName="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
          className="w-full h-full"
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        custom={3}
        variants={fadeUpVariants}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        className="mt-6 text-base sm:text-lg text-white/40 font-light tracking-wide max-w-xl mx-auto"
      >
        Building products at the intersection of software, science, and applied
        learning. Based in Seattle.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        custom={4}
        variants={fadeUpVariants}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        className="mt-8 flex gap-3 justify-center flex-wrap"
      >
        <Button
          href="/projects"
          className="hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]"
        >
          View my work
        </Button>
        <Button variant="secondary" href="/contact">
          Get in touch
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        custom={5}
        variants={fadeUpVariants}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        className="mt-12 flex items-center justify-center gap-6 md:gap-10 flex-wrap pt-2"
      >
        {STATS.map((stat, i) => (
          <>
            {i > 0 && (
              <span
                key={`divider-${i}`}
                className="hidden md:block w-px h-6 bg-border"
              />
            )}
            <motion.div
              key={stat.num}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.12 }}
              className="flex flex-col items-center"
            >
              <span className="text-fg font-semibold text-xl">{stat.num}</span>
              <span className="text-muted text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </motion.div>
          </>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99,102,241,0.03) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(244,63,94,0.03) 0%, transparent 60%)",
        }}
      />

      {/* ElegantShape orbs */}
      <ElegantShape
        className="absolute left-[-5%] top-[20%]"
        width={600}
        height={140}
        rotate={12}
        gradient="from-indigo-500/[0.15]"
        delay={0.3}
      />
      <ElegantShape
        className="absolute right-[0%] top-[75%]"
        width={500}
        height={120}
        rotate={-15}
        gradient="from-rose-500/[0.15]"
        delay={0.5}
      />
      <ElegantShape
        className="absolute left-[10%] bottom-[10%]"
        width={300}
        height={80}
        rotate={-8}
        gradient="from-violet-500/[0.15]"
        delay={0.4}
      />
      <ElegantShape
        className="absolute right-[20%] top-[15%]"
        width={200}
        height={60}
        rotate={20}
        gradient="from-amber-500/[0.15]"
        delay={0.6}
      />
      <ElegantShape
        className="absolute left-[25%] top-[10%]"
        width={150}
        height={40}
        rotate={-25}
        gradient="from-cyan-500/[0.15]"
        delay={0.7}
      />

      {content}

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg, #070707))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
