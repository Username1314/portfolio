import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-[#070b12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="text-cyan-400">Qualifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            My formal engineering and academic training in computer science.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-cyan-500/30 space-y-12 ml-2 sm:ml-4">
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline marker icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#090d16] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-200">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.institution}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.badge}
                  </span>
                </div>

                <div className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{item.degree} — {item.field}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {item.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

