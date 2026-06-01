"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";
import { revealLeft, revealRight, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";
import CustomIcon from "@/components/ui/CustomIcon";

function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Contact for full-stack web development, database-backed systems, API work, SEO, or AI integration."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={revealLeft} initial="hidden" whileInView="visible" viewport={viewport} className="glass-strong rounded-lg p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">Contact routes</p>
          <h3 className="mt-5 text-3xl font-black leading-tight text-white-pure md:text-4xl">Reach Muhammad Raihan Akbar.</h3>
          <p className="mt-5 text-sm leading-7 text-silver">
            Based in {PERSONAL.location}. Main CV focus: full-stack web development, database design, Flask and OpenRouter API integration, REST APIs, technical SEO, and mobile-first optimization.
          </p>
          <div className="mt-8 grid gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.05] px-4 py-4 text-sm text-silver transition hover:border-cyan/35 hover:text-white-pure"
              >
                {link.platform}
                <CustomIcon name="arrow" className="h-4 w-4 text-cyan transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form variants={revealRight} initial="hidden" whileInView="visible" viewport={viewport} className="glass rounded-lg p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@domain.com" />
            </label>
          </div>
          <label className="contact-field mt-4">
            <span>Subject</span>
            <input type="text" name="subject" placeholder="Project, advisory, or collaboration" />
          </label>
          <label className="contact-field mt-4">
            <span>Message</span>
            <textarea name="message" rows="6" placeholder="Tell me what we are building." />
          </label>
          <button
            type="button"
            className="group mt-5 inline-flex h-12 items-center justify-center gap-3 rounded-full border border-cyan/35 bg-cyan px-6 text-sm font-bold uppercase tracking-[0.16em] text-obsidian transition hover:bg-white-pure"
          >
            Send Signal
            <CustomIcon name="send" className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

export default memo(ContactSection);
