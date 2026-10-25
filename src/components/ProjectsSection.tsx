import React from "react";
import { ArrowUpRight, Eye, Code, ArrowRight } from "lucide-react";
import { PROJECTS_DATA, Project } from "../data/portfolioData";

interface ProjectsSectionProps {
  onOpenProjectModal: (project: Project, mode: "demo" | "code" | "study") => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const p1 = PROJECTS_DATA[0];
  const p2 = PROJECTS_DATA[1];
  const p3 = PROJECTS_DATA[2];

  return (
    <section className="py-20" id="projects">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[12px] text-[#00e5ff] mb-2 tracking-widest uppercase">
              FEATURED CLIENT PROJECTS
            </div>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#dfe2ee] tracking-tight">
              Client-Ready Featured Work
            </h2>
          </div>
          <a
            href="https://github.com/raikashif03"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-[#00e5ff] hover:underline flex items-center gap-1.5 mt-3 md:mt-0"
          >
            <span>Explore GitHub Repositories</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-10">
          {/* Project 1: Brew & Bloom */}
          <div className="glass-card rounded-2xl overflow-hidden border border-[#3b494c]/30 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            {/* Image Preview (7 cols) */}
            <div className="lg:col-span-7 bg-[#0a0e16] p-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#3b494c]/30 relative">
              <a
                href={p1.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view live site"
                className="relative rounded-xl overflow-hidden border border-[#3b494c]/40 shadow-2xl block group/img cursor-pointer"
              >
                <img
                  src={p1.image}
                  alt={p1.title}
                  className="w-full h-auto object-cover group-hover/img:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16]/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                  <span className="font-mono text-[12px] text-[#00e5ff] flex items-center gap-1.5">
                    <span>Open Live Output</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </div>

            {/* Content (5 cols) */}
            <div className="lg:col-span-5 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 font-mono text-[11px] font-semibold">
                    {p1.badge}
                  </span>
                  <span className="text-[#bac9cc] font-mono text-[11px]">{p1.type}</span>
                </div>

                <h3 className="text-[22px] font-bold text-[#dfe2ee] mb-2 leading-snug group-hover:text-[#c3f5ff] transition-colors">
                  {p1.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#bac9cc] mb-4">
                  {p1.description}
                </p>

                {/* Outcome */}
                <div className="p-3.5 rounded-xl bg-[#0a0e16]/80 border border-[#3b494c]/30 mb-5 space-y-1 text-[13px]">
                  <div className="text-[#00e5ff] font-semibold font-mono text-[12px]">Outcome:</div>
                  <div className="text-[#bac9cc]">{p1.outcome}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p1.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#1c2028] text-[#bac9cc] border border-[#3b494c]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={p1.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[13px] hover:shadow-[0_0_20px_rgba(0,229,255,0.45)] transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 duration-150 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onOpenProjectModal(p1, "demo")}
                  className="px-4 py-2.5 rounded-full border border-[#3b494c]/60 text-[#dfe2ee] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all flex items-center gap-1.5 text-[13px] font-mono hover:scale-105 active:scale-95 duration-150 cursor-pointer"
                >
                  <Code className="w-4 h-4" />
                  <span>Inspect Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Row with Projects 2 & 3 in 2 balanced columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 2: VERVE Store */}
            <div className="glass-card rounded-2xl overflow-hidden border border-[#3b494c]/30 flex flex-col justify-between group">
              <div className="p-6 bg-[#0a0e16] border-b border-[#3b494c]/30">
                <a
                  href={p2.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl overflow-hidden border border-[#3b494c]/40 shadow-lg block relative group/p2 cursor-pointer"
                >
                  <img
                    src={p2.image}
                    alt={p2.title}
                    className="w-full h-52 object-cover group-hover/p2:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16]/80 via-transparent to-transparent opacity-0 group-hover/p2:opacity-100 transition-opacity flex items-end p-4">
                    <span className="font-mono text-[12px] text-[#00e5ff] flex items-center gap-1.5">
                      <span>Open Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0566d9]/20 text-[#adc6ff] border border-[#0566d9]/40 font-mono text-[11px]">
                      {p2.badge}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#dfe2ee] mb-2 group-hover:text-[#c3f5ff] transition-colors">
                    {p2.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#bac9cc] mb-4">
                    {p2.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p2.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#1c2028] text-[#bac9cc]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={p2.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#00e5ff] text-[#0a0e16] font-bold text-[13px] hover:shadow-[0_0_16px_rgba(0,229,255,0.45)] transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 duration-150 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => onOpenProjectModal(p2, "study")}
                    className="px-4 py-2 rounded-full border border-[#3b494c]/40 text-[#bac9cc] hover:text-[#00e5ff] hover:border-[#00e5ff] text-[13px] font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3: Expense Tracker */}
            <div className="glass-card rounded-2xl overflow-hidden border border-[#3b494c]/30 flex flex-col justify-between group">
              <div className="p-6 bg-[#0a0e16] border-b border-[#3b494c]/30">
                <a
                  href={p3.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl overflow-hidden border border-[#3b494c]/40 shadow-lg block relative group/p3 cursor-pointer"
                >
                  <img
                    src={p3.image}
                    alt={p3.title}
                    className="w-full h-52 object-cover group-hover/p3:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16]/80 via-transparent to-transparent opacity-0 group-hover/p3:opacity-100 transition-opacity flex items-end p-4">
                    <span className="font-mono text-[12px] text-[#00e5ff] flex items-center gap-1.5">
                      <span>Open Live Dashboard</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#5be9ad]/20 text-[#a8ffd2] border border-[#5be9ad]/40 font-mono text-[11px]">
                      {p3.badge}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#dfe2ee] mb-2 group-hover:text-[#c3f5ff] transition-colors">
                    {p3.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#bac9cc] mb-4">
                    {p3.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p3.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#1c2028] text-[#bac9cc]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={p3.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#00e5ff] text-[#0a0e16] font-bold text-[13px] hover:shadow-[0_0_16px_rgba(0,229,255,0.45)] transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 duration-150 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => onOpenProjectModal(p3, "study")}
                    className="px-4 py-2 rounded-full border border-[#3b494c]/40 text-[#bac9cc] hover:text-[#00e5ff] hover:border-[#00e5ff] text-[13px] font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
