"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SpringTiltCard from "../shared/spring-tilt-card";
import MagneticButton from "../navbar/magnetic-button";

interface ExperienceSectionProps {
  onOpenConsultation: () => void;
}

export default function ExperienceSection({
  onOpenConsultation,
}: ExperienceSectionProps) {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 0, transparent 24px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <SpringTiltCard
              maxTilt={5}
              scaleOnHover={1.01}
              className="w-full max-w-[480px]"
            >
              <div className="relative w-full">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                  <Image
                    src="/images/agency_team_collaboration_1791873699237.jpg"
                    alt="Creative Direction & Architecture Session"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </SpringTiltCard>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-[#111116] tracking-tight leading-[1.15] font-display">
              Powerful Agency
              <br />
              For Corporate
              <br />
              Business.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
              We strive to develop real-world web solutions that are ideal for
              small to large projects with bespoke project requirements.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 max-w-md">
              <div className="p-4 shadow-xs">
                <div className="text-2xl font-black font-display text-slate-900 tabular-nums">
                  480+
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Global Deployments
                </div>
              </div>
              <div className="p-4 shadow-xs">
                <div className="text-2xl font-black font-display text-[#3b82c4F] tabular-nums">
                  99.4%
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Client Retention Rate
                </div>
              </div>
            </div>

            <div className="pt-2">
              <MagneticButton
                onClick={onOpenConsultation}
                strength={0.25}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#3b82c4] hover:bg-[#3b82c4] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#3b82c4F]/25 hover:shadow-xl transition-all cursor-pointer group"
              >
                <span>Read About Us</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
