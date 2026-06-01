export const viewport = {
  once: true,
  amount: 0.22,
  margin: "-80px",
};

export const easeOutExpo = [0.16, 1, 0.3, 1];

export const revealUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const revealLeft = {
  hidden: { opacity: 0, x: -48, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const revealRight = {
  hidden: { opacity: 0, x: 48, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};
