"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { EXPERTISE } from "@/lib/constants";
import { revealUp, stagger, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";
import CustomIcon from "@/components/ui/CustomIcon";

function ExpertiseSection() {
  return (
    <Section
      id="expertise"
      eyebrow="Capabilities"
      title="Frontend, backend, databases, APIs, SEO, and system design inside one engineering practice."
      intro="Each capability comes from the real CV: React and Next.js frontend work, PHP OOP and Flask backend integration, database design, technical SEO, and digital marketing strategy."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {EXPERTISE.map((item) => (
          <motion.article
            key={item.title}
            variants={revealUp}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            className="expertise-card group relative min-h-64 overflow-hidden rounded-lg border border-white/8 bg-white/[0.05] p-6 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="h-full w-full bg-[radial-gradient(circle_at_35%_20%,rgba(0,212,255,0.18),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />
            </div>
            <div className="relative z-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                <CustomIcon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-8 text-2xl font-bold leading-tight text-white-pure">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-silver">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export default memo(ExpertiseSection);
