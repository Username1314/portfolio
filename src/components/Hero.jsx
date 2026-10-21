import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const words = [
  "React.js",
  "Modern JavaScript (ES6+)",
  "Tailwind CSS",
  "C / C++ Programming",
  "Data Structures & Algorithms",
  "Responsive UI/UX"
];

export default function Hero() {
  const { personal } = portfolioData;

  // Typewriter state
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && subIndex === currentWord.length) {
      // Pause at end of word
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    } else if (isDeleting && subIndex === 0) {
      // Switch to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setSpeed(120);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      setSpeed(isDeleting ? 40 : 100);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIndex, speed]);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[320px] bg-blue-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Call To Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {personal.status}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personal.name}</span>
            </h1>

            {/* Animated Language & Role Typewriter */}
            <div className="text-xl sm:text-2xl font-bold text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2 min-h-[2.5rem]">
              <span className="text-slate-400 font-medium">I build with</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 border-b-2 border-cyan-400/40 pb-0.5">
                {words[wordIndex].substring(0, subIndex)}
              </span>
              <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-cursor ml-0.5"></span>
            </div>

            {/* Sub-headline & College badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium text-slate-200">{personal.college}</span> &bull; <span>2nd Year (3rd Sem) CSE</span>
              </div>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {personal.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Resume (CV)
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-white/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow border wrapper */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-1 border border-white/10 shadow-2xl backdrop-blur-xl">
                
                {/* Terminal Header */}
                <div className="bg-[#0f172a] rounded-t-xl px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>developer.json</span>
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Terminal Content */}
                <div className="p-5 bg-[#0b1120] rounded-b-xl font-mono text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                  <div>
                    <span className="text-cyan-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personal.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span> <span className="text-emerald-300">"Frontend Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">college:</span> <span className="text-emerald-300">"GEC Bharatpur"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">currentYear:</span> <span className="text-amber-300">2</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">semester:</span> <span className="text-amber-300">3</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">primaryStack:</span> [
                    <span className="text-sky-300">"React"</span>, <span className="text-sky-300">"JavaScript"</span>, <span className="text-sky-300">"Tailwind"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">openForRoles:</span> <span className="text-emerald-400">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">hireable:</span> <span className="text-emerald-400">function()</span> &#123;
                  </div>
                  <div className="pl-8 text-cyan-300">
                    return <span className="text-amber-300">"Quick learner, passion for clean UI"</span>;
                  </div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border border-cyan-400/30 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">B.Tech CSE</div>
                  <div className="text-sm font-bold text-white">Govt. Engg. College</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
