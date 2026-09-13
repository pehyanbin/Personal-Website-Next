'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';

export function MagneticButton({ href, children, className = '', cursor = 'OPEN ↗', external = false }: { href: string; children: ReactNode; className?: string; cursor?: string; external?: boolean }) {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 20, mass: 0.35 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 20, mass: 0.35 });

  function move(e: MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.10);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.10);
  }
  function reset() { x.set(0); y.set(0); }

  return (
    <motion.div style={{ x, y }} className="magnetic-wrap">
      <Link
        href={href}
        className={`magnetic-button ${className}`}
        data-cursor={cursor}
        onMouseMove={move}
        onMouseLeave={reset}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </Link>
    </motion.div>
  );
}
