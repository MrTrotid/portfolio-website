'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  badge: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Lead Developer',
      company: 'TechCorp Security',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      text: 'Working with Baman on our security overhaul was exceptional. The attention to detail and proactive approach to identifying vulnerabilities saved us significant headaches.',
      badge: '✓ Verified',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'InnovateTech',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      text: 'Outstanding full-stack capabilities. Baman delivered a complex web application with both polished UI and robust backend architecture in record time.',
      badge: '✓ Verified',
    },
    {
      id: 3,
      name: 'Marcus Webb',
      role: 'Security Analyst',
      company: 'CyberGuard Inc',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      text: 'Impressive penetration testing work. The vulnerability reports were detailed, actionable, and helped us strengthen our entire infrastructure significantly.',
      badge: '✓ Verified',
    },
    {
      id: 4,
      name: 'Priya Patel',
      role: 'CTO',
      company: 'CloudSafe Solutions',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      text: 'Baman brings both technical depth and excellent communication skills. A valuable addition to any team working on cutting-edge projects.',
      badge: '✓ Verified',
    },
  ];

  return (
    <section className="py-16 overflow-hidden bg-[#0a0a0a] h-[600px] flex flex-col">
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-2">
            <span className="text-[var(--neon-green)]">$</span> testimonials
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-[var(--neon-green)]">&gt;</span> What others say about working with me
          </p>
        </motion.div>

        {/* Horizontal Marquee */}
        <div className="relative overflow-hidden flex-1 flex items-center">
          <motion.div
            className="flex gap-6 w-fit"
            animate={{ x: [0, -100 * (testimonials.length + 4)] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Original testimonials */}
            {testimonials.map((testimonial) => (
              <div
                key={`original-${testimonial.id}`}
                className="flex-shrink-0 w-80 border border-[var(--border-color)] bg-[var(--card-bg)] p-6 rounded-lg transition-all duration-300 hover:border-[var(--neon-green)] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--neon-green)]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-[var(--neon-green)] text-sm">{testimonial.name}</p>
                    <p className="font-mono text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <p className="font-mono text-gray-300 text-sm leading-relaxed mb-3">&quot;{testimonial.text}&quot;</p>
                <p className="font-mono text-[var(--neon-green)] text-xs">{testimonial.company}</p>
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {testimonials.map((testimonial) => (
              <div
                key={`duplicate-${testimonial.id}`}
                className="flex-shrink-0 w-80 border border-[var(--border-color)] bg-[var(--card-bg)] p-6 rounded-lg transition-all duration-300 hover:border-[var(--neon-green)] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--neon-green)]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-[var(--neon-green)] text-sm">{testimonial.name}</p>
                    <p className="font-mono text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <p className="font-mono text-gray-300 text-sm leading-relaxed mb-3">&quot;{testimonial.text}&quot;</p>
                <p className="font-mono text-[var(--neon-green)] text-xs">{testimonial.company}</p>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
