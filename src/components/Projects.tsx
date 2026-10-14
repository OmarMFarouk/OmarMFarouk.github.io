import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, Eye, Layers, Smartphone, Globe, Monitor, ChevronDown, Clock, Lock } from 'lucide-react';
import { PROJECTS, Project } from '../data';
import { ProjectModal } from './ProjectModal';

const INITIAL_COUNT = 6;

export const getPlatformIcon = (cat: string, size = 'w-4 h-4') => {
  switch (cat) {
    case 'Mobile App':
      return <Smartphone className={`${size} text-cyan-400`} />;
    case 'Web App':
      return <Globe className={`${size} text-blue-400`} />;
    case 'Windows App':
      return <Monitor className={`${size} text-purple-400`} />;
    default:
      return <Layers className={`${size} text-emerald-400`} />;
  }
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Mobile App', 'Web App', 'Windows App'].filter(
    c => c === 'All' || PROJECTS.some(p => p.category === c)
  );

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-900/40 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header + filters on one row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              {PROJECTS.length}+ products shipped for real clients across mobile, web and desktop.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setSelectedCategory(category); setShowAll(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {category !== 'All' && getPlatformIcon(category)}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: (index % INITIAL_COUNT) * 0.04 }}
                key={project.id}
                className="group relative rounded-2xl p-px bg-gradient-to-br from-slate-800 via-slate-800 to-slate-800 hover:from-cyan-500/70 hover:via-blue-600/40 hover:to-purple-500/60 transition-colors duration-500"
              >
                <div className="h-full flex flex-col bg-slate-950 rounded-[15px] overflow-hidden">
                  {/* Image */}
                  <button
                    type="button"
                    className="relative h-44 w-full overflow-hidden bg-slate-900 text-left"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Open ${project.title} details`}
                  >
                    <img src={project.image} alt="" aria-hidden loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50" />
                    <img
                      src={project.image} loading="lazy" decoding="async"
                      alt={project.title}
                      className="relative w-full h-full object-contain group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-2.5 py-1 rounded-lg text-[11px] font-semibold font-mono text-slate-200 flex items-center gap-1.5">
                      {getPlatformIcon(project.category, 'w-3.5 h-3.5')}
                      <span>{project.category}</span>
                    </div>
                    {project.comingSoon && (
                      <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-lg shadow-amber-400/30">
                        <Clock className="w-3 h-3" />
                        <span>Coming Soon</span>
                      </div>
                    )}
                  </button>

                  {/* Content */}
                  <div className="p-5 flex flex-col grow">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
                      {project.tagline}
                    </p>
                    <p className="mt-2.5 text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[11px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-2 py-0.5 text-[11px] font-mono text-slate-500">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                      <ProjectAction project={project} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-sm font-semibold text-slate-200 hover:text-white transition-all"
            >
              <span>{showAll ? 'Show less' : `Show all ${filteredProjects.length} projects`}</span>
              <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

const ProjectAction: React.FC<{ project: Project }> = ({ project }) => {
  if (project.comingSoon) {
    return (
      <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold cursor-default">
        <Clock className="w-3.5 h-3.5" />
        <span>Coming Soon</span>
      </span>
    );
  }
  if (project.demoUrl) {
    return (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 border border-slate-800 hover:border-cyan-500 text-xs font-semibold transition-colors"
      >
        <span>Live</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    );
  }
  return (
    <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
      <Lock className="w-3.5 h-3.5" />
      <span>{project.category === 'Windows App' ? 'Desktop build' : 'Private'}</span>
    </span>
  );
};
