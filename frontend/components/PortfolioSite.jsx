"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";
import { memo, useEffect, useState } from "react";
import AboutSection from "./sections/AboutSection";
import BusinessSection from "./sections/BusinessSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import ExpertiseSection from "./sections/ExpertiseSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import LoadingScreen from "./ui/LoadingScreen";
import Navbar from "./ui/Navbar";

const MouseFollower = dynamic(() => import("./ui/MouseFollower"), {
  ssr: false,
});

function PortfolioSite() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 1150);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <LoadingScreen done={loaded} />
      <MouseFollower />
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-cyan" style={{ scaleX: progress }} />
      <Navbar />
      <main className="noise-overlay relative min-h-screen overflow-hidden bg-obsidian">
        <div className="global-lighting" aria-hidden="true" />
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <BusinessSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default memo(PortfolioSite);
