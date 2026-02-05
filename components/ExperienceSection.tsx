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
    <section id="experience" className="flex items-center justify-center py-20 sm:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6" style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-3 sm:mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>experience
          </h2>
          
          {/* Journey Toggle */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <Button
              onClick={() => setJourneyType('professional')}
              className={`font-mono transition-all min-h-[44px] text-xs sm:text-sm touch-manipulation ${
                journeyType === 'professional'
                  ? 'border-[var(--neon-green)] bg-[var(--neon-green)]/10 text-[var(--neon-green)]'
                  : 'border-gray-600 text-gray-400 hover:border-[var(--neon-green)]'
              }`}
              variant="outline"
            >
              <span className="hidden sm:inline">$ my_professional_journey</span>
              <span className="sm:hidden">$ professional</span>
            </Button>
            <Button
              onClick={() => setJourneyType('organization')}
              className={`font-mono transition-all min-h-[44px] text-xs sm:text-sm touch-manipulation ${
                journeyType === 'organization'
                  ? 'border-[var(--neon-green)] bg-[var(--neon-green)]/10 text-[var(--neon-green)]'
                  : 'border-gray-600 text-gray-400 hover:border-[var(--neon-green)]'
              }`}
              variant="outline"
            >
              <span className="hidden sm:inline">$ my_organisation_journey</span>
              <span className="sm:hidden">$ organization</span>
            </Button>
          </div>
          
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 font-mono px-4">
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
                  viewport={{ once: false }}
                  className="border border-[var(--neon-green)] bg-[var(--card-bg)] p-4 sm:p-6 md:p-8 rounded-lg hover:border-[var(--neon-green)] transition-all duration-300 relative"
                  style={{ minWidth: 0 }}
                >
                  {/* Logo & Period Container */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-2 sm:gap-3">
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#0a0a0a] border border-[var(--neon-green)] rounded font-mono text-[9px] sm:text-[10px] text-[var(--neon-green)] whitespace-nowrap">
                      {exp.period}
                    </span>
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={50}
                        height={50}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded border border-[var(--neon-green)] p-1 sm:p-1.5 bg-black/50"
                      />
                    )}
                  </div>

                  <div className="flex flex-wrap items-start gap-3 sm:gap-4 mb-3 sm:mb-4 pr-24 sm:pr-28 md:pr-32" style={{ minWidth: 0 }}>
                    <div className="flex-1" style={{ minWidth: 0 }}>
                      <h3 
                        className="text-xl sm:text-2xl font-bold font-mono text-white mb-1"
                        style={{ wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}
                      >
                        {exp.role}
                      </h3>
                      <p 
                        className="text-[var(--neon-green)] font-mono text-xs sm:text-sm mb-2"
                        style={{ wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p 
                    className="text-gray-400 font-mono text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed"
                    style={{ wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}
                  >
                    {exp.description}
                  </p>

                  <div className="space-y-2" style={{ minWidth: 0 }}>
                    <p 
                      className="text-[var(--neon-green)] font-mono text-xs uppercase tracking-wider"
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}
                    >
                      $ achievements
                    </p>
                    <ul className="space-y-2" style={{ minWidth: 0 }}>
                      {exp.achievements.map((achievement, achievementIdx) => (
                        <li
                          key={achievementIdx}
                          className="flex items-start gap-2 sm:gap-3 text-gray-300 font-mono text-xs sm:text-sm"
                          style={{ minWidth: 0 }}
                        >
                          <span className="text-[var(--neon-green)] mt-1 flex-shrink-0">◆</span>
                          <span style={{ wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Resume Section */}
          <motion.div
            id="resume"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 border border-[var(--neon-green)] bg-[var(--card-bg)] p-6 md:p-8 rounded-lg text-center scroll-mt-28 md:scroll-mt-36"
            style={{ minWidth: 0 }}
          >
            <h3 
              className="text-2xl md:text-3xl font-mono text-[var(--neon-green)] mb-2"
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}
            >
              <span className="text-[var(--neon-green)]">$</span> cat resume.pdf
            </h3>
            <p 
              className="text-gray-400 font-mono text-xs md:text-sm mb-6"
              style={{ wordBreak: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}
            >
              My digital footprint & professional journey
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full">
              <Button
                onClick={() => window.open('https://resume.bamanguragain.com.np', '_blank')}
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
