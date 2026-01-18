'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="hero" className="flex items-center justify-center relative py-24 pt-64 min-h-screen bg-[#323232]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-mono leading-tight">
              Baman is a{' '}
              <span className="text-[var(--neon-green)]">student</span> and{' '}
              <span className="text-[var(--neon-green)]">cyber-security</span>{' '}
              <span className="text-gray-400">enthusiast</span>
            </h1>

            <p className="text-lg text-gray-400 font-mono">
              He crafts responsive websites where technologies meet creativity
            </p>

            <Button
              onClick={onContactClick}
              variant="outline"
              className="border-2 border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-lg px-8 py-6"
            >
              Contact me!!
            </Button>
          </motion.div>

          {/* Right: Hero Image with Decorative Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Dotted Grid */}
            <div className="absolute top-0 right-0 w-48 h-64 grid grid-cols-10 gap-1 opacity-30">
              {[...Array(120)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[var(--neon-green)] rounded-full"></div>
              ))}
            </div>

            {/* Hero Image */}
            <div className="relative z-10 flex justify-center">
              <Image
                src="/hero.svg"
                alt="Baman - Cyber Security Enthusiast"
                width={500}
                height={500}
                className="w-full max-w-md object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
