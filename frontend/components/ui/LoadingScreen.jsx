"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";

function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-obsidian"
        >
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.05),transparent_36%,rgba(0,212,255,0.09)_70%,transparent)]" />
          <motion.div
            initial={{ y: 24, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            className="relative text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-cyan">Initializing digital headquarters</p>
            <h1 className="mt-5 font-heading text-6xl text-white-pure md:text-8xl">MRA</h1>
            <div className="mx-auto mt-6 h-px w-64 overflow-hidden bg-white/10">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.25, ease: "easeInOut" }}
                className="block h-full w-1/2 bg-cyan"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(LoadingScreen);
