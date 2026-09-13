import { Binary, FileSearch2, Layers3 } from 'lucide-react';
import { Reveal } from './Reveal';
import { LogoMark } from './LogoMark';

function Flow({ type }: { type: 'reverse' | 'malware' }) {
  if (type === 'reverse') {
    return (
      <div className="analysis-flow" aria-label="Binary to assembly to program structure">
        <div><Binary size={24} /><span>BINARY</span></div><i />
        <div><span className="asm-mark">ASM</span><span>ASSEMBLY</span></div><i />
        <div><Layers3 size={24} /><span>STRUCTURE</span></div>
      </div>
    );
  }
  return (
    <div className="analysis-flow" aria-label="File to analysis to behavior to technical findings">
      <div><FileSearch2 size={24} /><span>FILE</span></div><i />
      <div><span className="analysis-ring" /><span>ANALYSIS</span></div><i />
      <div><Layers3 size={24} /><span>FINDINGS</span></div>
    </div>
  );
}

export function DeepAnalysis() {
  return (
    <section className="section section--compact">
      <div className="shell feature-pair">
        <Reveal>
          <article className="feature-card glass-panel" data-cursor="EXPLORE">
            <div className="eyebrow">STATIC ANALYSIS</div>
            <h3>Reverse Engineering</h3>
            <p>Understanding program structure through static analysis, disassembly and decompilation workflows.</p>
            <Flow type="reverse" />
            <div className="feature-tools">
              <span><LogoMark icon="idapro" size={20} /> IDA Pro</span>
              <span><LogoMark icon="ghidra" size={20} /> Ghidra</span>
              <span><LogoMark icon="file" size={20} /> DiE</span>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="feature-card glass-panel" data-cursor="EXPLORE">
            <div className="eyebrow">INVESTIGATIVE WORKFLOW</div>
            <h3>Malware Analysis</h3>
            <p>Examining files, behavior and technical indicators using clean investigative workflows and analysis tooling.</p>
            <Flow type="malware" />
            <div className="feature-tools">
              <span><LogoMark icon="anyrun" size={20} /> ANY.RUN</span>
              <span><LogoMark icon="ghidra" size={20} /> Ghidra</span>
              <span><LogoMark icon="idapro" size={20} /> IDA Pro</span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
