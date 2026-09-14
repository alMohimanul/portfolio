"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";
import { GradientText } from "@/components/ui/GradientText";

const ROLES = [
  "AI/ML Engineer",
  "LLM Agent Builder",
  "Forward Deployed Engineer",
  "Computer Vision Researcher",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.14),_transparent_70%)] blur-3xl" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] opacity-70"
      >
        {profile.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold sm:text-6xl"
      >
        Hi, I&apos;m <GradientText>{profile.name}</GradientText>
      </motion.h1>

      <RotatingRoles />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl opacity-80"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Link href="/projects" className="gradient-border-glow glass-card rounded-full px-6 py-3 text-sm font-semibold">
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:border-[var(--color-border-strong)]"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}

function RotatingRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-8 text-lg font-medium opacity-90" data-testid="rotating-roles">
      <AnimatePresence mode="wait">
        <motion.div
          key={ROLES[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {ROLES[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
