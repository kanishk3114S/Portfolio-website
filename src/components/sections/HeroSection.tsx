'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, ArrowUpRight, Trophy, Sparkles, Terminal, Activity } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '@/data/portfolioData';
import ResumeSwitcherModal from '@/components/ui/ResumeSwitcherModal';
import TechIcon from '@/components/ui/TechIcon';

const ThreeBackground = dynamic(() => import('@/components/3d/ThreeBackground'), {
  ssr: false,
  loading: () => null,
});

const TYPEWRITER_STRINGS = [
  'Full-Stack Next.js & MERN Engineer',
  'Applied Generative AI & RAG Architect',
  '1,000+ Algorithmic Solves (Knight 1883)',
  '4th Year B.Tech CSE @ VIT Bhopal',
];

function useTypewriter(strings: string[], speed = 40, pause = 2200) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === '') {
      setDeleting(false);
      setIdx((i) => i + 1);
    } else {
      timeout = setTimeout(
        () =>
          setDisplay((d) =>
            deleting ? current.slice(0, d.length - 1) : current.slice(0, d.length + 1)
          ),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, strings, speed, pause]);

  return display;
}

export default function HeroSection() {
  const typeText = useTypewriter(TYPEWRITER_STRINGS);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="hero" className="relative py-20 md:py-24 overflow-hidden select-none">
      {/* Itachi Uchiha Moon Atmospheric Background with Dark Pulse */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/themes/itachi-uchiha-moon-5120x2880-25777.jpg"
          alt="Itachi Uchiha Moon Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity brightness-80 contrast-125 scale-105"
        />

        {/* Ambient Blood-Moon Dark Pulse */}
        <div
          className="absolute top-1/4 right-1/4 w-[520px] h-[520px] rounded-full blur-[110px] animate-dark-pulse pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(185, 28, 28, 0.35) 0%, rgba(127, 29, 29, 0.16) 50%, transparent 75%)',
          }}
        />

        {/* Secondary Sharingan Ambient Pulse */}
        <div
          className="absolute -top-16 left-1/3 w-[620px] h-[620px] rounded-full blur-[140px] animate-sharingan-ambient pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(153, 27, 27, 0.22) 0%, rgba(20, 2, 5, 0.12) 60%, transparent 80%)',
          }}
        />

        {/* Seamless Vignette and Section Blending Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1013] via-transparent to-[#0e1013]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1013] via-transparent to-[#0e1013]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#0e1013_85%)]" />
      </div>

      {/* Subtle Star Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <ThreeBackground />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
        {/* Top Academic Status Strip */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-yellow-400 font-semibold tracking-wider">COMPUTER SCIENCE & ENGINEERING</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-300 hidden sm:inline">VIT BHOPAL &apos;27</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-zinc-800/80 border border-white/10 text-zinc-300 font-mono text-[11px]">
              CGPA: {EDUCATION.cgpa}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Text & Interactive Controls */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-yellow-400/30 text-xs font-mono text-yellow-300 w-fit backdrop-blur-md shadow-sm"
            >
              <Activity size={12} className="text-yellow-400" />
              <span>FULL-STACK & APPLIED AI DEVELOPER</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-1.5"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Kanishk <span className="text-yellow-400">Sharma</span>
              </h1>
              {/* Typewriter Text */}
              <div className="h-6 flex items-center">
                <span className="font-mono text-sm sm:text-base text-zinc-300">
                  {typeText}
                  <span className="text-yellow-400 font-bold animate-pulse ml-0.5">_</span>
                </span>
              </div>
            </motion.div>

            {/* Hardware / CP Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2 text-xs"
            >
              <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-yellow-400/30 text-zinc-200 flex items-center gap-1.5 font-mono shadow-sm">
                <Trophy size={13} className="text-yellow-400" />
                1883 LeetCode Knight
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 flex items-center gap-1.5 font-mono shadow-sm">
                <Sparkles size={13} className="text-yellow-400" />
                ET GenAI Semi-Finalist
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 flex items-center gap-1.5 font-mono shadow-sm">
                <Terminal size={13} className="text-yellow-400" />
                1,000+ DSA Solved
              </span>
            </motion.div>

            {/* Bio Narrative */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-lg"
            >
              Building high-performance full-stack web applications and practical AI systems.
              Experienced in Next.js, React, Node.js, and RAG pipelines, backed by 1,000+ competitive algorithm solves.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-black transition-all shadow-lg shadow-yellow-500/20 active:scale-98"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown size={13} />
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/15 hover:border-yellow-400/50 transition-all cursor-pointer"
              >
                <FileText size={13} className="text-yellow-400" />
                <span>VIEW RESUMES</span>
              </button>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-5 pt-3 border-t border-white/[0.08]"
            >
              {[
                { label: 'GitHub', url: PERSONAL_INFO.githubUrl },
                { label: 'LinkedIn', url: PERSONAL_INFO.linkedinUrl },
                { label: 'LeetCode', url: PERSONAL_INFO.leetcodeUrl },
                { label: 'Codeforces', url: PERSONAL_INFO.codeforcesUrl },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-yellow-300 transition-colors"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight size={11} className="text-zinc-500" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Interactive 3D Card Container with Animated Floating Skill Pods */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center lg:justify-end lg:col-span-5 w-full relative"
          >
            {/* 4 Animated Floating Skill Chips with Vibrant Brand Colors */}
            {/* Chip 1: React (Cyan) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/15 shadow-xl text-xs font-mono"
            >
              <TechIcon name="react" className="w-4 h-4" />
              <span className="font-semibold text-white">React 19</span>
            </motion.div>

            {/* Chip 2: C++20 (Blue) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-2 -right-3 sm:-top-3 sm:-right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/15 shadow-xl text-xs font-mono"
            >
              <TechIcon name="c++" className="w-4 h-4" />
              <span className="font-semibold text-white">C++20 & STL</span>
            </motion.div>

            {/* Chip 3: Python (Blue & Yellow) */}
            <motion.div
              animate={{ y: [-3, 5, -3] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/15 shadow-xl text-xs font-mono"
            >
              <TechIcon name="python" className="w-4 h-4" />
              <span className="font-semibold text-white">Python ML</span>
            </motion.div>

            {/* Chip 4: 1883 Knight (Yellow Trophy) */}
            <motion.div
              animate={{ y: [4, -5, 4] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-2 -right-3 sm:-bottom-3 sm:-right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-yellow-400/40 shadow-xl text-xs font-mono text-yellow-300"
            >
              <Trophy size={14} className="text-yellow-400" />
              <span className="font-semibold text-white">Knight 1883</span>
            </motion.div>

            {/* Main Portrait Frame with Dark Pulse Aura & Yellow Accent */}
            <div className="relative group">
              {/* Breathing Dark Pulse Glow behind Portrait */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-red-900/30 via-yellow-500/20 to-red-950/40 blur-md opacity-70 animate-dark-pulse pointer-events-none" />

              <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-zinc-900/90 border border-yellow-400/30 p-2.5 shadow-2xl overflow-hidden group-hover:border-yellow-400/60 transition-colors">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

                  {/* Bottom Status Card */}
                  <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-zinc-200 font-medium font-mono text-[11px]">ACTIVE / RECRUITING</span>
                    </div>
                    <span className="font-mono text-[10px] text-yellow-400 font-bold">
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {resumeOpen && <ResumeSwitcherModal onClose={() => setResumeOpen(false)} />}
    </section>
  );
}
