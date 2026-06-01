"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { HERO_BADGES, PERSONAL } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import usePerformanceProfile from "@/lib/usePerformanceProfile";

const FaultyTerminal = dynamic(() => import("@/components/reactbits/FaultyTerminal"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,212,255,0.08),transparent_40%,rgba(255,255,255,0.04))]" />,
});

const TYPING_PHRASES = [
  "designing ERD-backed web systems",
  "shipping React and Next.js applications",
  "building Flask middleware with LLM APIs",
  "implementing technical SEO and mobile-first optimization",
];

const terminalGrid = [3, 2];
const easeOut = [0.16, 1, 0.3, 1];

const TypingLine = memo(function TypingLine() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[index];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && text.length < phrase.length) setText(phrase.slice(0, text.length + 1));
        else if (!deleting) setDeleting(true);
        else if (text.length > 0) setText(phrase.slice(0, text.length - 1));
        else {
          setDeleting(false);
          setIndex((value) => (value + 1) % TYPING_PHRASES.length);
        }
      },
      deleting ? 28 : 54
    );
    return () => window.clearTimeout(timeout);
  }, [deleting, index, text]);

  return (
    <p className="mt-5 min-h-7 font-mono text-sm uppercase tracking-[0.12em] text-cyan md:text-base">
      {text}
      <span className="animate-typing-cursor">_</span>
    </p>
  );
});

function HeroSection() {
  const { animationScale, isCoarsePointer, isMobile, prefersReducedMotion } = usePerformanceProfile();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(my, { stiffness: 60, damping: 20 });
  const shapeX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const shapeY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);
  const panelX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const panelY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rafRef = useRef(0);

  const handleMove = useCallback((event) => {
    if (isCoarsePointer || isMobile || prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - rect.left) / rect.width - 0.5;
    const nextY = (event.clientY - rect.top) / rect.height - 0.5;
    if (rafRef.current) return;

    rafRef.current = window.requestAnimationFrame(() => {
      mx.set(nextX);
      my.set(nextY);
      rafRef.current = 0;
    });
  }, [isCoarsePointer, isMobile, mx, my, prefersReducedMotion]);

  useEffect(() => () => {
    if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
  }, []);

  const entrance = prefersReducedMotion
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 44 * animationScale, filter: `blur(${18 * animationScale}px)` };
  const asideEntrance = prefersReducedMotion
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 36 * animationScale, filter: `blur(${16 * animationScale}px)` };

  return (
    <section
      id="hero"
      onMouseMove={handleMove}
      className="relative min-h-screen overflow-hidden bg-obsidian px-5 pb-14 pt-28 md:px-8 md:pt-32"
    >
      <div className="absolute inset-0 z-0 opacity-55">
        <FaultyTerminal
          scale={1.8}
          gridMul={terminalGrid}
          digitSize={1.1}
          timeScale={0.35}
          scanlineIntensity={0.4}
          glitchAmount={1.2}
          flickerAmount={0.4}
          noiseAmp={0.8}
          chromaticAberration={0.3}
          curvature={0.15}
          tint="#b8d8ff"
          mouseReact={!isMobile}
          mouseStrength={0.18}
          pageLoadAnimation
          brightness={0.65}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_20%_12%,rgba(0,212,255,0.14),transparent_34%),linear-gradient(180deg,rgba(5,5,9,0.22),rgba(5,5,9,0.96)_84%)]" />
      <div className="circuit-overlay absolute inset-0 z-[2]" />

      <motion.div
        style={{ x: shapeX, y: shapeY }}
        className="pointer-events-none absolute right-[8%] top-[18%] z-[3] hidden h-40 w-40 rotate-45 border border-cyan/30 md:block"
      />
      <motion.div
        style={{ x: panelX, y: panelY }}
        className="pointer-events-none absolute bottom-[20%] left-[5%] z-[3] hidden h-28 w-28 rounded-[2rem] border border-white/15 bg-white/[0.02] md:block"
      />

      <div className="container-max relative z-10 grid min-h-[calc(100vh-9rem)] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={entrance}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 * Math.max(animationScale, 0.4), ease: easeOut, delay: 0.15 }}
        >
          <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-silver backdrop-blur-xl">
            Fullstack Engineer / UPJ Information Systems
          </p>
          <h1 className="max-w-5xl text-[clamp(3.4rem,9vw,8rem)] font-black leading-[0.95] text-white-pure">
            Muhammad
            <span className="block gradient-text">Raihan Akbar</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-white-muted md:text-2xl">{PERSONAL.title}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-silver md:text-lg">{PERSONAL.tagline}</p>
          <TypingLine />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagneticButton href="#projects" className="w-full sm:w-auto">View Projects</MagneticButton>
            <MagneticButton href="/Muhammad-Raihan-Akbar-CV.txt" download icon="download" variant="secondary" className="w-full sm:w-auto">
              Download CV
            </MagneticButton>
            <MagneticButton href="#contact" icon="send" variant="secondary" className="w-full sm:w-auto">
              Contact Me
            </MagneticButton>
          </div>
        </motion.div>

        <motion.aside
          style={{ x: panelX, y: panelY }}
          initial={asideEntrance}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95 * Math.max(animationScale, 0.4), ease: easeOut, delay: 0.35 }}
          className="glass-strong relative overflow-hidden rounded-lg p-5 md:p-7"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">Profile Snapshot</p>
          <div className="mt-6 grid gap-3">
            {HERO_BADGES.map((item, itemIndex) => (
              <motion.div
                key={item}
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 * animationScale }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + itemIndex * 0.08, duration: 0.6 * Math.max(animationScale, 0.4) }}
                className="group flex items-center gap-4 rounded-lg border border-white/8 bg-white/[0.05] p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan/25 bg-cyan/10 font-mono text-xs text-cyan">
                  0{itemIndex + 1}
                </span>
                <span className="text-sm font-medium leading-6 text-white-muted">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default memo(HeroSection);
