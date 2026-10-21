import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Productivity & UI', 'API Integration', 'Web Application'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-cyan-400">Frontend Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Real-world applications built with React and modern web technologies to demonstrate problem-solving and clean code.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Row: Category & Links */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="View GitHub Repository"
                      aria-label="View Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights / Features */}
                <div className="space-y-1.5 mb-6">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack badges & Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note about adding real projects */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Tip: You can easily update these project links and descriptions inside <code className="text-cyan-400 font-mono bg-white/5 px-2 py-1 rounded">src/data/portfolioData.js</code>
        </div>

      </div>
    </section>
  );
}

