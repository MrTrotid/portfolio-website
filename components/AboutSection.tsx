'use client';

import { motion } from 'framer-motion';
import { profile } from '@/lib/profile';

export default function AboutSection() {
  const skillCategories = profile.skills;

  return (
    <section id="about" className="flex items-center justify-center py-20 sm:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6" style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-3 sm:mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>about-me
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 font-mono">
            $ whoami
          </p>

          {/* About Content */}
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="border border-[var(--border-color)] bg-[var(--card-bg)] p-5 sm:p-6 md:p-8 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300 flex-1"
              style={{ minWidth: '280px', maxWidth: '600px' }}
            >
              <h3 className="text-xl sm:text-2xl font-mono text-[var(--neon-green)] mb-3 sm:mb-4">Who I am</h3>
              <p className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed">
                {profile.about.whoIAm}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="border border-[var(--border-color)] bg-[var(--card-bg)] p-5 sm:p-6 md:p-8 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300 flex-1"
              style={{ minWidth: '280px', maxWidth: '600px' }}
            >
              <h3 className="text-xl sm:text-2xl font-mono text-[var(--neon-green)] mb-3 sm:mb-4">What I do</h3>
              <ul className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm text-gray-300">
                {profile.about.whatIDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[var(--neon-green)]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Skills Subsection */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="mb-6 sm:mb-8 text-center"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-mono text-[var(--neon-green)] mb-2">
                <span className="text-[var(--neon-green)]">$</span> skills
              </h3>
              <p className="text-gray-400 font-mono text-xs sm:text-sm md:text-base">
                $ cat tech_arsenal.txt
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: false }}
                  className="border border-[var(--border-color)] bg-[#0a0a0a] p-5 sm:p-6 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300 flex-1"
                  style={{ minWidth: '240px', maxWidth: '360px' }}
                >
                  <h4 className="text-base sm:text-lg font-bold font-mono mb-3 sm:mb-4 text-[var(--neon-green)] text-center">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1 bg-black/50 border border-[var(--neon-green)] rounded text-[10px] sm:text-xs font-mono text-[var(--neon-green)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
