import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {portfolioData.personal.name}
              <span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

