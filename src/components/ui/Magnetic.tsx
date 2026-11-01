'use client';

import { useRef, ReactNode, useSyncExternalStore } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  strength?: number; // Distance multiplier (default: 0.22)
  maxDistance?: number; // Maximum offset in px (default: 10px)
  className?: string;
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const m1 = window.matchMedia('(pointer: fine)');
  const m2 = window.matchMedia('(prefers-reduced-motion: reduce)');
  m1.addEventListener('change', callback);
  m2.addEventListener('change', callback);
  return () => {
    m1.removeEventListener('change', callback);
    m2.removeEventListener('change', callback);
  };
}

function getSnapshot() {
  if (typeof window === 'undefined') return false;
  const isFine = window.matchMedia('(pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return isFine && !reducedMotion;
}

function getServerSnapshot() {
  return false;
}

/**
 * Magnetic interactive wrapper providing smooth spring-physics
 * attraction towards the pointer on hover.
 * Zero layout shifts: operates strictly via translate3d transforms.
 * Automatically disabled on touch screens and under prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  strength = 0.22,
  maxDistance = 10,
  className = '',
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const canHover = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    // Constrain within bounds to maintain layout and hit testing integrity
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

    x.set(clampedX);
    y.set(clampedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!canHover) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
