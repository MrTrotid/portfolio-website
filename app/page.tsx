'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Marquee from '@/components/Marquee';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    handleNavigate('contact');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // If at top of page, clear active section
      if (scrollPosition < 500) {
        setActiveSection('');
        return;
      }

      const sections = ['skills', 'project', 'resume', 'contact'];
      const offset = scrollPosition + 400;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (offset >= offsetTop && offset < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#323232] text-[var(--foreground)]">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <HeroSection onContactClick={handleContactClick} />
        <Marquee />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2026 Baman. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}
