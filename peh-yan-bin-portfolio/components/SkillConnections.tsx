'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const chains = [
  ['NETWORKING', 'NETWORK SECURITY', 'NETWORK SCANNING', 'THREAT ANALYSIS'],
  ['PROGRAMMING', 'PYTHON', 'AI', 'AUTOMATION'],
  ['OPERATING SYSTEMS', 'LINUX', 'KALI LINUX', 'SECURITY TOOLING']
];

export function SkillConnections() {
  const reduced = useReducedMotion();
  return (
    <section id="connections" className="section section--connections">
      <div className="shell">
        <SectionHeading eyebrow="EVERY SKILL CONNECTS" title="Capabilities become stronger when they reinforce one another." body="Networking informs security. Programming enables automation. Operating systems provide the environment where tools, services and applications actually run." />
        <div className="connection-grid">
          {chains.map((chain, chainIndex) => (
            <Reveal key={chain[0]} delay={chainIndex * .08}>
              <div className="connection-chain glass-panel">
                {chain.map((item, i) => (
                  <div key={item} className="connection-chain__row">
                    <motion.div
                      className="connection-node"
                      initial={reduced ? false : { opacity: 0, scale: .92 }}
                      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * .11 }}
                    >
                      <span>0{i+1}</span><strong>{item}</strong>
                    </motion.div>
                    {i < chain.length - 1 ? (
                      <motion.div
                        className="connection-line"
                        initial={reduced ? false : { scaleY: 0 }}
                        whileInView={reduced ? undefined : { scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .06 + i * .11, duration: .45 }}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
