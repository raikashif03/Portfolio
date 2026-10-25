import React from "react";
import { ArrowRight, Globe, Server, Bug, Monitor } from "lucide-react";
import { SERVICES_DATA, Service } from "../data/portfolioData";

interface ServicesSectionProps {
  onOrderGig: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOrderGig }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "web":
        return <Globe className="w-6 h-6 text-[#00e5ff]" />;
      case "dns":
        return <Server className="w-6 h-6 text-[#00e5ff]" />;
      case "bug_report":
        return <Bug className="w-6 h-6 text-[#00e5ff]" />;
      case "desktop_windows":
        return <Monitor className="w-6 h-6 text-[#00e5ff]" />;
      default:
        return <Globe className="w-6 h-6 text-[#00e5ff]" />;
    }
  };

  return (
    <section className="py-20" id="services">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[12px] text-[#00e5ff] mb-2 tracking-widest uppercase">
              FREELANCE GIGS &amp; SERVICES
            </div>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#dfe2ee] tracking-tight">
              Engineered For Your Exact Requirements
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-card p-7 rounded-2xl relative group overflow-hidden flex flex-col justify-between hover:-translate-y-1 duration-200"
            >
              {/* Top Hairline Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00e5ff]/80 to-transparent"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex p-3 rounded-xl bg-[#1c2028] border border-[#3b494c]/40 group-hover:border-[#00e5ff]/40 transition-colors">
                    {getIcon(service.icon)}
                  </span>
                  <span className="font-mono text-[12px] text-[#bac9cc] bg-[#1c2028] px-3 py-1 rounded-full border border-[#3b494c]/40 font-medium">
                    {service.price}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-[#dfe2ee] group-hover:text-[#c3f5ff] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#bac9cc] mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#1c2028] border border-[#3b494c]/40 text-[#bac9cc]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOrderGig(service)}
                  className="inline-flex items-center gap-2 font-mono text-[13px] text-[#00e5ff] hover:text-[#c3f5ff] font-semibold transition-all hover:gap-2.5 group-hover:underline cursor-pointer"
                >
                  <span>Order this gig on Fiverr</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
