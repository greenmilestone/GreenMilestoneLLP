// Footer Component

"use client";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 pt-12 pb-6 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 mb-8">

          {/* Brand Col */}
          <div className="lg:max-w-md">
            <a href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <img src="/Logo.png" alt="Green Milestone" className="w-10 h-10 object-contain" />
              <span className="font-bold text-lg tracking-tight text-white">
                Green Milestone
              </span>
            </a>
            <p className="text-emerald-100/70 text-sm leading-relaxed mb-6 pr-4">
              Pioneering sustainable corporate growth through innovative GHG auditing, carbon credits, and advanced ESG strategies.
            </p>
          </div>

          {/* Link Columns Wrapper */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-24">
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-[10px] uppercase tracking-wider font-bold mb-2">Company</h4>
              <ul className="space-y-1">
                <li><a href="#about" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">About Us</a></li>
                <li><a href="#impact" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">Our Impact</a></li>
                <li><a href="#process" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">Methodology</a></li>
                <li><a href="#faq" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white text-[10px] uppercase tracking-wider font-bold mb-2">Services</h4>
              <ul className="space-y-1">
                <li><a href="#services" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">Carbon Credits</a></li>
                <li><a href="#services" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">GHG Auditing</a></li>
                <li><a href="#services" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">ESG Solutions</a></li>
                <li><a href="#services" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">CCTS Consulting</a></li>
                <li><a href="#services" className="text-emerald-100/70 hover:text-emerald-400 text-xs transition-colors">Sustainability Advisory</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-emerald-900/50">
          <p className="text-emerald-100/50 text-sm">
            &copy; {currentYear} Green Milestone. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
