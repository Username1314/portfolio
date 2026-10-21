import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060910] py-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-base">
              {portfolioData.personal.name}
              <span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-xs text-slate-500 ml-2">
              &copy; {new Date().getFullYear()} &bull; Govt. Engg. College Bharatpur
            </span>
          </div>

          {/* Center / Right: Back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-400 flex items-center gap-1">
              Built with React &amp; Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

