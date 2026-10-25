import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/portfolioData";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20" id="reviews">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-mono text-[12px] text-[#00e5ff] mb-2 tracking-widest uppercase">
            // 5-STAR CLIENT SATISFACTION
          </div>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-[#dfe2ee] tracking-tight">
            Trusted By Buyers Globally
          </h2>
          <p className="text-[15px] text-[#bac9cc] mt-3 leading-relaxed">
            Read direct feedback from founders, agency owners, and tech leads who ordered on Fiverr and Upwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-6 rounded-2xl border border-[#3b494c]/30 flex flex-col justify-between hover:-translate-y-1 duration-200"
            >
              <div>
                <div className="flex items-center text-[#00e5ff] gap-1 mb-3.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#00e5ff] text-[#00e5ff]"
                    />
                  ))}
                </div>
                <p className="text-[14px] leading-relaxed text-[#dfe2ee] italic mb-6">
                  {rev.content}
                </p>
              </div>

              <div className="pt-4 border-t border-[#3b494c]/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c2028] flex items-center justify-center font-mono font-bold text-[#00e5ff] border border-[#3b494c]/50 text-[13px]">
                  {rev.avatarInitials}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#dfe2ee]">
                    {rev.name}
                  </div>
                  <div className="font-mono text-[11px] text-[#bac9cc]">
                    {rev.role} — {rev.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
