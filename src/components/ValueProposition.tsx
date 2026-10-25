import React from "react";
import { Zap, Terminal, CheckCircle2, Smartphone, RefreshCw } from "lucide-react";
import { VALUE_PROPS } from "../data/portfolioData";

export const ValueProposition: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "bolt":
        return <Zap className="w-5 h-5 text-[#00e5ff]" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-[#00e5ff]" />;
      case "verified":
        return <CheckCircle2 className="w-5 h-5 text-[#00e5ff]" />;
      case "devices":
        return <Smartphone className="w-5 h-5 text-[#00e5ff]" />;
      case "published_with_changes":
        return <RefreshCw className="w-5 h-5 text-[#00e5ff]" />;
      default:
        return <Zap className="w-5 h-5 text-[#00e5ff]" />;
    }
  };

  return (
    <section className="py-16 bg-[#181c24]/40 border-y border-[#3b494c]/20 relative">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="font-mono text-[12px] text-[#00e5ff] mb-2 tracking-widest uppercase">
            CLIENT VALUE PROPOSITION
          </div>
          <h2 className="text-[32px] sm:text-[36px] font-bold text-[#dfe2ee] tracking-tight">
            Why Global Clients Hire Muhammad
          </h2>
          <p className="text-[15px] leading-relaxed text-[#bac9cc] mt-3">
            Combining deep computer science foundations with freelancing agility to
            deliver market-ready software solutions without the bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {VALUE_PROPS.map((item) => (
            <div
              key={item.title}
              className="glass-card p-5 rounded-2xl flex flex-col items-start gap-3 hover:-translate-y-1 duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1c2028] flex items-center justify-center border border-[#3b494c]/50 group-hover:border-[#00e5ff]/50 transition-colors">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-[17px] font-bold text-[#dfe2ee] group-hover:text-[#c3f5ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#bac9cc]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
