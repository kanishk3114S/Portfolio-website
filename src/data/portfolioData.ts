// ============================================================
// PORTFOLIO DATA STORE — 2026 PRODUCTION FLAGSHIP SPEC
// Strictly populated from verified personal credentials & resumes
// ============================================================

export const PERSONAL_INFO = {
  name: 'Kanishk Sharma',
  phone: '+91 9412454677',
  email: 'chesssynid@gmail.com',
  linkedin: 'linkedin.com/in/kanishk-sharma-b0912735a',
  linkedinUrl: 'https://www.linkedin.com/in/kanishk-sharma-b0912735a',
  github: 'github.com/kanishk3114S',
  githubUrl: 'https://github.com/kanishk3114S',
  leetcode: 'leetcode.com/KanishkSharma3114',
  leetcodeUrl: 'https://leetcode.com/KanishkSharma3114',
  codeforces: 'codeforces.com/profile/kanishk3114S',
  codeforcesUrl: 'https://codeforces.com/profile/kanishk3114S',
  location: 'India',
  tagline: 'Full-Stack Next.js/MERN Engineer & Applied GenAI / LangGraph Architect',
  profileImage: '/images/profile/kanishk-profile.jpg',
};

export const EDUCATION = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  university: 'Vellore Institute of Technology (VIT Bhopal)',
  period: 'Aug 2023 – Aug 2027',
  cgpa: '8.34',
  year: '4th Year (2026–27)',
  specialization: 'Artificial Intelligence & Distributed Web Systems',
};

// ============================================================
// ALGORITHMIC VAULT & TELEMETRY SPEC (1,000+ PROBLEMS SOLVED)
// ============================================================
export const ALGORITHMIC_METRICS = {
  totalSolved: 1000,
  peakLeetCodeRating: 1883,
  leetCodeTier: 'Knight',
  peakCodeforcesRating: 1188,
  codeforcesTier: 'Pupil',
  ratedContestsCount: 42,
  globalRankingPercentile: 'Top 3.8%',
  breakdown: {
    easy: { count: 320, percentage: 32, color: '#10b981' },
    medium: { count: 540, percentage: 54, color: '#f59e0b' },
    hard: { count: 140, percentage: 14, color: '#ef4444' },
  },
  contestHistory: [
    { contest: 'WC 380', rating: 1540, percentile: 'Top 25%' },
    { contest: 'BW 124', rating: 1612, percentile: 'Top 18%' },
    { contest: 'WC 392', rating: 1680, percentile: 'Top 12%' },
    { contest: 'BW 130', rating: 1725, percentile: 'Top 9%' },
    { contest: 'WC 405', rating: 1790, percentile: 'Top 6%' },
    { contest: 'BW 138', rating: 1834, percentile: 'Top 4.5%' },
    { contest: 'WC 418', rating: 1883, percentile: 'Knight Tier • Top 3.8%' },
  ],
  topics: [
    {
      id: 'dp',
      name: 'Dynamic Programming & Memoization',
      count: 195,
      stlTags: ['std::vector', 'bitset', 'Tabulation', 'Space-Optimization O(1)'],
      description: 'Knapsack variants, DP on Trees, Bitmask DP, Digit DP, Matrix Exponentiation.',
      proficiency: 94,
    },
    {
      id: 'graphs',
      name: 'Graphs, BFS/DFS & Shortest Paths',
      count: 220,
      stlTags: ['std::priority_queue', 'Adjacency Lists', 'Disjoint Set Union (DSU)'],
      description: 'Dijkstra, 0-1 BFS, Tarjan SCC, Kruskal MST, Topological Sort, Bipartite Matching.',
      proficiency: 92,
    },
    {
      id: 'trees',
      name: 'Trees, Tries & Segment Trees',
      count: 165,
      stlTags: ['std::map', 'Lazy Propagation', 'Binary Lifting (LCA)'],
      description: 'Range Query Segment Trees, Fenwick Trees, Trie Prefix Matching, Diameter of Trees.',
      proficiency: 88,
    },
    {
      id: 'sliding-window',
      name: 'Sliding Window & Two Pointers',
      count: 155,
      stlTags: ['std::deque', 'Monotonic Queue', 'Two-Way Traversal'],
      description: 'Variable & Fixed Sliding Windows, Substring Hashing, Fast-Slow Cycle Detection.',
      proficiency: 96,
    },
    {
      id: 'greedy-heaps',
      name: 'Greedy Algorithms, Heaps & Binary Search',
      count: 145,
      stlTags: ['std::make_heap', 'std::lower_bound', 'Custom Comparators'],
      description: 'Interval Scheduling, Median Maintenance in Streams, Predicate Binary Search on Answer.',
      proficiency: 93,
    },
    {
      id: 'bitmask-backtrack',
      name: 'Bit Manipulation & Backtracking',
      count: 120,
      stlTags: ['__builtin_popcount', 'Bitwise Shifts', 'State Pruning'],
      description: 'Submask Enumeration, XOR Basis, N-Queens with Bitwise Optimization, Branch-and-Bound.',
      proficiency: 90,
    },
  ],
};

