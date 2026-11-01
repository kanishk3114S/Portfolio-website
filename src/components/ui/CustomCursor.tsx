'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) ${
          isHovered.current ? 'scale(1.5)' : 'scale(1)'
        }`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) ${
          isHovered.current ? 'scale(1.6)' : 'scale(1)'
        }`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovered.current = true;
      if (ringRef.current) {
        ringRef.current.classList.add('border-yellow-400/80', 'bg-yellow-400/10');
      }
    };
    const onLeave = () => {
      isHovered.current = false;
      if (ringRef.current) {
        ringRef.current.classList.remove('border-yellow-400/80', 'bg-yellow-400/10');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, [data-hover], input, textarea').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 5px Micro-Dot (High-Voltage Yellow) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-[5px] h-[5px] rounded-full bg-yellow-400 transition-transform duration-75 ease-out hidden md:block"
      />
      {/* Frosted Yellow Spring Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-7 h-7 rounded-full border border-yellow-400/40 backdrop-blur-[2px] transition-colors duration-200 hidden md:block"
      />
    </>
  );
}
