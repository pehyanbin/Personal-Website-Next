import { ComponentType } from 'react';
import { SiCisco, SiCplusplus, SiKalilinux, SiLinux, SiPython, SiVirtualbox, SiVmware, SiWindows11, SiWireshark } from 'react-icons/si';
import { Braces, Boxes, FileSearch2, Radar, ScanSearch } from 'lucide-react';

const simple: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  wireshark: SiWireshark,
  cisco: SiCisco,
  python: SiPython,
  cplusplus: SiCplusplus,
  linux: SiLinux,
  kali: SiKalilinux,
  windows: SiWindows11,
  vmware: SiVmware,
  virtualbox: SiVirtualbox
};

export function LogoMark({ icon, size = 42 }: { icon: string; size?: number }) {
  const C = simple[icon];
  if (C) return <C size={size} className="brand-icon" />;
  if (icon === 'csharp') return <span className="logo-monogram logo-monogram--csharp" style={{ fontSize: Math.max(15, size * 0.38) }}>C#</span>;
  if (icon === 'web') return <Braces size={size} className="brand-icon" />;
  if (icon === 'file') return <FileSearch2 size={size} className="brand-icon" />;
  if (icon === 'anyrun') return <Radar size={size} className="brand-icon" />;
  if (icon === 'idapro') return <ScanSearch size={size} className="brand-icon" />;
  if (icon === 'ghidra') return <Boxes size={size} className="brand-icon" />;
  return <span className="logo-monogram" style={{ fontSize: Math.max(13, size * 0.34) }}>{icon === 'hyperv' ? 'H-V' : icon === 'nmap' ? 'NM' : icon.slice(0, 3).toUpperCase()}</span>;
}
