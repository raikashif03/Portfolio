import React, { useEffect } from "react";
import { X, Download, GraduationCap, Briefcase, Code, Award, CheckCircle2 } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadCv = () => {
    const cvContent = `MUHAMMAD KASHIF
Software Engineer & Full-Stack Developer
Email: kashif.software.eng@gmail.com
Status: Available for Freelance & Custom Software Contracts (Fiverr & Upwork)

SUMMARY
BS Software Engineering student with high-impact production engineering experience.
Specializes in high-performance web applications, custom APIs, automated tooling,
and distributed real-time systems. 100% Job Success score across 15+ delivered client projects.

EDUCATION
Bachelor of Science in Software Engineering (BS SE)
Focus Areas: Data Structures & Algorithms, Distributed Systems, Database Architecture,
Software Design Patterns, Network Programming, Operating Systems, Cloud Infrastructure.

CORE TECHNICAL SKILLS
- Programming Languages: Python, TypeScript, JavaScript, Java, C++, SQL (PostgreSQL, MySQL)
- Frameworks & Runtimes: React 18/19, Next.js 14/15, Node.js, Express, FastAPI, Django, Tailwind CSS
- Cloud & Infrastructure: Docker, Linux Administration, Supabase, Firebase, MongoDB, Redis, Git, GitHub Actions CI
- Protocols & APIs: RESTful APIs, WebSockets (Socket.io), GraphQL, JWT/OAuth2 Auth, Stripe API

FEATURED PROJECTS
1. CloudTask — Real-Time Team Management SaaS
   - Built end-to-end multi-tenant task orchestration platform with WebSocket bi-directional sync (<50ms latency).
   - Stripe subscription billing, PostgreSQL with Prisma ORM, Redis Pub/Sub.

2. CodeMetrics — Automated DevOps Health Dashboard
   - Engineered analytics suite monitoring cyclomatic complexity, test coverage, and deployment pipelines.
   - FastAPI + React + Docker sandbox test runner.

3. UniPortal — High-Traffic Campus Management Portal
   - Handled 8,500+ student registrations concurrently with zero database downtime.
   - Node.js, Express, MongoDB with optimized compound indexes and JWT role-based access control.

FREELANCE ACHIEVEMENTS
- 100% Job Success Rate on Fiverr and Upwork
- Over 15 commercial projects successfully delivered with 5-star ratings
- Average turnaround under 24-48 hours with continuous live progress demos
`;

    const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Muhammad_Kashif_Software_Engineer_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0e16]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="glass-card w-full max-w-3xl max-h-[90vh] rounded-2xl border border-[#00e5ff]/40 shadow-2xl flex flex-col overflow-hidden bg-[#0f131c]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#3b494c]/30 bg-[#181c24]/80">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#1c2028] border border-[#00e5ff]/50 text-[#00e5ff] font-mono text-[12px] flex items-center justify-center font-bold">
              MK
            </span>
            <div>
              <h3 className="text-[18px] font-bold text-[#dfe2ee]">
                Muhammad Kashif — Curriculum Vitae
              </h3>
              <p className="text-[12px] font-mono text-[#bac9cc]">
                BS Software Engineering &bull; Full-Stack Architect
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00e5ff] text-[#0a0e16] font-mono text-[12px] font-bold hover:shadow-[0_0_12px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#bac9cc] hover:text-[#dfe2ee] hover:bg-[#1c2028] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#dfe2ee]">
          {/* Quick Summary */}
          <div className="p-4 rounded-xl bg-[#181c24]/70 border border-[#3b494c]/30 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <div className="text-[15px] font-bold text-[#c3f5ff] mb-1">
                Software Engineering Professional
              </div>
              <p className="text-[13px] text-[#bac9cc] leading-relaxed">
                Combining rigorous computer science academic theory with commercial
                freelancing execution to craft resilient web systems.
              </p>
            </div>
            <div className="shrink-0 space-y-1 font-mono text-[12px]">
              <div className="text-[#a8ffd2] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for Hire</span>
              </div>
              <div className="text-[#bac9cc]">Location: Remote / Global</div>
              <div className="text-[#00e5ff]">Response: &lt; 1 Hour</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-[#00e5ff] font-mono text-[13px] font-semibold mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1c2028]/60 border border-[#3b494c]/30 space-y-2">
              <div className="flex justify-between items-baseline">
                <h4 className="text-[15px] font-bold text-[#dfe2ee]">
                  Bachelor of Science in Software Engineering (BS SE)
                </h4>
                <span className="font-mono text-[12px] text-[#00e5ff]">2022 &ndash; Present</span>
              </div>
              <p className="text-[13px] text-[#bac9cc]">
                Core focus on algorithmic efficiency, design patterns, scalable data architectures,
                and distributed microservices.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Algorithms & Complexity",
                  "Database Design",
                  "Operating Systems",
                  "Software Architecture",
                  "Computer Networks",
                  "Agile Methodologies",
                ].map((course) => (
                  <span
                    key={course}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#0a0e16] border border-[#3b494c]/40 text-[#bac9cc]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-[#00e5ff] font-mono text-[13px] font-semibold mb-3">
              <Briefcase className="w-4 h-4" />
              <span>FREELANCE &amp; COMMERCIAL EXPERIENCE</span>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#1c2028]/60 border border-[#3b494c]/30">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-[15px] font-bold text-[#dfe2ee]">
                    Independent Full-Stack Software Engineer
                  </h4>
                  <span className="font-mono text-[12px] text-[#a8ffd2]">Fiverr &amp; Upwork</span>
                </div>
                <p className="text-[13px] text-[#bac9cc] mb-2 leading-relaxed">
                  Delivered 15+ custom software applications, MVP platforms, and backend API services for clients across the US, UK, and France with 100% 5-star feedback.
                </p>
                <div className="text-[12px] text-[#bac9cc] space-y-1">
                  <div>&bull; Architected WebSocket live messaging pipelines reducing latency by 45%.</div>
                  <div>&bull; Integrated secure Stripe &amp; PayPal checkout flows with automated webhooks.</div>
                  <div>&bull; Refactored legacy codebases into modern TypeScript &amp; Next.js 14 architectures.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <div className="flex items-center gap-2 text-[#00e5ff] font-mono text-[13px] font-semibold mb-3">
              <Code className="w-4 h-4" />
              <span>TECHNICAL COMPETENCY MATRIX</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
              <div className="p-3 rounded-lg bg-[#1c2028]/50 border border-[#3b494c]/20">
                <div className="font-mono text-[11px] text-[#00e5ff] mb-1 font-semibold">LANGUAGES</div>
                <div className="text-[#dfe2ee]">Python, TypeScript, JavaScript, SQL, Java, C++</div>
              </div>
              <div className="p-3 rounded-lg bg-[#1c2028]/50 border border-[#3b494c]/20">
                <div className="font-mono text-[11px] text-[#00e5ff] mb-1 font-semibold">FRAMEWORKS</div>
                <div className="text-[#dfe2ee]">React.js, Next.js 14, Node.js, Express, FastAPI, Tailwind CSS</div>
              </div>
              <div className="p-3 rounded-lg bg-[#1c2028]/50 border border-[#3b494c]/20">
                <div className="font-mono text-[11px] text-[#00e5ff] mb-1 font-semibold">DATABASES &amp; CLOUD</div>
                <div className="text-[#dfe2ee]">PostgreSQL, MongoDB, Supabase, Firebase, Redis, Docker</div>
              </div>
              <div className="p-3 rounded-lg bg-[#1c2028]/50 border border-[#3b494c]/20">
                <div className="font-mono text-[11px] text-[#00e5ff] mb-1 font-semibold">TESTING &amp; TOOLING</div>
                <div className="text-[#dfe2ee]">GitHub Actions CI, Postman, Jest, Linux, Selenium</div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#00e5ff]/10 to-[#0566d9]/10 border border-[#00e5ff]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#00e5ff]" />
              <div className="text-[13px] text-[#dfe2ee]">
                <span className="font-bold">Fiverr Buyer Guarantee:</span> Escrow protection, milestone delivery, and unlimited minor adjustments until satisfied.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#3b494c]/30 bg-[#181c24]/80 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-[#3b494c] text-[#dfe2ee] hover:border-[#00e5ff] text-[13px] font-mono transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleDownloadCv}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[13px] flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
