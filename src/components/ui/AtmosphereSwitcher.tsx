'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Check, Shuffle } from 'lucide-react';
import { useAtmosphere } from '@/context/AtmosphereContext';

export default function AtmosphereSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeAtmosphere, setAtmosphere, allAtmospheres } = useAtmosphere();

  const handleShuffle = () => {
    const others = allAtmospheres.filter((a) => a.id !== activeAtmosphere.id);
    const random = others[Math.floor(Math.random() * others.length)];
    if (random) setAtmosphere(random.id);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Pill */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        data-hover
        aria-label="Open atmosphere background controller"
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 hover:border-cyan-400/50 transition-all duration-300"
      >
        <Sparkles size={14} className="text-cyan-400" />
        <span className="text-xs font-mono font-medium tracking-wider text-zinc-200">
          ATMOSPHERE <span className="text-zinc-500 hidden sm:inline">• 4K THEMES</span>
        </span>
        <span
          className="w-2 h-2 rounded-full ml-0.5"
          style={{ background: activeAtmosphere.palette.accent }}
        />
      </motion.button>

      {/* Atmosphere Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 220, damping: 25 }}
            className="absolute bottom-14 right-0 w-[320px] sm:w-[400px] max-h-[80vh] overflow-y-auto rounded-2xl p-5 shadow-2xl z-50 flex flex-col gap-4 bg-zinc-950/95 backdrop-blur-2xl border border-white/15"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
                  <Sparkles size={13} className="text-cyan-400" />
                  Atmosphere & Visual Mood
                </h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Modulate visual backdrop and ambient lighting accents
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleShuffle}
                  data-hover
                  title="Randomize Atmosphere"
                  className="p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <Shuffle size={13} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  data-hover
                  className="p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <X size={13} />
                </button>
              </div>
            </div>

            {/* Atmosphere Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {allAtmospheres.map((theme) => {
                const isSelected = theme.id === activeAtmosphere.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setAtmosphere(theme.id)}
                    data-hover
                    className={`relative rounded-xl overflow-hidden text-left border p-2 transition-all duration-200 group flex flex-col gap-2 ${
                      isSelected
                        ? 'border-cyan-400 bg-white/[0.06] ring-1 ring-cyan-400/50'
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-20 w-full rounded-lg overflow-hidden bg-zinc-900">
                      <Image
                        src={theme.path}
                        alt={theme.alt}
                        fill
                        sizes="180px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                      {isSelected && (
                        <div
                          className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-black"
                          style={{ background: theme.palette.accent }}
                        >
                          <Check size={10} strokeWidth={3} />
                        </div>
                      )}
                      <span className="absolute bottom-1 left-1.5 text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-950/80 text-zinc-300">
                        {theme.mood}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div>
                      <div className="text-xs font-semibold text-white truncate capitalize">
                        {theme.id.replace(/-/g, ' ')}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-0.5">
                        <span>{theme.width}×{theme.height}</span>
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: theme.palette.accent }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="font-mono text-[10px]">ULTRA-HD ARCHITECTURE</span>
              <span className="font-mono text-[10px] text-cyan-400">
                ACTIVE: {activeAtmosphere.mood.toUpperCase()}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
