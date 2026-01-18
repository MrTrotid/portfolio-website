'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const sections = useMemo(() => ['Skills', 'Project', 'Resume', 'Contact'], []);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!activeSection) {
      setIndicatorStyle({ left: 0, width: 0 });
      return;
    }

    const activeIndex = sections.findIndex(s => s.toLowerCase() === activeSection);
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
  }, [activeSection, sections]);

  const handleNavigate = useCallback((section: string) => {
    onNavigate(section);
  }, [onNavigate]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="bg-black/80 backdrop-blur-md border border-[var(--neon-green)] rounded-full px-6 py-3 shadow-lg shadow-[var(--neon-green)]/20">
        <div className="flex items-center gap-6 nav-container relative">
          {/* Sliding Active Indicator */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-10 bg-[var(--neon-green)] rounded-full"
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
          
          {/* Left Navigation Items */}
          <div className="flex items-center gap-4">
            {sections.slice(0, 2).map((section, index) => (
              <div key={section} className="flex items-center gap-4">
                <button
                  data-section={section}
                  onClick={() => handleNavigate(section.toLowerCase())}
                  className={`px-4 py-1 rounded-full transition-all duration-300 font-mono text-xs tracking-wider relative z-10 ${
                    activeSection === section.toLowerCase() ? 'text-black font-bold' : 'text-white hover:text-[var(--neon-green)]'
                  }`}
                >
                  {section}
                </button>
                
                {index === 0 && (
                  <div className="w-3 h-3 rounded-full border-2 border-[var(--neon-green)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Logo in Center */}
          <div className="mx-2 relative z-10">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>

          {/* Right Navigation Items */}
          <div className="flex items-center gap-4">
            {sections.slice(2).map((section, index) => (
              <div key={section} className="flex items-center gap-4">
                {index === 0 && (
                  <div className="w-3 h-3 rounded-full border-2 border-[var(--neon-green)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></div>
                  </div>
                )}
                <button
                  data-section={section}
                  onClick={() => handleNavigate(section.toLowerCase())}
                  className={`px-4 py-1 rounded-full transition-all duration-300 font-mono text-xs tracking-wider relative z-10 ${
                    activeSection === section.toLowerCase() ? 'text-black font-bold' : 'text-white hover:text-[var(--neon-green)]'
                  }`}
                >
                  {section}
                </button>
                
                {index < sections.slice(2).length - 1 && (
                  <div className="w-3 h-3 rounded-full border-2 border-[var(--neon-green)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-green)]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