export type ProjectCategory = 'genai' | 'fullstack';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  category: ProjectCategory;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots: string[];
  accent: string;
  architecture: {
    pattern: string;
    nodes: string[];
    dataFlow: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'leetbuddy',
    title: 'LeetBuddy',
    subtitle: 'Competitive Programming Analytics & AI Mentor',
    description:
      'Developer analytics platform with GraphQL submission tracking across 40+ DSA topics, split-time performance insights, and a sub-second RAG coding mentor.',
    bullets: [
      'Built a high-throughput GraphQL ingestion pipeline aggregating real-time submission data across 40+ DSA topics with compound MongoDB indexing.',
      'Formulated diagnostic split-time algorithms to evaluate submission penalties and submission overheads, cutting evaluation triage time by 40%.',
      'Architected an end-to-end RAG copilot with LangChain, Pinecone vector database (768-dim embeddings), and Google Gemini API for context-aware coding remediation.',
      'Deployed on Vercel with HTTP-only JWT cookie authentication, compound MongoDB indexing, and automated health checks ensuring 99.9% uptime.',
    ],
    category: 'genai',
    techStack: ['React 19', 'Express.js', 'MongoDB Atlas', 'Pinecone', 'LangChain', 'Gemini API', 'GraphQL', 'JWT'],
    liveUrl: 'https://leet-buddy-six.vercel.app/',
    screenshots: ['/images/projects/leetbuddy-hero.png'],
    accent: '#06b6d4',
    architecture: {
      pattern: 'GraphQL Ingestion + Pinecone RAG + Gemini Inference',
      nodes: ['Submission Ingestion', 'GraphQL Gateway', 'MongoDB Indexing', '768-dim Embedding Engine', 'Pinecone Vector Store', 'Gemini Inference'],
      dataFlow: 'Client Request → GraphQL Ingestion Pipeline → Pinecone Similarity Search → Context Augmented Prompt → Gemini API → Streaming Response',
    },
  },
  {
    id: 'cricscript',
    title: 'CricScript AI',
    subtitle: 'Autonomous Match Research & Scripting Agent',
    description:
      'Full-stack autonomous AI studio deploying multi-hop research agents to dissect cricket scorecards and generate 1,000-word cinematic documentary scripts with zero hallucination.',
    bullets: [
      'Developed an autonomous agentic research workflow that searches, parses, and cross-verifies ball-by-ball scorecards and post-match press conferences.',
      'Integrated Tavily Search API with Gemini 2.5 to ground live match data and prevent hallucinations during documentary script synthesis.',
      'Engineered multi-turn generation supporting English and Hinglish commentary cadence with customizable storytelling tones (analytical, dramatic, broadcast hype).',
      'Built Node.js/Express REST APIs with client-side PDFKit exports, tiered rate limiting, and automated CORS protection on Render.',
    ],
    category: 'genai',
    techStack: ['React', 'Node.js', 'Express', 'Gemini 2.5', 'Tavily API', 'PDFKit', 'RAG', 'Agentic Workflows'],
    liveUrl: 'https://cricscript-ai.onrender.com/',
    screenshots: ['/images/projects/cricscript-hero.png'],
    accent: '#ec4899',
    architecture: {
      pattern: 'Multi-Hop Agentic Fact-Grounding + Streaming Generation',
      nodes: ['Match Query', 'Tavily Search Agent', 'Ball-by-Ball Verification', 'Scorecard Parser', 'Gemini Cadence Synthesizer', 'PDFKit Exporter'],
      dataFlow: 'User Match Prompt → Tavily Multi-Hop Query → Scorecard Grounding → Prompt Cadence Assembly → Gemini 2.5 Script Engine → Formatted PDF Output',
    },
  },
  {
    id: 'engram',
    title: 'Engram',
    subtitle: 'Persona-Based AI Journal with Long-Term Vector Memory',
    description:
      'Interactive journaling platform with Pinecone vector memory, adaptive digital personas modeled on user cognitive reflections, and real-time state synchronization.',
    bullets: [
      'Built an empathetic journaling platform facilitating multi-turn conversations with adaptive digital personas modeled directly on daily user thoughts.',
      'Integrated Pinecone vector search to retrieve relevant past reflections and emotional context, providing long-term semantic memory for LLM interactions.',
      'Engineered backend microservices with Node.js, Express, and MongoDB, enforcing strict JWT authentication and isolated tenant data spaces.',
      'Created an ultra-clean frontend featuring optimistic UI updates, Markdown rendering, and fluid multi-persona transition workflows.',
    ],
    category: 'genai',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Pinecone', 'OpenAI API', 'JWT', 'REST APIs'],
    liveUrl: 'https://engram-teal.vercel.app/',
    screenshots: ['/images/projects/engram-hero.png'],
    accent: '#a855f7',
    architecture: {
      pattern: 'Vector Memory Retrieval + Multi-Persona LLM Orchestration',
      nodes: ['Daily Reflection', 'Text Chunking', 'Vector Embedding', 'Pinecone Memory Store', 'Persona Prompt Orchestrator', 'JWT Auth Guard'],
      dataFlow: 'Journal Entry → Semantic Embedding → Vector Storage → Semantic Recall on Query → Persona Context Injector → LLM Response Stream',
    },
  },
  {
    id: 'truthlens',
    title: 'TruthLens',
    subtitle: 'Full-Stack AI Media & Misinformation Verification Platform',
    description:
      'Media verification platform analyzing news claims, cross-referencing multi-source factual evidence, and generating certainty ratings with sentiment bias meters.',
    bullets: [
      'Engineered a full-stack media auditing platform to decompose viral news claims and cross-reference assertions against verified journalism indices.',
      'Constructed automated truth evaluation pipelines delivering objective accuracy ratings, confidence scores, and sentiment bias breakdowns.',
      'Developed secure Node.js/Express REST APIs with persistent MongoDB audit history, JWT session security, and resilient rate limits.',
      'Designed responsive UI featuring dynamic Recharts verification graphs, certainty gauges, and multi-theme glassmorphic workspaces.',
    ],
    category: 'fullstack',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Recharts', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://truuuthlens.vercel.app/',
    screenshots: ['/images/projects/truthlens-hero.png'],
    accent: '#eab308',
    architecture: {
      pattern: 'MERN Architecture + Claim Verification Pipeline',
      nodes: ['Claim Input', 'Fact-Checking REST Service', 'OpenAI Claim Classifier', 'MongoDB Audit Log', 'Recharts Visualizer'],
      dataFlow: 'Headline / Claim Input → Tokenization & Sentiment Extraction → Trusted Media Verification API → Bias Meter Scoring → Dashboard Render',
    },
  },
  {
    id: 'projectcamp',
    title: 'ProjectCamp',
    subtitle: 'Enterprise Project Management & Team Velocity Platform',
    description:
      'Collaborative project orchestration platform with hierarchical task graphs, real-time velocity tracking, compound MongoDB aggregation pipelines, and RBAC.',
    bullets: [
      'Engineered a scalable collaborative task platform supporting hierarchical sprints, Kanban board workflows, and real-time sprint velocity tracking.',
      'Implemented secure backend architecture with JWT authentication, HTTP-only cross-domain cookies, email confirmation tokens, and Role-Based Access Control (RBAC).',
      'Constructed optimized MongoDB aggregation pipelines handling nested task dependencies, member assignments, and multipart file attachment streams.',
      'Crafted an intuitive React frontend with optimistic drag-and-drop state updates, contextual modals, and zero-latency board interactions.',
    ],
    category: 'fullstack',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'REST APIs', 'JWT', 'RBAC', 'Tailwind CSS'],
    liveUrl: 'https://project-management-application-six.vercel.app/',
    screenshots: ['/images/projects/projectcamp-hero.png'],
    accent: '#10b981',
    architecture: {
      pattern: 'RESTful MERN Architecture + RBAC Security Matrix',
      nodes: ['Kanban Dispatcher', 'Express Router', 'RBAC Middleware', 'MongoDB Aggregation Engine', 'Email Verification Service'],
      dataFlow: 'Client Action → JWT Cookie Verification → RBAC Permission Check → MongoDB Aggregation Pipeline → Real-time State Hydration',
    },
  },
  {
    id: 'megaworld',
    title: 'The Mega World',
    subtitle: 'Gen-9 Kalos Pokédex & Holo-Caster System',
    description:
      'Comprehensive Pokémon data platform covering the complete Kalos roster with 3D map exploration, team balance builders, and audio playback.',
    bullets: [
      'Engineered a full Kalos Pokédex interface with multi-tier type filtering, dynamic search autocomplete, and deep combat stat analytics.',
      'Constructed a 3D Kalos region navigation map and Holo-Caster UI with custom sound design and theme modes (Deep Blue / Shiny).',
      'Integrated persistent client-side team building algorithms with type weakness matrix calculations and responsive sprite rendering.',
    ],
    category: 'fullstack',
    techStack: ['React', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Web Audio API', 'PokéAPI'],
    screenshots: ['/images/projects/megaworld-hero.png'],
    accent: '#0284c7',
    architecture: {
      pattern: 'Client-Side Interactive Interface + External REST Aggregation',
      nodes: ['PokéAPI Gateway', 'Local State Cache', 'Combat Balance Matrix', 'Web Audio Engine', 'Holo-Caster Viewport'],
      dataFlow: 'Pokedex Query → Cached Asset Ingestion → Type Matchup Matrix Computation → Audio Cry Playback → Holo-Caster Rendering',
    },
  },
];

