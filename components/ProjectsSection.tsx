'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Secure Chat Application',
      subtitle: 'End-to-end encrypted messaging',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      techStack: ['React', 'Node.js', 'WebSocket', 'Cryptography'],
      github: '#',
    },
    {
      title: 'Vulnerability Scanner',
      subtitle: 'Automated security testing tool',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      techStack: ['Python', 'Flask', 'SQLite', 'Nmap'],
      github: '#',
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal brand showcase',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
      github: '#',
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="project" className="flex items-center justify-center py-32">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>projects
          </h2>
          <p className="text-gray-400 text-center mb-12 font-mono">
            Things I've built
          </p>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 flex items-center justify-center border-2 border-[var(--neon-green)] rounded-full text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300"
              aria-label="Previous project"
            >
              ←
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 flex items-center justify-center border-2 border-[var(--neon-green)] rounded-full text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300"
              aria-label="Next project"
            >
              →
            </button>

            {/* Project Cards */}
            <div className="flex gap-6 overflow-hidden">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: idx === currentIndex ? 1 : 0.5,
                    scale: idx === currentIndex ? 1 : 0.9,
                    x: `${(idx - currentIndex) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  className="min-w-full"
                >
                  <Card className="bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--neon-green)] transition-all duration-300">
                    <CardHeader>
                      {/* Placeholder Icons/Images */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-purple-900/30 rounded-lg flex items-center justify-center">
                          <span className="text-3xl">A</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-12 h-12 bg-orange-900/30 rounded-full flex items-center justify-center">⚙</div>
                          <div className="w-12 h-12 bg-gray-700/30 rounded flex items-center justify-center">📦</div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-mono text-white">{project.title}</CardTitle>
                      <CardDescription className="font-mono text-gray-400">{project.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 font-mono text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-black/50 border border-[var(--border-color)] rounded text-xs font-mono text-[var(--neon-green)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <Button
                        variant="outline"
                        className="border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black font-mono"
                      >
                        Learn More
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-[var(--neon-green)] font-mono"
                      >
                        <span className="mr-2">⚡</span> GitHub
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-[var(--neon-green)] w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
