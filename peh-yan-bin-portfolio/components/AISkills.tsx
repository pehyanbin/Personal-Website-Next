'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { aiSkills } from '@/lib/skills';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const nodes = [
  [80, 58], [180, 26], [180, 91], [285, 45], [285, 108], [400, 29], [400, 83], [510, 58]
];
const edges = [[0,1],[0,2],[1,3],[1,4],[2,3],[2,4],[3,5],[3,6],[4,5],[4,6],[5,7],[6,7]];

export function AISkills() {
  const reduced = useReducedMotion();
  return (
    <section id="ai" className="section section--ai">
      <div className="shell">
        <SectionHeading eyebrow="05 / AI" title="Artificial Intelligence" body="Working with generative AI, agentic application development and deep-learning concepts as part of modern software workflows." />
        <Reveal>
          <div className="ai-panel glass-panel">
            <div className="ai-panel__visual">
              <svg viewBox="0 0 590 140" role="img" aria-label="Animated neural network diagram">
                <title>Artificial intelligence neural network</title>
                <desc>Connected nodes representing generative AI, agentic applications, automation and deep-learning concepts.</desc>
                {edges.map(([a,b], i) => (
                  <motion.line
                    key={i}
                    x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
                    className="ai-edge"
                    initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.035 }}
                  />
                ))}
                {nodes.map(([cx,cy], i) => (
                  <motion.g key={i} animate={reduced ? undefined : { opacity: [0.72,1,0.72] }} transition={{ duration: 3.5 + i * .2, repeat: Infinity, ease: 'easeInOut' }}>
                    <circle cx={cx} cy={cy} r="15" className="ai-node__halo" />
                    <circle cx={cx} cy={cy} r="7" className="ai-node" />
                  </motion.g>
                ))}
              </svg>
              <div className="ai-floating-chips" aria-hidden="true">
                <span>GENERATIVE AI</span><span>AGENTIC AI</span><span>AUTOMATION</span><span>DEEP LEARNING</span><span>AI APPLICATIONS</span>
              </div>
            </div>
            <div className="ai-panel__copy">
              <span className="micro-label">AI CAPABILITY LAYER</span>
              <h3>From model interaction to application behavior.</h3>
              <p>AI is most useful when it becomes part of a dependable system: prompting, orchestration, automation, application logic and thoughtful evaluation.</p>
              <div className="ai-skill-list">
                {aiSkills.map((skill, i) => <span key={skill}><b>0{i+1}</b>{skill}</span>)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
