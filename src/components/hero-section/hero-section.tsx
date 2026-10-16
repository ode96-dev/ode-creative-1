"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowUpRight, Play, Check } from "lucide-react";
import MagneticButton from "../navbar/magnetic-button";
import SpringTiltCard from "./spring-tilt-card";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenVideo: () => void;
}

export default function HeroSection({
  onOpenConsultation,
  onOpenVideo,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-kicker-node", {
        y: 15,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          ".hero-heading-row",
          {
            y: 45,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
          },
          "-=0.2",
        )
        .from(
          ".hero-cta-wrap",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".hero-copy",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".hero-visual-card",
          {
            scale: 0.94,
            opacity: 0,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden"
    >
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#6236FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#8865FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-7">
            <div className="hero-kicker-node inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9FE] border border-black/[0.06] text-slate-800 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>On-demand live support · Dedicated Creative Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-[#111116] tracking-[-0.035em] leading-[1.08] font-display">
              <span className="block hero-heading-row">Awesome</span>
              <span className="block hero-heading-row">Solution For</span>
              <span className="block hero-heading-row text-[#111116]">
                Your <span className="text-[#6236FF]">Business</span>
              </span>
            </h1>

            <div className="hero-cta-wrap flex flex-wrap items-center gap-4 pt-1">
              <MagneticButton
                onClick={onOpenConsultation}
                strength={0.3}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#6236FF] hover:bg-[#5025E6] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#6236FF]/25 hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>Get Started Now</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                strength={0.2}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer group"
              >
                <span>Learn More</span>
                <span className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-slate-900 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </MagneticButton>
            </div>

            <p className="hero-copy text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed font-normal">
              We create compelling web designs, which are the right fit for your
              target groups.
            </p>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <SpringTiltCard
              maxTilt={5}
              scaleOnHover={1.01}
              className="w-full max-w-[500px]"
            >
              <div className="relative w-full aspect-[4/3.6] flex items-center justify-center hero-visual-card">
                <div className="absolute top-2 left-0 sm:left-2 z-20 w-48 sm:w-52 p-4 rounded-2xl bg-[#0E0E14] text-white shadow-2xl border border-white/10 backdrop-blur-md">
                  <div className="text-3xl font-black font-display tracking-tight text-white mb-1">
                    99<span className="text-[#6236FF]">%</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-snug mb-3">
                    Track and analyze the business reports.
                  </p>
                  <div className="flex items-end gap-1.5 h-6">
                    <div className="w-2 bg-[#6236FF] h-3.5 rounded-full animate-pulse" />
                    <div className="w-2 bg-[#8865FF] h-6 rounded-full" />
                    <div className="w-2 bg-[#6236FF] h-2.5 rounded-full" />
                    <div className="w-2 bg-[#8865FF] h-5 rounded-full animate-pulse" />
                    <div className="w-2 bg-[#6236FF] h-4 rounded-full" />
                  </div>
                </div>

                <div className="relative z-10 w-60 sm:w-68 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <Image
                    src="/images/hero_portrait_consultant_1791873697912.jpg"
                    alt="Creative Studio Principal"
                    fill
                    sizes="(max-width: 768px) 240px, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-3 sm:bottom-3 left-2 sm:left-4 z-20 flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">
                      01
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block font-display">
                      Decided Quality
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#00D06C] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#00D06C]/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                <div className="absolute bottom-6 sm:bottom-10 right-0 sm:right-2 z-20">
                  <button
                    onClick={onOpenVideo}
                    aria-label="Play showreel video"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white shadow-xl border border-slate-100 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#6236FF] text-white flex items-center justify-center shadow-md shadow-[#6236FF]/30 group-hover:bg-[#5025E6] transition-colors">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>
                    <span className="text-xs font-bold text-slate-800 pr-1">
                      How its work
                    </span>
                  </button>
                </div>
              </div>
            </SpringTiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
