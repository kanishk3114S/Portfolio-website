'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Send, Check, AlertCircle, GitFork, Link2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(60),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject is required').max(100),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
  _honeypot: z.string().max(0, 'Bot detected'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    if (data._honeypot) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, subject: data.subject, message: data.message }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-24 select-none overflow-hidden">
      {/* Seamless Atmospheric Theme Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/themes/marvels-spider-man-playstation-4-playstation-5-pc-games-3840x2160-8937.jpg"
          alt="Atmospheric theme background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 mix-blend-luminosity brightness-70 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1013] via-[#0e1013]/85 to-[#0e1013]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0e1013_85%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-yellow-400/30 text-xs font-mono text-yellow-300 mb-2.5 shadow-sm">
              <MessageSquare size={13} className="text-yellow-400" />
              <span>// GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s <span className="text-yellow-400">Connect</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-md leading-relaxed">
              Open to full-time software engineering roles, impactful AI projects, and technical discussions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-xl flex flex-col gap-4">
              <h3 className="font-bold text-white text-base">Contact Information</h3>

              <div className="flex flex-col gap-3">
                {[
                  { icon: <Mail size={15} />, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                  { icon: <GitFork size={15} />, label: 'GitHub', value: PERSONAL_INFO.github, href: PERSONAL_INFO.githubUrl },
                  { icon: <Link2 size={15} />, label: 'LinkedIn', value: PERSONAL_INFO.linkedin, href: PERSONAL_INFO.linkedinUrl },
                  { icon: <MapPin size={15} />, label: 'Location', value: 'India • Open to Remote & Relocation' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-950 border border-white/10 text-yellow-400 group-hover:border-yellow-400/40 transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-zinc-200 hover:text-yellow-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-zinc-300">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/80 border border-yellow-400/20">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-yellow-300 font-bold">HIRING AVAILABILITY</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-400">Graduating Aug 2027</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Available for full-time engineering offers as a <span className="text-white font-medium">Full-Stack Engineer</span> or{' '}
                <span className="text-white font-medium">Applied GenAI Developer</span>.
              </p>
            </div>
          </motion.div>

          {/* Right: Modern Form in Slate & Yellow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-xl flex flex-col gap-3.5"
              noValidate
            >
              <h3 className="font-bold text-white text-base mb-1">
                Direct Dispatch Transmission
              </h3>

              <input {...register('_honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[11px] font-mono text-zinc-400 uppercase">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alex Mercer"
                    {...register('name')}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-zinc-600 bg-zinc-950 border border-white/10 outline-none focus:border-yellow-400 transition-colors"
                  />
                  {errors.name && <span className="text-[10px] text-rose-400 flex items-center gap-1"><AlertCircle size={9} />{errors.name.message}</span>}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[11px] font-mono text-zinc-400 uppercase">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register('email')}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-zinc-600 bg-zinc-950 border border-white/10 outline-none focus:border-yellow-400 transition-colors"
                  />
                  {errors.email && <span className="text-[10px] text-rose-400 flex items-center gap-1"><AlertCircle size={9} />{errors.email.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-[11px] font-mono text-zinc-400 uppercase">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Full-Stack Engineer Opportunity"
                  {...register('subject')}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-zinc-600 bg-zinc-950 border border-white/10 outline-none focus:border-yellow-400 transition-colors"
                />
                {errors.subject && <span className="text-[10px] text-rose-400 flex items-center gap-1"><AlertCircle size={9} />{errors.subject.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-[11px] font-mono text-zinc-400 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Hey Kanishk, I came across your portfolio and wanted to discuss..."
                  {...register('message')}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-zinc-600 bg-zinc-950 border border-white/10 outline-none focus:border-yellow-400 transition-colors resize-none"
                />
                {errors.message && <span className="text-[10px] text-rose-400 flex items-center gap-1"><AlertCircle size={9} />{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-1 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-black disabled:opacity-50 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-yellow-500/20 cursor-pointer active:scale-99"
              >
                {status === 'loading' ? (
                  <span>Transmitting...</span>
                ) : status === 'success' ? (
                  <>
                    <Check size={13} />
                    <span>Transmission Delivered</span>
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-[11px] text-rose-400 text-center font-mono">
                  Failed to transmit. Please contact chesssynid@gmail.com directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
