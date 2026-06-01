"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { CERTIFICATIONS } from "@/lib/constants";
import { revealUp, stagger, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";

function CertificationsSection() {
  return (
    <Section id="certifications" eyebrow="Academic History" title="Information Systems study with project-based system design and web development practice.">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-4 md:grid-cols-2"
      >
        {CERTIFICATIONS.map((cert) => (
          <motion.article key={cert.name} variants={revealUp} className="glass rounded-lg p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold leading-tight text-white-pure">{cert.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-cyan">{cert.issuer}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-silver">
                {cert.date}
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-silver">{cert.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export default memo(CertificationsSection);
