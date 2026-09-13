'use client';

import { motion, useReducedMotion } from 'framer-motion';

const pills = [
  ['CYBERSECURITY', 'pill-a'],
  ['NETWORKING', 'pill-b'],
  ['PYTHON', 'pill-c'],
  ['LINUX', 'pill-d'],
  ['AI', 'pill-e'],
  ['REVERSE ENGINEERING', 'pill-f']
];

export function FloatingSkillPills({ tiltX = 0, tiltY = 0 }: { tiltX?: number; tiltY?: number }) {
  const reduced = useReducedMotion();
  return (
    <div className="floating-pills" aria-hidden="true">
      {pills.map(([label, cls], i) => (
        <motion.div
          key={label}
          className={`floating-pill ${cls}`}
          style={reduced ? undefined : { x: tiltX * (i % 2 ? 0.5 : -0.45), y: tiltY * (i % 3 ? 0.4 : -0.35) }}
          animate={reduced ? undefined : { y: [0, -8 - i, 0], rotate: [0, i % 2 ? 1.4 : -1.2, 0] }}
          transition={{ duration: 7 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="floating-pill__dot" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
