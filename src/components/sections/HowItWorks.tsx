"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Pilih Template",
    desc: "Telusuri 80+ template profesional yang dirancang khusus untuk berbagai profesi. Cukup klik dan mulai.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
        <rect x="4" y="4" width="18" height="18" rx="4" className="fill-[#C4DEE3]" />
        <rect x="26" y="4" width="18" height="18" rx="4" className="fill-[#0082A6]/30" />
        <rect x="4" y="26" width="18" height="18" rx="4" className="fill-[#0082A6]/30" />
        <rect x="26" y="26" width="18" height="18" rx="4" className="fill-[#86B9C7]/60" />
        <rect x="28" y="6" width="14" height="14" rx="2" className="fill-[#0082A6]" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Isi Konten & Sesuaikan",
    desc: "Tambahkan foto, tuliskan bio, dan atur tata letak sesukamu — semua bisa dilakukan dengan klik dan ketik.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
        <rect x="6" y="10" width="36" height="28" rx="4" className="fill-[#C4DEE3]" />
        <rect x="10" y="15" width="16" height="2.5" rx="1.25" className="fill-[#0082A6]" />
        <rect x="10" y="21" width="28" height="2" rx="1" className="fill-[#1A1A1A]/20" />
        <rect x="10" y="26" width="22" height="2" rx="1" className="fill-[#1A1A1A]/15" />
        <circle cx="38" cy="34" r="7" className="fill-[#0082A6]" />
        <path d="M35.5 34l1.8 1.8L40.5 31.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Publish & Online",
    desc: "Klik tombol publish dan website portofoliomu langsung bisa diakses siapapun, dari manapun, seketika.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden>
        <circle cx="24" cy="24" r="18" className="fill-[#C4DEE3]" />
        <path d="M24 6C24 6 16 14 16 24C16 34 24 42 24 42C24 42 32 34 32 24C32 14 24 6 24 6Z" className="fill-[#86B9C7]" />
        <line x1="6" y1="24" x2="42" y2="24" stroke="#0082A6" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 11C20 11 24 16 24 24C24 32 20 37 20 37" stroke="#0082A6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3.5" className="fill-[#0082A6]" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4DEE3] to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Cara Kerja"
          title="Tiga Langkah, Website Kamu Jadi"
          subtitle="Tidak perlu belajar coding atau desain. Prosesnya sesederhana ini."
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid sm:grid-cols-3 gap-6 lg:gap-10 relative"
        >
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden
            className="hidden sm:block absolute top-12 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px border-t-2 border-dashed border-[#C4DEE3] z-0"
          />

          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative z-10 flex flex-col items-center text-center p-8 bg-[#F7F5ED] rounded-2xl border border-[#C4DEE3]/50 hover:border-[#0082A6]/30 hover:shadow-lg hover:shadow-[#0082A6]/8 transition-all duration-300 group"
            >
              {/* Step number badge */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0082A6] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm shadow-[#0082A6]/30">
                {step.number}
              </span>

              {/* Icon container */}
              <div className="w-20 h-20 rounded-2xl bg-white border border-[#C4DEE3]/60 flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
              <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
