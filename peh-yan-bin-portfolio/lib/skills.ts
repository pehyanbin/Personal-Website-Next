export type SkillCategory = {
  id: string;
  index: string;
  title: string;
  summary: string;
  accent: string;
};

export const skillCategories: SkillCategory[] = [
  { id: 'security', index: '01', title: 'Cybersecurity', summary: 'Assessment, analysis, hardening and incident-response fundamentals.', accent: 'blue' },
  { id: 'development', index: '02', title: 'Programming & Development', summary: 'Python, C++, C# and web development for software, automation and experimentation.', accent: 'indigo' },
  { id: 'networking', index: '03', title: 'Networking', summary: 'Addressing, subnetting, routing, switching, segmentation and secure connectivity.', accent: 'cyan' },
  { id: 'toolkit', index: '04', title: 'Security Tools', summary: 'Network inspection, scanning, reverse engineering and dynamic analysis tooling.', accent: 'violet' },
  { id: 'systems', index: '05', title: 'Operating Systems', summary: 'Linux, Windows and Kali Linux across development and security workflows.', accent: 'blue' },
  { id: 'virtualization', index: '06', title: 'Virtualization', summary: 'VMware, VirtualBox and Hyper-V for isolated and repeatable environments.', accent: 'indigo' },
  { id: 'ai', index: '07', title: 'Artificial Intelligence', summary: 'Generative AI, agentic AI application development and deep-learning concepts.', accent: 'cyan' }
];

export const securityCapabilities = [
  { title: 'Vulnerability Assessment', description: 'Identifying and assessing weaknesses within systems and applications.', kind: 'scan' },
  { title: 'Network Scanning', description: 'Understanding hosts, services, network exposure, and network structure.', kind: 'nodes' },
  { title: 'Threat Analysis', description: 'Analyzing technical indicators and identifying potential security risks.', kind: 'radar' },
  { title: 'Access Control', description: 'Understanding security permissions, authorization, and system access concepts.', kind: 'lock' },
  { title: 'Security Hardening', description: 'Strengthening systems and reducing unnecessary attack surface.', kind: 'shield' },
  { title: 'Incident Response Fundamentals', description: 'Understanding foundational processes for identifying, investigating, and responding to security incidents.', kind: 'timeline' }
];

export const securityTools = [
  { name: 'Wireshark', category: 'NETWORK ANALYSIS', detail: 'Packet inspection & network traffic analysis', icon: 'wireshark' },
  { name: 'Nmap', category: 'NETWORK DISCOVERY', detail: 'Host, port & service discovery', icon: 'nmap' },
  { name: 'Cisco Packet Tracer', category: 'NETWORK SIMULATION', detail: 'Network design, switching & routing simulation', icon: 'cisco' },
  { name: 'DiE', category: 'FILE ANALYSIS', detail: 'Executable format & packer inspection', icon: 'file' },
  { name: 'IDA Pro', category: 'REVERSE ENGINEERING', detail: 'Static analysis & disassembly workflows', icon: 'idapro' },
  { name: 'Ghidra', category: 'REVERSE ENGINEERING', detail: 'Program analysis & decompilation', icon: 'ghidra' },
  { name: 'ANY.RUN', category: 'DYNAMIC ANALYSIS', detail: 'Interactive malware sandbox analysis', icon: 'anyrun' }
];

export const developmentSkills = [
  { name: 'Python', category: 'Programming / Automation / AI', uses: ['Automation', 'Scripting', 'AI workflows', 'Technical experimentation'], icon: 'python' },
  { name: 'C++', category: 'Systems / Programming', uses: ['Systems thinking', 'Algorithms', 'Low-level concepts', 'Security-oriented coding'], icon: 'cplusplus' },
  { name: 'C#', category: 'Software Development', uses: ['Application logic', 'Object-oriented development', 'Desktop/software concepts'], icon: 'csharp' },
  { name: 'Web Development', category: 'Frontend / Backend Concepts', uses: ['Web interfaces', 'Responsive layouts', 'Application architecture', 'API integration concepts'], icon: 'web' }
];

export const networkingNodes = [
  { name: 'IPv4', meta: 'ADDRESSING', detail: 'Address structure and host/network identification.', x: 145, y: 70 },
  { name: 'Subnetting', meta: 'NETWORK DESIGN', detail: 'Dividing address space into manageable network segments.', x: 360, y: 50 },
  { name: 'Routing', meta: 'PATH SELECTION', detail: 'How traffic moves between distinct networks.', x: 585, y: 85 },
  { name: 'DHCP', meta: 'CONFIGURATION', detail: 'Automatic assignment of network configuration to clients.', x: 655, y: 230 },
  { name: 'SSH', meta: 'SECURE ACCESS', detail: 'Encrypted remote access to systems and infrastructure.', x: 590, y: 390 },
  { name: 'NAT', meta: 'ADDRESS TRANSLATION', detail: 'Translating address spaces across network boundaries.', x: 365, y: 440 },
  { name: 'LAN', meta: 'LOCAL NETWORK', detail: 'Local connectivity and switching fundamentals.', x: 140, y: 395 },
  { name: 'VLAN', meta: 'NETWORK SEGMENTATION', detail: 'Logical separation of devices within network infrastructure.', x: 75, y: 235 },
  { name: 'ACL', meta: 'TRAFFIC CONTROL', detail: 'Rule-based control over permitted network traffic.', x: 365, y: 155 },
  { name: 'Network Security', meta: 'PROTECTION', detail: 'Security principles applied across network architecture.', x: 365, y: 330 }
];

export const networkingPills = [
  'IPv4 Addressing', 'Subnetting', 'Routing Protocols', 'DHCP', 'SSH', 'NAT', 'LAN', 'Switch & Router Configuration', 'VLAN', 'Access Control Lists', 'Network Security'
];

export const systems = [
  { name: 'Linux', topics: ['Command line', 'System administration concepts', 'Security tooling', 'Development environment'], icon: 'linux' },
  { name: 'Kali Linux', topics: ['Security analysis', 'Penetration-testing environment', 'Network investigation', 'Cybersecurity tooling'], icon: 'kali' },
  { name: 'Windows', topics: ['Desktop environment', 'System configuration', 'Security fundamentals'], icon: 'windows' }
];

export const virtualization = [
  { name: 'VMware', icon: 'vmware' },
  { name: 'VirtualBox', icon: 'virtualbox' },
  { name: 'Hyper-V', icon: 'hyperv' }
];

export const aiSkills = ['Generative AI', 'Agentic AI Application Development', 'Artificial Intelligence', 'Deep Learning Concepts', 'AI-assisted Development'];

export const orbitSkills: Record<string, string[]> = {
  Cybersecurity: ['Vulnerability Assessment', 'Threat Analysis', 'Network Security', 'Malware Analysis', 'Reverse Engineering', 'Security Hardening'],
  Networking: ['Subnetting', 'Routing', 'VLAN', 'ACL', 'NAT', 'DHCP'],
  Programming: ['Python', 'C++', 'C#', 'Automation', 'Web Development'],
  Linux: ['Command Line', 'Security Tooling', 'Kali Linux', 'System Concepts'],
  AI: ['Generative AI', 'Agentic AI', 'Deep Learning', 'AI-assisted Development'],
  'Reverse Engineering': ['IDA Pro', 'Ghidra', 'DiE', 'Static Analysis'],
  'Web Development': ['Interfaces', 'Responsive UI', 'Frontend / Backend Concepts'],
  Virtualization: ['VMware', 'VirtualBox', 'Hyper-V', 'Isolated Environments']
};
