"use client";

import React, { useState } from "react";
import SmoothScrollProvider from "@/components/smooth-scroll-provider/smooth-scroll-provider";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/hero-section/hero-section";
import PartnerLogos from "@/components/partner-logo/partner-logo";
import ExperienceSection from "@/components/experience-section/experience-section";

export default function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#FDFDFE] text-[#111116] selection:bg-[#6236FF] selection:text-white antialiased">
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        <main>
          <HeroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

          <PartnerLogos />

          <ExperienceSection
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
