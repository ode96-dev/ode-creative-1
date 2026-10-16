"use client";

import React from "react";
import { partners } from "./partners";

export default function PartnerLogos() {
  return (
    <section className="py-14 border-y border-slate-100 bg-[#FCFCFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-8 font-mono">
          Trusted By Industry Pioneers & Global Growth Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {partners.map((p) => (
            <div
              key={p.name}
              className="cursor-pointer grayscale hover:grayscale-0 transition-all duration-300"
            >
              {p.render}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
