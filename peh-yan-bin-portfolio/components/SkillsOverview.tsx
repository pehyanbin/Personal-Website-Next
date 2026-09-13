import { skillCategories } from '@/lib/skills';
import { GlassCard } from './GlassCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { SkillVisual } from './SkillVisual';

const visualMap: Record<string, string> = {
  security: 'shield',
  development: 'code',
  networking: 'network',
  toolkit: 'scan',
  systems: 'nodes',
  virtualization: 'vm',
  ai: 'ai'
};

export function SkillsOverview() {
  return (
    <section id="stack" className="section section--stack">
      <div className="shell">
        <SectionHeading eyebrow="MY TECHNICAL STACK" title="A capability map, not a résumé list." body="A visual overview of the technologies, systems, tools, and disciplines I work with." />
        <div className="overview-grid">
          {skillCategories.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <a href={`#${item.id === 'toolkit' ? 'toolkit' : item.id}`} className="card-link" aria-label={`Explore ${item.title}`}>
                <GlassCard className={`overview-card overview-card--${item.accent}`}>
                  <div className="overview-card__top">
                    <span className="overview-card__index">{item.index}</span>
                    <SkillVisual kind={visualMap[item.id]} title={item.title} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </GlassCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
