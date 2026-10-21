import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Creates a mailto link so the email actually opens in the user's mail client
    const mailtoLink = `mailto:${personal.email}?subject=Contact from ${encodeURIComponent(
      formData.name
    )} (Portfolio)&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something <span className="text-cyan-400">Together</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            I am currently open to internships, frontend projects, and tech opportunities. Feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm">
                Have a question, an opportunity, or want to discuss a project? Reach out through any of these channels:
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Email Address</div>
                    <div className="text-sm font-medium">{personal.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">College & Location</div>
                    <div className="text-sm font-medium">{personal.college}, Bharatpur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connection Card */}
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Online Profiles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 text-white text-sm font-medium transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 text-white text-sm font-medium transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in the details below and it will compose a direct email.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Opening your Email Client!</h4>
                  <p className="text-slate-300 text-sm">
                    Thank you for reaching out. Looking forward to speaking with you!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs text-cyan-400 underline font-semibold mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter / Hiring Manager"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abhay, we'd like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
