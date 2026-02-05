'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const sections = useMemo(() => ['About me', 'Project', 'Experience', 'Contact'], []);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [showTop, setShowTop] = useState(false);

  const scrollToTop = useCallback(() => {
    const top = document.querySelector('#hero');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShowTop(y > 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getSectionRoute = useCallback((displayName: string) => {
    const routeMap: Record<string, string> = {
      'About me': 'about',
      'Project': 'project',
      'Experience': 'experience',
      'Contact': 'contact',
    };
    return routeMap[displayName] || displayName.toLowerCase();
  }, []);

  useEffect(() => {
    if (!activeSection) {
      setIndicatorStyle({ left: 0, width: 0 });
      return;
    }

    const activeIndex = sections.findIndex(s => getSectionRoute(s) === activeSection);
    if (activeIndex !== -1) {
      const button = document.querySelector(`[data-section="${sections[activeIndex]}"]`);
      if (button) {
        const rect = button.getBoundingClientRect();
        const container = document.querySelector('.nav-container');
        if (container) {
          const containerRect = container.getBoundingClientRect();
          setIndicatorStyle({
            left: rect.left - containerRect.left,
            width: rect.width,
          });
        }
      }
    }
  }, [activeSection, sections, getSectionRoute]);

  const handleNavigate = useCallback((section: string) => {
    onNavigate(getSectionRoute(section));
  }, [onNavigate, getSectionRoute]);

  return (
    <header className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4">
      <nav className="bg-black/80 backdrop-blur-md border border-[var(--neon-green)] rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-lg shadow-[var(--neon-green)]/20 max-w-fit">
        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-6 nav-container relative" style={{ minWidth: 'fit-content' }}>
          {/* Sliding Active Indicator - Hidden on very small screens */}
          <motion.div
            className="hidden sm:block absolute top-1/2 -translate-y-1/2 h-10 bg-[var(--neon-green)] rounded-full"
            initial={false}
            animate={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
          
          {/* Left Navigation Items (About, Project) */}
          <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2 md:gap-3">
            {sections.slice(0, 2).map((section, index, arr) => (
              <div key={section} className="flex items-center gap-1 sm:gap-2 md:gap-3">
                <button
                  data-section={section}
                  onClick={() => handleNavigate(section)}
                  className={`px-2 sm:px-3 md:px-4 py-2 sm:py-1 rounded-full transition-all duration-300 font-mono text-[10px] sm:text-xs tracking-wider relative z-10 whitespace-nowrap min-h-[44px] sm:min-h-0 flex items-center justify-center ${
                    activeSection === getSectionRoute(section) ? 'text-black font-bold bg-[var(--neon-green)] sm:bg-transparent' : 'text-white hover:text-[var(--neon-green)]'
                  }`}
                >
                  <span className="hidden sm:inline">{section}</span>
                  <span className="sm:hidden">{section === 'About me' ? 'About' : section}</span>
                </button>
                {index < arr.length - 1 && (
                  <div className="hidden sm:flex w-3 h-3 rounded-full border-2 border-[var(--neon-green)] items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></div>
                  </div>
                )}
              </div>
            ))}
            {/* Dot separator before logo */}
            <div className="hidden sm:flex w-3 h-3 rounded-full border-2 border-[var(--neon-green)] items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></div>
            </div>
          </div>

          {/* Logo in Center */}
          <div className="flex-shrink-0 flex items-center justify-center relative z-10 mx-0.5 sm:mx-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>

          {/* Right Navigation Items (Experience, Contact) */}
          <div className="flex flex-1 items-center justify-start gap-1 sm:gap-2 md:gap-3">
            {/* Dot separator after logo */}
            <div className="hidden sm:flex w-3 h-3 rounded-full border-2 border-[var(--neon-green)] items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></div>
            </div>
            {sections.slice(2).map((section, index, arr) => (
              <div key={section} className="flex items-center gap-1 sm:gap-2 md:gap-3">
                <button
                  data-section={section}
                  onClick={() => handleNavigate(section)}
                  className={`px-2 sm:px-3 md:px-4 py-2 sm:py-1 rounded-full transition-all duration-300 font-mono text-[10px] sm:text-xs tracking-wider relative z-10 whitespace-nowrap min-h-[44px] sm:min-h-0 flex items-center justify-center ${
                    activeSection === getSectionRoute(section) ? 'text-black font-bold bg-[var(--neon-green)] sm:bg-transparent' : 'text-white hover:text-[var(--neon-green)]'
                  }`}
                >
                  <span className="hidden sm:inline">{section}</span>
                  <span className="sm:hidden">{section === 'Experience' ? 'Exp' : section}</span>
                </button>
                {index < arr.length - 1 && (
                  <div className="hidden sm:flex w-3 h-3 rounded-full border-2 border-[var(--neon-green)] items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Back to Top floating button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-4 right-4 bg-black/85 border-2 border-[var(--neon-green)] text-[var(--neon-green)] rounded-none px-4 py-3 font-mono text-sm shadow-[0_8px_18px_-6px_rgba(0,255,128,0.5)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-200 z-50 min-w-[48px] min-h-[48px] flex items-center justify-center"
        >
          ^
        </button>
      )}
    </header>
  );
}
