'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface TimelineEntry {
  date: string;
  title: string;
  company: string;
  type: 'join' | 'leave';
  logo?: string;
}

const timelineEvents: TimelineEntry[] = [
  {
    date: 'Apr 2019',
    title: 'Joined as Patrol Leader',
    company: 'Nepal Scouts',
    type: 'join',
    logo: '/logos/Nepal_scout.png',
  },
  {
    date: 'Apr 2021',
    title: 'Left Patrol Leader Position',
    company: 'Nepal Scouts',
    type: 'leave',
  },
  {
    date: 'Jan 2024',
    title: 'Became Executive',
    company: 'SXC A Level Alumni Club',
    type: 'join',
    logo: '/logos/stxaviers.png',
  },
  {
    date: 'Feb 2024',
    title: 'Joined as Event Manager & Deputy IT Manager',
    company: 'Junior Jaycees Budhanilkantha',
    type: 'join',
    logo: '/logos/JCI_logo.jpeg',
  },
  {
    date: 'Jul 2025',
    title: 'Joined as IT Officer',
    company: 'Interact Club of Matribhumi Baluwatar',
    type: 'join',
    logo: '/logos/ICMB.png',
  },
  {
    date: 'Aug 2025',
    title: 'Joined as SEO Content Writer',
    company: 'Gadgetbyte Nepal',
    type: 'join',
    logo: '/logos/gadgetbyte.png',
  },
  {
    date: 'Jan 2025',
    title: 'Left Event Manager Position',
    company: 'Junior Jaycees Budhanilkantha',
    type: 'leave',
  },
  {
    date: 'Dec 2025',
    title: 'Completed SEO Writer Role',
    company: 'Gadgetbyte Nepal',
    type: 'leave',
  },
];

const sortedEvents = [...timelineEvents].sort((a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const dateVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const connectorVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.15,
    },
  },
};

export default function TimelineSection() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="timeline" className="w-full py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-3">
            <span className="text-[var(--neon-green)]">#</span>timeline
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base">
            $ cat my_journey.log
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Main Vertical Timeline Line - Continuous and Consistent */}
          <div
            className="absolute top-0 bottom-0 w-px bg-[var(--neon-green)] opacity-40 pointer-events-none"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />

          {/* Timeline Events */}
          <motion.div
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '0px 0px -100px 0px' }}
          >
            {sortedEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const colorClass = event.type === 'join' ? 'var(--neon-green)' : '#ef4444';

              return (
                <motion.div
                  key={`${event.date}-${index}`}
                  ref={(el) => {
                    if (el) itemsRef.current[index] = el;
                  }}
                  className="relative w-full"
                  style={{ minHeight: 'auto' }}
                >
                  {/* Event Container - Consistent Height */}
                  <div
                    className={`flex items-stretch ${
                      isLeft ? 'justify-start' : 'justify-end'
                    }`}
                    style={{
                      paddingBottom: '3.5rem',
                    }}
                  >
                    {/* Content Wrapper */}
                    <div className="w-full md:w-5/12 flex flex-col">
                      {/* Date Label - Positioned Above Card */}
                      <motion.div
                        variants={dateVariants}
                        className="mb-2"
                      >
                        <span
                          className="text-xs md:text-sm font-mono font-semibold tracking-widest"
                          style={{ color: colorClass }}
                        >
                          {event.date}
                        </span>
                      </motion.div>

                      {/* Event Card */}
                      <motion.div
                        variants={itemVariants}
                        className={`w-full border rounded-md p-4 md:p-5 transition-all duration-300 hover:shadow-lg`}
                        style={{
                          borderColor: colorClass,
                          borderWidth: '2px',
                          backgroundColor:
                            event.type === 'join'
                              ? 'rgba(57, 255, 20, 0.04)'
                              : 'rgba(239, 68, 68, 0.04)',
                        }}
                      >
                        {/* Card Header - Terminal Style */}
                        <div className="mb-3 pb-2 border-b border-gray-700" />

                        {/* Card Content */}
                        <div className="space-y-2 font-mono">
                          {/* Title with Icon */}
                          <div className="flex items-start gap-2 min-w-0">
                            <span
                              className="flex-shrink-0 mt-0.5 font-bold text-sm"
                              style={{ color: colorClass }}
                            >
                              {event.type === 'join' ? '▶' : '⬛'}
                            </span>
                            <h3 className="text-sm md:text-base font-bold text-white leading-snug break-words">
                              {event.title}
                            </h3>
                          </div>

                          {/* Company */}
                          <p
                            className="text-xs md:text-sm font-semibold"
                            style={{ color: colorClass }}
                          >
                            {event.company}
                          </p>

                          {/* Logo */}
                          {event.logo && (
                            <div className="pt-2 flex items-center gap-2">
                              <Image
                                src={event.logo}
                                alt={event.company}
                                width={18}
                                height={18}
                                className="rounded"
                              />
                              <span className="text-xs text-gray-500">
                                {event.company}
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Connector Line - Branch to Main Timeline */}
                  <motion.div
                    variants={connectorVariants}
                    className="absolute h-px"
                    style={{
                      top: '2rem',
                      [isLeft ? 'left' : 'right']: '50%',
                      [isLeft ? 'marginLeft' : 'marginRight']: '0px',
                      width: isLeft
                        ? 'calc(50% - 1.5rem)'
                        : 'calc(50% - 1.5rem)',
                      backgroundColor: colorClass,
                      transformOrigin: isLeft ? 'left' : 'right',
                    }}
                    aria-hidden="true"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: false }}
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            { label: 'Joins', value: '5', color: 'text-[var(--neon-green)]' },
            { label: 'Departures', value: '3', color: 'text-red-400' },
            { label: 'Years Active', value: '4', color: 'text-blue-400' },
            { label: 'Organizations', value: '5', color: 'text-purple-400' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.35 + idx * 0.08,
                ease: 'easeOut',
              }}
              viewport={{ once: false }}
              className="border border-[var(--border-color)] bg-[var(--card-bg)] p-4 md:p-6 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300"
            >
              <div className={`text-2xl md:text-3xl font-bold font-mono ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-mono mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
