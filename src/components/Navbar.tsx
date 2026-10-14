import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SHOW_BARMAJHA } from '../data';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['about', 'skills', 'experience', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-cyan-500/5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#about" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <img src={PERSONAL_INFO.logo} alt="Logo" className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-medium">
                {PERSONAL_INFO.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {SHOW_BARMAJHA && <a 
              href={PERSONAL_INFO.portfolioUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group shadow-sm"
            >
              <span>{PERSONAL_INFO.portfolio}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>}
            <a 
              href="#contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 font-semibold' 
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-500 font-mono tracking-wider">{link.href}</span>
                </a>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
              {SHOW_BARMAJHA && <a 
                href={PERSONAL_INFO.portfolioUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-slate-900 border border-slate-800 text-slate-300"
              >
                <span>Explore {PERSONAL_INFO.portfolio}</span>
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </a>}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
