'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { TIMELINE_EVENTS } from '@/data/portfolioData';
import { Calendar, Milestone } from 'lucide-react';

export default function JourneySection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" ref={containerRef} className="relative py-20 md:py-24 select-none overflow-hidden">
      {/* Seamless Atmospheric Theme Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/themes/itachi-uchiha-moon-5120x2880-25777.jpg"
          alt="Atmospheric theme background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-luminosity brightness-70 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1013] via-[#0e1013]/75 to-[#0e1013]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0e1013_85%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-yellow-400/30 text-xs font-mono text-yellow-300 mb-2.5 shadow-sm">
              <Milestone size={13} className="text-yellow-400" />
              <span>{'// EXPERIENCE & MILESTONES'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              My <span className="text-yellow-400">Journey</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
              Academic milestones at VIT Bhopal, competitive programming achievements, hackathons, and software engineering experience.
            </p>
          </motion.div>
        </div>

        {/* Timeline Core */}
        <div className="relative">
          {/* Static Background Spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10" />

          {/* Animated Electric Yellow Scroll-Linked Beam */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 shadow-[0_0_8px_rgba(250,204,21,0.5)]"
          />

          <div className="flex flex-col gap-8 md:gap-10">
            {TIMELINE_EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] ml-10 md:ml-0">
                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-900/95 border border-white/10 hover:border-yellow-400/40 transition-all duration-200 shadow-xl group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-950 border border-yellow-400/30 text-yellow-300 flex items-center gap-1">
                          <Calendar size={11} className="text-yellow-400" />
                          {event.date}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-zinc-500">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs text-yellow-300/90 font-mono mt-0.5 mb-2">
                        {event.subtitle}
                      </p>

                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {event.description}
                      </p>

                      {event.highlight && (
                        <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                          <span className="text-[11px] font-mono text-zinc-300">
                            {event.highlight}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Node Pip on Timeline Spine */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-yellow-400 flex items-center justify-center shadow-md shadow-yellow-500/20 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
