import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = 'w-5 h-5' }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // 1. C++ (Official Deep Blue & Cyan)
  if (normalized.includes('c++') || normalized.includes('cpp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#00599C" />
        <path d="M12 4.2L4.8 8.2v7.6L12 19.8l7.2-4V8.2L12 4.2z" fill="#004482" />
        <path d="M11.5 8.5h-1a3.5 3.5 0 0 0 0 7h1" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14.5 10.5v3m-1.5-1.5h3" stroke="#659AD2" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18.5 10.5v3m-1.5-1.5h3" stroke="#659AD2" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // 2. JavaScript (Official Yellow #F7DF1E + Black)
  if (normalized === 'javascript' || normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 18c0 1.2-.8 1.8-2 1.8s-2-.6-2-1.2l1.2-.8c.2.4.5.6.8.6s.5-.2.5-.6v-6.3h1.5V18zm4.5-.2c.5.8 1.3 1.2 2.3 1.2 1.3 0 2.2-.8 2.2-2 0-1.2-.8-1.7-1.8-2.1l-.6-.2c-.6-.3-.9-.5-.9-1 0-.4.3-.8.9-.8.6 0 1 .3 1.2.7l1.1-.7c-.5-.8-1.2-1.2-2.3-1.2-1.3 0-2.2.8-2.2 1.9 0 1.1.7 1.6 1.7 2l.6.2c.7.3 1 .6 1 1.1 0 .5-.4.9-1 .9-.7 0-1.2-.4-1.5-.9l-1.3.8z" fill="#000000" />
      </svg>
    );
  }

  // 3. TypeScript (Official Blue #3178C6 + White)
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5 8.5h6m-3 0v9.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.5 16.5c.5.8 1.2 1.2 2.2 1.2 1.3 0 2.1-.8 2.1-1.9 0-1.2-.8-1.7-1.7-2.1l-.6-.2c-.6-.3-.9-.6-.9-1 0-.5.4-.8.9-.8.6 0 1.1.3 1.3.8l1.2-.7c-.5-.9-1.3-1.3-2.5-1.3-1.4 0-2.3.9-2.3 2 0 1.1.7 1.7 1.7 2.1l.6.2c.6.3.9.6.9 1 0 .5-.4.9-1 .9-.7 0-1.2-.4-1.4-1l-1.4.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 4. Python (Official Blue #3776AB + Yellow #FFD438)
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M11.9 2c-3.8 0-3.6 1.6-3.6 1.6l.04 1.7h3.6v.5H6.2S2 5.3 2 9.8c0 4.4 3.7 4.3 3.7 4.3h1.2v-1.7s-.1-2 2-2h3.5s1.9.03 1.9-1.9V5.7S14.6 2 11.9 2zm-1.8 1.3c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" fill="#3776AB" />
        <path d="M12.1 22c3.8 0 3.6-1.6 3.6-1.6l-.04-1.7h-3.6v-.5h5.7s4.2.5 4.2-4c0-4.4-3.7-4.3-3.7-4.3h-1.2v1.7s.1 2-2 2h-3.5s-1.9-.03-1.9 1.9v2.7s-.3 3.8 2.4 3.8zm1.8-1.3c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#FFD438" />
      </svg>
    );
  }

  // 5. React (Official Cyan #61DAFB)
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // 6. Next.js (Official Black & White badge)
  if (normalized.includes('next.js') || normalized.includes('nextjs')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M8 8v8l8.5-8.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 11v5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 7. Tailwind CSS (Official Teal Cyan #06B6D4)
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M6 13c-2.5 0-4-1.2-4-3 0-2.5 2-3.5 4.5-3.5 2.5 0 3.5 1.5 5 1.5 1.2 0 2-.5 2.5-1.5-1 2.2-2.5 3.5-5 3.5-2 0-2.5-1-4-1-.8 0-1.5.3-2 .8.8.7 1.8 1.2 3 1.2z" fill="#06B6D4" />
        <path d="M12 18c-2.5 0-4-1.2-4-3 0-2.5 2-3.5 4.5-3.5 2.5 0 3.5 1.5 5 1.5 1.2 0 2-.5 2.5-1.5-1 2.2-2.5 3.5-5 3.5-2 0-2.5-1-4-1-.8 0-1.5.3-2 .8.8.7 1.8 1.2 3 1.2z" fill="#38BDF8" />
      </svg>
    );
  }

  // 8. Node.js (Official Green #5FA04E)
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4.6v9.2L12 20.4 4 15.8V6.6L12 2z" fill="#339933" />
        <path d="M12 3.8l6.5 3.8v7.6L12 19l-6.5-3.8V7.6L12 3.8z" fill="#5FA04E" />
        <circle cx="12" cy="11.4" r="2.8" fill="#FFFFFF" />
      </svg>
    );
  }

  // 9. MongoDB (Official Forest Green #47A248 + Leaf Accent)
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 2C12 2 6 6.5 6 12.5c0 4.2 3.2 7.7 6 9.5 2.8-1.8 6-5.3 6-9.5C18 6.5 12 2 12 2z" fill="#47A248" />
        <path d="M12 2v20c-.2 0-.4-.1-.5-.2C9 20 6.5 16.5 6.5 12.5 6.5 7.5 12 2 12 2z" fill="#3FA037" />
        <path d="M12 22s-.1-3 .5-5.5c.6-2.5 1.5-4 1.5-4s-.5 3-.5 6c0 2.5-1.5 3.5-1.5 3.5z" fill="#E8F5E9" opacity="0.6" />
      </svg>
    );
  }

  // 10. GraphQL (Official Pink/Magenta #E10098)
  if (normalized.includes('graphql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2" stroke="#E10098" strokeWidth="1.8" />
        <circle cx="12" cy="2" r="2" fill="#E10098" />
        <circle cx="21" cy="7.2" r="2" fill="#E10098" />
        <circle cx="21" cy="16.8" r="2" fill="#E10098" />
        <circle cx="12" cy="22" r="2" fill="#E10098" />
        <circle cx="3" cy="16.8" r="2" fill="#E10098" />
        <circle cx="3" cy="7.2" r="2" fill="#E10098" />
        <path d="M12 2v20M3 7.2l18 9.6M3 16.8l18-9.6" stroke="#E10098" strokeWidth="1.2" opacity="0.6" />
      </svg>
    );
  }

  // 11. LangChain / LangGraph (Official Parrot Green #22C55E + Amber)
  if (normalized.includes('langchain') || normalized.includes('langgraph')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="3.5" fill="#22C55E" />
        <circle cx="18" cy="6" r="3.5" fill="#EAB308" />
        <circle cx="12" cy="18" r="3.5" fill="#3B82F6" />
        <path d="M8.5 7.5l7 0M7.5 8.8l3 6.8M16.5 8.8l-3 6.8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 12. Google Gemini (Official Multi-Hue Star #4285F4 & #9B72CF)
  if (normalized.includes('gemini') || normalized.includes('google')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="geminiGrad" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="50%" stopColor="#9B72CF" />
            <stop offset="100%" stopColor="#EA4335" />
          </linearGradient>
        </defs>
        <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" fill="url(#geminiGrad)" />
      </svg>
    );
  }

  // 13. OpenAI (Official Teal/Emerald #10A37F)
  if (normalized.includes('openai') || normalized.includes('gpt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M12 3a4 4 0 0 1 4 4v2h2a4 4 0 0 1 4 4v1a4 4 0 0 1-2 3.5v1.5a4 4 0 0 1-4 4h-1a4 4 0 0 1-3.5-2H10a4 4 0 0 1-4-4v-1a4 4 0 0 1-2-3.5V9a4 4 0 0 1 4-4h2a4 4 0 0 1 4-2h-2z" />
        <circle cx="12" cy="12" r="2" fill="#10A37F" />
      </svg>
    );
  }

  // 14. Pinecone (Official Forest Green #15803D)
  if (normalized.includes('pinecone') || normalized.includes('vector')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <polygon points="12 2 4 8 12 14 20 8" fill="#16A34A" />
        <polygon points="12 10 4 16 12 22 20 16" fill="#15803D" />
      </svg>
    );
  }

  // 15. Docker (Official Marine Blue #2496ED)
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <rect x="2" y="10" width="3" height="3" rx="0.5" />
        <rect x="6" y="10" width="3" height="3" rx="0.5" />
        <rect x="10" y="10" width="3" height="3" rx="0.5" />
        <rect x="6" y="6" width="3" height="3" rx="0.5" />
        <rect x="10" y="6" width="3" height="3" rx="0.5" />
        <path d="M1.5 14.5c0 4.2 3.4 7.5 7.5 7.5 5.5 0 9-3 10.5-6.5.5-1.5-.8-3.5-2.5-3.5H1.5z" />
      </svg>
    );
  }

  // 16. Postman (Official Bright Orange #FF6C37)
  if (normalized.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
        <circle cx="12" cy="12" r="10" />
        <path d="M7 11.5l10-4.5-4.5 10-1.8-4.2-3.7-1.3z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 17. Git / GitHub (Official Orange-Red #F05032)
  if (normalized.includes('git') || normalized.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="3" fill="#F05032" />
        <circle cx="6" cy="18" r="3" fill="#F05032" />
        <circle cx="18" cy="9" r="3" fill="#F05032" />
        <path d="M6 9v6M9 6h3a3 3 0 0 1 3 3" stroke="#F05032" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 18. Framer Motion (Official Pink-Violet #FF0055 & #0055FF)
  if (normalized.includes('framer') || normalized.includes('motion')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M4 2h16l-8 9z" fill="#0055FF" />
        <path d="M4 11h8l-8 9z" fill="#FF0055" />
        <path d="M12 11h8l-8 9z" fill="#7928CA" />
      </svg>
    );
  }

  // 19. Three.js (Crisp 3D Geometric Cube)
  if (normalized.includes('three.js') || normalized.includes('webgl') || normalized.includes('3d')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#1E2028" stroke="#FACC15" strokeWidth="1.5" />
        <path d="M12 12l9-5M12 12v10M12 12L3 7" stroke="#FACC15" strokeWidth="1.5" />
      </svg>
    );
  }

  // 20. SQL / Database (Teal Blue #00758F)
  if (normalized.includes('sql') || normalized.includes('database')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="#00758F" fillOpacity="0.2" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }

  // 21. RAG / Search / Tavily (Vibrant Amber #F59E0B)
  if (normalized.includes('rag') || normalized.includes('tavily') || normalized.includes('agent')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M16 16l5 5" strokeLinecap="round" />
        <path d="M8 11h6m-3-3v6" strokeLinecap="round" />
      </svg>
    );
  }

  // Default Fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeLinejoin="round" />
      <path d="M7 8l4 4-4 4m6 0h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
