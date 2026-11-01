'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  ExternalLink,
  GitFork,
  X,
  Workflow,
  CheckCircle2,
  FolderGit2,
} from 'lucide-react';
import { PROJECTS, type Project, type ProjectCategory } from '@/data/portfolioData';
import TechIcon from '@/components/ui/TechIcon';

const FILTER_TABS: { label: string; value: ProjectCategory | 'all'; count: number }[] = [
  { label: 'All Projects', value: 'all', count: 6 },
  { label: 'AI & Machine Learning', value: 'genai', count: 3 },
  { label: 'Full-Stack Apps', value: 'fullstack', count: 3 },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-24 select-none overflow-hidden">
      {/* Seamless Atmospheric Theme Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/themes/female-v-cyberpunk-3840x2160-13542.jpg"
          alt="Atmospheric theme background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-luminosity brightness-70 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1013] via-[#0e1013]/80 to-[#0e1013]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0e1013_85%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-yellow-400/30 text-xs font-mono text-yellow-300 mb-2.5 shadow-sm">
              <FolderGit2 size={13} className="text-yellow-400" />
              <span>// FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
              Full-stack web applications, AI integrations, and developer tools built with Next.js, Node.js, and modern databases.
            </p>
          </motion.div>

          {/* Filter Pills in Grey & Yellow */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-white/10 self-start md:self-auto">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === tab.value
                    ? 'bg-yellow-400 text-black font-bold shadow-md shadow-yellow-500/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE BENTO GRID WITH CONTAINER ANIMATIONS         */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative rounded-2xl bg-zinc-900/80 hover:bg-zinc-900/95 border border-white/10 hover:border-yellow-400/50 p-4 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-yellow-500/5 hover:-translate-y-1.5"
              >
                {/* Yellow Accent Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-400/20 transform rotate-45 translate-x-2 -translate-y-2 group-hover:bg-yellow-400/50 transition-colors" />
                </div>

                <div>
                  {/* Clean Browser Viewport */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-950 mb-3.5">
                    {/* Mac Window Controls */}
                    <div className="absolute top-2 left-2.5 flex items-center gap-1.5 z-10 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-2 right-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-950/90 border border-white/15 text-yellow-300 font-semibold">
                      {project.category === 'genai' ? 'AI • RAG' : 'FULL-STACK'}
                    </div>

                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Colorful Tech Stack Chips & Action Buttons */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-col gap-3">
                  {/* Tech stack pills with colorful icons */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.08]"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500 bg-white/[0.02]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-zinc-400 hover:text-yellow-400 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Workflow size={13} className="text-yellow-400" />
                      <span>Architecture</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                          title="View GitHub Code"
                        >
                          <GitFork size={13} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-black transition-all shadow-sm"
                        >
                          <span>Live</span>
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SYSTEM ARCHITECTURE BLUEPRINT MODAL                      */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(14,16,19,0.94)', backdropFilter: 'blur(16px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-yellow-400/30 p-5 sm:p-7 shadow-2xl flex flex-col gap-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="font-mono text-xs text-yellow-400 uppercase tracking-wider font-semibold">
                    {selectedProject.title} // SYSTEM ARCHITECTURE
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Title & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-yellow-300 mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-black transition-all shadow-md"
                    >
                      <span>Launch App</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-white transition-all"
                    >
                      <GitFork size={12} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Inset Screenshot */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-md">
                <Image
                  src={selectedProject.screenshots[0]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 768px"
                />
              </div>

              {/* Pipeline Nodes & Dataflow */}
              <div className="rounded-xl p-4 sm:p-5 bg-zinc-900 border border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 font-semibold">
                  <Workflow size={14} />
                  <span>ARCHITECTURE & DATA FLOW</span>
                </div>
                <div className="font-semibold text-white text-sm">
                  {selectedProject.architecture.pattern}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                  {selectedProject.architecture.nodes.map((node, i) => (
                    <div
                      key={node}
                      className="p-2.5 rounded-lg bg-zinc-950 border border-white/[0.08] flex flex-col"
                    >
                      <span className="font-mono text-[9px] text-yellow-400/90 font-bold">
                        LAYER 0{i + 1}
                      </span>
                      <span className="text-xs text-zinc-200 font-medium">{node}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-zinc-950 border border-yellow-400/30 text-xs font-mono text-yellow-200 leading-relaxed">
                  <span className="font-bold text-yellow-400">DATA FLOW: </span>
                  {selectedProject.architecture.dataFlow}
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-yellow-400" />
                  Key Engineering Impacts:
                </span>
                <div className="flex flex-col gap-2">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-300 leading-relaxed"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
