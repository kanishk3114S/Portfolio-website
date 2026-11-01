'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEME_IMAGES, type ThemeImage } from '@/config/themeAssets';

interface AtmosphereContextType {
  activeAtmosphere: ThemeImage;
  setAtmosphere: (themeId: string) => void;
  allAtmospheres: ThemeImage[];
}

const AtmosphereContext = createContext<AtmosphereContextType>({
  activeAtmosphere: THEME_IMAGES[0],
  setAtmosphere: () => {},
  allAtmospheres: THEME_IMAGES,
});

export function AtmosphereProvider({ children }: { children: React.ReactNode }) {
  const [activeAtmosphere, setActiveAtmosphere] = useState<ThemeImage>(THEME_IMAGES[0]);

  const setAtmosphere = (themeId: string) => {
    const found = THEME_IMAGES.find((img) => img.id === themeId);
    if (found) {
      setActiveAtmosphere(found);
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--neon-cyan', found.palette.accent);
        document.documentElement.style.setProperty('--border-glow', `${found.palette.accent}4d`);
      }
    }
  };

  useEffect(() => {
    // Default initial accent
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--neon-cyan', activeAtmosphere.palette.accent);
    }
  }, [activeAtmosphere]);

  return (
    <AtmosphereContext.Provider value={{ activeAtmosphere, setAtmosphere, allAtmospheres: THEME_IMAGES }}>
      {children}
    </AtmosphereContext.Provider>
  );
}

export const useAtmosphere = () => useContext(AtmosphereContext);
