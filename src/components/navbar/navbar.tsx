"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import MagneticButton from "./magnetic-button";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Articles", href: "#articles" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3.5 bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-black/[0.05]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-slate-950 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2463A6] rounded-lg"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2463A6] to-[#3B82C4] flex items-center justify-center text-white shadow-md shadow-[#2463A6]/25 group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight font-display text-slate-950">
              Odeway
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 p-1 bg-black/[0.03] rounded-full border border-black/[0.04]">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#2463A6] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-950 hover:bg-black/[0.03]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <MagneticButton
              onClick={onOpenConsultation}
              strength={0.25}
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-300 hover:border-[#2463A6] bg-white text-slate-800 hover:text-[#2463A6] text-xs font-bold transition-all shadow-sm cursor-pointer group"
            >
              <span>Free Consultation</span>
              <span className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-[#2463A6] flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </MagneticButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-b border-slate-200/80 shadow-2xl space-y-3 mt-2">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.label);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {activeTab === item.label && (
                  <span className="w-2 h-2 rounded-full bg-[#2463A6]" />
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 rounded-full bg-[#2463A6] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#2463A6]/25 cursor-pointer"
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
