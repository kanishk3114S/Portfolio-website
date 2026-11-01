'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Cpu,
  Database,
  Terminal,
  Cloud,
  Workflow,
  ArrowRight,
} from 'lucide-react';
import { SKILLS_ARSENAL, type SkillItem } from '@/data/portfolioData';
import TechIcon from '@/components/ui/TechIcon';

const CATEGORIES: { label: string; value: SkillItem['category'] | 'all'; icon: any }[] = [
  { label: 'All Skills', value: 'all', icon: Sparkles },
  { label: 'Languages', value: 'languages', icon: Terminal },
  { label: 'Frontend', value: 'frontend', icon: Layers },
  { label: 'Backend & Data', value: 'backend', icon: Database },
  { label: 'AI & ML', value: 'genai', icon: Cpu },
  { label: 'Cloud & Tools', value: 'cloud', icon: Cloud },
];

function cleanSkillName(name: string): string {
  if (name.includes('C++')) return 'C++20 & STL';
  if (name.includes('JavaScript')) return 'JavaScript (ES6+)';
  if (name.includes('Next.js')) return 'Next.js App Router';
  if (name.includes('LangGraph')) return 'LangGraph';
  if (name.includes('RAG & GraphRAG')) return 'RAG Pipelines';
  if (name.includes('Tailwind')) return 'Tailwind CSS v4';
  if (name.includes('SQL')) return 'SQL Databases';
  return name;
}

function getSkillLevel(proficiency: number): string {
  if (proficiency >= 94) return 'Mastery';
  if (proficiency >= 90) return 'Advanced';
  return 'Proficient';
}

function SkillCardIconCentric({ skill, index }: { skill: SkillItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState<number>(0);
  const [rotY, setRotY] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    setRotX(-deltaY * 6);
    setRotY(deltaX * 6);
    setMousePos({ x, y });
  };

  const displayName = cleanSkillName(skill.name);
  const level = getSkillLevel(skill.proficiency);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2, delay: index * 0.015 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotX(0);
        setRotY(0);
      }}
      className="relative p-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-900/95 border border-white/10 hover:border-yellow-400/50 transition-all duration-200 flex flex-col items-center text-center justify-between shadow-lg overflow-hidden group hover:-translate-y-1"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
      }}
    >
      {/* Subtle Yellow Cursor Spotlight on Hover */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, rgba(250,204,21,0.12), transparent 70%)`,
          }}
        />
      )}

      {/* Prominent Colorful Brand Logo */}
      <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center p-2.5 shadow-md group-hover:border-yellow-400/50 group-hover:scale-110 transition-all duration-200 shrink-0 mb-3">
        <TechIcon name={skill.name} className="w-7 h-7" />
      </div>

      {/* Tech Name */}
      <h4 className="font-bold text-white text-xs sm:text-sm group-hover:text-yellow-400 transition-colors line-clamp-1">
        {displayName}
      </h4>

      {/* Level Badge & Score */}
      <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/[0.06] w-full justify-between">
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400 font-medium">
          {level}
        </span>
        <span className="font-mono text-[11px] text-yellow-400 font-bold">
          {skill.proficiency}%
        </span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const [activeCategory, setActiveCategory] = useState<SkillItem['category'] | 'all'>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_ARSENAL
      : SKILLS_ARSENAL.filter((s) => s.category === activeCategory);

  const marqueeRow1 = SKILLS_ARSENAL.slice(0, Math.ceil(SKILLS_ARSENAL.length / 2));
  const marqueeRow2 = SKILLS_ARSENAL.slice(Math.ceil(SKILLS_ARSENAL.length / 2));

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 md:py-24 select-none overflow-hidden">
      {/* Seamless Atmospheric Theme Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/themes/alucard-guns-5120x2880-22588.png"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-yellow-400/30 text-xs font-mono text-yellow-300 mb-2.5 shadow-sm">
              <Cpu size={13} className="text-yellow-400" />
              <span>// SKILLS & TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Skills <span className="text-yellow-400">&</span> Technologies
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
              Scan core languages, frameworks, cloud platforms, and AI tools across 20+ specialized technologies.
            </p>
          </motion.div>

          {/* Filter Pills in Grey & Yellow */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-white/10 self-start md:self-auto">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.value;

              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-yellow-400 text-black font-bold shadow-md shadow-yellow-500/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon size={12} className={isActive ? 'text-black' : 'text-zinc-400'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual Marquee Ribbon with Authentic Brand Logos */}
        <div className="relative w-full overflow-hidden py-2 mb-8 mask-fade">
          <div className="flex gap-3 w-max animate-marquee-left">
            {[...marqueeRow1, ...marqueeRow1].map((s, idx) => (
              <div
                key={`${s.name}-row1-${idx}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 shrink-0 text-xs font-mono text-zinc-200"
              >
                <TechIcon name={s.name} className="w-4 h-4" />
                <span className="font-semibold">{cleanSkillName(s.name)}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 w-max animate-marquee-right mt-2.5">
            {[...marqueeRow2, ...marqueeRow2].map((s, idx) => (
              <div
                key={`${s.name}-row2-${idx}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-white/10 shrink-0 text-xs font-mono text-zinc-200"
              >
                <TechIcon name={s.name} className="w-4 h-4" />
                <span className="font-semibold">{cleanSkillName(s.name)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Density Icon-First Grid (Minimal Text, Maximum Visual Clarity) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <SkillCardIconCentric key={skill.name} skill={skill} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Visual RAG Pipeline Architecture (Clean, Diagram-First) */}
        <div className="mt-10 rounded-2xl p-5 sm:p-6 bg-zinc-900/80 border border-yellow-400/30 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div>
              <div className="flex items-center gap-1.5">
                <Workflow size={15} className="text-yellow-400" />
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Production RAG Architecture Flow
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                Sub-second context augmentation implemented in LeetBuddy & Engram
              </p>
            </div>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-zinc-950 text-yellow-300 border border-yellow-400/30 self-start sm:self-auto font-bold">
              SUB-SECOND PIPELINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {[
              { step: '01', title: 'Input Query', desc: 'Code or question' },
              { step: '02', title: 'Embedding', desc: '768-dim vectors' },
              { step: '03', title: 'Pinecone Search', desc: 'Cosine similarity' },
              { step: '04', title: 'Prompt Assembly', desc: 'Grounded context' },
              { step: '05', title: 'Token Stream', desc: 'Real-time response' },
            ].map((p, i) => (
              <div
                key={p.step}
                className="p-3 rounded-xl bg-zinc-950 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-yellow-400 font-bold">
                      STEP {p.step}
                    </span>
                    {i < 4 && <ArrowRight size={12} className="text-zinc-600 hidden lg:block" />}
                  </div>
                  <h4 className="font-semibold text-white text-xs">{p.title}</h4>
                  <p className="text-[10px] text-zinc-400 mt-0.5 font-mono">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
