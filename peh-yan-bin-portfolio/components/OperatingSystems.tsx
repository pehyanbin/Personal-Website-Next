import { systems } from '@/lib/skills';
import { GlassCard } from './GlassCard';
import { LogoMark } from './LogoMark';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function OperatingSystems() {
  return (
    <section id="systems" className="section">
      <div className="shell">
        <SectionHeading eyebrow="04 / SYSTEMS" title="Operating Environments" body="Comfort across general-purpose, development and security-focused operating environments." />
        <div className="systems-grid">
          {systems.map((system, i) => (
            <Reveal key={system.name} delay={i * 0.07}>
              <GlassCard className="system-card" cursor="VIEW">
                <div className="system-card__icon"><LogoMark icon={system.icon} size={58} /></div>
                <div>
                  <span className="micro-label">OPERATING SYSTEM</span>
                  <h3>{system.name}</h3>
                  <div className="system-topics">
                    {system.topics.map(topic => <span key={topic}>{topic}</span>)}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
