'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Security',
      skills: ['Penetration Testing', 'Network Security', 'Cryptography', 'OSINT', 'Web Security'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Linux', 'Python', 'Burp Suite', 'Wireshark'],
    },
  ];

  return (
    <section id="skills" className="flex items-center justify-center py-32">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>skills
          </h2>
          <p className="text-gray-400 text-center mb-12 font-mono">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-[var(--border-color)] bg-[var(--card-bg)] p-6 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300"
              >
                <h3 className="text-xl font-bold font-mono mb-4 text-[var(--neon-green)]">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-black/50 border border-[var(--border-color)] rounded-md text-sm font-mono hover:border-[var(--neon-green)] hover:text-[var(--neon-green)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
