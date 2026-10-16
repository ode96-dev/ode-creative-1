"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import MagneticButton from "../navbar/magnetic-button";
import SpringTiltCard from "../shared/spring-tilt-card";
import { AnimatePresence, motion } from "motion/react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
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
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#3b82c4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#2463a6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-7">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-[#111116] tracking-[-0.035em] leading-[1.08] font-display">
              <span className="block hero-heading-row">Awesome</span>
              <span className="block hero-heading-row">Solution For</span>
              <span className="block hero-heading-row text-[#111116]">
                Your <span className="text-[#3b82c4]">Business</span>
              </span>
            </h1>

            <div className="hero-cta-wrap flex flex-wrap items-center gap-4 pt-1">
              <MagneticButton
                onClick={onOpenConsultation}
                strength={0.3}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#3b82c4] hover:bg-[#3b82c4] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#3b82c4]/25 hover:shadow-xl transition-all cursor-pointer group"
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

            <p className="hero-copy text-xs sm:text-sm text-slate-500 max-w-lg leading-relaxed font-normal">
              We create compelling web designs, which are the right fit for your
              target groups.
            </p>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <SpringTiltCard
              maxTilt={6}
              scaleOnHover={1.015}
              className="w-full max-w-[500px] border border-white/10 bg-[#10121A] shadow-2xl"
            >
              <div className="relative w-full aspect-[4/3.5] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key="studio"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="/images/agency_team_collaboration_1791873699237.jpg"
                      alt="Kroma Studio Lab Architecture"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-black/20 to-black/10" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </SpringTiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
