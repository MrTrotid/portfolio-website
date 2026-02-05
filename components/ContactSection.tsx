'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function ContactSection() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [hoveredLink, setHoveredLink] = useState('');

  const contacts = [
    { 
      name: 'Email', 
      value: 'contact@bamanguragain.com.np',
      link: 'mailto:contact@bamanguragain.com.np',
      icon: Mail
    },
    { 
      name: 'GitHub', 
      value: 'github.com/MrTrotid',
      link: 'https://github.com/MrTrotid',
      icon: Github
    },
    { 
      name: 'LinkedIn', 
      value: 'linkedin.com/in/mrtrotid',
      link: 'https://www.linkedin.com/in/mrtrotid/',
      icon: Linkedin
    },
    { 
      name: 'YouTube', 
      value: 'youtube.com/@MrTrotid',
      link: 'https://www.youtube.com/@MrTrotid',
      icon: Youtube
    },
    { 
      name: 'Instagram', 
      value: 'instagram.com/mrtrotid',
      link: 'https://www.instagram.com/mrtrotid/',
      icon: Instagram
    },
  ];

  return (
    <section id="contact" className="flex items-center justify-center py-20 sm:py-32 overflow-hidden">
      <div className="w-full px-4 sm:px-6" style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-3 sm:mb-4">
            <span className="text-[var(--neon-green)]">#</span>contact
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 font-mono">
            $ cat contact_info.txt
          </p>

          {/* Terminal Window */}
          <div className="border border-[var(--neon-green)] bg-[#0a0a0a] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] transition-all duration-300">
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] border-b border-[var(--neon-green)] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff4444] shadow-[0_0_5px_#ff4444]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffff44] shadow-[0_0_5px_#ffff44]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#44ff44] shadow-[0_0_5px_#44ff44]"></div>
              </div>
              <span className="text-[var(--neon-green)] font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                contact@terminal ~ % 
              </span>
              <div className="w-12 sm:w-16"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 sm:p-6 text-left space-y-3">
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <p className="text-[var(--neon-green)] font-mono text-xs sm:text-sm mb-2">
                  <span className="text-gray-500">$</span> ls -la contacts/
                </p>
                <p className="text-gray-400 font-mono text-[10px] sm:text-xs ml-4">
                  total {contacts.length} available channels
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-2 sm:space-y-3">
                {contacts.map((contact, idx) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.a
                      key={contact.name}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: false }}
                      onMouseEnter={() => setHoveredLink(contact.name)}
                      onMouseLeave={() => setHoveredLink('')}
                      className="block group touch-manipulation"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-3 rounded border border-transparent hover:border-[var(--neon-green)] hover:bg-[#1a1a1a] transition-all duration-300 min-h-[44px]">
                        <span className="text-[var(--neon-green)] font-mono text-xs sm:text-sm">
                          {hoveredLink === contact.name ? '>' : '-'}
                        </span>
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--neon-green)] flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <span className="text-gray-400 font-mono text-xs sm:text-sm">{contact.name}:</span>
                            <span className="text-[var(--neon-green)] font-mono text-xs sm:text-sm group-hover:underline truncate">
                              {contact.value}
                            </span>
                          </div>
                        </div>
                        <span className="text-gray-600 group-hover:text-[var(--neon-green)] transition-colors font-mono text-[10px] sm:text-xs flex-shrink-0">
                          [{hoveredLink === contact.name ? 'OPEN' : 'click'}]
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Footer Command Line */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--neon-green)] font-mono text-xs sm:text-sm">$</span>
                  <span className="text-gray-400 font-mono text-xs sm:text-sm">
                    <span className="hidden sm:inline">Always open to discussing new projects and opportunities</span>
                    <span className="sm:hidden">Open to new opportunities</span>
                  </span>
                  <span className="animate-pulse text-[var(--neon-green)]">▊</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
