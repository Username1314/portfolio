import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusText, setStatusText] = useState("Initializing Developer Modules...");

  useEffect(() => {
    // Smoother, longer progress counter (~3.2 seconds total duration)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Steady increments for a premium, deliberate loading experience
        const increment = Math.floor(Math.random() * 4) + 2; // 2 to 5% per step
        const nextVal = Math.min(prev + increment, 100);

        // Update status text based on progress
        if (nextVal < 30) {
          setStatusText("Initializing Developer Modules...");
        } else if (nextVal < 65) {
          setStatusText("Compiling React & Tailwind Styles...");
        } else if (nextVal < 90) {
          setStatusText("Preparing Portfolio Experience...");
        } else {
          setStatusText("Welcome to Abhay.dev!");
        }

        return nextVal;
      });
    }, 95); // ~95ms * ~30 steps = ~3.0 - 3.2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Pause slightly at 100% so user sees completion before fading out
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600); // 600ms fade transition
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b13] transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-80 h-80 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Ring Loader Container */}
      <div className="relative flex items-center justify-center mb-8">
        
        {/* Outer glowing ring (spins clockwise) */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-transparent border-t-cyan-400 border-r-sky-500 animate-spin" />

        {/* Middle pulsing ring (spins counter-clockwise) */}
        <div 
          className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-transparent border-b-blue-500 border-l-cyan-300 animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '1.6s' }}
        />

        {/* Inner pulsing ring with glow */}
        <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 animate-pulse">
          <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
      </div>

      {/* Developer Branding */}
      <div className="text-center space-y-3 z-10">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-1">
          <span>{portfolioData.personal.name}</span>
          <span className="text-cyan-400">.dev</span>
        </h2>

        {/* Progress bar and percentage */}
        <div className="w-56 sm:w-64 mx-auto space-y-2.5">
          <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-400 font-medium tracking-tight">{statusText}</span>
            <span className="text-slate-300 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
