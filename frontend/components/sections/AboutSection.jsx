"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";
import { PERSONAL, STATS } from "@/lib/constants";
import { revealLeft, revealRight, revealUp, stagger, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";

function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="A fullstack engineer focused on applied AI and scalable product systems.">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          <div className="portrait-frame relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(0,212,255,0.04))] p-4">
            <div className="relative h-full overflow-hidden rounded-lg bg-[radial-gradient(circle_at_50%_28%,rgba(184,216,255,0.2),transparent_30%),linear-gradient(160deg,rgba(10,10,15,0.3),rgba(5,5,9,0.92))]">
              <Image
                src="/media/profile.png"
                alt="Muhammad Raihan Akbar"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(5,5,9,0.82))]" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">Fullstack Engineer</p>
                <p className="mt-2 text-sm leading-6 text-white-muted">ERD, web systems, databases, APIs, SEO, and AI integration.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-4 rounded-lg border border-cyan/20" />
            <div className="pointer-events-none absolute left-8 right-8 top-8 h-px bg-cyan/35" />
            <div className="pointer-events-none absolute bottom-8 left-8 right-8 h-px bg-white/20" />
          </div>
        </motion.div>

        <motion.div variants={revealRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="text-lg leading-9 text-silver md:text-xl">{PERSONAL.bio}</p>
          <p className="mt-6 text-base leading-8 text-silver">
            {PERSONAL.principle} Current work and academic practice include React and Next.js frontend engineering, PostgreSQL and Prisma data modeling, Supabase and MySQL workflows, PHP OOP backend development, Flask middleware, OpenRouter API integration, REST APIs, technical SEO, and mobile-first optimization.
          </p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={revealUp} className="glass rounded-lg p-5">
                <p className="text-4xl font-black text-white-pure">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-silver">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

export default memo(AboutSection);
