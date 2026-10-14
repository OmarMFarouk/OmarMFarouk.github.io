import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Server, ShieldCheck, Sparkles } from 'lucide-react';
import { SKILLS } from '../data';

const GROUPS = [
  { name: 'Flutter', label: 'Mobile & Desktop', icon: Smartphone, accent: 'text-cyan-400' },
  { name: 'React & Web', label: 'React & Web', icon: Globe, accent: 'text-sky-400' },
  { name: 'Backend', label: 'Backend & Serverless', icon: Server, accent: 'text-blue-400' },
  { name: 'Architecture & Tools', label: 'Workflow & Tools', icon: Code2, accent: 'text-indigo-400' },
  { name: 'Professional', label: 'Professional', icon: Sparkles, accent: 'text-purple-400' },
] as const;

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            Highlighted skills are my core specializations.
          </p>
        </div>

        <div className="relative rounded-2xl bg-slate-900/70 border border-slate-800 divide-y divide-slate-800 overflow-hidden">
          {GROUPS.map((group, index) => {
            const skills = SKILLS.filter(s => s.category === group.name);
            if (!skills.length) return null;
            const Icon = group.icon;
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-6 p-4 sm:p-5 hover:bg-slate-900 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${group.accent}`} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">{group.label}</h3>
                </div>
                <ul className="flex flex-wrap items-center gap-2">
                  {skills.map(skill => (
                    <li
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${
                        skill.highlight
                          ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-200 shadow-sm shadow-cyan-500/10'
                          : 'bg-slate-950 border-slate-800 text-slate-300'
                      }`}
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
