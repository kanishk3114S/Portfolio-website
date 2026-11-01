'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  Trophy,
  Zap,
  Terminal,
  Activity,
  BarChart3,
} from 'lucide-react';
import { ALGORITHMIC_METRICS } from '@/data/portfolioData';
import TechIcon from '@/components/ui/TechIcon';

function useCounter(target: number, duration: number = 1800, startNow: boolean = false) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!startNow) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, startNow]);

  return count;
}

export default function AlgorithmicVault() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const animatedTotal = useCounter(ALGORITHMIC_METRICS.totalSolved, 1800, isInView);
  const [activeContestIdx, setActiveContestIdx] = useState<number>(
    ALGORITHMIC_METRICS.contestHistory.length - 1
  );
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    ALGORITHMIC_METRICS.topics[0].id
  );

  const chartWidth = 580;
  const chartHeight = 170;
  const paddingX = 35;
  const paddingY = 25;

  const minRating = 1500;
  const maxRating = 1950;

  const points = ALGORITHMIC_METRICS.contestHistory.map((item, idx) => {
    const x =
      paddingX +
      (idx / (ALGORITHMIC_METRICS.contestHistory.length - 1)) *
        (chartWidth - 2 * paddingX);
    const y =
      chartHeight -
      paddingY -
      ((item.rating - minRating) / (maxRating - minRating)) *
        (chartHeight - 2 * paddingY);
    return { ...item, x, y };
  });

  const pathD = points.reduce((acc, curr, idx, arr) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    const prev = arr[idx - 1];
    const cpX = (prev.x + curr.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight - paddingY} L ${points[0].x} ${chartHeight - paddingY} Z`;

  return (
    <section id="algorithmic-vault" ref={sectionRef} className="relative py-20 md:py-24 select-none overflow-hidden">
      {/* Seamless Atmospheric Theme Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/themes/dramatic-scenery-3840x2160-20802.jpg"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-yellow-400/30 text-xs font-mono text-yellow-300 mb-2.5 shadow-sm">
              <Terminal size={13} className="text-yellow-400" />
              <span>// PROBLEM SOLVING & LEETCODE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              1,000+ Problems <span className="text-yellow-400">Solved</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
              Competitive programming statistics, contest rating progression, and algorithmic problem-solving across core data structures.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="px-3 py-1.5 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-xs font-mono text-yellow-300 font-bold">
              PEAK 1883 • TOP 3.8%
            </span>
          </div>
        </div>

        {/* 1. ODOMETER & DIFFICULTY DISTRIBUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
          {/* Main Counter Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 rounded-2xl p-6 bg-zinc-900/80 border border-yellow-400/30 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-yellow-400 font-bold flex items-center gap-1.5">
                  <Activity size={13} />
                  PROBLEM SOLVING STATS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-white/10">
                  Global: Top 3.8%
                </span>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  {animatedTotal}
                </span>
                <span className="text-4xl font-bold text-yellow-400">
                  +
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 font-mono">
                Problems Solved Across LeetCode & Codeforces
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/[0.08]">
              <div className="p-3 rounded-xl bg-zinc-950 border border-yellow-400/20 flex flex-col">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">
                  LeetCode Peak
                </span>
                <span className="font-bold text-base text-yellow-300 mt-0.5 flex items-center gap-1">
                  <Trophy size={14} className="text-yellow-400" />
                  1883 • Knight
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-white/10 flex flex-col">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">
                  Codeforces Peak
                </span>
                <span className="font-bold text-base text-zinc-200 mt-0.5 flex items-center gap-1">
                  <Zap size={14} className="text-yellow-400" />
                  1188 • Pupil
                </span>
              </div>
            </div>
          </motion.div>

          {/* Difficulty Breakdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 rounded-2xl p-6 bg-zinc-900/80 border border-white/10 flex flex-col justify-between shadow-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <BarChart3 size={13} className="text-yellow-400" />
                Problem Difficulty Breakdown
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                42 Rated Contests
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto py-3">
              {/* Easy */}
              <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" className="text-zinc-800" strokeWidth="7" stroke="currentColor" fill="transparent" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#10b981"
                      strokeWidth="7"
                      strokeDasharray="238.7"
                      initial={{ strokeDashoffset: 238.7 }}
                      animate={isInView ? { strokeDashoffset: 238.7 - (238.7 * ALGORITHMIC_METRICS.breakdown.easy.percentage) / 100 } : {}}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-base text-emerald-400">
                      {ALGORITHMIC_METRICS.breakdown.easy.count}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500">EASY</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-300 mt-2">
                  {ALGORITHMIC_METRICS.breakdown.easy.percentage}% Solved
                </span>
              </div>

              {/* Medium (Electric Yellow) */}
              <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-zinc-950 border border-yellow-400/20">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" className="text-zinc-800" strokeWidth="7" stroke="currentColor" fill="transparent" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#facc15"
                      strokeWidth="7"
                      strokeDasharray="238.7"
                      initial={{ strokeDashoffset: 238.7 }}
                      animate={isInView ? { strokeDashoffset: 238.7 - (238.7 * ALGORITHMIC_METRICS.breakdown.medium.percentage) / 100 } : {}}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-base text-yellow-300">
                      {ALGORITHMIC_METRICS.breakdown.medium.count}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500">MEDIUM</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-yellow-300 mt-2 font-semibold">
                  {ALGORITHMIC_METRICS.breakdown.medium.percentage}% Solved
                </span>
              </div>

              {/* Hard */}
              <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" className="text-zinc-800" strokeWidth="7" stroke="currentColor" fill="transparent" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#ef4444"
                      strokeWidth="7"
                      strokeDasharray="238.7"
                      initial={{ strokeDashoffset: 238.7 }}
                      animate={isInView ? { strokeDashoffset: 238.7 - (238.7 * ALGORITHMIC_METRICS.breakdown.hard.percentage) / 100 } : {}}
                      transition={{ duration: 1.2, delay: 0.4 }}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-base text-rose-400">
                      {ALGORITHMIC_METRICS.breakdown.hard.count}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500">HARD</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-300 mt-2">
                  {ALGORITHMIC_METRICS.breakdown.hard.percentage}% Solved
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/[0.06] text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>68% of solved volume concentrated in Medium & Hard interview tiers.</span>
            </div>
          </motion.div>
        </div>

        {/* 2. LEETCODE CONTEST RATING TRAJECTORY IN ELECTRIC YELLOW */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-2xl p-5 sm:p-6 bg-zinc-900/80 border border-white/10 shadow-xl mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <Trophy size={15} className="text-yellow-400" />
                <h3 className="font-bold text-white text-base sm:text-lg">
                  LeetCode Contest Rating Trajectory
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                Progression across rated rounds to Peak Rating 1883
              </p>
            </div>

            {points[activeContestIdx] && (
              <div className="p-2 px-3 rounded-lg bg-zinc-950 border border-yellow-400/30 text-right self-start sm:self-auto">
                <span className="text-[10px] font-mono text-yellow-400 uppercase block font-semibold">
                  {points[activeContestIdx].contest}
                </span>
                <span className="font-bold text-base text-white font-mono">
                  {points[activeContestIdx].rating}{' '}
                  <span className="text-xs text-yellow-300">
                    ({points[activeContestIdx].percentile})
                  </span>
                </span>
              </div>
            )}
          </div>

          <div className="relative w-full overflow-x-auto py-1">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-40 sm:h-48 stroke-linecap-round"
            >
              <defs>
                <linearGradient id="curveYellowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#facc15" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#facc15" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {[1600, 1700, 1800, 1900].map((val) => {
                const y =
                  chartHeight -
                  paddingY -
                  ((val - minRating) / (maxRating - minRating)) *
                    (chartHeight - 2 * paddingY);
                return (
                  <g key={val}>
                    <line
                      x1={paddingX}
                      y1={y}
                      x2={chartWidth - paddingX}
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={paddingX - 6}
                      y={y + 3}
                      fill="rgba(255,255,255,0.3)"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="end"
                    >
                      {val}
                    </text>
                  </g>
                );
              })}

              <motion.path
                d={areaD}
                fill="url(#curveYellowGradient)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
              />

              <motion.path
                d={pathD}
                fill="none"
                stroke="#facc15"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />

              {points.map((pt, i) => (
                <g
                  key={pt.contest}
                  className="cursor-pointer"
                  onClick={() => setActiveContestIdx(i)}
                  onMouseEnter={() => setActiveContestIdx(i)}
                >
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={activeContestIdx === i ? '5.5' : '3'}
                    fill={activeContestIdx === i ? '#ffffff' : '#facc15'}
                    stroke="#0e1013"
                    strokeWidth="2"
                  />
                  <text
                    x={pt.x}
                    y={chartHeight - 6}
                    fill={activeContestIdx === i ? '#facc15' : 'rgba(255,255,255,0.4)'}
                    fontSize="9"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {pt.contest}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </motion.div>

        {/* 3. C++ STL MATRIX */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div>
              <h3 className="font-bold text-lg text-white">
                Key Topics & Data Structures
              </h3>
              <p className="text-xs text-zinc-400">
                Algorithms and computational patterns implemented with C++ Standard Template Library
              </p>
            </div>
            <span className="text-xs font-mono text-yellow-400 hidden sm:inline font-semibold">
              Topic Details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {ALGORITHMIC_METRICS.topics.map((topic) => {
              const isSelected = selectedTopicId === topic.id;

              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-zinc-900 border-yellow-400/60 shadow-md shadow-yellow-500/10'
                      : 'bg-zinc-900/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs text-yellow-400 font-bold">
                        {topic.count} Solved
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-white/10">
                        {topic.proficiency}% Accuracy
                      </span>
                    </div>

                    <h4 className="font-bold text-white text-sm">
                      {topic.name}
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex flex-wrap gap-1">
                    {topic.stlTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-950 text-zinc-200 border border-white/10"
                      >
                        <TechIcon name="c++" className="w-2.5 h-2.5" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
