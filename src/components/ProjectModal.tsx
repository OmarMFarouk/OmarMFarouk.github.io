import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 backdrop-blur-sm shadow-xl hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 shrink-0">
            <img src={project.image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50" />
            <img 
              src={project.image} 
              alt={project.title}
              className="relative w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-16">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg text-cyan-400 font-medium mt-1">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 grow">
            
            {/* Extended Description */}
            <div>
              <h4 className="text-lg font-bold font-heading text-white flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Project Overview</span>
              </h4>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {project.extendedDescription || project.description}
              </p>
            </div>

            {/* Metrics Highlight */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-slate-900 border border-cyan-500/30 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Scale & Performance</span>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">{project.metrics}</p>
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-bold font-heading text-white mb-4">
                Core Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-bold font-heading text-white mb-3">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 text-xs sm:text-sm font-semibold font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4 shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold transition-colors"
            >
              Close
            </button>

            {project.comingSoon ? (
              <div className="px-6 py-3 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/30 font-bold cursor-default">
                Coming Soon
              </div>
            ) : project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
              >
                <span>Live Showcase</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="text-xs sm:text-sm font-mono text-slate-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                {project.category === 'Windows App' ? 'Windows Desktop App' : 'Private build — demo on request'}
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
