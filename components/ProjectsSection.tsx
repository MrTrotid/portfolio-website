'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Github } from 'lucide-react';

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<null | any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const projects = [
    {
      title: 'AQ Sentinel',
      subtitle: 'Real-time air quality monitoring system',
      description: 'A low-cost, real-time air quality monitoring system powered by ESP32 microcontroller. Provides real-time data visualization and alerts.',
      fullDescription: 'AQ Sentinel is an innovative IoT solution that combines hardware and software to monitor air quality in real-time. The system uses an ESP32 microcontroller to collect data from various sensors and transmits it to a web application built with React and Node.js.',
      techStack: ['IoT', 'ESP32', 'React', 'Node.js'],
      image: '/projects/aqsentinel.png',
      images: ['/projects/aqsentinel.png'],
      isGroupProject: true,
      githubUrl: '#',
    },
    {
      title: 'Sherlock Scramble Solver',
      subtitle: 'Grid word game solver',
      description: 'A Python-based solver for 15x15 grid word games. Uses advanced pattern matching algorithms to find all hidden words efficiently.',
      fullDescription: 'Sherlock Scramble Solver is an intelligent word game solver that efficiently finds all hidden words in a 15x15 grid. The algorithm uses advanced pattern matching techniques and data structures to deliver results in milliseconds.',
      techStack: ['Python', 'Algorithm', 'Grid Search'],
      image: '/projects/sherlock.png',
      images: ['/projects/sherlock.png'],
      isGroupProject: false,
      githubUrl: '#',
    },
    {
      title: 'Personal Portfolio',
      subtitle: 'Modern portfolio website',
      description: 'A modern, responsive portfolio website built with Next.js and TailwindCSS. Features terminal aesthetic, smooth animations, and optimal performance.',
      fullDescription: 'This portfolio website showcases projects and skills with a unique terminal aesthetic. Built with Next.js 16, TypeScript, and TailwindCSS, featuring smooth animations using Framer Motion.',
      techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      image: '/projects/portfolio.png',
      images: ['/projects/portfolio.png'],
      isGroupProject: false,
      githubUrl: '#',
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

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
            Things I&apos;ve built
          </p>

          <div className="relative">
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 flex items-center justify-center border border-[var(--neon-green)] bg-[#1a1a1a] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-xl shadow-[0_0_10px_rgba(57,255,20,0.3)]"
              aria-label="Previous project"
            >
              &lt;
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 flex items-center justify-center border border-[var(--neon-green)] bg-[#1a1a1a] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-xl shadow-[0_0_10px_rgba(57,255,20,0.3)]"
              aria-label="Next project"
            >
              &gt;
            </button>

            <div ref={containerRef} className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: containerWidth ? -currentIndex * (containerWidth + 24) : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {projects.map((project) => (
                  <div key={project.title} className="w-full flex-shrink-0">
                    <Card className="bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--neon-green)] transition-all duration-300 overflow-hidden h-full flex flex-col">
                      <CardHeader className="pb-0">
                        <div className="relative w-full h-48 mb-4 -mx-6 -mt-6 rounded-t-lg overflow-hidden bg-gray-900">
                          {project.image && (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e: any) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          )}
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-mono text-white">{project.title}</CardTitle>
                            <CardDescription className="font-mono text-gray-400">{project.subtitle}</CardDescription>
                          </div>
                          {project.isGroupProject && (
                            <span className="px-2 py-1 text-xs font-mono bg-purple-900/50 border border-purple-500 text-purple-300 rounded whitespace-nowrap">
                              GROUP
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 flex-grow">
                        <p className="text-gray-300 mb-4 font-mono text-sm line-clamp-3">{project.description}</p>
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
                      <CardFooter className="flex gap-4 mt-auto">
                        <Button
                          onClick={() => setSelectedProject(project)}
                          variant="outline"
                          className="border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black font-mono"
                        >
                          Learn More
                        </Button>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            className="text-white hover:text-[var(--neon-green)] font-mono flex items-center gap-2"
                          >
                            <Github size={18} /> GitHub
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

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

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a1a] border border-[var(--neon-green)] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-[0_0_40px_rgba(57,255,20,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#0a0a0a] border-b border-[var(--neon-green)] px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-mono text-[var(--neon-green)]">{selectedProject.title}</h3>
                  {selectedProject.isGroupProject && (
                    <span className="text-xs font-mono text-purple-300 mt-1">GROUP PROJECT</span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-[var(--neon-green)] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-[var(--neon-green)] font-mono text-sm mb-2">$ cat description.txt</h4>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[var(--neon-green)] font-mono text-sm mb-3">$ ls technologies/</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/50 border border-[var(--border-color)] rounded text-xs font-mono text-[var(--neon-green)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div>
                      <h4 className="text-[var(--neon-green)] font-mono text-sm mb-3">$ gallery --show</h4>
                      <div className="space-y-4">
                        {selectedProject.images.map((img: string, idx: number) => (
                          <div
                            key={idx}
                            className="relative w-full h-64 rounded-lg overflow-hidden border border-[var(--border-color)] bg-gray-900"
                          >
                            <Image
                              src={img}
                              alt={`${selectedProject.title} screenshot ${idx + 1}`}
                              fill
                              className="object-cover"
                              onError={(e: any) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#0a0a0a] border-t border-[var(--neon-green)] px-6 py-4 flex gap-3">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black font-mono border flex items-center justify-center gap-2">
                    <Github size={18} /> Visit GitHub
                  </Button>
                </a>
                <Button
                  onClick={() => setSelectedProject(null)}
                  variant="ghost"
                  className="text-gray-400 hover:text-[var(--neon-green)] font-mono"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
