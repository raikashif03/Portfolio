import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onGetQuoteClick: () => void;
  onHireFiverrClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onGetQuoteClick,
  onHireFiverrClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#181c24]/85 backdrop-blur-md border-b border-[#3b494c]/30">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-12 max-w-[1640px] mx-auto py-3.5">
        {/* Brand Logo */}
        <a
          href="#about"
          className="text-[20px] font-extrabold text-[#c3f5ff] tracking-tight flex items-center gap-2 group transition-transform active:scale-95"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1c2028] border border-[#3b494c]/50 text-[#00e5ff] font-mono text-[12px] group-hover:border-[#00e5ff] group-hover:shadow-[0_0_12px_rgba(0,229,255,0.3)] transition-all">
            MK
          </span>
          <span className="font-bold">Muhammad Kashif</span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-[14px] transition-colors py-1 ${
                  isActive
                    ? "text-[#00e5ff] border-b-2 border-[#00e5ff]"
                    : "text-[#bac9cc] hover:text-[#dfe2ee]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onGetQuoteClick}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-[#3b494c]/60 text-[#dfe2ee] hover:text-[#00e5ff] hover:border-[#00e5ff] text-[13px] font-semibold transition-all hover:scale-105 active:scale-95 duration-150 cursor-pointer"
          >
            Get a Quote
          </button>
          <button
            onClick={onHireFiverrClick}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[13px] hover:shadow-[0_0_20px_rgba(0,229,255,0.45)] transition-all hover:scale-105 active:scale-95 duration-150 cursor-pointer"
          >
            <span>Hire on Fiverr</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-[#1c2028] border border-[#3b494c]/40 text-[#dfe2ee] hover:text-[#00e5ff]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-6 pt-3 pb-6 border-t border-[#3b494c]/30 bg-[#0f131c]/95 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-[14px] text-[#bac9cc] hover:text-[#00e5ff] py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-4 border-t border-[#3b494c]/30 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetQuoteClick();
              }}
              className="w-full py-2.5 rounded-full border border-[#3b494c] text-center text-[#dfe2ee] font-semibold text-[13px] hover:border-[#00e5ff]"
            >
              Get a Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onHireFiverrClick();
              }}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#0566d9] text-[#0a0e16] font-bold text-[13px] flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            >
              <span>Hire on Fiverr</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
