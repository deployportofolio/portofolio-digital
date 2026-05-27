"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function ClosingCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="mulai" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-[#F7F5ED]">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4DEE3] to-transparent"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-3xl overflow-hidden bg-[#0082A6] px-8 sm:px-16 py-16 text-center"
        >
          {/* Animated background blobs */}
          {!prefersReduced && (
            <>
              <motion.div
                aria-hidden
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"
              />
              <motion.div
                aria-hidden
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-[#86B9C7]/30 blur-3xl pointer-events-none"
              />
              <motion.div
                aria-hidden
                animate={{
                  x: [0, 16, 0],
                  y: [0, -12, 0],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-white/8 blur-3xl pointer-events-none"
              />
            </>
          )}

          {/* Dot grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.p
              variants={fadeUp}
              className="text-[#C4DEE3] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Mulai Sekarang - Gratis
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
            >
              Website Portofoliomu
              <br />
              Menunggu untuk Dibuat
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            >
              Bergabunglah dengan ribuan profesional yang sudah tampil percaya diri online.
              Tidak perlu kartu kredit, tidak perlu coding.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-white text-[#0082A6] font-bold text-base px-8 py-3.5 rounded-xl
                           hover:bg-[#F7F5ED] transition-all duration-200 hover:scale-105
                           hover:shadow-xl hover:shadow-black/20 active:scale-95"
              >
                Mulai Gratis Sekarang
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="#template"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold text-base px-8 py-3.5 rounded-xl
                           hover:border-white/70 hover:bg-white/10 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Lihat Template Dulu
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/40 text-sm"
            >
              ✓ Gratis selamanya &nbsp;·&nbsp; ✓ Tanpa kartu kredit &nbsp;·&nbsp; ✓ Online dalam menit
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
