"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import CustomIcon from "./CustomIcon";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const lastScrollRef = useRef(0);
  const rafRef = useRef(0);
  const sections = useMemo(() => ["hero", ...NAV_LINKS.map((link) => link.href.slice(1))], []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        const latest = window.scrollY;
        const previous = lastScrollRef.current;
        setHidden(latest > previous && latest > 220);
        lastScrollRef.current = latest;
        rafRef.current = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observers = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(element.id);
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
        );
        observer.observe(element);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigate = useCallback((href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 top-4 z-50 px-4"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-obsidian/75 px-3 py-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:justify-center md:gap-3">
          <button
            type="button"
            onClick={() => navigate("#about")}
            className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-white-pure"
            aria-label="Go to about section"
          >
            About Me
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => navigate(link.href)}
                  aria-current={active === id ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                    active === id ? "text-obsidian" : "text-silver-dim hover:text-white-pure"
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white-pure"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white-pure md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            <CustomIcon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-obsidian/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigate(link.href)}
                aria-current={active === link.href.slice(1) ? "page" : undefined}
                className="block min-h-12 w-full rounded-xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.1em] text-silver transition hover:bg-white/5 hover:text-white-pure focus-visible:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(Navbar);
