"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { ENGINEERING_DECK, SKILLS } from "@/lib/constants";
import { revealUp, stagger, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";

function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Systems Stack"
      title="The engineering deck: frontend, backend, databases, AI systems, and production foundations."
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="orbital-system relative mx-auto aspect-square w-full max-w-lg rounded-full border border-white/10"
        >
          <div className="orbital-ring orbital-ring-outer absolute inset-8 rounded-full border border-cyan/20" />
          <div className="orbital-ring orbital-ring-inner absolute inset-20 rounded-full border border-white/10" />
          <div className="orbital-core absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan/30 bg-obsidian/80 text-center shadow-[0_0_70px_rgba(0,212,255,0.18)]">
            <span className="text-4xl font-black text-white-pure">MRA</span>
          </div>
          {SKILLS.slice(0, 10).map((skill, index) => {
            const angle = (index / 10) * Math.PI * 2;
            const x = (50 + Math.cos(angle) * 39).toFixed(3);
            const y = (50 + Math.sin(angle) * 39).toFixed(3);
            return (
              <motion.span
                key={skill}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
                title={skill}
                className="skill-orbit-token absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-medium text-silver backdrop-blur-xl"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {skill}
              </motion.span>
            );
          })}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-3"
        >
          {ENGINEERING_DECK.map((group) => (
            <motion.article key={group.category} variants={revealUp} className="rounded-lg border border-white/8 bg-white/[0.05] p-5 backdrop-blur-xl">
              <h3 className="text-xl font-black text-white-pure">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-silver">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export default memo(SkillsSection);
