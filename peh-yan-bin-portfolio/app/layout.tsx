import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Peh Yan Bin — Cybersecurity Student & Developer',
  description: 'Technical skills portfolio for Peh Yan Bin across cybersecurity, networking, development, systems, virtualization and AI.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
