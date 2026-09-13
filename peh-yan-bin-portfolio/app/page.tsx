import { GlassNavbar } from '@/components/GlassNavbar';
import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/Hero';
import { SkillsOverview } from '@/components/SkillsOverview';
import { SecuritySkills } from '@/components/SecuritySkills';
import { SecurityToolkit } from '@/components/SecurityToolkit';
import { DeepAnalysis } from '@/components/DeepAnalysis';
import { ProgrammingSkills } from '@/components/ProgrammingSkills';
import { NetworkingVisualization } from '@/components/NetworkingVisualization';
import { OperatingSystems } from '@/components/OperatingSystems';
import { Virtualization } from '@/components/Virtualization';
import { AISkills } from '@/components/AISkills';
import { SkillOrbit } from '@/components/SkillOrbit';
import { SkillConnections } from '@/components/SkillConnections';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className="page-ambient page-ambient--top" aria-hidden="true" />
      <div className="page-ambient page-ambient--mid" aria-hidden="true" />
      <div className="page-grain" aria-hidden="true" />
      <CustomCursor />
      <GlassNavbar />
      <Hero />
      <SkillsOverview />
      <SecuritySkills />
      <SecurityToolkit />
      <DeepAnalysis />
      <ProgrammingSkills />
      <NetworkingVisualization />
      <OperatingSystems />
      <Virtualization />
      <AISkills />
      <SkillOrbit />
      <SkillConnections />
      <Contact />
      <Footer />
    </main>
  );
}
