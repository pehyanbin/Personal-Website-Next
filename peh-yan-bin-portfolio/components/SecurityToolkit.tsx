import { securityTools } from '@/lib/skills';
import { LogoMark } from './LogoMark';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function SecurityToolkit() {
  return (
    <section id="toolkit" className="section section--compact">
      <div className="shell">
        <SectionHeading eyebrow="SECURITY TOOLKIT" title="Analysis tools, arranged like an app library." body="A practical toolkit spanning packet analysis, network discovery, simulation, reverse engineering and dynamic analysis." />
        <div className="tool-grid">
          {securityTools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.045}>
              <article className="tool-app" data-cursor="VIEW" tabIndex={0} aria-label={`${tool.name}: ${tool.detail}`}>
                <div className="tool-app__icon">
                  <LogoMark icon={tool.icon} size={46} />
                  <div className="tool-app__tooltip" role="tooltip">{tool.detail}</div>
                </div>
                <strong>{tool.name}</strong>
                <span>{tool.category}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
