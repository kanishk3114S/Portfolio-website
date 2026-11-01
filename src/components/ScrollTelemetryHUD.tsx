'use client';

import { useEffect, useState, useTransition } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface Waypoint {
  id: string;
  code: string;
  label: string;
  targetId: string;
}

const WAYPOINTS: Waypoint[] = [
  { id: 'hero', code: '01', label: 'Home', targetId: 'hero' },
  { id: 'journey', code: '02', label: 'Journey', targetId: 'journey' },
  { id: 'projects', code: '03', label: 'Projects', targetId: 'projects' },
  { id: 'algorithmic-vault', code: '04', label: 'LeetCode', targetId: 'algorithmic-vault' },
  { id: 'skills', code: '05', label: 'Skills', targetId: 'skills' },
  { id: 'contact', code: '06', label: 'Contact', targetId: 'contact' },
];

export default function ScrollTelemetryHUD() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [, startTransition] = useTransition();

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      startTransition(() => {
        setScrollPercent(Math.min(100, Math.max(0, Math.round(latest * 100))));
      });
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersectingEntries = entries.filter((e) => e.isIntersecting);
      if (intersectingEntries.length > 0) {
        intersectingEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topIntersecting = intersectingEntries[0];
        if (topIntersecting?.target?.id) {
          setActiveSection(topIntersecting.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0.1, 0.3, 0.6],
    });

    WAYPOINTS.forEach((wp) => {
      const el = document.getElementById(wp.targetId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToWaypoint = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* 1. TOP ELECTRIC YELLOW LASER PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 z-[120] h-[2.5px] bg-zinc-950/80 pointer-events-none">
        <motion.div
          style={{ scaleX: smoothProgress, transformOrigin: '0%' }}
          className="h-full w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 shadow-[0_0_8px_rgba(250,204,21,0.6)]"
        />
      </div>

      {/* 2. RIGHT-EDGE WAYFINDER */}
      <aside
        aria-label="Navigation Waypoints"
        className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[100] hidden sm:flex flex-col items-end gap-2.5 pointer-events-auto select-none"
      >
        <div className="flex items-center gap-1.5 mb-1 px-2.5 py-1 rounded-md bg-zinc-950/90 backdrop-blur-md border border-yellow-400/30 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <span className="font-mono text-[9px] text-yellow-300 font-bold">
            {scrollPercent < 10 ? `0${scrollPercent}` : scrollPercent}%
          </span>
        </div>

        <div className="relative flex flex-col gap-3 pr-1 py-2">
          <div className="absolute right-[4px] top-2 bottom-2 w-[1px] bg-white/[0.08]" />

          {WAYPOINTS.map((wp) => {
            const isActive = activeSection === wp.targetId;

            return (
              <button
                key={wp.id}
                onClick={() => scrollToWaypoint(wp.targetId)}
                title={`Jump to ${wp.label}`}
                className="group flex items-center justify-end gap-2 cursor-pointer py-0.5 text-right focus:outline-none"
              >
                <span
                  className={`font-mono text-[10px] tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-yellow-400 opacity-100 font-semibold translate-x-0'
                      : 'text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-zinc-300 translate-x-1 group-hover:translate-x-0'
                  }`}
                >
                  {wp.label}
                </span>

                <div className="relative flex items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-yellow-400 ring-2 ring-yellow-400/40 shadow-[0_0_6px_rgba(250,204,21,0.8)]'
                        : 'bg-zinc-600 group-hover:bg-zinc-300 group-hover:scale-125'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
