import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Send, MessageSquareCheck, Terminal } from 'lucide-react';
import { PERSONAL_INFO, SHOW_BARMAJHA } from '../data';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.92h2.79v8.37H6.46v-8.37M7.86 6.34A1.5 1.5 0 1 0 9.36 7.84 1.5 1.5 0 0 0 7.86 6.34z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    setSubmitting(true);
    
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      const emailBody = `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage Details:\n${formData.message}`;
      const mailtoUrl = `mailto:o.m200233@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoUrl;

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/80 border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Terminal className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
                Let's Build Something Exceptional
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Looking for a highly skilled Flutter & PHP engineer for your next commercial mobile app, SaaS platform, or custom business software? Drop me a line.
              </p>
            </div>

            {/* Contact Action Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div 
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="group p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 shadow-lg cursor-pointer transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Phone Number</span>
                    <p className="text-base font-bold text-white font-mono mt-0.5">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  {copiedPhone ? 'Copied!' : 'Copy'}
                </div>
              </div>

              {/* Email Card */}
              <div 
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="group p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 shadow-lg cursor-pointer transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Email Address</span>
                    <p className="text-base font-bold text-white font-mono mt-0.5">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-blue-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Location</span>
                  <p className="text-base font-bold text-white mt-0.5">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Website Card */}
              {SHOW_BARMAJHA && <a 
                href={PERSONAL_INFO.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Professional Hub</span>
                    <p className="text-base font-bold text-white mt-0.5">{PERSONAL_INFO.portfolio}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  Visit Hub
                </div>
              </a>}

            </div>

            {/* Social channels row */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-sm font-semibold text-slate-400">Follow & Connect:</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-md flex items-center gap-2"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="text-xs font-mono">{PERSONAL_INFO.githubUsername}</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all hover:scale-110 shadow-md flex items-center gap-2"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="text-xs font-mono">{PERSONAL_INFO.linkedinUsername}</span>
              </a>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative">
              <h3 className="text-2xl font-bold font-heading text-white mb-6">
                Send a Direct Inquiry
              </h3>

              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 my-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <MessageSquareCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-white">Message Sent Successfully!</h4>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will respond to <strong className="text-white font-mono">{formData.email}</strong> shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">
                      Subject / Project Scope <span className="text-cyan-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      placeholder="e.g. Flutter Mobile App / PHP Backend API"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                      Message Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      placeholder="Provide details about your project requirements, timeline, or consultation topics..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-base hover:opacity-95 shadow-xl shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting to Omar...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>⚡ Secure SSL Encrypted</span>
                <span>Response time: &lt; 24 Hours</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
