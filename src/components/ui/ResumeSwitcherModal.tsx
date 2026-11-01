'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const RESUMES = [
  {
    id: 'fullstack',
    title: 'Full-Stack + Applied AI Resume',
    subtitle: 'Next.js · MERN · Scalable REST APIs · OpenAI',
    description: 'Focuses on production full-stack engineering across Next.js, React, Node.js, Express, MongoDB, secure auth, and applied AI integrations.',
    file: '/resumes/KanishkSharma_FullStack.pdf',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'OpenAI'],
  },
  {
    id: 'genai',
    title: 'Generative AI Resume',
    subtitle: 'RAG · LangChain · Pinecone · Gemini API',
    description: 'Emphasizes autonomous multi-hop AI agents, vector retrieval with Pinecone (768-dim), LangChain pipelines, and zero-hallucination grounding.',
    file: '/resumes/KanishkSharma_GenAI.pdf',
    tags: ['LangChain', 'RAG', 'Pinecone', 'Gemini API', 'Vector Search', 'LLMs'],
  },
];

export default function ResumeSwitcherModal({ onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 select-none"
        style={{ background: 'rgba(14,16,19,0.85)', backdropFilter: 'blur(16px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl p-6 sm:p-8 w-full max-w-xl relative bg-[#15181e] border border-white/10 shadow-2xl flex flex-col gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white bg-white/[0.04] border border-white/10 hover:border-yellow-400/30 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-xs font-mono text-yellow-400 font-semibold mb-2.5">
              <FileText size={13} />
              <span>RESUME DOWNLOAD</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Select Resume Variant
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Choose the version best matched to the role and tech stack you&apos;re hiring for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESUMES.map((resume) => (
              <div
                key={resume.id}
                className="group rounded-xl p-5 bg-[#1c1e24] border border-white/10 hover:border-yellow-400/40 transition-all flex flex-col justify-between gap-4 shadow-md hover:shadow-yellow-400/5 hover:-translate-y-0.5 duration-200"
              >
                <div className="flex flex-col gap-2.5">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-yellow-400 transition-colors">
                      {resume.title}
                    </h3>
                    <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                      {resume.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {resume.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {resume.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] border border-white/[0.08] text-neutral-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.08]">
                  <a
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-neutral-200 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <Eye size={13} />
                    <span>Preview</span>
                  </a>
                  <a
                    href={resume.file}
                    download
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-yellow-400 text-black hover:bg-yellow-300 transition-all shadow-sm"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono pt-1 border-t border-white/[0.06]">
            <CheckCircle2 size={13} className="text-yellow-400" />
            <span>Updated November 2026 · PDF format · Verified ATS-friendly format</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
