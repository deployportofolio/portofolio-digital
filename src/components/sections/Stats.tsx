"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: 12000, suffix: "+", label: "Website Online", desc: "Portofolio aktif yang dibuat di platform kami" },
  { value: 5200,  suffix: "+", label: "Pengguna Aktif", desc: "Profesional yang sudah percaya pada kami" },
  { value: 80,    suffix: "+", label: "Template Premium", desc: "Desain siap pakai untuk semua profesi" },
  { value: 98,    suffix: "%", label: "Tingkat Kepuasan", desc: "Pengguna yang merekomendasikan platform kami" },
];

function StatItem({
  value,
  suffix,
  label,
  desc,
}: {
  value: number;
  suffix: string;
  label: string;
  desc: string;
}) {
  const { ref, count } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex flex-col items-center text-center px-4"
    >
      <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        {count.toLocaleString("id-ID")}
        <span className="text-[#86B9C7]">{suffix}</span>
      </p>
      <p className="mt-2 text-base font-semibold text-white/90">{label}</p>
      <p className="mt-1 text-sm text-white/45 leading-snug max-w-[140px]">{desc}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      {/* Subtle glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,130,166,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4"
        >
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
