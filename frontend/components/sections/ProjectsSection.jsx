"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, memo, useCallback, useEffect, useRef, useState } from "react";
import { PROJECT_PLACEHOLDER, PROJECTS } from "@/lib/constants";
import { revealLeft, revealRight, viewport } from "@/lib/animations";
import Section from "@/components/ui/Section";
import MagneticButton from "@/components/ui/MagneticButton";
import CustomIcon from "@/components/ui/CustomIcon";

const CardSwap = dynamic(() => import("@/components/reactbits/CardSwap"), {
  ssr: false,
  loading: () => <div className="h-[420px] w-full max-w-[500px]" aria-hidden="true" />,
});

const ProjectCard = memo(
  forwardRef(function ProjectCard({ project, index, style, onClick }, ref) {
    const openFromKeyboard = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick?.();
      }
    };

    return (
      <div
        ref={ref}
        onClick={onClick}
        onKeyDown={openFromKeyboard}
        role="button"
        tabIndex={0}
        aria-label={`Open ${project.title} engineering dossier`}
        className="card-swap-card project-card project-folder"
        style={style}
      >
        <div className="project-card-inner project-card-surface" style={{ "--project-accent": project.accent }}>
          {project.images[0] && (
            <div className="project-shot relative mb-5 h-32 overflow-hidden rounded-lg border border-white/10 bg-black/30 md:h-36">
              <Image
                src={project.images[0]}
                alt={`${project.title} interface preview`}
                fill
                sizes="500px"
                className="object-cover"
              />
            </div>
          )}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">0{index + 1} / {project.category}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-white-pure md:text-3xl">{project.title}</h3>
            </div>
            <span className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white-muted">
              {project.status}
            </span>
          </div>
          <p className="mt-6 text-sm leading-7 text-silver">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-silver-dim">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <MagneticButton href="#contact" variant="secondary" className="h-10 px-4 text-[10px]">
              Discuss
            </MagneticButton>
            <MagneticButton href="#skills" variant="secondary" className="h-10 px-4 text-[10px]">
              Stack
            </MagneticButton>
          </div>
        </div>
      </div>
    );
  })
);

const CASE_STUDY_FIELDS = [
  ["Overview", "overview"],
  ["Tech Stack", "stack"],
  ["Architecture", "architecture"],
  ["Engineering Methods", "methods"],
  ["Software Engineering Concepts", "concepts"],
];

