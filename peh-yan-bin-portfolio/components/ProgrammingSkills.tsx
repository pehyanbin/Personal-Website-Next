import { developmentSkills } from '@/lib/skills';
import { GlassCard } from './GlassCard';
import { LogoMark } from './LogoMark';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ProgrammingSkills() {
  return (
    <section id="development" className="section">
      <div className="shell">
        <SectionHeading eyebrow="02 / DEVELOPMENT" title="Programming & Development" body="Languages and development environments used for automation, systems thinking, software development and AI-assisted experimentation." />
        <div className="dev-grid">
          {developmentSkills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.06}>
              <GlassCard className={`dev-card ${skill.name === 'Python' ? 'dev-card--wide dev-card--code' : ''}`} cursor="VIEW">
                <div className="dev-card__head">
                  <div className="brand-badge"><LogoMark icon={skill.icon} size={44} /></div>
                  <span className="micro-label">{skill.category}</span>
                </div>
                <div>
                  <h3>{skill.name}</h3>
                  <div className="dev-card__rule" />
                  <div className="micro-label">USED FOR</div>
                  <div className="use-chips">
                    {skill.uses.map(use => <span key={use}>{use}</span>)}
                  </div>
                </div>
                {skill.name === 'Python' ? (
                  <div className="code-ghost" aria-hidden="true">
                    <code>def explore(system):</code>
                    <code>&nbsp;&nbsp;observe()</code>
                    <code>&nbsp;&nbsp;analyze()</code>
                    <code>&nbsp;&nbsp;automate()</code>
                  </div>
                ) : null}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
