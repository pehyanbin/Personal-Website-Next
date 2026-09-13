'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { securityCapabilities } from '@/lib/skills';
import { SectionHeading } from './SectionHeading';
import { SkillVisual } from './SkillVisual';

export function SecuritySkills() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="security" className="section section--security">
      <div className="shell">
        <SectionHeading eyebrow="01 / SECURITY" title="Cybersecurity" body="Security capabilities built around understanding exposure, analyzing signals, controlling access and reducing risk." />
        <div className="security-story glass-panel">
          <aside className="security-story__sticky">
            <span className="micro-label">ACTIVE CAPABILITY</span>
            <h3>{securityCapabilities[active].title}</h3>
            <div className="security-story__visual">
              <SkillVisual kind={securityCapabilities[active].kind} title={securityCapabilities[active].title} />
            </div>
            <p>{securityCapabilities[active].description}</p>
            <div className="security-story__dots" aria-label={`Capability ${active + 1} of ${securityCapabilities.length}`}>
              {securityCapabilities.map((_, i) => <i key={i} className={i === active ? 'is-active' : ''} />)}
            </div>
          </aside>
          <div className="security-story__list">
            {securityCapabilities.map((item, index) => (
              <motion.article
                key={item.title}
                className={`security-capability ${active === index ? 'is-active' : ''}`}
                onViewportEnter={() => setActive(index)}
                viewport={{ margin: '-38% 0px -38% 0px' }}
                initial={reduced ? false : { opacity: 0.35, y: 18 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                data-cursor="EXPLORE"
              >
                <div className="security-capability__index">0{index + 1}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="security-capability__mini">
                  <SkillVisual kind={item.kind} title={item.title} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
