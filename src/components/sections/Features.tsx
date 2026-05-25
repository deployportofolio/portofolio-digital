"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "100+ Template Siap Pakai",
    desc: "Desain profesional yang dibuat oleh desainer berpengalaman. Tersedia untuk berbagai profesi dan industri.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path d="M15 15l6 6m-6-6v4.8m0-4.8h4.8" />
        <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
        <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
        <path d="M9 4.2V9m0 0H4.2M9 9L3 3" />
      </svg>
    ),
    title: "Editor Drag & Drop",
    desc: "Ubah tata letak, warna, dan font hanya dengan seret-dan-lepas. Tidak perlu tahu HTML atau CSS sama sekali.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18M3 12h18" />
      </svg>
    ),
    title: "Domain Custom",
    desc: "Gunakan domain milikmu sendiri (contoh.com) atau nikmati subdomain gratis dari portofolio.digital.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Responsif Otomatis",
    desc: "Website kamu tampil sempurna di smartphone, tablet, dan desktop tanpa perlu pengaturan tambahan.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
    title: "SEO-Friendly",
    desc: "Meta title, deskripsi, dan schema teroptimasi otomatis agar website kamu mudah ditemukan di Google.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Tanpa Coding",
    desc: "Semua bisa dikerjakan dengan antarmuka visual yang intuitif. Tidak perlu latar belakang teknis apapun.",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-24 bg-[#F7F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Fitur Unggulan"
          title="Semua yang Kamu Butuhkan, <span class='text-[#0082A6]'>Sudah Ada</span>"
          subtitle="Tidak perlu alat lain. portofolio.digital menyediakan semua yang kamu butuhkan untuk tampil profesional online."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES.map((f) => (
            <motion.div key={f.title} variants={fadeUp}>
              <SpotlightCard className="h-full bg-white rounded-2xl border border-[#C4DEE3]/50 hover:border-[#0082A6]/25 transition-colors duration-300 hover:shadow-lg hover:shadow-[#0082A6]/8 cursor-default">
                <div className="p-6 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0082A6]/10 text-[#0082A6] flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1.5">{f.title}</h3>
                    <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
