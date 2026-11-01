import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import CustomCursor from '@/components/ui/CustomCursor';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kanishksharma.dev'),
  title: 'Kanishk Sharma — CS Student & Full-Stack / GenAI Builder',
  description:
    'Portfolio of Kanishk Sharma, 4th-year CSE student at VIT Bhopal (CGPA 8.34). Full-Stack Next.js/MERN Developer and GenAI Builder specializing in RAG pipelines, LangChain, Pinecone, and Gemini API. LeetCode Knight (1883) | ET GenAI Hackathon Semi-Finalist.',
  keywords: [
    'Kanishk Sharma',
    'VIT Bhopal',
    'Full Stack Developer',
    'Generative AI',
    'RAG',
    'Next.js',
    'React',
    'Node.js',
    'MongoDB',
    'LeetCode Knight',
  ],
  authors: [{ name: 'Kanishk Sharma', url: 'https://github.com/kanishk3114S' }],
  creator: 'Kanishk Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Kanishk Sharma — CS Student & Full-Stack / GenAI Builder',
    description: '4th-year CSE @ VIT Bhopal. Building full-stack web apps and AI tools. LeetCode Knight (1883).',
    images: [{ url: '/images/profile/kanishk-profile.jpg', width: 1080, height: 1080, alt: 'Kanishk Sharma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanishk Sharma — CS Student & Full-Stack / GenAI Builder',
    description: '4th-year CSE @ VIT Bhopal. Building full-stack web apps and AI tools.',
    images: ['/images/profile/kanishk-profile.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kanishk Sharma',
              email: 'chesssynid@gmail.com',
              telephone: '+919412454677',
              url: 'https://github.com/kanishk3114S',
              sameAs: [
                'https://www.linkedin.com/in/kanishk-sharma-b0912735a',
                'https://github.com/kanishk3114S',
                'https://leetcode.com/KanishkSharma3114',
              ],
              jobTitle: 'Full-Stack Developer & GenAI Builder',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Vellore Institute of Technology, Bhopal',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-yellow-400/25 selection:text-yellow-200">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
