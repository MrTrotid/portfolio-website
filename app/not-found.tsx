'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(57, 255, 20, .05) 25%, rgba(57, 255, 20, .05) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, .05) 75%, rgba(57, 255, 20, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(57, 255, 20, .05) 25%, rgba(57, 255, 20, .05) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, .05) 75%, rgba(57, 255, 20, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        {/* Terminal header */}
        <div className="mb-8 border border-[#39ff14] rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm">
          <div className="bg-[#39ff14]/10 px-4 py-3 border-b border-[#39ff14]/30 font-mono text-xs text-[#39ff14]">
            <span className="text-red-500">●</span> <span className="text-yellow-500">●</span> <span className="text-[#39ff14]">●</span> system.404.error
          </div>

          {/* 404 content */}
          <div className="p-8 md:p-12 text-left space-y-6">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-mono text-sm md:text-base text-[#39ff14]"
            >
              <div>{'> ERROR: Page not found'}</div>
              <div className="text-gray-500">{'> Status Code: 404'}</div>
            </motion.div>

            {/* ASCII art */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-mono text-xs md:text-sm text-[#39ff14] whitespace-pre overflow-hidden"
            >
              {`
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠏⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⣠⣶⠄⠀⠀⠀⠀⠹⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⢀⣾⠟⠁⠀⠉⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⢀⣾⠃⠀⢀⡀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⣾⠃⠀⢠⢿⠛⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢸⡇⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
              `}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-mono text-sm md:text-base text-gray-400 space-y-2"
            >
              <div className="text-[#39ff14]">{'> The page you are looking for does not exist.'}</div>
              <div className="text-gray-500">{'> It may have been moved, deleted, or never existed.'}</div>
              <div className="pt-4 text-gray-600">{'> Attempting recovery...'}</div>
            </motion.div>
          </div>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/"
            className="px-6 py-3 border-2 border-[#39ff14] text-[#39ff14] font-mono text-sm hover:bg-[#39ff14] hover:text-black transition-colors duration-300 rounded"
          >
            {'> Return Home'}
          </Link>
        </motion.div>

        {/* Terminal cursor */}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="mt-8 font-mono text-[#39ff14] text-sm text-center"
        >
          {'█'}
        </motion.div>
      </motion.div>
    </div>
  );
}
