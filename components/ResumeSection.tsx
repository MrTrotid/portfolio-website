'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ResumeSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Baman_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="flex items-center justify-center py-32">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-[var(--neon-green)]">#</span>resume
          </h2>
          <p className="text-gray-400 text-center mb-12 font-mono">
            View and download my resume
          </p>

          <div className="border-2 border-[var(--border-color)] rounded-lg overflow-hidden bg-[var(--card-bg)] hover:border-[var(--neon-green)] transition-all duration-300">
            {/* PDF Viewer */}
            <div className="bg-white">
              <iframe
                src="/resume.pdf"
                className="w-full h-[600px]"
                title="Resume"
              />
            </div>

            {/* Download Button */}
            <div className="p-6 bg-[var(--card-bg)] border-t border-[var(--border-color)] flex justify-center">
              <Button
                onClick={handleDownload}
                className="bg-[var(--neon-green)] text-black hover:bg-[var(--neon-green)]/80 font-mono text-lg px-8 py-6"
              >
                ⬇ Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
