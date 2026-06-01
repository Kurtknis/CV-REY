"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { EXPERIENCE } from "@/lib/constants";
import { revealUp, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";

function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Timeline"
      title="A practical path through fullstack products, AI systems, and digital architecture."
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan/45 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <motion.article
              key={item.company}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className={`relative grid gap-5 pl-12 md:grid-cols-2 md:pl-0 ${index % 2 ? "" : "md:text-right"}`}
            >
              <div className={`timeline-node absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border border-cyan bg-obsidian shadow-[0_0_30px_rgba(0,212,255,0.65)] md:left-1/2`} />
              <div className={index % 2 ? "md:col-start-2 md:pl-12" : "md:pr-12"}>
                <div className="glass rounded-lg p-6 transition duration-300 hover:border-cyan/35 hover:bg-white/[0.06]">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">{item.period}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white-pure">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-silver">{item.company}</p>
                  <p className="mt-5 text-sm leading-7 text-silver">{item.description}</p>
                  <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 ? "" : "md:justify-end"}`}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-silver">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default memo(ExperienceSection);
