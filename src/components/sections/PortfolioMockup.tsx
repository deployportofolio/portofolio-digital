"use client";

import { motion } from "framer-motion";
import { scaleIn, fadeUp, stagger } from "@/lib/motion";

const WORK_COLORS = [
  "bg-[#0082A6]/20",
  "bg-[#C4DEE3]",
  "bg-[#86B9C7]/50",
  "bg-[#C4DEE3]/70",
  "bg-[#0082A6]/12",
  "bg-[#86B9C7]/30",
];

const BADGES = [
  { label: "Tanpa Coding", pos: "-left-4 top-16", delay: 0.55 },
  { label: "Mobile Ready", pos: "-right-4 top-32", delay: 0.7 },
  { label: "SEO Ready", pos: "-left-4 bottom-20", delay: 0.85 },
];

export default function PortfolioMockup() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none">
      {/* Floating badges */}
      {BADGES.map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, x: b.pos.includes("-left") ? -16 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: b.delay, duration: 0.4, ease: "easeOut" }}
          className={`absolute z-20 ${b.pos} hidden sm:flex items-center gap-1.5 bg-white rounded-xl px-3 py-1.5 shadow-lg shadow-[#0082A6]/10 border border-[#C4DEE3]/60 text-xs font-semibold text-[#1A1A1A]/75 whitespace-nowrap`}
        >
          <span className="w-2 h-2 rounded-full bg-[#0082A6] inline-block" />
          {b.label}
        </motion.div>
      ))}

      {/* Browser chrome + portfolio preview */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="rounded-2xl overflow-hidden shadow-2xl shadow-[#0082A6]/15 border border-[#C4DEE3]/50"
      >
        {/* Browser top bar */}
        <div className="bg-[#EFEFEF] px-4 py-2.5 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
          <div className="flex-1 flex items-center bg-white rounded-md mx-3 px-3 py-1">
            <span className="text-[11px] text-gray-400 truncate">
              andi.portofolio.digital
            </span>
          </div>
        </div>

        {/* Portfolio body */}
        <div className="bg-[#F7F5ED] p-5">
          {/* Hero row */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-[#C4DEE3]/50 to-[#F7F5ED] rounded-xl p-4 mb-3"
          >
            {/* Avatar + name */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-[#0082A6]/20 flex items-center justify-center shrink-0">
                <div className="w-7 h-7 rounded-full bg-[#0082A6]/40" />
              </div>
              <div>
                <div className="h-2.5 bg-[#1A1A1A]/25 rounded-full w-24 mb-1.5" />
                <div className="h-2 bg-[#1A1A1A]/12 rounded-full w-16" />
              </div>
            </motion.div>

            {/* Bio lines */}
            <motion.div variants={fadeUp}>
              <div className="h-2 bg-[#1A1A1A]/10 rounded-full w-full mb-1.5" />
              <div className="h-2 bg-[#1A1A1A]/8 rounded-full w-4/5 mb-3" />
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex gap-2">
              <div className="h-7 bg-[#0082A6] rounded-lg w-20 flex items-center justify-center">
                <div className="h-2 bg-white/60 rounded w-12" />
              </div>
              <div className="h-7 border border-[#0082A6]/40 rounded-lg w-20" />
            </motion.div>
          </motion.div>

          {/* Work grid */}
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-2"
          >
            {WORK_COLORS.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`aspect-square ${c} rounded-xl`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Glow blob behind mockup */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-[#0082A6]/10 blur-3xl" />
    </div>
  );
}
