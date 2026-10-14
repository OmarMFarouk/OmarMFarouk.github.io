import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <img src={PERSONAL_INFO.logo} alt="Logo" className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-xs font-mono text-cyan-400">
                {PERSONAL_INFO.subtitle}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-cyan-400 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 flex items-center gap-2 transition-all shadow-md group text-sm font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with clean architecture</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">Cairo, Egypt</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
