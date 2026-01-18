'use client';

import { useEffect, useState } from 'react';

interface TerminalLoaderProps {
  text?: string;
}

export default function TerminalLoader({ text = 'Loading...' }: TerminalLoaderProps) {
  return (
    <div className="terminal-loader">
      <div className="terminal-header">
        <div className="terminal-title">Status</div>
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
}

export function FullPageLoader({ text = 'Loading...' }: TerminalLoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      <TerminalLoader text={text} />
    </div>
  );
}
