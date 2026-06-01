"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { memo, useCallback } from "react";
import CustomIcon from "./CustomIcon";
import usePerformanceProfile from "@/lib/usePerformanceProfile";

function MagneticButton({
  children,
  href,
  icon = "arrow",
  variant = "primary",
  download,
  className = "",
}) {
  const { isCoarsePointer, prefersReducedMotion } = usePerformanceProfile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });
  const glowX = useTransform(springX, [-30, 30], ["20%", "80%"]);
  const glowY = useTransform(springY, [-20, 20], ["20%", "80%"]);

  const handleMove = useCallback((event) => {
    if (isCoarsePointer || prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  }, [isCoarsePointer, prefersReducedMotion, x, y]);

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const classes =
    variant === "primary"
      ? "border-cyan/45 bg-white-pure text-black shadow-[0_12px_40px_rgba(0,212,255,0.18)] hover:bg-white"
      : "border-white/12 bg-white/[0.055] text-white-pure backdrop-blur-xl hover:border-cyan/40 hover:bg-white/[0.08]";
  const contentClasses = variant === "primary" ? "text-black" : "text-white-pure";

  return (
    <motion.a
      href={href}
      download={download}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, "--glow-x": glowX, "--glow-y": glowY }}
      whileTap={{ scale: 0.98 }}
      className={`magnetic-button group relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full border px-6 py-3 text-sm font-bold leading-none transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:text-base ${classes} ${className}`}
    >
      <span className="button-glow" />
      <span className="button-reflection" />
      <span className={`relative z-10 ${contentClasses}`}>{children}</span>
      <CustomIcon
        name={icon}
        className={`relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${contentClasses}`}
      />
    </motion.a>
  );
}

export default memo(MagneticButton);
