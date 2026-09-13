'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CSSProperties, useState } from 'react';
import { orbitSkills } from '@/lib/skills';

const labels = Object.keys(orbitSkills);

export function SkillOrbit() {
  const [selected, setSelected] = useState('Cybersecurity');
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section className="section section--orbit">
      <div className="shell">
        <div className="orbit-header">
          <div className="eyebrow">SIGNATURE CAPABILITY MAP</div>
          <h2>One technical profile. Multiple connected layers.</h2>
          <p>Hover or focus a discipline to reveal the capabilities clustered around it.</p>
        </div>
        <div className="orbit-layout glass-panel">
          <div className="orbit-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="orbit-ring orbit-ring--outer" aria-hidden="true" />
            <div className="orbit-ring orbit-ring--inner" aria-hidden="true" />
            <div className="orbit-core">
              <span>YAN BIN</span>
              <small>TECHNICAL PROFILE</small>
            </div>
            <motion.div
              className="orbit-rotator"
              animate={reduced || paused ? undefined : { rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
            >
              {labels.map((label, i) => {
                const angle = (360 / labels.length) * i;
                return (
                  <button
                    key={label}
                    className={`orbit-item ${selected === label ? 'is-active' : ''}`}
                    style={{ '--angle': `${angle}deg`, '--neg-angle': `${-angle}deg` } as CSSProperties}
                    onMouseEnter={() => setSelected(label)}
                    onFocus={() => { setSelected(label); setPaused(true); }}
                    onBlur={() => setPaused(false)}
                    data-cursor="EXPLORE"
                  >
                    <span>{label}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>
          <div className="orbit-detail" aria-live="polite">
            <span className="micro-label">SELECTED DISCIPLINE</span>
            <h3>{selected}</h3>
            <div className="orbit-detail__skills">
              {orbitSkills[selected].map((skill, i) => (
                <motion.span key={skill} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .035 }}>{skill}</motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
