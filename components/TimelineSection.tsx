'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TimelineEntry {
  date: string;
  title: string;
  company: string;
  type: 'join' | 'leave' | 'milestone';
  logo?: string;
  description: string;
  isNotable?: boolean;
}

const timelineEvents: TimelineEntry[] = [
  {
    date: 'Apr 2019',
    title: 'Patrol Leader',
    company: 'Nepal Scouts',
    type: 'join',
    logo: '/logos/Nepal_scout.png',
    description: 'Led a squad of scouts into the wilderness. Survived on instant noodles and leadership skills.',
    isNotable: true,
  },
  {
    date: 'Apr 2021',
    title: 'Scout Veteran',
    company: 'Nepal Scouts',
    type: 'leave',
    description: 'Hung up the scarf after 2 legendary years. The knots I tied will never be forgotten.',
  },
  {
    date: 'Jan 2024',
    title: 'Executive Member',
    company: 'SXC A Level Alumni Club',
    type: 'join',
    logo: '/logos/stxaviers.png',
    description: 'Joined the alumni elite. Now I can say "back in my day" with official authority.',
    isNotable: true,
  },
  {
    date: 'Feb 2024',
    title: 'Event Manager & Deputy IT Manager',
    company: 'Junior Jaycees Budhanilkantha',
    type: 'join',
    logo: '/logos/JCI_logo.jpeg',
    description: 'Dual-wielding responsibilities: planning epic events while fixing the WiFi. A true Renaissance human.',
    isNotable: true,
  },
  {
    date: 'Jul 2025',
    title: 'IT Officer',
    company: 'Interact Club of Matribhumi Baluwatar',
    type: 'join',
    logo: '/logos/ICMB.png',
    description: '"Have you tried turning it off and on again?" became my professional mantra.',
  },
  {
    date: 'Aug 2025',
    title: 'SEO Content Writer',
    company: 'Gadgetbyte Nepal',
    type: 'join',
    logo: '/logos/gadgetbyte.png',
    description: 'Writing tech content that both Google algorithms and humans actually enjoy. A rare feat.',
    isNotable: true,
  },
  {
    date: 'Jan 2025',
    title: 'Event Manager Alumnus',
    company: 'Junior Jaycees Budhanilkantha',
    type: 'leave',
    description: 'Passed the torch. The events will never be the same (in a good way, I hope).',
  },
  {
    date: 'Dec 2025',
    title: 'SEO Writer Graduate',
    company: 'Gadgetbyte Nepal',
    type: 'leave',
    description: 'My articles are still ranking somewhere in the depths of Google. Legacy secured.',
  },
];

const sortedEvents = [...timelineEvents].sort((a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
});

// Typing animation component
const TypeWriter = ({ text, delay = 50, className = '' }: { text: string; delay?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-2 h-4 bg-[var(--neon-green)] ml-1"
      />
    </span>
  );
};

// Glitch text effect
const GlitchText = ({ text, className = '' }: { text: string; className?: string }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 text-cyan-400 opacity-70"
        animate={{ x: [-1, 1, -1, 0], opacity: [0.7, 0, 0.7, 0.7] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        aria-hidden="true"
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-red-400 opacity-70"
        animate={{ x: [1, -1, 1, 0], opacity: [0.7, 0, 0.7, 0.7] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2, delay: 0.1 }}
        aria-hidden="true"
      >
        {text}
      </motion.span>
    </span>
  );
};

// Status badge component
const StatusBadge = ({ type }: { type: 'join' | 'leave' | 'milestone' }) => {
  const config = {
    join: { label: 'JOINED', color: '#39ff14', bg: 'rgba(57, 255, 20, 0.1)' },
    leave: { label: 'DEPARTED', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },
    milestone: { label: 'MILESTONE', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.1)' },
  };
  const { label, color, bg } = config[type];
  
  return (
    <motion.div
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border"
      style={{ borderColor: color, backgroundColor: bg, color }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        {type === 'join' ? '++' : type === 'leave' ? '--' : '##'}
      </motion.span>
      {label}
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function TimelineSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="w-full py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-3">
            <GlitchText text="git log" className="text-[var(--neon-green)]" />
          </h2>
          <div className="text-gray-400 font-mono text-sm md:text-base">
            <span className="text-[var(--neon-green)]">$</span>{' '}
            <TypeWriter text="cat my_journey.log --graph --oneline" delay={30} />
          </div>
        </motion.div>

        {/* Timeline Events */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '0px 0px -100px 0px' }}
        >
          {sortedEvents.map((event, index) => {
            const isHovered = hoveredIndex === index;
            const isJoin = event.type === 'join';
            const isMilestone = event.isNotable;
            const accentColor = isJoin ? '#39ff14' : event.type === 'milestone' ? '#fbbf24' : '#ef4444';

            return (
              <motion.div
                key={`${event.date}-${index}`}
                className="relative"
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative w-full h-full border rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isHovered ? accentColor : 'var(--border-color)',
                    borderWidth: isHovered ? '2px' : '1px',
                    backgroundColor: 'var(--card-bg)',
                    boxShadow: isMilestone ? `0 0 20px ${accentColor}15, inset 0 0 0 1px ${accentColor}20` : undefined,
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 0 25px ${accentColor}25`,
                  }}
                >
                  {/* Notable badge for milestones */}
                  {isMilestone && (
                    <motion.div
                      className="absolute -top-px left-4 px-2 py-0.5 text-[9px] font-mono font-bold rounded-b"
                      style={{ backgroundColor: accentColor, color: '#000' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      NOTABLE
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <div className={`p-4 md:p-5 flex flex-col h-full ${isMilestone ? 'pt-6' : ''}`}>
                    {/* Header: Date + Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* Date */}
                        <motion.span
                          className="text-lg md:text-xl font-mono font-bold"
                          style={{ color: accentColor }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {event.date}
                        </motion.span>
                      </div>
                      <StatusBadge type={event.type} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed italic flex-grow">
                      "{event.description}"
                    </p>

                    {/* Organization */}
                    <div 
                      className="flex items-center justify-between pt-3 border-t mt-auto"
                      style={{ borderColor: 'var(--border-color)' }}
                    >
                      <div className="flex items-center gap-2">
                        {event.logo && (
                          <motion.div
                            className="relative w-8 h-8 rounded-md overflow-hidden bg-gray-800/50 p-1 flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          >
                            <Image
                              src={event.logo}
                              alt={event.company}
                              fill
                              className="object-contain"
                            />
                          </motion.div>
                        )}
                        <span
                          className="text-xs md:text-sm font-semibold font-mono truncate"
                          style={{ color: accentColor }}
                        >
                          @{event.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}05 0%, transparent 50%)`,
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Terminal footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="inline-flex items-center gap-2 text-xs text-gray-500 font-mono">
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-[var(--neon-green)]"
            >
              _
            </motion.span>
            <span>End of log. Press q to quit.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
