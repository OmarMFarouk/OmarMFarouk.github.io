import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Download, 
  ArrowRight, 
  Code, 
  Smartphone, 
  Server, 
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATES, SHOW_BARMAJHA, EXPERIENCE } from '../data';

// SVG components for Github and Linkedin
const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.92h2.79v8.37H6.46v-8.37M7.86 6.34A1.5 1.5 0 1 0 9.36 7.84 1.5 1.5 0 0 0 7.86 6.34z" />
  </svg>
);

export const Hero: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    const element = document.createElement("a");
    element.href = PERSONAL_INFO.cv;
    element.download = `OmarFarouk_CV.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <section id="about" className="relative pt-28 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-slate-950">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-purple-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Avatar / Profile Showcase Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 group-hover:scale-105" />
              
              <div className="relative p-2 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-slate-950">
                  <img 
                    src={PERSONAL_INFO.avatar} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-500 filter contrast-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-3 flex items-center justify-around shadow-lg">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                      <Smartphone className="w-4 h-4" />
                      <span>Flutter</span>
                    </div>
                    <div className="h-4 w-[1px] bg-slate-800" />
                    <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                      <Server className="w-4 h-4" />
                      <span>React</span>
                    </div>
                    <div className="h-4 w-[1px] bg-slate-800" />
                    <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-semibold">
                      <Code className="w-4 h-4" />
                      <span>Supabase</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 text-left">
            
            {/* Quick Badges row */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium tracking-wide">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently {EXPERIENCE[0].role} @ {EXPERIENCE[0].company}</span>
              </div>
              {SHOW_BARMAJHA && <a 
                href={PERSONAL_INFO.portfolioUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 text-xs font-medium tracking-wide transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.portfolio}</span>
              </a>}
            </motion.div>

            {/* Name and Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-xl sm:text-2xl font-medium text-slate-300 font-mono tracking-wide flex items-center gap-2"
            >
              <Code className="w-6 h-6 text-cyan-400 inline-block" />
              <span>{PERSONAL_INFO.title}</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 text-lg font-semibold">{PERSONAL_INFO.subtitle}</span>
            </motion.h2>

            {/* Profile Summary */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.summary}
            </motion.p>

            {/* Interactive Contact & Social Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-2 items-center bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800/80 backdrop-blur-sm max-w-full"
            >
              {/* Phone Pill */}
              <button 
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 text-xs sm:text-sm font-medium transition-all group"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono tracking-wider">{PERSONAL_INFO.phone}</span>
                {copiedPhone && <span className="text-[10px] bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded font-bold">Copied!</span>}
              </button>

              {/* Email Pill */}
              <button 
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/50 text-xs sm:text-sm font-medium transition-all group"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
                {copiedEmail && <span className="text-[10px] bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded font-bold">Copied!</span>}
              </button>

              {/* GitHub Link */}
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 text-xs sm:text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span className="font-mono">{PERSONAL_INFO.githubUsername}</span>
              </a>

              {/* LinkedIn Link */}
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 text-slate-300 hover:text-blue-400 hover:bg-slate-800 border border-slate-800 text-xs sm:text-sm font-medium transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span className="font-mono">{PERSONAL_INFO.linkedinUsername}</span>
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-3 items-center"
            >
              <a 
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button 
                onClick={handleDownloadCV}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-base font-semibold bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-200"
              >
                {downloading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <span>Preparing CV...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <span>Download CV</span>
                    <Download className="w-4 h-4 ml-1 opacity-70" />
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Stats Ticker */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pt-6 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {PROJECTS.length}+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Commercial Apps Deployed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  {new Date().getFullYear() - 2023}+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Years of Experience</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  {CERTIFICATES.length}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Certificates & Diplomas</div>
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
};
