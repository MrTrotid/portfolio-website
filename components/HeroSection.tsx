'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const navigationButtons = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#project' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '/resume-subdomain', isExternal: true },
  ];

  const [showGame, setShowGame] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative py-16 sm:py-24 pt-28 sm:pt-40 min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="w-full px-4 sm:px-6" style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 sm:gap-16 min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 flex-shrink-0"
            style={{ maxWidth: '42rem' }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono leading-tight">
              Baman is a{' '}
              <span className="text-[var(--neon-green)]">student</span> and
              <br />
              <span className="whitespace-nowrap text-2xl sm:text-5xl md:text-6xl">
                <span className="text-[var(--neon-green)]">cyber-security</span>{' '}
                <span className="text-white">enthusiast</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-mono">
              He (sometimes) crafts responsive websites for fun
            </p>
          </motion.div>

          {/* Right Column - Mini Game */}
          <div className="relative flex flex-col items-center flex-shrink-0 w-full lg:w-auto">
            {/* Mini Game Area - Tic Tac Toe */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-64 lg:h-64"
            >
            <div className="relative w-full h-full">
              <motion.div
                initial={{ opacity: 1, rotateZ: 0, scale: 1, y: 0 }}
                animate={{
                  opacity: showGame ? 0 : 1,
                  rotateZ: showGame ? -4 : 0,
                  rotateX: showGame ? 25 : 0,
                  scale: showGame ? 0.94 : 1,
                  y: showGame ? 16 : 0,
                }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-xl border border-[var(--neon-green)]/40 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center gap-2 text-center text-xs text-gray-300 font-mono z-10 shadow-lg shadow-[var(--neon-green)]/10 origin-bottom-right"
                style={{ pointerEvents: showGame ? 'none' : 'auto' }}
              >
                <span className="text-sm font-semibold tracking-wide text-[var(--neon-green)]">???</span>
                <motion.button
                  type="button"
                  onClick={() => setShowGame(true)}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: showGame ? 18 : 0, y: showGame ? 10 : 0 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="absolute -bottom-1 -right-1 w-12 h-12 sm:w-14 sm:h-14 bg-[var(--neon-green)] text-black font-bold text-[10px] flex items-center justify-center rounded-tl-lg shadow-lg shadow-[var(--neon-green)]/30 touch-manipulation"
                  style={{ transformOrigin: 'bottom right' }}
                  aria-label="Reveal game"
                >
                  <span className="sr-only">^^^</span>
                </motion.button>
              </motion.div>

              <motion.div
                className="relative w-full h-full"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: showGame ? 1 : 0.4, scale: showGame ? 1 : 0.96, y: showGame ? 0 : 8, filter: showGame ? 'blur(0px)' : 'blur(6px)' }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{ pointerEvents: showGame ? 'auto' : 'none' }}
              >
                <TicTacToe />
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Tic Tac Toe game inside the 64x64 area
function TicTacToe() {
  const [board, setBoard] = useState<(null | 'X' | 'O')[]>(Array(9).fill(null));
  const [player, setPlayer] = useState<'X' | 'O'>('X');
  const [status, setStatus] = useState('Your move (X)');

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winner = lines.reduce<null | 'X' | 'O'>((acc, [a, b, c]) => {
    if (acc) return acc;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    return null;
  }, null);

  const isFull = board.every(Boolean);

  useEffect(() => {
    if (winner) {
      setStatus(`${winner === 'X' ? 'You' : 'Computer'} win!`);
      return;
    }
    if (isFull) {
      setStatus('Draw!');
      return;
    }
    if (player === 'X') {
      setStatus('Your move (X)');
    } else {
      setStatus('Computer thinking...');
    }
  }, [winner, isFull, player]);

  // Very simple AI: pick the first available spot after a brief delay
  useEffect(() => {
    if (player !== 'O' || winner || isFull) return;

    const timer = setTimeout(() => {
      const emptyIndexes = board
        .map((cell, idx) => (cell === null ? idx : -1))
        .filter((idx) => idx !== -1);
      if (!emptyIndexes.length) return;
      const choice = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
      const next = board.slice();
      next[choice] = 'O';
      setBoard(next);
      setPlayer('X');
    }, 350);

    return () => clearTimeout(timer);
  }, [player, winner, isFull, board]);

  const handleClick = (idx: number) => {
    if (board[idx] || winner) return;
    const next = board.slice();
    next[idx] = player;
    setBoard(next);
    setPlayer('O');
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setStatus('Your move (X)');
  };

  return (
    <div className="relative w-full h-full rounded-xl border border-[var(--neon-green)]/40 bg-black/70 backdrop-blur-sm p-2 flex flex-col gap-2">
      <div className="flex items-center justify-between text-[10px] text-gray-300 font-mono">
        <span>{status}</span>
        <button
          onClick={reset}
          className="px-2 py-1 border border-[var(--neon-green)]/50 text-[var(--neon-green)] rounded hover:bg-[var(--neon-green)] hover:text-black transition-colors duration-200"
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-1 flex-1">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className="flex items-center justify-center border border-[var(--neon-green)]/40 rounded bg-black/60 text-2xl font-mono text-white hover:border-[var(--neon-green)]/80 transition-colors duration-150"
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
}
