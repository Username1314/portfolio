import React from 'react';
import { 
  Code2, 
  Cpu, 
  Palette, 
  Terminal, 
  Layout, 
  Binary, 
  Zap, 
  Globe, 
  GitBranch, 
  Layers 
} from 'lucide-react';

const technologies = [
  { name: "JavaScript (ES6+)", icon: Cpu, color: "text-amber-400 border-amber-400/20 bg-amber-400/10" },
  { name: "React 19", icon: Code2, color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/10" },
  { name: "Tailwind CSS", icon: Palette, color: "text-sky-400 border-sky-400/20 bg-sky-400/10" },
  { name: "C / C++ Programming", icon: Terminal, color: "text-blue-400 border-blue-400/20 bg-blue-400/10" },
  { name: "HTML5 & CSS3", icon: Layout, color: "text-orange-400 border-orange-400/20 bg-orange-400/10" },
  { name: "Data Structures & Algorithms", icon: Binary, color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10" },
  { name: "Vite Fast Bundler", icon: Zap, color: "text-purple-400 border-purple-400/20 bg-purple-400/10" },
  { name: "REST APIs & JSON", icon: Globe, color: "text-teal-400 border-teal-400/20 bg-teal-400/10" },
  { name: "Git & GitHub", icon: GitBranch, color: "text-rose-400 border-rose-400/20 bg-rose-400/10" },
  { name: "Component Architecture", icon: Layers, color: "text-indigo-400 border-indigo-400/20 bg-indigo-400/10" },
];

export default function TechRibbon() {
  return (
    <div className="relative w-full py-6 overflow-hidden border-y border-white/5 bg-[#0b101c]/60 backdrop-blur-md">
      {/* Side gradient blur masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#090d16] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#090d16] to-transparent z-10 pointer-events-none" />

      {/* Marquee Ticker */}
      <div className="flex animate-marquee items-center gap-6">
        {/* Render twice for seamless loop */}
        {[...technologies, ...technologies].map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm whitespace-nowrap transition-transform duration-200 hover:scale-105 ${tech.color}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
