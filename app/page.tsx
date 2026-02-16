'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import { FullPageLoader } from '@/components/TerminalLoader';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

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
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // If at top of page, clear active section
      if (scrollPosition < 500) {
        setActiveSection('');
        return;
      }

      const sections = ['about', 'project', 'experience', 'contact'];
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

  if (isLoading) {
    return <FullPageLoader text="Initializing..." />;
  }

  return (
    <>
      {/* Terminal background effects */}
      <div className="crt-overlay" />
      <div className="terminal-vignette" />
      
      <div className="min-h-screen terminal-bg text-[var(--foreground)] relative z-10">
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <HeroSection onContactClick={handleContactClick} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* Testimonial section hidden for now */}
        {/* <TestimonialCarousel /> */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] py-8 overflow-hidden">
        <div className="w-full px-6 text-center" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="/resume-subdomain" className="text-[var(--neon-green)] hover:underline font-mono text-sm">Resume</a>
            <span className="text-gray-600">|</span>
            <a href="/timeline" className="text-[var(--neon-green)] hover:underline font-mono text-sm">Timeline</a>
          </div>
          <p className="text-gray-400 font-mono text-sm">
            © 2026 Baman Prasad Guragain  / Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
