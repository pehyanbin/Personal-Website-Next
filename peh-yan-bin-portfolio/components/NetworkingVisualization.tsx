'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { networkingNodes, networkingPills } from '@/lib/skills';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function NetworkingVisualization() {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const center = { x: 365, y: 250 };

  return (
    <section id="networking" className="section section--networking">
      <div className="shell">
        <SectionHeading eyebrow="03 / NETWORKING" title="Understanding How Systems Connect" body="A network is more than devices and cables—it is addressing, segmentation, control, routing and secure communication working together." />
        <Reveal>
          <div className="network-panel glass-panel">
            <div className="network-panel__legend">
              <span><i /> ACTIVE LINK</span>
              <span>INTERACTIVE TOPOLOGY</span>
            </div>
            <div className="network-svg-wrap">
              <svg viewBox="0 0 730 500" className="network-svg" role="img" aria-label="Interactive networking skill topology">
                <title>Networking skill topology</title>
                <desc>Network concepts including IPv4, subnetting, routing, DHCP, SSH, NAT, LAN, VLAN, ACL and network security connected to a central network node.</desc>
                <defs>
                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                {networkingNodes.map(node => (
                  <motion.line
                    key={`line-${node.name}`}
                    x1={center.x} y1={center.y} x2={node.x} y2={node.y}
                    className={hovered === node.name ? 'network-line is-active' : 'network-line'}
                    initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.08 }}
                  />
                ))}
                <g className="network-core">
                  <circle cx={center.x} cy={center.y} r="78" className="network-core__halo" />
                  <circle cx={center.x} cy={center.y} r="58" className="network-core__glass" />
                  <text x={center.x} y={center.y - 4} textAnchor="middle" className="network-core__label">NETWORK</text>
                  <text x={center.x} y={center.y + 18} textAnchor="middle" className="network-core__meta">SYSTEMS CONNECT</text>
                </g>
                {networkingNodes.map(node => (
                  <g
                    key={node.name}
                    className="network-node"
                    onMouseEnter={() => setHovered(node.name)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(node.name)}
                    onBlur={() => setHovered(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${node.name}: ${node.detail}`}
                    data-cursor="EXPLORE"
                  >
                    <circle cx={node.x} cy={node.y} r="44" className={hovered === node.name ? 'network-node__circle is-active' : 'network-node__circle'} />
                    <text x={node.x} y={node.y + 5} textAnchor="middle" className="network-node__label">{node.name}</text>
                  </g>
                ))}
              </svg>
              {hovered ? (
                <div className="network-tooltip" role="status">
                  <span>{networkingNodes.find(n => n.name === hovered)?.meta}</span>
                  <strong>{hovered}</strong>
                  <p>{networkingNodes.find(n => n.name === hovered)?.detail}</p>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
        <div className="network-pills" aria-label="Networking skills">
          {networkingPills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.035, duration: 0.4 }}
            >{pill}</motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
