'use client';

import { useState } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import ResumeSwitcherModal from '@/components/ui/ResumeSwitcherModal';
import Magnetic from '@/components/ui/Magnetic';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#journey' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'LEETCODE', href: '#algorithmic-vault' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'HONORS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 px-4 pointer-events-none select-none">
        <nav className="max-w-4xl mx-auto rounded-full bg-zinc-950/90 backdrop-blur-xl border border-white/10 px-5 py-2.5 flex items-center justify-between shadow-2xl shadow-black/80 pointer-events-auto">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-yellow-400 transition-colors tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span>KANISHK SHARMA</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] font-mono tracking-wider text-zinc-300 hover:text-yellow-400 transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Hub */}
          <div className="flex items-center gap-2.5">
            <Magnetic strength={0.2} maxDistance={6}>
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-black transition-all shadow-md shadow-yellow-500/10 cursor-pointer active:scale-98"
              >
                <FileText size={12} />
                <span>RESUME</span>
              </button>
            </Magnetic>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 max-w-xs mx-auto rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-yellow-400/30 p-4 shadow-2xl flex flex-col gap-2 pointer-events-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono tracking-wider text-zinc-200 hover:text-yellow-400 py-1.5 border-b border-white/[0.06] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={12} className="text-zinc-500" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setResumeOpen(true);
              }}
              className="mt-1 w-full py-2 rounded-xl text-xs font-bold bg-yellow-400 text-black hover:bg-yellow-300 transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <FileText size={13} />
              <span>VIEW RESUMES</span>
            </button>
          </div>
        )}
      </header>

      {resumeOpen && <ResumeSwitcherModal onClose={() => setResumeOpen(false)} />}
    </>
  );
}
