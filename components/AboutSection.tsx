'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
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
    <section id="about" className="flex items-center justify-center py-32">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>about me
          </h2>
          <p className="text-gray-400 text-center mb-12 font-mono">
            $ whoami
          </p>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-[var(--border-color)] bg-[var(--card-bg)] p-8 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300"
            >
              <h3 className="text-2xl font-mono text-[var(--neon-green)] mb-4">Who I am</h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                I'm a passionate student and cybersecurity enthusiast dedicated to building secure and efficient web applications. 
                With a strong foundation in frontend development and security practices, I create projects that combine 
                functionality with robust protection against vulnerabilities.
              </p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                My journey in tech is driven by curiosity and the desire to solve complex problems. Whether it's crafting 
                responsive user interfaces or identifying security flaws, I approach each challenge with enthusiasm and 
                meticulous attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-[var(--border-color)] bg-[var(--card-bg)] p-8 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300"
            >
              <h3 className="text-2xl font-mono text-[var(--neon-green)] mb-4">What I do</h3>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--neon-green)]">→</span>
                  <span>Build responsive web applications with modern frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--neon-green)]">→</span>
                  <span>Test and identify security vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--neon-green)]">→</span>
                  <span>Create intuitive user interfaces with smooth animations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--neon-green)]">→</span>
                  <span>Implement secure coding practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--neon-green)]">→</span>
                  <span>Collaborate on innovative projects</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Skills Subsection */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-3xl font-mono text-[var(--neon-green)] mb-2">
                <span className="text-[var(--neon-green)]">$</span> skills
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                Technologies and tools I work with
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-[var(--border-color)] bg-[#0a0a0a] p-6 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300"
                >
                  <h4 className="text-lg font-bold font-mono mb-4 text-[var(--neon-green)]">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-black/50 border border-[var(--neon-green)] rounded text-xs font-mono text-[var(--neon-green)]"
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
