"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { fadeUp, stagger } from "@/lib/motion";
import PortfolioMockup from "./PortfolioMockup";

// Lazy-load Spline hanya di client — tidak memblokir render awal
const SplineScene = dynamic(() => import("./SplineScene"), {
  ssr: false,
  loading: () => <PortfolioMockup />,
});

const TRUST = ["Gratis selamanya", "Tanpa kartu kredit", "Online dalam menit"];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#F7F5ED]"
    >
      {/* ── Background decoration ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,130,166,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient blobs */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#C4DEE3]/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-[#0082A6]/8 blur-3xl pointer-events-none"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-20 md:py-24">
        {/* Left — text */}
        <motion.div
          variants={prefersReduced ? undefined : stagger(0.12)}
          initial={prefersReduced ? false : "hidden"}
          animate="visible"
          className="flex flex-col"
        >
          {/* Label chip */}
          <motion.div
            variants={prefersReduced ? undefined : fadeUp}
            className="inline-flex items-center gap-2 bg-[#0082A6]/10 text-[#0082A6] text-xs font-semibold px-3 py-1.5 rounded-full w-fit mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0082A6] animate-pulse" />
            Platform Portofolio No-Code #1 di Indonesia
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={prefersReduced ? undefined : fadeUp}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#1A1A1A] leading-[1.12] tracking-tight"
          >
            Bangun Website{" "}
            <span className="text-[#0082A6]">Portofolio Profesional</span>mu
            dalam Hitungan Menit
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={prefersReduced ? undefined : fadeUp}
            className="mt-5 text-base sm:text-lg text-[#1A1A1A]/60 leading-relaxed max-w-lg"
          >
            Tanpa coding, tanpa ribet. Pilih template, isi konten, dan website
            kamu langsung online. Cocok untuk{" "}
            <span className="text-[#1A1A1A]/80 font-medium">
              fotografer, desainer, developer, penulis,
            </span>{" "}
            dan semua profesi.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={prefersReduced ? undefined : fadeUp}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <Link
              href="#mulai"
              className="inline-flex items-center justify-center bg-[#0082A6] text-white font-semibold text-base px-7 py-3.5 rounded-xl
                         hover:bg-[#006d8c] transition-all duration-200 hover:scale-105
                         hover:shadow-xl hover:shadow-[#0082A6]/30 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#0082A6]"
            >
              Mulai Gratis
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="#template"
              className="inline-flex items-center justify-center border-2 border-[#0082A6] text-[#0082A6] font-semibold text-base px-7 py-3.5 rounded-xl
                         hover:bg-[#0082A6]/8 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Lihat Contoh
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            variants={prefersReduced ? undefined : fadeUp}
            className="flex flex-wrap gap-4 mt-7"
          >
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-sm text-[#1A1A1A]/50">
                <svg className="w-4 h-4 text-[#0082A6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — 3D scene / mockup */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          className="relative h-[420px] sm:h-[500px] md:h-[560px] flex items-center justify-center"
        >
          {prefersReduced ? <PortfolioMockup /> : <SplineScene />}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#1A1A1A]/30"
        aria-hidden
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-0.5 h-5 bg-current rounded-full"
        />
      </motion.div>
    </section>
  );
}
