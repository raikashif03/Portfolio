import React, { useState } from "react";
import { ArrowDown, Check, Copy, FileText, Award } from "lucide-react";

interface HeroProps {
  onOrderFiverrClick: () => void;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOrderFiverrClick,
  onOpenCvModal,
}) => {
  const [activeTab, setActiveTab] = useState<"ts" | "json" | "env">("ts");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    ts: `const engineer = {
  degree: "BS Software Engineering",
  experience: "2+ Years Commercial & Freelance",
  core: ["React", "Next.js", "Node.js", "Python"],
  fiverrGuarantee: "100% Satisfaction"
};`,
    json: `{
  "engineer": "Muhammad Kashif",
  "experienceYears": 2,
  "status": "Available on Fiverr",
  "rating": 5.0,
  "completedOrders": 15,
  "specialty": "Full-Stack Web & Custom APIs"
}`,
    env: `EXPERIENCE="2+ Years Commercial Full-Stack"
CLIENT_SUCCESS_RATE=100%
AVERAGE_TURNAROUND=24h
CODE_STANDARD="Clean Architecture & SOLID"
COMMUNICATION_RESPONSE="< 1 Hour"`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-10 pb-16 hero-glow overflow-hidden" id="about">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content (7 Cols Desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Availability Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1c2028] border border-[#3b494c]/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8ffd2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a8ffd2]"></span>
              </span>
              <span className="font-mono text-[12px] text-[#a8ffd2]">
                🟢 Available for Freelance &amp; Projects on Fiverr
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] xl:text-[60px] font-extrabold text-[#c3f5ff] tracking-tight leading-[1.12]">
              Crafting High-Performance Web Apps &amp;{" "}
              <span className="bg-gradient-to-r from-[#00e5ff] via-[#c3f5ff] to-[#adc6ff] bg-clip-text text-transparent">
                Custom Software
              </span>{" "}
              Solutions
            </h1>

            {/* Lead Paragraph / Credentials */}
            <p className="text-[17px] sm:text-[18px] leading-[28px] text-[#bac9cc] max-w-2xl">
              Software Engineering student (BS SE) with <span className="text-[#00e5ff] font-semibold">2+ years of hands-on experience</span> delivering
              robust, scalable full-stack architectures. Combining academic technical rigor with
              fast commercial execution on Fiverr and global contracts.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOrderFiverrClick}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[15px] hover:shadow-[0_0_24px_rgba(0,229,255,0.45)] transition-all hover:scale-105 active:scale-95 duration-150 cursor-pointer"
              >
                Order on Fiverr
              </button>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-[#181c24]/80 border border-[#3b494c]/70 text-[#dfe2ee] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all flex items-center gap-2 font-semibold text-[15px] hover:scale-105 active:scale-95 duration-150"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenCvModal}
                className="px-5 py-3 rounded-full border border-[#3b494c]/50 text-[#bac9cc] hover:text-[#dfe2ee] hover:border-[#bac9cc] text-[14px] font-mono flex items-center gap-2 transition-all hover:scale-105 active:scale-95 duration-150 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#00e5ff]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Proof Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full pt-6 border-t border-[#3b494c]/30">
              <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/60 border border-[#3b494c]/30 hover:border-[#00e5ff]/40 transition-colors">
                <div className="text-[26px] sm:text-[30px] font-bold text-[#00e5ff] font-mono">2+ Yrs</div>
                <div className="font-mono text-[12px] text-[#bac9cc] tracking-wide mt-1">Hands-on Experience</div>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/60 border border-[#3b494c]/30 hover:border-[#00e5ff]/40 transition-colors">
                <div className="text-[26px] sm:text-[30px] font-bold text-[#00e5ff] font-mono">100%</div>
                <div className="font-mono text-[12px] text-[#bac9cc] tracking-wide mt-1">Job Success</div>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/60 border border-[#3b494c]/30 hover:border-[#00e5ff]/40 transition-colors">
                <div className="text-[26px] sm:text-[30px] font-bold text-[#00e5ff] font-mono">15+</div>
                <div className="font-mono text-[12px] text-[#bac9cc] tracking-wide mt-1">Projects Delivered</div>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/60 border border-[#3b494c]/30 hover:border-[#00e5ff]/40 transition-colors">
                <div className="text-[26px] sm:text-[30px] font-bold text-[#00e5ff] font-mono">24h</div>
                <div className="font-mono text-[12px] text-[#bac9cc] tracking-wide mt-1">Quick Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right Visual Profile Frame (5 Cols Desktop) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] xl:max-w-[490px] rounded-2xl p-3.5 glass-card shadow-2xl overflow-hidden group">
              {/* Hairline Top Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00e5ff] via-[#0566d9] to-transparent opacity-80"></div>

              {/* Profile Image Container */}
              <div className="relative rounded-xl overflow-hidden aspect-square border border-[#3b494c]/40 bg-[#0a0e16]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-nHFwJ9FagDuvXf70dLLt54T7GO9oN0lEdK2JqFaPAyGxYVmyeL99Eg_3eQeTUaX8dy8OeqwXHtSgOL7lmv12NN7EgaqPU9ejUojldQHEastbEBQKqSNNIWZI9o042WomiRX3DQns9v9rB42FVTgMLrx2Xw07GB1WewRrh7H3nzUfoH0W1vZ87evH6rpdjKPvaIPiaclhl3FNX-Au9vb9tvy88gIiCMn85vdZp5oDphk3N7m3z0xPg"
                  alt="Muhammad Kashif - Software Engineer and Full-Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16]/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Talent Badge */}
              <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-[#0a0e16]/90 border border-[#00e5ff]/50 backdrop-blur-md flex items-center gap-2 shadow-lg">
                <Award className="w-4 h-4 text-[#00e5ff]" />
                <span className="font-mono text-[12px] text-[#c3f5ff] font-semibold">
                  Top Rated Talent
                </span>
              </div>

              {/* Interactive Terminal Widget under Image */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#0a0e16]/95 border border-[#3b494c]/40 font-mono text-[13px]">
                <div className="flex items-center justify-between pb-2 border-b border-[#3b494c]/30 text-[#bac9cc]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#a8ffd2]"></span>
                    <span className="ml-2 text-[11px] text-[#bac9cc]">kashif@engineer:~</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#00e5ff]">status: READY</span>
                    <button
                      onClick={handleCopyCode}
                      title="Copy Code"
                      className="p-1 rounded hover:bg-[#1c2028] text-[#bac9cc] hover:text-[#00e5ff] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#a8ffd2]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Sub tabs */}
                <div className="flex gap-2 pt-2 pb-1 border-b border-[#3b494c]/20 text-[11px]">
                  <button
                    onClick={() => setActiveTab("ts")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "ts" ? "bg-[#1c2028] text-[#00e5ff]" : "text-[#849396] hover:text-[#dfe2ee]"
                    }`}
                  >
                    engineer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("json")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "json" ? "bg-[#1c2028] text-[#00e5ff]" : "text-[#849396] hover:text-[#dfe2ee]"
                    }`}
                  >
                    stats.json
                  </button>
                  <button
                    onClick={() => setActiveTab("env")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "env" ? "bg-[#1c2028] text-[#00e5ff]" : "text-[#849396] hover:text-[#dfe2ee]"
                    }`}
                  >
                    delivery.env
                  </button>
                </div>

                {/* Code body */}
                <div className="pt-2.5 text-[12px] leading-relaxed font-mono">
                  {activeTab === "ts" && (
                    <div className="space-y-1">
                      <p className="text-[#dfe2ee]">
                        <span className="text-[#00e5ff]">const</span> engineer = {"{"}
                      </p>
                      <p className="text-[#bac9cc] pl-4">
                        degree: <span className="text-[#a8ffd2]">"BS Software Engineering"</span>,
                      </p>
                      <p className="text-[#bac9cc] pl-4">
                        core: [<span className="text-[#adc6ff]">"React"</span>, <span className="text-[#adc6ff]">"Next.js"</span>, <span className="text-[#adc6ff]">"Node.js"</span>, <span className="text-[#adc6ff]">"Python"</span>],
                      </p>
                      <p className="text-[#bac9cc] pl-4">
                        fiverrGuarantee: <span className="text-[#00e5ff]">"100% Satisfaction"</span>
                      </p>
                      <p className="text-[#dfe2ee]">{"};"}</p>
                    </div>
                  )}
                  {activeTab === "json" && (
                    <pre className="text-[#dfe2ee] whitespace-pre overflow-x-auto text-[11px]">
                      {codeSnippets.json}
                    </pre>
                  )}
                  {activeTab === "env" && (
                    <pre className="text-[#a8ffd2] whitespace-pre overflow-x-auto text-[11px]">
                      {codeSnippets.env}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
