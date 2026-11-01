// ============================================================
// CENTRALIZED DYNAMIC ASSET MANIFEST / THEME REGISTRY
// All image paths are strictly typed — never hardcoded elsewhere
// ============================================================

export type ThemeMood = 'anime' | 'night' | 'dramatic';
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
    id: 'itachi-moon',
    path: '/images/themes/itachi-uchiha-moon-5120x2880-25777.jpg',
    mood: 'anime',
    section: 'hero',
    alt: 'Itachi Uchiha silhouette with red blood moon and dark pulse atmosphere',
    width: 5120,
    height: 2880,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#0e1013', accent: '#facc15', overlay: 'rgba(14,16,19,0.78)' },
  },
  {
    id: 'dramatic-scenery',
    path: '/images/themes/dramatic-scenery-3840x2160-20802.jpg',
    mood: 'dramatic',
    section: 'projects',
    alt: 'Dramatic atmospheric landscape scenery',
    width: 3840,
    height: 2160,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#0e1013', accent: '#facc15', overlay: 'rgba(14,16,19,0.8)' },
  },
  {
    id: 'alucard-guns',
    path: '/images/themes/alucard-guns-5120x2880-22588.png',
    mood: 'anime',
    section: 'skills',
    alt: 'Alucard with dark gothic anime atmospheric aesthetic',
    width: 5120,
    height: 2880,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#0a0000', accent: '#facc15', overlay: 'rgba(10,0,0,0.7)' },
  },
  {
    id: 'spiderman-night',
    path: '/images/themes/marvels-spider-man-playstation-4-playstation-5-pc-games-3840x2160-8937.jpg',
    mood: 'night',
    section: 'contact',
    alt: 'Spider-Man in a rain-drenched skyline at night',
    width: 3840,
    height: 2160,
    blurDataURL: DARK_BLUR,
    palette: { primary: '#050010', accent: '#facc15', overlay: 'rgba(5,0,16,0.75)' },
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
