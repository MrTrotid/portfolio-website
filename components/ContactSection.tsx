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
    <section id="contact" className="flex items-center justify-center py-32">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-[var(--neon-green)]">#</span>contact
          </h2>
          <p className="text-gray-400 mb-12 font-mono">
            $ cat contact_info.txt
          </p>

          {/* Terminal Window */}
          <div className="border border-[var(--neon-green)] bg-[#0a0a0a] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] transition-all duration-300">
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] border-b border-[var(--neon-green)] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff4444] shadow-[0_0_5px_#ff4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffff44] shadow-[0_0_5px_#ffff44]"></div>
                <div className="w-3 h-3 rounded-full bg-[#44ff44] shadow-[0_0_5px_#44ff44]"></div>
              </div>
              <span className="text-[var(--neon-green)] font-mono text-xs uppercase tracking-wider">
                contact@terminal ~ % 
              </span>
              <div className="w-16"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 text-left space-y-3">
              {/* Header */}
              <div className="mb-6">
                <p className="text-[var(--neon-green)] font-mono text-sm mb-2">
                  <span className="text-gray-500">$</span> ls -la contacts/
                </p>
                <p className="text-gray-400 font-mono text-xs ml-4">
                  total {contacts.length} available channels
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-3">
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
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredLink(contact.name)}
                      onMouseLeave={() => setHoveredLink('')}
                      className="block group"
                    >
                      <div className="flex items-center gap-3 p-3 rounded border border-transparent hover:border-[var(--neon-green)] hover:bg-[#1a1a1a] transition-all duration-300">
                        <span className="text-[var(--neon-green)] font-mono text-sm">
                          {hoveredLink === contact.name ? '>' : '-'}
                        </span>
                        <IconComponent className="w-5 h-5 text-[var(--neon-green)]" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400 font-mono text-sm">{contact.name}:</span>
                            <span className="text-[var(--neon-green)] font-mono text-sm group-hover:underline">
                              {contact.value}
                            </span>
                          </div>
                        </div>
                        <span className="text-gray-600 group-hover:text-[var(--neon-green)] transition-colors font-mono text-xs">
                          [{hoveredLink === contact.name ? 'OPEN' : 'click'}]
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Footer Command Line */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--neon-green)] font-mono text-sm">$</span>
                  <span className="text-gray-400 font-mono text-sm">
                    Always open to discussing new projects and opportunities
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
