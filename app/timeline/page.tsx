'use client';

import TimelineSection from '@/components/TimelineSection';
import { FullPageLoader } from '@/components/TerminalLoader';
import { useState, useEffect } from 'react';

export default function TimelinePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FullPageLoader text="Loading Timeline..." />;
  }

  return (
    <>
      {/* Terminal background effects */}
      <div className="crt-overlay" />
      <div className="terminal-vignette" />

      <div className="min-h-screen terminal-bg text-[var(--foreground)] relative z-10">
        <main>
          <TimelineSection />
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400 font-mono text-sm">
              © 2026 Baman Prasad Guragain / Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
