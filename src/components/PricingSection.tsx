import React from "react";
import { CheckCircle2 } from "lucide-react";
import { PRICING_TIERS, PricingTier } from "../data/portfolioData";

interface PricingSectionProps {
  onSelectPackage: (tier: PricingTier) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section className="py-20 bg-[#181c24]/40 border-y border-[#3b494c]/20" id="pricing">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-mono text-[12px] text-[#00e5ff] mb-2 tracking-widest uppercase">
            TRANSPARENT FIVERR PACKAGES
          </div>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-[#dfe2ee] tracking-tight">
            Predictable Pricing, Exceptional Craft
          </h2>
          <p className="text-[15px] text-[#bac9cc] mt-3 leading-relaxed">
            Transparent scope with escrow buyer protection directly fulfilled via Fiverr.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`glass-card p-7 rounded-2xl flex flex-col justify-between relative transition-all duration-200 hover:-translate-y-1 ${
                tier.highlighted
                  ? "border-2 border-[#00e5ff] shadow-[0_0_30px_rgba(0,229,255,0.18)] bg-[#1c2028]/80"
                  : "border border-[#3b494c]/30"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-mono text-[11px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div
                  className={`font-mono text-[12px] uppercase tracking-wider ${
                    tier.highlighted ? "text-[#00e5ff] mt-2 font-bold" : "text-[#bac9cc]"
                  }`}
                >
                  {tier.name}
                </div>

                <div className="mt-2.5 flex items-baseline gap-1.5">
                  <span className="text-[36px] font-extrabold text-[#dfe2ee] font-mono">
                    ${tier.price}
                  </span>
                  <span className="font-mono text-[12px] text-[#bac9cc]">{tier.unit}</span>
                </div>

                <h3
                  className={`text-[18px] font-bold mt-1.5 ${
                    tier.highlighted ? "text-[#c3f5ff]" : "text-[#00e5ff]"
                  }`}
                >
                  {tier.subtitle}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#bac9cc] mt-3">
                  {tier.description}
                </p>

                <div className="my-6 border-t border-[#3b494c]/20 pt-6 space-y-3 text-[13px]">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-[#dfe2ee]">
                      <CheckCircle2 className="w-4 h-4 text-[#00e5ff] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectPackage(tier)}
                  className={`w-full py-3 rounded-full text-center font-bold text-[14px] transition-all hover:scale-105 active:scale-95 duration-150 cursor-pointer ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                      : "border border-[#3b494c]/70 text-[#dfe2ee] hover:text-[#00e5ff] hover:border-[#00e5ff]"
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
