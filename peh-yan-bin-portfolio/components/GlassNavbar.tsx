'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  ['Overview', 'overview'],
  ['Security', 'security'],
  ['Development', 'development'],
  ['Networking', 'networking'],
  ['Systems', 'systems'],
  ['AI', 'ai'],
  ['Contact', 'contact']
] as const;

export function GlassNavbar() {
  const [active, setActive] = useState('overview');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-32% 0px -56% 0px', threshold: [0, 0.2, 0.5, 0.8] }
    );
    sections.forEach(section => observer.observe(section));
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary navigation">
        <a href="#overview" className="navbar__brand" aria-label="Peh Yan Bin home" data-cursor="HOME">YB.</a>
        <div className="navbar__links">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} data-cursor="VIEW">
              <span>{label}</span>
            </a>
          ))}
        </div>
        <button className="navbar__menu" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={active === id ? 'is-active' : ''}>{label}</a>
        ))}
      </div>
    </>
  );
}
