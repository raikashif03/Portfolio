import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0e16] border-t border-[#3b494c]/20">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#about"
            className="text-[20px] font-extrabold text-[#c3f5ff] hover:text-[#00e5ff] transition-colors"
          >
            Muhammad Kashif
          </a>
          <p className="text-[13px] text-[#bac9cc] text-center md:text-left max-w-md">
            © 2025 Muhammad Kashif. Built with precision and modern engineering
            craft. Available for freelance on Fiverr and Upwork.
          </p>
        </div>

        {/* Footer Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
          <a
            className="text-[#bac9cc] font-mono text-[12px] hover:text-[#00e5ff] transition-colors duration-150"
            href="https://github.com/raikashif03"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="text-[#bac9cc] font-mono text-[12px] hover:text-[#00e5ff] transition-colors duration-150"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-[#bac9cc] font-mono text-[12px] hover:text-[#00e5ff] transition-colors duration-150"
            href="https://www.fiverr.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Fiverr Profile
          </a>
          <a
            className="text-[#bac9cc] font-mono text-[12px] hover:text-[#00e5ff] transition-colors duration-150"
            href="https://www.upwork.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Upwork Catalog
          </a>
          <a
            className="text-[#bac9cc] font-mono text-[12px] hover:text-[#00e5ff] transition-colors duration-150"
            href="#about"
          >
            Privacy Policy
          </a>
          <a
            className="text-[#bac9cc] font-mono text-[12px] hover:text-[#00e5ff] transition-colors duration-150"
            href="#about"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
