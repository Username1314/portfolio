import React from 'react';
import { GraduationCap, Code2, Zap, CheckCircle2, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: GraduationCap,
      title: "CSE Undergraduate",
      desc: "Currently pursuing B.Tech in Computer Science & Engineering at Govt. Engineering College Bharatpur (2nd Year, 3rd Sem)."
    },
    {
      icon: Code2,
      title: "Frontend Engineering",
      desc: "Specializing in React.js, modern JavaScript (ES6+), component-driven UI architecture, and responsive styling with Tailwind CSS."
    },
    {
      icon: Zap,
      title: "Fast Learner & Problem Solver",
      desc: "Strong focus on Data Structures & Algorithms, Clean Architecture, and writing maintainable, production-ready code."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Mindset with a <span className="text-cyan-400">Design Aesthetic</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Bridging the gap between robust computer science fundamentals and modern, interactive frontend interfaces.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* In-depth banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/40 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Laptop className="w-5 h-5 text-cyan-400" />
                What I Bring to a Software Engineering Team
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a computer science student with a dedication to frontend development, I don't just write HTML and CSS — I focus on writing reusable component hierarchies, managing state efficiently, and delivering smooth user experiences that align with company goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {personal.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0b1120] border border-white/10 p-5 rounded-xl text-center space-y-2">
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                2nd Year CSE
              </div>
              <div className="text-sm font-semibold text-white">Govt. Engg. College Bharatpur</div>
              <div className="text-xs text-slate-400">Class of 2028 &bull; 3rd Semester</div>
              <div className="pt-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready for Summer/Fall Internships
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
