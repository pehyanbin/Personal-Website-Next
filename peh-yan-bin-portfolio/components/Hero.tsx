'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { PointerEvent } from 'react';
import { MagneticButton } from './MagneticButton';
import { FloatingSkillPills } from './FloatingSkillPills';

export function Hero() {
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 24 });
  const y = useSpring(rawY, { stiffness: 120, damping: 24 });

  function move(e: PointerEvent<HTMLElement>) {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - r.left) / r.width - 0.5) * 2.5);
    rawY.set(((e.clientY - r.top) / r.height - 0.5) * 2.5);
  }

  return (
    <section id="overview" className="hero" onPointerMove={move}>
      <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--two" aria-hidden="true" />
      <FloatingSkillPills tiltX={x.get()} tiltY={y.get()} />
      <div className="shell hero__grid">
        <motion.div
          className="hero__copy"
          initial={reduced ? false : { opacity: 0, y: 26 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow">CYBERSECURITY × NETWORKING × DEVELOPMENT × AI</div>
          <h1 className="hero__name">PEH YAN BIN</h1>
          <p className="hero__headline">I understand systems<br />by learning how they work,<br /><span>connect and break.</span></p>
          <p className="hero__intro">Final-year Computer Science student specializing in Cybersecurity, with hands-on experience across security analysis, networking, programming, Linux, reverse engineering, virtualization, web development, and artificial intelligence.</p>
          <div className="hero__actions">
            <MagneticButton href="#stack" cursor="EXPLORE" className="magnetic-button--primary">Explore Skills <ArrowDown size={17} /></MagneticButton>
            <MagneticButton href="#contact" cursor="CONNECT">Contact <ArrowUpRight size={17} /></MagneticButton>
          </div>
          <div className="hero__micro">
            <span>Cybersecurity Student & Developer</span>
            <span aria-hidden="true">•</span>
            <span>Security-minded systems learner</span>
          </div>
        </motion.div>

        <motion.div
          className="hero__portrait-wrap"
          style={reduced ? undefined : { rotateX: y, rotateY: x }}
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait glass-card">
            <div className="hero__portrait-topline">
              <span><i /> SYSTEMS / SECURITY</span>
              <span>YB.01</span>
            </div>
            <div className="hero__image-frame">
              <Image
                src="/peh-yan-bin.jpg"
                alt="Portrait of Peh Yan Bin"
                fill
                priority
                sizes="(max-width: 900px) 88vw, 36vw"
                className="hero__image"
              />
              <div className="hero__image-vignette" aria-hidden="true" />
            </div>
            <div className="hero__portrait-bottom">
              <div>
                <span className="micro-label">CORE FOCUS</span>
                <strong>Security-minded engineering</strong>
              </div>
              <div className="signal-bars" aria-label="Active technical profile">
                <i /><i /><i /><i />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