const ProjectCaseStudy = memo(function ProjectCaseStudy({ project, index }) {
  return (
    <motion.article variants={revealRight} className="project-case-study glass rounded-lg p-5 md:p-6">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">0{index + 1} / {project.category}</p>
          <h3 className="mt-3 text-2xl font-black leading-tight text-white-pure md:text-3xl">{project.title}</h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-cyan transition hover:text-white-pure"
            >
              Visit live platform
            </a>
          )}
        </div>
        <span className="w-fit rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white-muted">
          {project.status}
        </span>
      </div>

      {project.images.length > 0 ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {project.images.slice(0, 4).map((image, imageIndex) => (
            <div key={image} className="project-shot relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-black/30">
              <Image
                src={image}
                alt={`${project.title} screenshot ${imageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-lg border border-dashed border-white/15 bg-white/[0.035] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan">{PROJECT_PLACEHOLDER.title}</p>
          <p className="mt-2 text-sm leading-7 text-silver">{PROJECT_PLACEHOLDER.description}</p>
        </div>
      )}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {CASE_STUDY_FIELDS.map(([label, key]) => (
          <div key={label} className={label === "Architecture" || label === "Engineering Methods" || label === "Software Engineering Concepts" ? "md:col-span-2" : ""}>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan">{label}</p>
            {Array.isArray(project[key]) ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {project[key].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-silver">
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm leading-7 text-silver">{project[key]}</p>
            )}
          </div>
        ))}
      </div>
    </motion.article>
  );
});

const DOSSIER_SECTIONS = [
  ["Overview", "overview"],
  ["Architecture", "architecture"],
  ["Tech Stack", "stack"],
  ["Engineering Methods", "methods"],
  ["Challenges", "challenges"],
  ["Responsibilities", "responsibilities"],
  ["Future Roadmap", "roadmap"],
];

const ProjectDossierModal = memo(function ProjectDossierModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="project-dossier-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        onMouseDown={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dossier-title"
          className="project-dossier"
          initial={{ opacity: 0, scale: 0.94, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.96, y: 18, filter: "blur(10px)" }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="project-dossier-header">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">Engineering dossier / {project.category}</p>
              <h3 id="project-dossier-title" className="mt-3 text-3xl font-black leading-tight text-white-pure md:text-5xl">
                {project.title}
              </h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-cyan transition hover:text-white-pure">
                  Visit live platform
                </a>
              )}
            </div>
            <button ref={closeRef} type="button" onClick={onClose} className="project-dossier-close" aria-label="Close project dossier">
              <CustomIcon name="close" className="h-5 w-5" />
            </button>
          </div>

          <div className="project-dossier-body">
            <div className="project-dossier-main">
              {DOSSIER_SECTIONS.map(([label, key]) => (
                <section key={label} className="project-dossier-section">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">{label}</p>
                  {Array.isArray(project[key]) ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project[key].map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-silver">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-sm leading-7 text-silver">{project[key]}</p>
                  )}
                </section>
              ))}

              <section className="project-dossier-section">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">System Diagram</p>
                <div className="system-diagram mt-4">
                  {project.diagram.map((node, index) => (
                    <div key={node} className="system-diagram-node">
                      <span>{node}</span>
                      {index < project.diagram.length - 1 && <i aria-hidden="true" />}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="project-dossier-media">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">Screenshots</p>
              {project.images.length > 0 ? (
                <div className="mt-4 grid gap-3">
                  {project.images.slice(0, 6).map((image, index) => (
                    <div key={image} className="project-dossier-shot">
                      <Image
                        src={image}
                        alt={`${project.title} dossier screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 90vw, 420px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-lg border border-dashed border-white/15 bg-white/[0.035] p-4 text-sm leading-7 text-silver">
                  No matching screenshot asset has been provided for this project yet.
                </p>
              )}
            </aside>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

function ProjectsSection() {
  const hasProjects = PROJECTS.length > 0;
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = useCallback((project) => setSelectedProject(project), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeProject();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeProject, selectedProject]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Verified project case studies with synced screenshots and architecture notes."
      intro="Project content is sourced from public/project.txt. Screenshots are only attached when a matching folder exists in public/projectIMG."
      className="project-section"
    >
      <div className="grid items-center gap-12 xl:grid-cols-[0.82fr_1.18fr]">
        <motion.div variants={revealLeft} initial="hidden" whileInView="visible" viewport={viewport} className="relative z-20">
          <div className="glass-strong rounded-lg p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">Project architecture</p>
            <h3 className="mt-5 text-3xl font-black leading-tight text-white-pure md:text-4xl">Real systems, mapped to real project assets.</h3>
            <p className="mt-5 text-sm leading-7 text-silver">
              The current project set covers CRM workflow systems, a corporate platform, and a university AI chatbot with RAG-based knowledge retrieval.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {PROJECTS.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => openProject(project)}
                  className="project-folder-tile rounded-lg border border-white/8 bg-white/[0.05] p-4 text-left text-sm font-semibold text-silver"
                  aria-label={`Open ${project.folderLabel} engineering dossier`}
                >
                  {project.folderLabel}
                </button>
              ))}
              <div className="rounded-lg border border-white/8 bg-white/[0.05] p-4 text-sm text-silver">Synced screenshots</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={revealRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative z-10 min-h-[560px] overflow-visible py-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(0,212,255,0.16),transparent_38%)]" />
          <div className="relative mx-auto flex min-h-[500px] items-center justify-center">
            {hasProjects ? (
              <CardSwap
                width={500}
                height={460}
                cardDistance={70}
                verticalDistance={80}
                delay={4500}
                pauseOnHover
                skewAmount={4}
                easing="elastic"
                onCardClick={(index) => openProject(PROJECTS[index])}
              >
                {PROJECTS.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} onClick={() => openProject(project)} />
                ))}
              </CardSwap>
            ) : (
              <div className="project-card relative h-[420px] w-full max-w-[500px] rounded-lg">
                <div className="project-card-inner" style={{ "--project-accent": "#00d4ff" }}>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">Awaiting real project data</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight text-white-pure md:text-4xl">No fabricated project case studies.</h3>
                  <p className="mt-6 text-sm leading-7 text-silver">
                    This area is reserved for the project brief you will provide next, so the portfolio stays accurate to the real CV.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {PROJECT_PLACEHOLDER.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-silver">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {hasProjects && (
        <>
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">Engineering case studies</p>
            <h3 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white-pure md:text-4xl">
              Project evidence for CTOs, engineering managers, and technical recruiters.
            </h3>
          </motion.div>

          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-7 grid gap-4 lg:grid-cols-2"
          >
            {PROJECTS.map((project, index) => (
              <button
                key={`${project.title}-case-study`}
                type="button"
                onClick={() => openProject(project)}
                className="block text-left"
                aria-label={`Open ${project.title} engineering dossier`}
              >
                <ProjectCaseStudy project={project} index={index} />
              </button>
            ))}
          </motion.div>
        </>
      )}
      <ProjectDossierModal project={selectedProject} onClose={closeProject} />
    </Section>
  );
}

export default memo(ProjectsSection);
