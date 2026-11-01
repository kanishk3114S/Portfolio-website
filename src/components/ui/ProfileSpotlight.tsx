'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ProfileSpotlightProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
}

export default function ProfileSpotlight({
  src,
  alt,
  sizes = '(max-width: 640px) 256px, (max-width: 768px) 288px, 320px',
  className = '',
}: ProfileSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const glowOverlayRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 160, y: 190 });
  const current = useRef({ x: 160, y: 190 });
  const isHovered = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Center coordinates as initial position
    const rect = container.getBoundingClientRect();
    target.current = { x: rect.width / 2, y: rect.height / 2 };
    current.current = { x: rect.width / 2, y: rect.height / 2 };

    const animate = () => {
      // Smooth damped lerp for natural spotlight momentum
      current.current.x += (target.current.x - current.current.x) * 0.14;
      current.current.y += (target.current.y - current.current.y) * 0.14;

      const xStr = `${current.current.x.toFixed(1)}px`;
      const yStr = `${current.current.y.toFixed(1)}px`;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--spotlight-x', xStr);
        spotlightRef.current.style.setProperty('--spotlight-y', yStr);
      }
      if (glowOverlayRef.current) {
        glowOverlayRef.current.style.setProperty('--spotlight-x', xStr);
        glowOverlayRef.current.style.setProperty('--spotlight-y', yStr);
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const onPointerMove = (e: PointerEvent) => {
      const b = container.getBoundingClientRect();
      target.current = {
        x: Math.max(0, Math.min(b.width, e.clientX - b.left)),
        y: Math.max(0, Math.min(b.height, e.clientY - b.top)),
      };
    };

    const onPointerEnter = (e: PointerEvent) => {
      isHovered.current = true;
      const b = container.getBoundingClientRect();
      target.current = {
        x: e.clientX - b.left,
        y: e.clientY - b.top,
      };
      current.current = { ...target.current };

      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '1';
      }
      if (glowOverlayRef.current) {
        glowOverlayRef.current.style.opacity = '1';
      }
    };

    const onPointerLeave = () => {
      isHovered.current = false;
      const b = container.getBoundingClientRect();
      target.current = { x: b.width / 2, y: b.height / 2 };

      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }
      if (glowOverlayRef.current) {
        glowOverlayRef.current.style.opacity = '0';
      }
    };

    container.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerenter', onPointerEnter);
    container.addEventListener('pointerleave', onPointerLeave);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerenter', onPointerEnter);
      container.removeEventListener('pointerleave', onPointerLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className={`relative group ${className}`}>
      {/* 1. Surrounding Dark-Pulse Aura & Soft Gold Halo */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-red-900/30 via-yellow-500/20 to-red-950/40 blur-md opacity-70 group-hover:opacity-100 group-hover:via-yellow-400/30 transition-all duration-700 animate-dark-pulse pointer-events-none" />

      {/* 2. Outer Glass Bezel Frame with Enhanced Hover Border */}
      <div
        ref={containerRef}
        className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-zinc-900/90 border border-yellow-400/30 group-hover:border-yellow-400/60 p-2.5 shadow-2xl overflow-hidden transition-all duration-500 cursor-none"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
          {/* Layer A: Base Resting Image (Moody, attractive slightly dimmed & desaturated state) */}
          <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-top filter brightness-[0.88] saturate-[0.88] contrast-[1.04] transition-all duration-500 group-hover:brightness-95 group-hover:saturate-100 group-hover:contrast-[1.08]"
              priority
            />
          </div>

          {/* Layer B: Spotlight Illumination Layer (Full brilliance, saturation & contrast revealed beneath pointer) */}
          <div
            ref={spotlightRef}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out"
            style={{
              maskImage:
                'radial-gradient(circle 140px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), black 0%, rgba(0,0,0,0.65) 45%, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(circle 140px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), black 0%, rgba(0,0,0,0.65) 45%, transparent 75%)',
            }}
          >
            <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <Image
                src={src}
                alt=""
                fill
                sizes={sizes}
                className="object-cover object-top filter brightness-[1.18] saturate-[1.16] contrast-[1.12]"
                priority
              />
            </div>
          </div>

          {/* Layer C: Subtle Golden Specular Warmth at Spotlight Core */}
          <div
            ref={glowOverlayRef}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out mix-blend-screen"
            style={{
              background:
                'radial-gradient(circle 145px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(250, 204, 21, 0.12) 0%, rgba(250, 204, 21, 0.03) 45%, transparent 75%)',
            }}
          />

          {/* Bottom Vignette for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

          {/* Bottom Status Card */}
          <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs z-10 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-200 font-medium font-mono text-[11px]">ACTIVE / RECRUITING</span>
            </div>
            <span className="font-mono text-[10px] text-yellow-400 font-bold tracking-wider">
              AVAILABLE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
