'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MouseEvent, ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  cursor?: string;
};

export function GlassCard({ children, className = '', cursor = 'EXPLORE' }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mx', `${x}%`);
    ref.current.style.setProperty('--my', `${y}%`);
  }

  return (
    <motion.article
      ref={ref as never}
      className={`glass-card ${className}`}
      onMouseMove={onMove}
      data-cursor={cursor}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 250, damping: 25 }}
    >
      <div className="glass-card__shine" aria-hidden="true" />
      {children}
    </motion.article>
  );
}
