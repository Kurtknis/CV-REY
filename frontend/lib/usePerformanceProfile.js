"use client";

import { useEffect, useState } from "react";

const initialProfile = {
  isMobile: false,
  isTablet: false,
  isCoarsePointer: false,
  isLowEnd: false,
  prefersReducedMotion: false,
  animationScale: 1,
};

function getProfile() {
  const mobile = window.matchMedia("(max-width: 767px)");
  const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
  const coarse = window.matchMedia("(pointer: coarse)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const cores = navigator.hardwareConcurrency || 8;
  const memory = navigator.deviceMemory || 8;
  const isLowEnd = cores <= 4 || memory <= 4;
  const isMobile = mobile.matches;
  const isTablet = tablet.matches;
  const prefersReducedMotion = reduced.matches;

  return {
    isMobile,
    isTablet,
    isCoarsePointer: coarse.matches,
    isLowEnd,
    prefersReducedMotion,
    animationScale: prefersReducedMotion || isLowEnd ? 0 : isMobile ? 0.4 : isTablet ? 0.7 : 1,
  };
}

export default function usePerformanceProfile() {
  const [profile, setProfile] = useState(initialProfile);

  useEffect(() => {
    const update = () => setProfile(getProfile());
    const queries = [
      window.matchMedia("(max-width: 767px)"),
      window.matchMedia("(min-width: 768px) and (max-width: 1023px)"),
      window.matchMedia("(pointer: coarse)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ];

    update();
    queries.forEach((query) => query.addEventListener("change", update));
    return () => queries.forEach((query) => query.removeEventListener("change", update));
  }, []);

  return profile;
}
