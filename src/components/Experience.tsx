import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-900/60 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <ol className="lg:col-span-2 relative border-l border-slate-800 ml-3 space-y-6">
            {EXPERIENCE.map((exp, index) => {
              const current = /present/i.test(exp.period);
              return (
                <motion.li
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-7"
                >
                  <span className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 border-slate-950 ${current ? 'bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.2)]' : 'bg-slate-600'}`} />
                  <div className={`p-5 sm:p-6 rounded-2xl bg-slate-950/80 border transition-colors ${current ? 'border-cyan-500/40' : 'border-slate-800 hover:border-slate-700'}`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                          {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                        </div>
                      </div>
                      {current && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.tags && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.tags.map(tag => (
                          <span key={tag} className="text-[11px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ol>

          {/* Education */}
          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-slate-950 border border-blue-500/20"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white">{edu.degree}</h3>
                <p className="text-sm font-semibold text-blue-300 mt-1">{edu.institution}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />{edu.period}
                </p>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
