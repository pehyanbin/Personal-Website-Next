'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function SkillVisual({ kind, title }: { kind: string; title: string }) {
  const reduced = useReducedMotion();
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  const draw = reduced ? {} : {
    initial: { pathLength: 0, opacity: 0.45 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.3, ease: 'easeOut' }
  };

  return (
    <svg className="skill-visual" viewBox="0 0 160 120" role="img" aria-label={`${title} visual`}>
      <title>{title}</title>
      <desc>Abstract line illustration representing {title}.</desc>
      {kind === 'scan' && <>
        <motion.path {...draw} {...common} d="M80 18 123 34v28c0 26-18 40-43 51-25-11-43-25-43-51V34Z" />
        <motion.path {...draw} {...common} d="M54 55h52M54 67h38M58 80h20" />
        <motion.path {...draw} {...common} d="M48 46v42M112 46v42" opacity=".35" />
      </>}
      {kind === 'nodes' && <>
        <motion.path {...draw} {...common} d="M42 39 80 60l38-21M42 39v43l38 22 38-22V39" />
        {[['42','39'],['80','60'],['118','39'],['42','82'],['80','104'],['118','82']].map(([cx,cy]) => <motion.circle key={cx+cy} {...draw} {...common} cx={cx} cy={cy} r="7" />)}
        <motion.circle {...draw} {...common} cx="80" cy="60" r="21" opacity=".35" />
      </>}
      {kind === 'radar' && <>
        <motion.circle {...draw} {...common} cx="80" cy="60" r="39" />
        <motion.circle {...draw} {...common} cx="80" cy="60" r="25" opacity=".55" />
        <motion.circle {...draw} {...common} cx="80" cy="60" r="10" opacity=".4" />
        <motion.path {...draw} {...common} d="M80 60 108 35M80 21v78M41 60h78" opacity=".6" />
        <motion.circle {...draw} {...common} cx="101" cy="44" r="4" />
      </>}
      {kind === 'lock' && <>
        <motion.rect {...draw} {...common} x="52" y="52" width="56" height="48" rx="13" />
        <motion.path {...draw} {...common} d="M64 52V39c0-11 7-20 16-20s16 9 16 20v13" />
        <motion.circle {...draw} {...common} cx="80" cy="72" r="5" />
        <motion.path {...draw} {...common} d="M80 77v10" />
        <motion.circle {...draw} {...common} cx="37" cy="75" r="7" opacity=".45" />
        <motion.circle {...draw} {...common} cx="123" cy="75" r="7" opacity=".45" />
        <motion.path {...draw} {...common} d="M44 75h8M108 75h8" opacity=".45" />
      </>}
      {kind === 'shield' && <>
        <motion.path {...draw} {...common} d="M80 17 125 34v29c0 26-18 41-45 52-27-11-45-26-45-52V34Z" />
        <motion.path {...draw} {...common} d="M80 29 113 41v22c0 19-12 30-33 40-21-10-33-21-33-40V41Z" opacity=".55" />
        <motion.path {...draw} {...common} d="m64 61 11 11 22-25" />
      </>}
      {kind === 'timeline' && <>
        <motion.path {...draw} {...common} d="M31 80h98" />
        <motion.circle {...draw} {...common} cx="45" cy="80" r="8" />
        <motion.circle {...draw} {...common} cx="80" cy="80" r="8" />
        <motion.circle {...draw} {...common} cx="115" cy="80" r="8" />
        <motion.path {...draw} {...common} d="M80 30v26M68 43h24" />
        <motion.circle {...draw} {...common} cx="80" cy="43" r="23" opacity=".35" />
      </>}
      {kind === 'code' && <>
        <motion.path {...draw} {...common} d="m60 39-24 21 24 21M100 39l24 21-24 21M91 28 69 93" />
        <motion.rect {...draw} {...common} x="19" y="16" width="122" height="88" rx="18" opacity=".3" />
      </>}
      {kind === 'network' && <>
        <motion.circle {...draw} {...common} cx="80" cy="59" r="13" />
        {[['34','35'],['126','35'],['34','86'],['126','86']].map(([cx,cy]) => <motion.circle key={cx+cy} {...draw} {...common} cx={cx} cy={cy} r="9" />)}
        <motion.path {...draw} {...common} d="M45 40 68 53M115 40 92 53M44 82 68 66M116 82 92 66" />
      </>}
      {kind === 'vm' && <>
        <motion.rect {...draw} {...common} x="39" y="25" width="82" height="48" rx="10" />
        <motion.rect {...draw} {...common} x="28" y="48" width="104" height="48" rx="10" opacity=".58" />
        <motion.rect {...draw} {...common} x="17" y="72" width="126" height="33" rx="10" opacity=".35" />
      </>}
      {kind === 'ai' && <>
        {[[34,37],[34,82],[80,25],[80,60],[80,97],[126,37],[126,82]].map(([cx,cy],i) => <motion.circle key={i} {...draw} {...common} cx={cx} cy={cy} r="7" />)}
        <motion.path {...draw} {...common} d="M41 37 73 25M41 37l32 23M41 82l32-22M41 82l32 15M87 25l32 12M87 25l32 57M87 60l32-23M87 60l32 22M87 97l32-15" opacity=".7" />
      </>}
    </svg>
  );
}
