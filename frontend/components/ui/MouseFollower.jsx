"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import usePerformanceProfile from "@/lib/usePerformanceProfile";

function MouseFollower() {
  const { isCoarsePointer, isLowEnd, prefersReducedMotion } = usePerformanceProfile();
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.25 });
  const y = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.25 });
  const rafRef = useRef(0);
  const latestRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (isCoarsePointer || isLowEnd || prefersReducedMotion) return undefined;

    const move = (event) => {
      latestRef.current = { x: event.clientX - 160, y: event.clientY - 160 };
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        mouseX.set(latestRef.current.x);
        mouseY.set(latestRef.current.y);
        setVisible(true);
        rafRef.current = 0;
      });
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave, { passive: true });
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [isCoarsePointer, isLowEnd, mouseX, mouseY, prefersReducedMotion]);

  if (isCoarsePointer || isLowEnd || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.18),rgba(74,158,255,0.06)_38%,transparent_70%)] blur-2xl md:block"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    />
  );
}

export default memo(MouseFollower);
