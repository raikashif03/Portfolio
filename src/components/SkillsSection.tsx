import React, { useState } from "react";
import { Code2, Layers, Sliders, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case "code":
        return <Code2 className="w-5 h-5 text-[#00e5ff]" />;
      case "layers":
        return <Layers className="w-5 h-5 text-[#00e5ff]" />;
      case "tune":
        return <Sliders className="w-5 h-5 text-[#00e5ff]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#00e5ff]" />;
    }
  };

  const filteredCategories =
    selectedFilter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) =>
          cat.title.toLowerCase().includes(selectedFilter)
        );

  return (
    <section className="py-20 bg-[#181c24]/30 border-y border-[#3b494c]/20" id="skills">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="font-mono text-[12px] text-[#00e5ff] mb-2 tracking-widest uppercase">
            TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-[#dfe2ee] tracking-tight">
            Tech Stack &amp; Architectural Arsenal
          </h2>
          <p className="text-[15px] text-[#bac9cc] mt-3 leading-relaxed">
            Strict typing, modular components, and systems-level fundamentals acquired via BS Software Engineering.
          </p>

          {/* Interactive filter switcher */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#1c2028] border border-[#3b494c]/40 mt-6">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3.5 py-1 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
                selectedFilter === "all"
                  ? "bg-[#00e5ff] text-[#0a0e16] font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                  : "text-[#bac9cc] hover:text-[#dfe2ee]"
              }`}
            >
              All Stacks
            </button>
            <button
              onClick={() => setSelectedFilter("languages")}
              className={`px-3.5 py-1 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
                selectedFilter === "languages"
                  ? "bg-[#00e5ff] text-[#0a0e16] font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                  : "text-[#bac9cc] hover:text-[#dfe2ee]"
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setSelectedFilter("frameworks")}
              className={`px-3.5 py-1 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
                selectedFilter === "frameworks"
                  ? "bg-[#00e5ff] text-[#0a0e16] font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                  : "text-[#bac9cc] hover:text-[#dfe2ee]"
              }`}
            >
              Frameworks
            </button>
            <button
              onClick={() => setSelectedFilter("tools")}
              className={`px-3.5 py-1 rounded-full text-[12px] font-mono transition-all cursor-pointer ${
                selectedFilter === "tools"
                  ? "bg-[#00e5ff] text-[#0a0e16] font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                  : "text-[#bac9cc] hover:text-[#dfe2ee]"
              }`}
            >
              DevOps &amp; Tools
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.title}
              className="glass-card p-6 rounded-2xl border border-[#3b494c]/30 hover:border-[#00e5ff]/40 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#3b494c]/30 text-[#00e5ff] font-semibold text-[17px]">
                {getCategoryIcon(group.icon)}
                <h4>{group.title}</h4>
              </div>

              <div className="space-y-4 font-mono text-[13px]">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group/bar">
                    <div className="flex justify-between text-[#dfe2ee] mb-1.5">
                      <span className="text-[#dfe2ee] font-medium">{skill.name}</span>
                      <span className="text-[#00e5ff] font-bold tabular-nums">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-[#1c2028] h-2 rounded-full overflow-hidden border border-[#3b494c]/20">
                      <div
                        className="bg-gradient-to-r from-[#0566d9] to-[#00e5ff] h-full rounded-full transition-all duration-700 ease-out group-hover/bar:brightness-125"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-[#3b494c]/20 flex items-center gap-1.5 text-[11px] font-mono text-[#a8ffd2]">
                <Check className="w-3.5 h-3.5" />
                <span>Production tested &amp; verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
