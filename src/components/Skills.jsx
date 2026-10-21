import React from 'react';
import { 
  Code2, 
  Cpu, 
  Palette, 
  Layout, 
  Smartphone, 
  Globe, 
  Binary, 
  Terminal, 
  Layers, 
  Database, 
  GitBranch, 
  Zap, 
  Laptop, 
  Cloud, 
  Search,
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Cpu,
  Palette,
  Layout,
  Smartphone,
  Globe,
  Binary,
  Terminal,
  Layers,
  Database,
  GitBranch,
  Zap,
  Laptop,
  Cloud,
  Search
};

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern, reactive, and mobile-first web technologies",
      items: skills.frontend,
      accent: "from-cyan-500/20 to-blue-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "Computer Science & Fundamentals",
      description: "Core engineering foundation from B.Tech CSE coursework",
      items: skills.csFundamentals,
      accent: "from-indigo-500/20 to-purple-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Tools & Developer Environment",
      description: "Workflow tools for collaboration, versioning, and deployment",
      items: skills.tools,
      accent: "from-sky-500/20 to-teal-500/10",
      borderColor: "border-sky-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#070b12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="text-cyan-400">Core Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            The technical skills and tools I leverage daily to solve problems and build scalable web interfaces.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`rounded-2xl bg-gradient-to-b ${category.accent} p-6 border ${category.borderColor} backdrop-blur-md flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1.5 flex items-center justify-between">
                  <span>{category.title}</span>
                  <Sparkles className="w-4 h-4 text-cyan-400 opacity-70" />
                </h3>
                <p className="text-xs text-slate-400 mb-6">{category.description}</p>

                <div className="space-y-3">
                  {category.items.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                <span>Verified with projects</span>
                <span className="text-cyan-400 font-semibold">{category.items.length} Techs</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

