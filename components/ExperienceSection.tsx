'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { profile } from '@/lib/profile';

export default function ExperienceSection() {
  const [journeyType, setJourneyType] = useState<'professional' | 'organization'>('professional');

  const professionalExperiences = profile.experiences.professional;

  const organizationExperiences = profile.experiences.organization;

  const experiences = journeyType === 'professional' ? professionalExperiences : organizationExperiences;

  return (
    <section id="experience" className="flex items-center justify-center py-32">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>experience
          </h2>
          
          {/* Journey Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => setJourneyType('professional')}
              className={`font-mono transition-all ${
                journeyType === 'professional'
                  ? 'border-[var(--neon-green)] bg-[var(--neon-green)]/10 text-[var(--neon-green)]'
                  : 'border-gray-600 text-gray-400 hover:border-[var(--neon-green)]'
              }`}
              variant="outline"
            >
              $ my_professional_journey
            </Button>
            <Button
              onClick={() => setJourneyType('organization')}
              className={`font-mono transition-all ${
                journeyType === 'organization'
                  ? 'border-[var(--neon-green)] bg-[var(--neon-green)]/10 text-[var(--neon-green)]'
                  : 'border-gray-600 text-gray-400 hover:border-[var(--neon-green)]'
              }`}
              variant="outline"
            >
              $ my_organisation_journey
            </Button>
          </div>
          
          <p className="text-gray-400 text-center mb-12 font-mono">
            {journeyType === 'professional'
              ? 'My professional journey'
              : 'My organisation & club journey'}
          </p>

          <div className="space-y-8">
            <motion.div
              key={journeyType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-[var(--border-color)] bg-[var(--card-bg)] p-8 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300 relative"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-mono text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--neon-green)] font-mono text-sm mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-[#0a0a0a] border border-[var(--neon-green)] rounded font-mono text-xs text-[var(--neon-green)] whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 font-mono text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-[var(--neon-green)] font-mono text-xs uppercase tracking-wider">
                      $ achievements
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIdx) => (
                        <li
                          key={achievementIdx}
                          className="flex items-start gap-3 text-gray-300 font-mono text-sm"
                        >
                          <span className="text-[var(--neon-green)] mt-1">◆</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.logo && (
                    <div className="absolute bottom-4 right-4">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={50}
                        height={50}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain rounded border border-[var(--neon-green)] p-2 bg-black/50"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 border border-[var(--neon-green)] bg-[var(--card-bg)] p-6 md:p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl md:text-3xl font-mono text-[var(--neon-green)] mb-2">
              <span className="text-[var(--neon-green)]">$</span> cat resume.pdf
            </h3>
            <p className="text-gray-400 font-mono text-xs md:text-sm mb-6">
              My digital footprint & professional journey
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full">
              <Button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black font-mono border flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                variant="outline"
              >
                <Eye size={16} className="sm:w-5 sm:h-5" /> <span className="hidden sm:inline">View Resume</span><span className="sm:hidden">View</span>
              </Button>
              <Button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Baman-Prasad-Guragain-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-[var(--neon-green)] text-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black font-mono border flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                variant="outline"
              >
                <Download size={16} className="sm:w-5 sm:h-5" /> <span className="hidden sm:inline">Download</span><span className="sm:hidden">DL</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
