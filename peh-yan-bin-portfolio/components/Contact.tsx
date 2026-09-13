'use client';

import { Check, Copy, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('pehyanbin@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = 'mailto:pehyanbin@gmail.com';
    }
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="shell">
        <Reveal>
          <div className="contact-panel glass-panel">
            <div className="contact-copy">
              <div className="eyebrow">LET&apos;S CONNECT</div>
              <h2>Interested in cybersecurity, networking, software development, and AI opportunities.</h2>
              <p>Open to conversations where security-minded engineering, systems understanding and practical technical curiosity are useful.</p>
            </div>
            <div className="contact-actions">
              <button onClick={copyEmail} className="contact-button" data-cursor="COPY" aria-label="Copy email address">
                <span className="contact-button__icon"><Mail size={21} /></span>
                <span><small>EMAIL</small><strong>pehyanbin@gmail.com</strong></span>
                <span className="contact-button__action">{copied ? <><Check size={16}/> COPIED</> : <><Copy size={16}/> COPY</>}</span>
              </button>
              <a href="https://www.linkedin.com/in/peh-yan-bin-7812082a1/" target="_blank" rel="noreferrer" className="contact-button" data-cursor="OPEN ↗">
                <span className="contact-button__icon"><Linkedin size={21} /></span>
                <span><small>LINKEDIN</small><strong>Peh Yan Bin</strong></span>
                <span className="contact-button__action">OPEN <ArrowUpRight size={16}/></span>
              </a>
              <a href="https://github.com/pehyanbin" target="_blank" rel="noreferrer" className="contact-button" data-cursor="OPEN ↗">
                <span className="contact-button__icon"><Github size={21} /></span>
                <span><small>GITHUB</small><strong>pehyanbin</strong></span>
                <span className="contact-button__action">OPEN <ArrowUpRight size={16}/></span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
