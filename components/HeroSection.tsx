'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const navigationButtons = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#project' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#resume' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="flex items-center justify-center relative py-24 pt-40 min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Floating Navigation Buttons - Left Side */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {navigationButtons.slice(0, 2).map((btn, idx) => (
          <motion.button
            key={btn.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.05, x: 5 }}
            onClick={() => handleNavClick(btn.href)}
            className="px-4 py-2 border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-xs md:text-sm rounded bg-black/50 backdrop-blur-sm shadow-lg shadow-[var(--neon-green)]/20"
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      {/* Floating Navigation Buttons - Right Side */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {navigationButtons.slice(2).map((btn, idx) => (
          <motion.button
            key={btn.href}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.05, x: -5 }}
            onClick={() => handleNavClick(btn.href)}
            className="px-4 py-2 border border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-xs md:text-sm rounded bg-black/50 backdrop-blur-sm shadow-lg shadow-[var(--neon-green)]/20"
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-8"
        >
          {/* Text Content - Above Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-left w-full"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-mono leading-tight">
              <span className="name-hover">
                <span className="original-text">Baman</span>
                <span className="hover-text text-[var(--neon-green)]">Batman</span>
              </span>{' '}
              is a{' '}
              <span className="text-[var(--neon-green)]">student</span> and
              <br />
              <span className="text-[var(--neon-green)] whitespace-nowrap">cyber-security enthusiast</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-mono max-w-2xl">
              He crafts responsive websites where technologies meet creativity
            </p>
          </motion.div>

          {/* Contact Button - Slightly left and below text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mb-4"
            style={{ marginLeft: '900px', marginTop: '-50px' }}
          >
            <Button
              onClick={onContactClick}
              variant="outline"
              className="border-2 border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-lg px-8 py-6"
            >
              Contact me!!
            </Button>
          </motion.div>

          {/* Hero Image - Below contact button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
            style={{ marginTop: '-100px' }}
          >
            <Image
              src="/hero.svg"
              alt="Baman - Cyber Security Enthusiast"
              width={400}
              height={400}
              className="w-full max-w-xs md:max-w-sm object-contain"
              priority
            />
          </motion.div>

          {/* Decorative Grid Background - 3/4 square (Smaller, below contact button) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-32 w-64 h-64 grid grid-cols-12 gap-1.5 opacity-15 pointer-events-none z-0"
            style={{ left: 'calc(50% + 325px)', transform: 'translate(-50%, 25%)' }}
          >
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.01 }}
                className="w-1.5 h-1.5 bg-[var(--neon-green)] rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