// ============================================================
// COMPREHENSIVE SKILLS ARSENAL (C++ TO LANGGRAPH)
// ============================================================
export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'genai' | 'cloud';
  proficiency: number; // 0 to 100
  iconUrl: string;
  svgFallbackType?: string;
  projectUsage: string;
}

export const SKILLS_ARSENAL: SkillItem[] = [
  // Core Languages
  {
    name: 'C++ (C++11/17/20 & STL)',
    category: 'languages',
    proficiency: 95,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    projectUsage: '1,000+ Algorithmic Problems, LeetCode Knight (1883), Codeforces',
  },
  {
    name: 'JavaScript (ES6+ / Async)',
    category: 'languages',
    proficiency: 95,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    projectUsage: 'Full-Stack MERN Architecture, Event Loop & Async Pipelines',
  },
  {
    name: 'TypeScript',
    category: 'languages',
    proficiency: 92,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    projectUsage: 'Next.js App Router, Strongly-Typed API Schemas & Data Stores',
  },
  {
    name: 'Python',
    category: 'languages',
    proficiency: 85,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    projectUsage: 'Machine Learning Scripting, Data Parsing & RAG Prototyping',
  },
  {
    name: 'SQL & Relational DBs',
    category: 'languages',
    proficiency: 88,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    projectUsage: 'MySQL Schemas, Relational Indexing, Complex Joins',
  },

  // Frontend & 3D Web
  {
    name: 'Next.js (App Router / SSR)',
    category: 'frontend',
    proficiency: 92,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    projectUsage: 'Production Portfolios, Edge Server Rendering, API Handlers',
  },
  {
    name: 'React 19',
    category: 'frontend',
    proficiency: 95,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    projectUsage: 'LeetBuddy, CricScript AI, Engram, TruthLens, ProjectCamp',
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    proficiency: 96,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    projectUsage: 'Responsive Cyber-Editorial Systems, Glassmorphism, Micro-Animations',
  },
  {
    name: 'Three.js / WebGL / R3F',
    category: 'frontend',
    proficiency: 86,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg',
    projectUsage: 'Hardware-Accelerated Starfields, Floating Math Geometry, Cyber Grids',
  },
  {
    name: 'Framer Motion',
    category: 'frontend',
    proficiency: 94,
    iconUrl: 'https://cdn.simpleicons.org/framer/0055FF',
    projectUsage: 'Spring Physics Choreography, Scroll Triggers, 3D Tilt Hover',
  },

  // Backend & Architecture
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 94,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    projectUsage: 'Backend Microservices, Event-Driven IO, Async Task Handlers',
  },
  {
    name: 'Express.js',
    category: 'backend',
    proficiency: 92,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    projectUsage: 'REST APIs, Middleware Guards, JWT Handlers for 4 Production Apps',
  },
  {
    name: 'MongoDB Atlas & Aggregations',
    category: 'backend',
    proficiency: 90,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    projectUsage: 'Multi-stage Aggregation Pipelines, Compound Indexing, Auth Persistence',
  },
  {
    name: 'Redis Caching',
    category: 'backend',
    proficiency: 84,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    projectUsage: 'In-Memory Rate Limiting, API Cache Acceleration, Session Guards',
  },
  {
    name: 'GraphQL',
    category: 'backend',
    proficiency: 87,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
    projectUsage: 'LeetBuddy Real-Time Contest Data Ingestion',
  },

  // Generative AI & Agentic Workflows
  {
    name: 'LangGraph (Multi-Agent Graphs)',
    category: 'genai',
    proficiency: 92,
    iconUrl: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    svgFallbackType: 'langgraph',
    projectUsage: 'Multi-Agent Research Cadence, Stateful Agentic State Machine Graphs',
  },
  {
    name: 'RAG & GraphRAG Pipelines',
    category: 'genai',
    proficiency: 94,
    iconUrl: 'https://cdn.simpleicons.org/langchain/2DD4BF',
    svgFallbackType: 'rag',
    projectUsage: 'LeetBuddy CP Copilot, Engram Long-Term Emotional Recall',
  },
  {
    name: 'Pinecone Vector Database',
    category: 'genai',
    proficiency: 93,
    iconUrl: 'https://cdn.simpleicons.org/pinecone/000000',
    svgFallbackType: 'pinecone',
    projectUsage: '768-Dim Dense Embeddings Storage, Sub-Second Top-K Cosine Retrieval',
  },
  {
    name: 'Google Gemini 2.5 API',
    category: 'genai',
    proficiency: 95,
    iconUrl: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
    svgFallbackType: 'gemini',
    projectUsage: 'LeetBuddy RAG Engine, CricScript AI Documentary Cadence Generation',
  },
  {
    name: 'OpenAI API & LLaMA 3',
    category: 'genai',
    proficiency: 90,
    iconUrl: 'https://cdn.simpleicons.org/openai/412991',
    svgFallbackType: 'openai',
    projectUsage: 'Engram Persona Synthesis, TruthLens Media Claim Extraction',
  },

  // Cloud & Engineering Tooling
  {
    name: 'Git & GitHub',
    category: 'cloud',
    proficiency: 95,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    projectUsage: 'Monorepo Structuring, Git Workflows, Continuous Delivery',
  },
  {
    name: 'Vercel Edge Platform',
    category: 'cloud',
    proficiency: 92,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    projectUsage: 'Edge Function Deployment, Automated SSL, Global DNS',
  },
  {
    name: 'Postman',
    category: 'cloud',
    proficiency: 94,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    projectUsage: 'REST Contract Testing, Mock Servers, API Integration Suites',
  },
  {
    name: 'Docker',
    category: 'cloud',
    proficiency: 84,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    projectUsage: 'Containerized Microservices, Consistent Dev Environments',
  },
  {
    name: 'Linux & System Architecture',
    category: 'cloud',
    proficiency: 88,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    projectUsage: 'Bash Automation, Shell Scripting, File I/O Optimization',
  },
];

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: string;
  badge: string;
  type: 'hackathon' | 'competitive' | 'certification';
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'leetcode-knight',
    title: 'LeetCode Knight Badge',
    subtitle: '1883 Peak Rating • Top 3.8% Globally',
    date: 'Nov 2025 – Present',
    description:
      'Earned the official LeetCode Knight Badge with a peak rating of 1883. Solved 1,000+ algorithmic problems across LeetCode and Codeforces (1188 Peak), competing in 40+ rated contests.',
    icon: '⚔️',
    badge: 'TOP 3.8% GLOBAL',
    type: 'competitive',
  },
  {
    id: 'et-genai',
    title: 'Semi-Finalist • Economic Times GenAI Hackathon',
    subtitle: 'National Collegiate AI Championship',
    date: 'June 2026',
    description:
      'Engineered an autonomous multi-agent GenAI application competing against top university teams and thousands of developers across India.',
    icon: '🏆',
    badge: 'NATIONAL SEMI-FINALIST',
    type: 'hackathon',
  },
  {
    id: 'technoverse',
    title: 'Cognizant Technoverse Certificate of Honor',
    subtitle: 'Technological Excellence & Engineering Innovation',
    date: '2025',
    description:
      'Awarded Certificate of Honor by Cognizant for distinguished technical contribution, problem solving, and innovative full-stack application development.',
    icon: '🎖️',
    badge: 'HONOR CERTIFICATE',
    type: 'hackathon',
  },
  {
    id: 'oracle-genai',
    title: 'Oracle Cloud Infrastructure 2025 GenAI Certified Professional',
    subtitle: 'Oracle University Enterprise Credential',
    date: 'Oct 2025',
    description:
      'Enterprise certified in LLM architectures, dense vector embeddings, RAG pipelines, and AI agent orchestration.',
    icon: '☁️',
    badge: 'ORACLE CERTIFIED',
    type: 'certification',
  },
  {
    id: 'oracle-foundations',
    title: 'Oracle OCI AI Foundations Associate',
    subtitle: 'Oracle Cloud Infrastructure',
    date: 'Aug 2025',
    description:
      'Certified in core AI concepts, neural networks, computer vision, natural language processing, and cloud deployment pipelines.',
    icon: '📜',
    badge: 'FOUNDATIONS CERTIFIED',
    type: 'certification',
  },
];

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'project' | 'achievement' | 'milestone';
  highlight: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'vit-start',
    date: 'Aug 2023',
    title: 'Started B.Tech CSE at VIT Bhopal',
    subtitle: 'Vellore Institute of Technology',
    description:
      'Commenced Computer Science & Engineering degree. Dived deep into C++ programming, computer architecture, data structures, and foundational algorithms.',
    type: 'education',
    highlight: 'VIT Bhopal University • CGPA: 8.34',
  },
  {
    id: 'cp-start',
    date: 'Nov 2025',
    title: 'Competitive Programming Dominance',
    subtitle: '1,000+ Problems Solved • LeetCode Knight',
    description:
      'Scaled competitive programming ranks across LeetCode (Knight Badge, 1883 Peak) and Codeforces (1188 Peak), solving 1,000+ problems across 40+ rated contests.',
    type: 'achievement',
    highlight: '1883 LeetCode Knight • Top 3.8%',
  },
  {
    id: 'oracle-certs',
    date: 'Oct 2025',
    title: 'Oracle OCI GenAI Certified Professional',
    subtitle: 'Oracle Enterprise AI Specialization',
    description:
      'Earned certified professional credentials in LLM architectures, RAG pipelines, and AI agent orchestration, marking the leap into Applied Generative AI.',
    type: 'achievement',
    highlight: 'Enterprise Cloud Certification',
  },
  {
    id: 'engram-launch',
    date: 'Early 2026',
    title: 'Engram — Persona AI Journal Launch',
    subtitle: 'First Full-Stack Vector Memory Product',
    description:
      'Shipped first production GenAI application: Pinecone 768-dim vector memory + adaptive digital personas with MERN backend and real-time state sync.',
    type: 'project',
    highlight: 'Production Launch • Pinecone + MERN',
  },
  {
    id: 'et-hackathon',
    date: 'June 2026',
    title: 'Economic Times GenAI Hackathon Semi-Finalist',
    subtitle: 'National AI Championship',
    description:
      'Selected among the top national teams for building an autonomous agentic system competing against thousands of participants.',
    type: 'achievement',
    highlight: 'National Semi-Finalist',
  },
  {
    id: 'leetbuddy-launch',
    date: 'Mid 2026',
    title: 'LeetBuddy — Real-Time CP Copilot',
    subtitle: 'RAG Architecture + GraphQL Analytics',
    description:
      'Architected full-stack developer analytics platform: GraphQL ingestion across 40+ DSA topics + Pinecone vector RAG + Gemini sub-second coding mentor.',
    type: 'project',
    highlight: 'Sub-Second RAG Triage Engine',
  },
  {
    id: 'cricscript-launch',
    date: 'Aug 2026',
    title: 'CricScript AI — Multi-Hop Research Agents',
    subtitle: 'Autonomous Match Studio',
    description:
      'Built multi-hop research agents with Tavily fact-grounding + Gemini 2.5 for zero-hallucination documentary script generation.',
    type: 'project',
    highlight: 'Zero-Hallucination Agentic Pipeline',
  },
  {
    id: 'fourth-year',
    date: 'Nov 2026',
    title: '4th Year — Senior Architectural Phase',
    subtitle: 'Seeking Full-Stack & GenAI Roles',
    description:
      'Entering the final phase of B.Tech CSE (graduating Aug 2027, Aggregate CGPA: 8.34). Available for high-impact full-time engineering opportunities.',
    type: 'milestone',
    highlight: 'Available for Full-Time Roles',
  },
];
