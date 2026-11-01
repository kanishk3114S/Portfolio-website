import { PERSONAL_INFO, EDUCATION } from '@/data/portfolioData';
import { Mail, Code2, Link2, GitFork, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.08] bg-zinc-950 select-none">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="font-bold text-base text-white tracking-wider font-mono">
                KANISHK SHARMA
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-sans">
              4th-Year Computer Science student at VIT Bhopal building AI tools, full-stack systems, and competitive algorithms.
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-yellow-300 font-semibold">
                ACTIVE • RECRUITING 2026–27
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Education Metrics</h4>
            <div className="text-xs text-zinc-400 space-y-1">
              <p className="text-white font-medium">{EDUCATION.degree}</p>
              <p>{EDUCATION.university}</p>
              <p>{EDUCATION.period}</p>
              <p className="text-yellow-400 font-mono font-bold">Aggregate CGPA: {EDUCATION.cgpa}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Profiles & Links</h4>
            <div className="flex flex-col gap-1.5">
              {[
                { icon: <Mail size={13} />, label: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                { icon: <GitFork size={13} />, label: 'github.com/kanishk3114S', href: PERSONAL_INFO.githubUrl },
                { icon: <Link2 size={13} />, label: 'LinkedIn Profile', href: PERSONAL_INFO.linkedinUrl },
                { icon: <Code2 size={13} />, label: 'LeetCode Knight (1883)', href: PERSONAL_INFO.leetcodeUrl },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-yellow-300 transition-colors font-mono"
                >
                  <span className="text-yellow-400">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-zinc-500 font-mono">
            © 2026 {PERSONAL_INFO.name}. Next.js · Three.js · Tailwind v4.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-yellow-400 transition-colors font-mono tracking-wider"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
