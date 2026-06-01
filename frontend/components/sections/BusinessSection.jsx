"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { FOCUS_AREAS } from "@/lib/constants";
import { revealUp, stagger, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";

function BusinessSection() {
  return (
    <Section
      id="business"
      eyebrow="Current Focus"
      title="Full-stack execution from ERD modeling to production-ready web systems."
      intro="Current CV focus: web application development, database design, Flask and OpenRouter API integration, technical SEO, mobile-first optimization, and business-aware digital strategy."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-4 lg:grid-cols-4"
      >
        {FOCUS_AREAS.map((service, index) => (
          <motion.article
            variants={revealUp}
            key={service.title}
            className="glass business-card relative min-h-64 rounded-lg p-6"
          >
            <p className="font-mono text-xs text-cyan">0{index + 1}</p>
            <h3 className="mt-8 text-2xl font-bold leading-tight text-white-pure">{service.title}</h3>
            <p className="mt-5 text-sm leading-7 text-silver">{service.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export default memo(BusinessSection);
