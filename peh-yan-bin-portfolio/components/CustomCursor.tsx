'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 600, damping: 48, mass: 0.12 });
  const y = useSpring(my, { stiffness: 600, damping: 48, mass: 0.12 });
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
      const el = (e.target as HTMLElement)?.closest?.('[data-cursor]') as HTMLElement | null;
      setLabel(el?.dataset.cursor || '');
    };
    const leave = () => setVisible(false);
    window.addEventListener('pointermove', move);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, [mx, my, reduced]);

  if (reduced) return null;

  return (
    <motion.div
      className={`custom-cursor ${label ? 'custom-cursor--active' : ''}`}
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: label ? 1.18 : 1 }}
      aria-hidden="true"
    >
      {label ? <span>{label}</span> : null}
    </motion.div>
  );
}
