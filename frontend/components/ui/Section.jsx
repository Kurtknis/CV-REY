"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { revealUp, viewport } from "@/lib/animations";

function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`section-padding relative overflow-hidden ${className}`}>
      <div className="container-max relative z-10">
        {(eyebrow || title || intro) && (
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-12 max-w-3xl md:mb-16"
          >
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {intro && <p className="mt-5 text-base leading-8 text-silver-dim md:text-lg">{intro}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export default memo(Section);
