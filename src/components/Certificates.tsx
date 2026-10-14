import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, Calendar, ExternalLink, X, Smartphone, Radio, Network, Code, Download } from 'lucide-react';
import { CERTIFICATES, Certificate } from '../data';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleDownloadCertificate = (cert: Certificate) => {

    const element = document.createElement("a");
    element.href = cert.url;
    element.download = `OmarFarouk_${cert.title.replace(/\s+/g, '_')}_Certificate.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-cyan-400" />;
      case 'Radio':
        return <Radio className="w-8 h-8 text-blue-400" />;
      case 'Network':
        return <Network className="w-8 h-8 text-indigo-400" />;
      case 'Code':
        return <Code className="w-8 h-8 text-purple-400" />;
      default:
        return <Award className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="certificates" className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Licenses & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Certified expertise backed by accredited diplomas in mobile engineering, networking, and programming.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-md">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="mt-2 text-sm text-slate-400 font-semibold flex items-center gap-2">
                  <span>{cert.issuer}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-cyan-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                </p>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono group-hover:text-white">
                <span>Click to view credential</span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg">
                    {getCertIcon(selectedCert.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {selectedCert.title}
                    </h3>
                    <p className="text-base font-semibold text-cyan-400 mt-1">
                      Issued by {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                {/* Simulated Certificate Credential Card */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-cyan-500/40 shadow-inner mb-6 text-center">
                  <p className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-2">
                    Certificate of Completion
                  </p>
                  <h4 className="text-3xl font-extrabold font-heading text-white my-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {selectedCert.title}
                  </h4>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-6">
                    This certifies that <strong className="text-white font-semibold">Omar Farouk</strong> has successfully mastered the required technical competencies and practical examinations.
                  </p>
                  
                  <div className="pt-6 border-t border-slate-800 flex items-center justify-around text-xs font-mono text-slate-400">
                    <div>
                      <span className="block text-slate-500">Issuer</span>
                      <span className="font-bold text-slate-200">{selectedCert.issuer}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">Year</span>
                      <span className="font-bold text-cyan-400">{selectedCert.year}</span>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDownloadCertificate(selectedCert)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-white border border-slate-700 font-bold transition-all hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-400">
                    Verified records held by respective academies in Egypt.
                  </p>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:opacity-95 transition-opacity"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
