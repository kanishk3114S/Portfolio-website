// ============================================================
// CENTRALIZED DYNAMIC ASSET MANIFEST / THEME REGISTRY
// All image paths are strictly typed — never hardcoded elsewhere
// ============================================================

export type ThemeMood = 'cyberpunk' | 'anime' | 'night' | 'dramatic';
export type SectionId =
  | 'hero'
  | 'journey'
  | 'projects'
  | 'skills'
  | 'achievements'
  | 'contact'
  | 'ambient';

export interface ThemeImage {
  id: string;
  path: string;
  mood: ThemeMood;
  section: SectionId;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string; // base64 placeholder
  palette: {
    primary: string;
    accent: string;
    overlay: string;
  };
}

// Minimal base64 blur placeholder (1×1 dark pixel)
const DARK_BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

export const THEME_IMAGES: ThemeImage[] = [
  {
    id: 'samurai-cyberpunk',
    path: '/images/themes/samurai-cyberpunk-3840x2160-13692.jpeg',
    mood: 'cyberpunk',
    section: 'hero',
    alt: 'Cyberpunk samurai warrior in neon-lit cityscape',
    width: 3840,
    height: 2160,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#0a0a1a', accent: '#00f5ff', overlay: 'rgba(0,8,32,0.7)' },
  },
  {
    id: 'female-v-cyberpunk',
    path: '/images/themes/female-v-cyberpunk-3840x2160-13542.jpg',
    mood: 'cyberpunk',
    section: 'skills',
    alt: 'Cyberpunk character V in neon city',
    width: 3840,
    height: 2160,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#0d0010', accent: '#ff006e', overlay: 'rgba(10,0,20,0.72)' },
  },
  {
    id: 'itachi-moon',
    path: '/images/themes/itachi-uchiha-moon-5120x2880-25777.jpg',
    mood: 'anime',
    section: 'journey',
    alt: 'Itachi Uchiha silhouette against a dramatic moon',
    width: 5120,
    height: 2880,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#050510', accent: '#9d00ff', overlay: 'rgba(5,5,20,0.75)' },
  },
  {
    id: 'alucard-guns',
    path: '/images/themes/alucard-guns-5120x2880-22588.png',
    mood: 'anime',
    section: 'projects',
    alt: 'Alucard with guns – dark gothic anime aesthetic',
    width: 5120,
    height: 2880,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#0a0000', accent: '#ff0000', overlay: 'rgba(10,0,0,0.7)' },
  },
  {
    id: 'dramatic-scenery',
    path: '/images/themes/dramatic-scenery-3840x2160-20802.jpg',
    mood: 'dramatic',
    section: 'achievements',
    alt: 'Dramatic night landscape with atmospheric lighting',
    width: 3840,
    height: 2160,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#060a10', accent: '#ffd700', overlay: 'rgba(6,10,16,0.72)' },
  },
  {
    id: 'spiderman-night',
    path: '/images/themes/marvels-spider-man-playstation-4-playstation-5-pc-games-3840x2160-8937.jpg',
    mood: 'night',
    section: 'contact',
    alt: 'Spider-Man in a neon rain-drenched city at night',
    width: 3840,
    height: 2160,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#050010', accent: '#e63946', overlay: 'rgba(5,0,16,0.75)' },
  },
];

/** Get the primary hero background */
export const getHeroBackground = (): ThemeImage =>
  THEME_IMAGES.find((img) => img.section === 'hero')!;

/** Get background for a specific section */
export const getSectionBackground = (section: SectionId): ThemeImage | undefined =>
  THEME_IMAGES.find((img) => img.section === section);

/** Get all images of a given mood */
export const getByMood = (mood: ThemeMood): ThemeImage[] =>
  THEME_IMAGES.filter((img) => img.mood === mood);
