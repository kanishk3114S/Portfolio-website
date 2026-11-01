'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ripplesContainerRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef<number>(0);
  const rippleCount = useRef(0);

  useEffect(() => {
    // Accessibility & touch device check
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    // Add class to body for custom cursor support
    document.body.classList.add('has-custom-cursor');

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) ${
          isHovered.current ? 'scale(1.4)' : 'scale(1)'
        }`;
      }
    };

    const animate = () => {
      // Smooth damped lerp for ring
      ring.current.x += (pos.current.x - ring.current.x) * 0.16;
      ring.current.y += (pos.current.y - ring.current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) ${
          isHovered.current ? 'scale(1.55)' : 'scale(1)'
        }`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovered.current = true;
      if (ringRef.current) {
        ringRef.current.classList.add('border-yellow-400', 'bg-yellow-400/10', 'shadow-[0_0_12px_rgba(250,204,21,0.3)]');
        ringRef.current.classList.remove('border-yellow-400/40');
      }
    };

    const onLeave = () => {
      isHovered.current = false;
      if (ringRef.current) {
        ringRef.current.classList.remove('border-yellow-400', 'bg-yellow-400/10', 'shadow-[0_0_12px_rgba(250,204,21,0.3)]');
        ringRef.current.classList.add('border-yellow-400/40');
      }
    };

    // Ripple generation on click (Restrained, elegant, self-cleaning)
    const onMouseDown = (e: MouseEvent) => {
      if (!ripplesContainerRef.current) return;

      const rippleEl = document.createElement('div');
      rippleEl.className = 'pointer-events-none fixed z-[9997] rounded-full border border-yellow-400/80 animate-cursor-ripple';
      rippleEl.style.left = `${e.clientX}px`;
      rippleEl.style.top = `${e.clientY}px`;
      rippleEl.style.width = '24px';
      rippleEl.style.height = '24px';
      rippleEl.style.transform = 'translate(-50%, -50%)';

      ripplesContainerRef.current.appendChild(rippleEl);
      rippleCount.current++;

      // Self-cleanup after animation finishes
      setTimeout(() => {
        if (rippleEl.parentNode) {
          rippleEl.parentNode.removeChild(rippleEl);
        }
      }, 600);
    };

    const onWindowLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onWindowEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    document.documentElement.addEventListener('mouseleave', onWindowLeave);
    document.documentElement.addEventListener('mouseenter', onWindowEnter);

    rafId.current = requestAnimationFrame(animate);

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, [data-hover], input, textarea, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      document.documentElement.removeEventListener('mouseleave', onWindowLeave);
      document.documentElement.removeEventListener('mouseenter', onWindowEnter);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 5px Micro-Dot (High-Voltage Yellow) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-[5px] h-[5px] rounded-full bg-yellow-400 opacity-0 transition-opacity duration-200 ease-out hidden md:block"
      />

      {/* Frosted Yellow Spring Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-7 h-7 rounded-full border border-yellow-400/40 backdrop-blur-[2px] opacity-0 transition-colors duration-200 hidden md:block"
      />

      {/* Passive Container for Expanding Ripples */}
      <div ref={ripplesContainerRef} aria-hidden="true" className="pointer-events-none hidden md:block" />
    </>
  );
}
