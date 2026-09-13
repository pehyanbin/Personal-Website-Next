'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { virtualization } from '@/lib/skills';
import { LogoMark } from './LogoMark';
import { Reveal } from './Reveal';

export function Virtualization() {
  const reduced = useReducedMotion();
  return (
    <section id="virtualization" className="section section--compact">
      <div className="shell virtualization-panel glass-panel">
        <div className="virtualization-copy">
          <div className="eyebrow">VIRTUAL ENVIRONMENTS</div>
          <h2>Isolation makes experimentation repeatable.</h2>
          <p>Virtual machines provide controlled environments for development, networking, operating-system exploration and security tooling.</p>
          <div className="virtualization-tools">
            {virtualization.map(item => (
              <span key={item.name}><LogoMark icon={item.icon} size={24} /> {item.name}</span>
            ))}
          </div>
        </div>
        <Reveal className="vm-stack-wrap">
          <div className="vm-stack" role="img" aria-label="Stacked virtual machine layers">
            {[0,1,2].map(i => (
              <motion.div
                key={i}
                className={`vm-layer vm-layer--${i}`}
                initial={reduced ? false : { y: 0, opacity: 0.3 }}
                whileInView={reduced ? undefined : { y: -i * 18, x: i * 10, opacity: 1 }}
                viewport={{ once: true, margin: '-15%' }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              >
                <div className="vm-layer__bar"><i /><i /><i /></div>
                <div className="vm-layer__body"><span>VM {String(i + 1).padStart(2,'0')}</span><strong>{virtualization[i].name}</strong></div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
