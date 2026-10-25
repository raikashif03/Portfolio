import React, { useState, useEffect } from "react";
import { ArrowUpRight, Mail, Check, Copy, Send } from "lucide-react";

interface ContactSectionProps {
  initialProjectType?: string;
  initialBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType,
  initialBudget,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(
    initialProjectType || "Full-Stack Web Application"
  );
  const [budget, setBudget] = useState(
    initialBudget || "$250 - $600 (Standard MVP)"
  );
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (initialProjectType) {
      setProjectType(initialProjectType);
    }
  }, [initialProjectType]);

  useEffect(() => {
    if (initialBudget) {
      setBudget(initialBudget);
    }
  }, [initialBudget]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rai.kashif03@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setDetails("");
    setSubmitted(false);
  };

  return (
    <section className="py-20 bg-[#181c24]/40 border-t border-[#3b494c]/20 relative" id="contact">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Left: Contact Details & Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-[32px] sm:text-[38px] font-bold text-[#dfe2ee] mb-4 tracking-tight">
                Let's Discuss Your Next Software Project
              </h2>
              <p className="text-[15px] leading-relaxed text-[#bac9cc] mb-6">
                Have a custom request or need an urgent bug resolved? Drop your requirements
                here, reach out directly on Fiverr, or book a quick strategy session.
              </p>

              <div className="space-y-3.5 mb-8">
                {/* Fiverr link */}
                <a
                  href="https://www.fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c2028] border border-[#3b494c]/30 hover:border-[#00e5ff] transition-all group hover:-translate-y-0.5"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center font-bold text-[15px] group-hover:bg-[#00e5ff] group-hover:text-[#0a0e16] transition-colors">
                    Fi
                  </span>
                  <div className="flex-1">
                    <div className="text-[15px] font-bold text-[#dfe2ee] group-hover:text-[#00e5ff] transition-colors">
                      Fiverr Marketplace
                    </div>
                    <div className="font-mono text-[11px] text-[#bac9cc]">
                      Order gigs with buyer escrow guarantee
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#849396] group-hover:text-[#00e5ff] transition-colors" />
                </a>

                {/* Upwork link */}
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c2028] border border-[#3b494c]/30 hover:border-[#00e5ff] transition-all group hover:-translate-y-0.5"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#5be9ad]/10 text-[#a8ffd2] flex items-center justify-center font-bold text-[15px] group-hover:bg-[#a8ffd2] group-hover:text-[#0a0e16] transition-colors">
                    Up
                  </span>
                  <div className="flex-1">
                    <div className="text-[15px] font-bold text-[#dfe2ee] group-hover:text-[#00e5ff] transition-colors">
                      Upwork Profile
                    </div>
                    <div className="font-mono text-[11px] text-[#bac9cc]">
                      Hourly contracts &amp; dedicated milestones
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#849396] group-hover:text-[#00e5ff] transition-colors" />
                </a>

                {/* Direct Email */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c2028] border border-[#3b494c]/30 group">
                  <span className="w-10 h-10 rounded-lg bg-[#262a33] text-[#00e5ff] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-bold text-[#dfe2ee]">
                      Direct Email
                    </div>
                    <div className="font-mono text-[11px] text-[#bac9cc] truncate">
                      <a href="mailto:rai.kashif03@gmail.com" className="hover:text-[#00e5ff] transition-colors">
                        rai.kashif03@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-[#0a0e16] border border-[#3b494c]/50 text-[#bac9cc] hover:text-[#00e5ff] hover:border-[#00e5ff] transition-all cursor-pointer"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-[#a8ffd2]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-xl bg-[#1c2028] border border-[#3b494c]/30">
              <div className="flex items-center gap-2.5 text-[#a8ffd2] font-mono text-[12px]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8ffd2] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a8ffd2]"></span>
                </span>
                <span>Typical response time: Under 1 Hour</span>
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-7 sm:p-8 rounded-2xl border border-[#3b494c]/30 relative">
              <h3 className="text-[22px] font-bold text-[#dfe2ee] mb-1.5">
                Send a Direct Project Brief
              </h3>
              <p className="text-[13px] text-[#bac9cc] mb-6">
                Fill in your project specifications and receive an estimated timeline and fixed quote.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#0a0e16]/90 border border-[#00e5ff]/40 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-[#00e5ff]" />
                  </div>
                  <h4 className="text-[18px] font-bold text-[#dfe2ee] mb-1">
                    Project Brief Submitted!
                  </h4>
                  <p className="text-[14px] text-[#bac9cc] max-w-md mx-auto mb-4">
                    Thank you, <span className="text-[#00e5ff] font-medium">{name || "Friend"}</span>! Muhammad Kashif will review your brief for{" "}
                    <span className="text-[#c3f5ff] font-mono">"{projectType}"</span> and reach out to{" "}
                    <span className="text-[#00e5ff]">{email}</span> within 2 hours with an actionable roadmap.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-full border border-[#3b494c] text-[#dfe2ee] hover:border-[#00e5ff] hover:text-[#00e5ff] text-[13px] font-mono transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-[#bac9cc] uppercase mb-1.5 font-medium">
                        YOUR NAME
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-[#3b494c]/50 text-[#dfe2ee] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-[14px] outline-none transition-all"
                        placeholder="e.g. Alex Johnson"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-[#bac9cc] uppercase mb-1.5 font-medium">
                        YOUR EMAIL
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-[#3b494c]/50 text-[#dfe2ee] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-[14px] outline-none transition-all"
                        placeholder="alex@company.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-[#bac9cc] uppercase mb-1.5 font-medium">
                        PROJECT TYPE
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-[#3b494c]/50 text-[#dfe2ee] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-[14px] outline-none transition-all"
                      >
                        <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                        <option value="Custom API / Backend System">Custom API / Backend System</option>
                        <option value="Bug Fixing & Code Refactoring">Bug Fixing &amp; Code Refactoring</option>
                        <option value="Python Automation / Scraping">Python Automation / Scraping</option>
                        <option value="Fiverr Custom Gig">Fiverr Custom Gig</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-[#bac9cc] uppercase mb-1.5 font-medium">
                        ESTIMATED BUDGET
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-[#3b494c]/50 text-[#dfe2ee] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-[14px] outline-none transition-all"
                      >
                        <option value="$80 - $250 (Basic / Bug fix)">$80 - $250 (Basic / Bug fix)</option>
                        <option value="$250 - $600 (Standard MVP)">$250 - $600 (Standard MVP)</option>
                        <option value="$600 - $1,500+ (Full Custom Software)">$600 - $1,500+ (Full Custom Software)</option>
                        <option value="Custom Contract / Hourly">Custom Contract / Hourly</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#bac9cc] uppercase mb-1.5 font-medium">
                      PROJECT DETAILS &amp; TIMELINE
                    </label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e16] border border-[#3b494c]/50 text-[#dfe2ee] focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] text-[14px] outline-none transition-all resize-y min-h-[110px]"
                      placeholder="Describe your software goals, tech stack preference, and delivery deadline..."
                      required
                      rows={4}
                    ></textarea>
                  </div>

                  <button
                    disabled={submitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[15px] hover:shadow-[0_0_24px_rgba(0,229,255,0.45)] transition-all hover:scale-[1.01] active:scale-[0.99] duration-150 cursor-pointer flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitting
                        ? "Transmitting Brief..."
                        : "Submit Inquiry to Muhammad Kashif"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
