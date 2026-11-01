'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS } from '@/data/portfolioData';
import { Trophy } from 'lucide-react';

export default function AchievementsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="achievements" ref={ref} className="relative py-20 md:py-24 select-none overflow-hidden">
      {/* Seamless Atmospheric Theme Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/themes/dramatic-scenery-3840x2160-20802.jpg"
          alt="Atmospheric theme background"
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-15 mix-blend-luminosity brightness-70 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1013] via-[#0e1013]/85 to-[#0e1013]" />
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
              <Trophy size={13} className="text-yellow-400" />
              <span>{'// HONORS & CERTIFICATIONS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Honors <span className="text-yellow-400">&</span> Certifications
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
              Competitive coding milestones, collegiate hackathons, and industry cloud certifications.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="rounded-2xl p-5 bg-zinc-900/80 hover:bg-zinc-900/95 border border-white/10 hover:border-yellow-400/40 transition-all duration-200 flex flex-col justify-between shadow-xl group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl p-2 rounded-xl bg-zinc-950 border border-white/10">
                    {ach.icon}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-yellow-400/30 text-yellow-300 font-bold">
                    {ach.date}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-yellow-400 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {ach.subtitle}
                  </p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {ach.description}
                </p>
              </div>

              <div className="w-8 h-0.5 rounded-full bg-yellow-400/60 mt-4 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
