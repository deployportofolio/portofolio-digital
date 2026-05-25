"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const TEMPLATES = [
  {
    profession: "Fotografer",
    tagline: "Tunjukkan karya terbaikmu dengan galeri yang memukau",
    gradient: "from-[#86B9C7] via-[#C4DEE3] to-[#F7F5ED]",
    accentColor: "bg-[#0082A6]",
    previewColors: ["bg-[#0082A6]/80", "bg-[#86B9C7]", "bg-[#C4DEE3]/80", "bg-[#0082A6]/50"],
    badge: "Galeri Foto",
  },
  {
    profession: "Desainer",
    tagline: "Portfolio desain yang mencerminkan kreativitas dan identitasmu",
    gradient: "from-[#C4DEE3] via-[#F7F5ED] to-[#86B9C7]/60",
    accentColor: "bg-[#86B9C7]",
    previewColors: ["bg-[#C4DEE3]", "bg-[#0082A6]/40", "bg-[#86B9C7]/70", "bg-[#C4DEE3]/50"],
    badge: "Karya Desain",
  },
  {
    profession: "Developer",
    tagline: "Showcase project dan skill teknis dengan tampilan yang percaya diri",
    gradient: "from-[#1A1A1A] via-[#0082A6]/80 to-[#86B9C7]/50",
    accentColor: "bg-[#86B9C7]",
    previewColors: ["bg-[#86B9C7]/80", "bg-[#0082A6]/60", "bg-white/20", "bg-[#C4DEE3]/40"],
    badge: "Tech Portfolio",
    dark: true,
  },
  {
    profession: "Penulis",
    tagline: "Bagikan karya tulis dan bangun personal brand sebagai penulis profesional",
    gradient: "from-[#F7F5ED] via-[#C4DEE3]/60 to-[#86B9C7]/30",
    accentColor: "bg-[#0082A6]",
    previewColors: ["bg-[#0082A6]/20", "bg-[#C4DEE3]", "bg-[#86B9C7]/40", "bg-[#0082A6]/30"],
    badge: "Blog & Artikel",
  },
];

export default function Templates() {
  return (
    <section id="template" className="py-24 bg-[#F7F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Contoh Template"
          title="Dibuat untuk <span class='text-[#0082A6]'>Semua Profesi</span>"
          subtitle="Setiap template dirancang khusus sesuai kebutuhan profesi. Pilih yang cocok, sesuaikan, dan langsung online."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {TEMPLATES.map((t) => (
            <motion.div key={t.profession} variants={fadeUp} className="h-full">
              <TiltCard className="h-full">
                <div className="relative rounded-2xl overflow-hidden border border-[#C4DEE3]/50 hover:border-[#0082A6]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#0082A6]/12 h-full">
                  {/* Preview area */}
                  <div className={`h-48 bg-gradient-to-br ${t.gradient} p-4 relative`}>
                    {/* Mini browser mock */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 h-full flex flex-col gap-2">
                      {/* Top bar */}
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/50" />
                        <div className="w-2 h-2 rounded-full bg-white/35" />
                        <div className="w-2 h-2 rounded-full bg-white/35" />
                      </div>
                      {/* Content grid */}
                      <div className="flex-1 grid grid-cols-2 gap-1.5">
                        {t.previewColors.map((c, i) => (
                          <div key={i} className={`${c} rounded-lg`} />
                        ))}
                      </div>
                    </div>
                    {/* Badge */}
                    <span className={`absolute top-3 right-3 ${t.accentColor} text-white text-[10px] font-semibold px-2 py-0.5 rounded-full`}>
                      {t.badge}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className={`p-4 ${t.dark ? "bg-[#1A1A1A]" : "bg-white"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${t.dark ? "text-[#86B9C7]" : "text-[#0082A6]"}`}>
                      {t.profession}
                    </p>
                    <p className={`text-sm leading-snug ${t.dark ? "text-white/70" : "text-[#1A1A1A]/60"}`}>
                      {t.tagline}
                    </p>
                    <button className={`mt-3 text-xs font-semibold ${t.dark ? "text-[#86B9C7] hover:text-white" : "text-[#0082A6] hover:text-[#006d8c]"} transition-colors`}>
                      Lihat Template →
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 border-2 border-[#0082A6] text-[#0082A6] font-semibold px-7 py-3 rounded-xl hover:bg-[#0082A6]/8 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Lihat Semua Template
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
