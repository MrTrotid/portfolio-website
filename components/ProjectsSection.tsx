'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Github } from 'lucide-react';

/**
 * ProjectsSection Component
 * 
 * Displays a carousel of projects with detailed modal view.
 * 
 * IMAGE REQUIREMENTS:
 * - Card thumbnails (image): 800x400px (2:1 aspect ratio) - displayed as object-cover
 * - Gallery images (images[]): 1200x800px (3:2) or 1920x1080px (16:9) - displayed as object-cover
 * - Place all images in /public/projects/
 * - Optimize: <200KB for cards, <500KB for gallery
 * 
 * See docs/IMAGE_GUIDELINES.md for detailed specifications.
 */
export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<null | any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const isMobile = containerWidth < 640;
  const gap = isMobile ? 16 : 24;
  const minCardWidth = 360;

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
      priority: 1,
      githubUrl: 'https://github.com/rahatpaudel/aqsentinel',
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
      priority: 3,
      githubUrl: 'https://github.com/MrTrotid/Sherlock-Scramble-Solver',
    },
    {
      title: 'Portfolio',
      subtitle: 'Modern portfolio website',
      description: 'A modern, responsive portfolio website built with Next.js and TailwindCSS. Features terminal aesthetic, smooth animations, and optimal performance.',
      fullDescription: 'This portfolio website showcases projects and skills with a unique terminal aesthetic. Built with Next.js 16, TypeScript, and TailwindCSS, featuring smooth animations using Framer Motion.',
      techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      image: '/projects/portfolio.png',
      images: ['/projects/portfolio.png'],
      isGroupProject: false,
      priority: 2,
      githubUrl: 'https://github.com/MrTrotid/portfolio-website',
    },
    {
      title: 'MeroAushadhi',
      subtitle: 'Medicine information platform for Nepali users',
      description: 'Earned third place in a hackathon. A medicine information platform for Nepali-speaking users with searchable drug data and AI-assisted explanations.',
      fullDescription: 'MeroAushadhi ("My Medicine" in Nepali) is a comprehensive medicine information application designed specifically for Nepali-speaking users. It leverages cutting-edge technology to make medical information accessible, understandable, and actionable.',
      techStack: ['React', 'Supabase', 'Flowise', 'Google Generative AI', 'Framer Motion'],
      image: '',
      images: [],
      isGroupProject: true,
      priority: 1,
      githubUrl: 'https://github.com/MrTrotid/meroaushadhi',
    },
  ].sort((a, b) => a.priority - b.priority);

  const itemsPerView = containerWidth >= minCardWidth * 2 + gap ? 2 : 1;
  const cardWidth = containerWidth ? Math.floor((containerWidth - gap * (itemsPerView - 1)) / itemsPerView) : 0;
  const maxIndex = Math.max(projects.length - itemsPerView, 0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver(() => {
      setContainerWidth(element.offsetWidth);
    });

    observer.observe(element);
    setContainerWidth(element.offsetWidth);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <section id="project" className="flex items-center justify-center py-20 sm:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6" style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-3 sm:mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>projects
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 font-mono">
            $ ls -la my_projects/
          </p>

          <div className="relative">
            <button
              onClick={prevProject}
              className="hidden sm:flex absolute -left-4 sm:-left-6 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center border border-[var(--neon-green)] bg-[#1a1a1a] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-xl shadow-[0_0_10px_rgba(57,255,20,0.3)] touch-manipulation rounded"
              aria-label="Previous project"
            >
              &lt;
            </button>

            <button
              onClick={nextProject}
              className="hidden sm:flex absolute -right-4 sm:-right-6 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center border border-[var(--neon-green)] bg-[#1a1a1a] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-mono text-xl shadow-[0_0_10px_rgba(57,255,20,0.3)] touch-manipulation rounded"
              aria-label="Next project"
            >
              &gt;
            </button>

            <div ref={containerRef} className="relative w-full overflow-hidden mx-auto rounded-lg">
              <motion.div
                className={`flex ${isMobile ? 'gap-4' : 'gap-6'}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  // Swipe gesture threshold
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    nextProject();
                  } else if (info.offset.x > swipeThreshold) {
                    prevProject();
                  }
                }}
                animate={{
                  x: cardWidth > 0 ? -currentIndex * (cardWidth + gap) : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  width: cardWidth > 0 ? `${(cardWidth + gap) * projects.length - gap}px` : '100%',
                  cursor: 'grab',
                  display: 'flex',
                }}
                whileTap={{ cursor: 'grabbing' }}
              >
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="flex-shrink-0 min-w-0"
                    style={{ width: cardWidth ? `${cardWidth}px` : '100%' }}
                  >
                    <Card className="bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--neon-green)] transition-all duration-300 overflow-hidden h-full flex flex-col">
                      <CardHeader className="p-0">
                        {/* Recommended image dimensions: 800x400px (2:1 aspect ratio) */}
                        <div className="relative w-full h-32 sm:h-40 md:h-48 overflow-hidden bg-gray-900">
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
                        <div className="flex items-start justify-between gap-2 p-3 sm:p-4 md:p-6 pb-0">
                          <div className="flex-1 min-w-0">
                            <CardTitle 
                              className="text-base sm:text-lg md:text-2xl font-mono text-white"
                              style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                            >
                              {project.title}
                            </CardTitle>
                            <CardDescription className="font-mono text-gray-400 text-xs sm:text-sm hidden sm:block">{project.subtitle}</CardDescription>
                          </div>
                          {project.isGroupProject && (
                            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-purple-900/50 border border-purple-500 text-purple-300 rounded whitespace-nowrap flex-shrink-0">
                              GROUP
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2 sm:pt-3 md:pt-4 flex-grow px-3 sm:px-4 md:px-6">
                        <p className="text-gray-300 mb-2 sm:mb-3 md:mb-4 font-mono text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-black/50 border border-[var(--border-color)] rounded text-[10px] sm:text-xs font-mono text-[var(--neon-green)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                        <Button
                          onClick={() => setSelectedProject(project)}
                          variant="outline"
                          className="w-full sm:w-auto border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black font-mono text-xs sm:text-sm min-h-[44px] sm:min-h-0"
                        >
                          Learn More
                        </Button>
                        <Button
                          asChild
                          variant="ghost"
                          className="w-full sm:w-auto text-white hover:text-[var(--neon-green)] font-mono flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[44px] sm:min-h-0"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="sm:w-[18px] sm:h-[18px]" /> GitHub
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 touch-manipulation rounded-full ${
                    idx === currentIndex
                      ? 'w-2 h-0.5 sm:w-8 sm:h-2 bg-[var(--neon-green)] shadow-[0_0_6px_rgba(57,255,20,0.6)]'
                      : 'w-0.5 h-0.5 sm:w-2 sm:h-2 bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                >
                  <span className="sr-only">Project {idx + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a1a] border border-[var(--neon-green)] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-[0_0_40px_rgba(57,255,20,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#0a0a0a] border-b border-[var(--neon-green)] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg sm:text-2xl font-mono text-[var(--neon-green)]"
                    style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                  >
                    {selectedProject.title}
                  </h3>
                  {selectedProject.isGroupProject && (
                    <span className="text-xs font-mono text-purple-300 mt-1">GROUP PROJECT</span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-[var(--neon-green)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-[var(--neon-green)] font-mono text-xs sm:text-sm mb-2">$ cat description.txt</h4>
                    <p 
                      className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed"
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                    >
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[var(--neon-green)] font-mono text-xs sm:text-sm mb-3">$ ls technologies/</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-black/50 border border-[var(--border-color)] rounded text-xs font-mono text-[var(--neon-green)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div>
                      <h4 className="text-[var(--neon-green)] font-mono text-xs sm:text-sm mb-3">$ gallery --show</h4>
                      {/* Recommended gallery image dimensions: 1200x800px (3:2 aspect ratio) or 1920x1080px (16:9 aspect ratio) */}
                      <div className="space-y-3 sm:space-y-4">
                        {selectedProject.images.map((img: string, idx: number) => (
                          <div
                            key={idx}
                            className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden border border-[var(--border-color)] bg-gray-900"
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

              <div className="bg-[#0a0a0a] border-t border-[var(--neon-green)] px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="w-full sm:flex-1 border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black font-mono border flex items-center justify-center gap-2 min-h-[44px] touch-manipulation"
                >
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> Visit GitHub
                  </a>
                </Button>
                <Button
                  onClick={() => setSelectedProject(null)}
                  variant="ghost"
                  className="w-full sm:w-auto text-gray-400 hover:text-[var(--neon-green)] font-mono min-h-[44px] touch-manipulation"
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
