"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "../navbar/magnetic-button";
import { ProjectData } from "./type";
import { projects } from "./projects";

interface RecentWorkSectionProps {
  onOpenConsultation: () => void;
}

export default function RecentWorkSection({
  onOpenConsultation,
}: RecentWorkSectionProps) {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#0D0D11] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display">
            Take A Look At Our Recent Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-12 lg:space-y-16">
            <div
              onClick={() => setActiveProject(projects[0])}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[3/3.8] rounded-3xl overflow-hidden bg-[#16161E] mb-5 border border-white/10 shadow-2xl">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-semibold text-white/90 flex items-center gap-1.5">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#3b82c4]" />
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/50 font-medium">
                  <span>- {projects[0].year}</span>
                  <span>- {projects[0].client}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#2463a6] transition-colors leading-snug">
                  {projects[0].title}
                </h3>
              </div>
            </div>

            <div
              onClick={() => setActiveProject(projects[1])}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[3/3.8] rounded-3xl overflow-hidden bg-[#16161E] mb-5 border border-white/10 shadow-2xl">
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-semibold text-white/90 flex items-center gap-1.5">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#3b82c4]" />
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/50 font-medium">
                  <span>- {projects[1].year}</span>
                  <span>- {projects[1].client}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#2463a6] transition-colors leading-snug">
                  {projects[1].title}
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:space-y-16">
            <div
              onClick={() => setActiveProject(projects[2])}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden bg-[#16161E] mb-5 border border-white/10 shadow-2xl">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-semibold text-white/90 flex items-center gap-1.5">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#3b82c4]" />
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/50 font-medium">
                  <span>- {projects[2].year}</span>
                  <span>- {projects[2].client}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#2463a6] transition-colors leading-snug">
                  {projects[2].title}
                </h3>
              </div>
            </div>

            <div
              onClick={() => setActiveProject(projects[3])}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden bg-[#16161E] mb-5 border border-white/10 shadow-2xl">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-semibold text-white/90 flex items-center gap-1.5">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#3b82c4]" />
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/50 font-medium">
                  <span>- {projects[3].year}</span>
                  <span>- {projects[3].client}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#2463a6] transition-colors leading-snug">
                  {projects[3].title}
                </h3>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10">
              <p className="text-xs sm:text-sm text-white/60 max-w-xs leading-relaxed">
                We strive to develop real-world web solutions that are ideal for
                small to large projects with bespoke project requirements.
              </p>
              <MagneticButton
                onClick={onOpenConsultation}
                strength={0.25}
                className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-full bg-[#3b82c4] hover:bg-[#5025E6] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#3b82c4]/25 hover:shadow-xl transition-all cursor-pointer group whitespace-nowrap shrink-0"
              >
                <span>More Projects</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-4xl bg-[#12121A] border border-white/15 rounded-lg overflow-hidden shadow-2xl z-10 text-white flex flex-col max-h-[85vh] sm:max-h-[90vh]"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#12121A]/90 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tracking-wider uppercase text-white/60 font-semibold">
                    Case Study
                  </span>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                  className="w-9 h-9 rounded-full bg-white/10 text-white/80 hover:text-white flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar flex-1 p-6 sm:p-8 space-y-8">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#1A1A24] border border-white/10 shadow-lg">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    priority
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent opacity-80" />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">
                      {activeProject.year}
                    </span>
                    <span className="text-white/30">-</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">
                      {activeProject.client}
                    </span>
                    <span className="text-white/30">-</span>
                    <span className="px-2.5 py-1 rounded-md bg-[#3b82c4]/15 border border-[#3b82c4]/30 text-[#3b82c4] font-semibold">
                      {activeProject.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-white/40 uppercase">
                    Overview
                  </h4>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {activeProject.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.deliverables.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="z-20 px-6 py-4 bg-[#12121A]/95 backdrop-blur-md flex items-center justify-between gap-4 shrink-0">
                <span className="text-xs text-white/50 hidden sm:inline-block">
                  Ready to transform your project?
                </span>
                <MagneticButton
                  onClick={() => {
                    setActiveProject(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#3b82c4] hover:bg-[#3b82c4] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#3b82c4]/20 hover:shadow-[#5025E6]/30"
                >
                  <span>Discuss Similar Project</span>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}
