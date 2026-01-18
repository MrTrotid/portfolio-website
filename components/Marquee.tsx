'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const marqueeText = '< cyber security > < web development > < penetration testing > < secure coding > ';

  return (
    <div className="relative w-full overflow-hidden bg-[#323232] py-6 border-y border-[var(--neon-green)] border-opacity-30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="text-[var(--neon-green)] font-mono text-lg tracking-wider pr-8">
          {marqueeText}
        </span>
        <span className="text-[var(--neon-green)] font-mono text-lg tracking-wider pr-8">
          {marqueeText}
        </span>
      </motion.div>
    </div>
  );
}
