'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import JourneySection from '@/components/sections/JourneySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AlgorithmicVault from '@/components/sections/AlgorithmicVault';
import SkillsSection from '@/components/sections/SkillsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollTelemetryHUD from '@/components/ScrollTelemetryHUD';

export default function Home() {
  return (
    <>
      {/* Progress Bar & Quick Section Navigation */}
      <ScrollTelemetryHUD />

      {/* Floating Header */}
      <Navbar />

      <main className="relative flex flex-col min-h-screen">
        {/* I: Hero Section */}
        <HeroSection />

        {/* II: Experience & Journey Timeline */}
        <JourneySection />

        {/* III: Featured Projects Bento */}
        <ProjectsSection />

        {/* IV: Problem Solving & LeetCode Statistics */}
        <AlgorithmicVault />

        {/* V: Technical Skills & Technologies */}
        <SkillsSection />

        {/* VI: Honors & Certifications */}
        <AchievementsSection />

        {/* VII: Contact Section */}
        <ContactSection />
      </main>

      {/* Industrial Grey-Yellow Footer */}
      <Footer />
    </>
  );
}
