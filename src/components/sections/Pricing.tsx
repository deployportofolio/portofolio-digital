"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const PLANS = [
  {
    name: "Gratis",
    price: "0",
    period: "selamanya",
    desc: "Mulai tanpa biaya, tanpa kartu kredit.",
    cta: "Mulai Gratis",
    ctaStyle: "border-2 border-[#0082A6] text-[#0082A6] hover:bg-[#0082A6]/8",
    features: [
      "1 website portofolio",
      "Subdomain portofolio.digital",
      "5 halaman konten",
      "Akses 20+ template dasar",
      "Formulir kontak",
      "SSL gratis",
    ],
    missing: ["Domain custom", "Analytics lengkap", "Prioritas support"],
  },
  {
    name: "Pro",
    price: "79.000",
    period: "per bulan",
    desc: "Untuk profesional yang serius membangun personal brand.",
    cta: "Coba Gratis 14 Hari",
    ctaStyle: "bg-[#0082A6] text-white hover:bg-[#006d8c] shadow-lg shadow-[#0082A6]/30",
    popular: true,
    features: [
      "Unlimited website portofolio",
      "Domain custom (.com, .id, dll)",
      "Halaman tanpa batas",
      "Akses 80+ template premium",
      "Analytics & visitor tracking",
      "SEO tools lengkap",
      "Prioritas customer support",
      "Hapus branding portofolio.digital",
    ],
    missing: [],
  },
  {
    name: "Bisnis",
    price: "199.000",
    period: "per bulan",
    desc: "Untuk tim, agensi, dan perusahaan yang butuh lebih.",
    cta: "Hubungi Kami",
    ctaStyle: "border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A]/6",
    features: [
      "5 website portofolio tim",
      "Semua fitur Pro",
      "Manajemen tim & kolaborasi",
      "White-label / custom branding",
      "Laporan analytics mendalam",
      "Dedicated account manager",
      "SLA & uptime guarantee",
      "Custom integrations",
    ],
    missing: [],
  },
];

function CheckIcon({ dim = false }: { dim?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 ${dim ? "text-[#1A1A1A]/20" : "text-[#0082A6]"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="harga" className="py-24 bg-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4DEE3] to-transparent"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Harga"
          title="Mulai Gratis, <span class='text-[#0082A6]'>Upgrade Kapanpun</span>"
          subtitle="Tidak ada biaya tersembunyi. Batalkan kapan saja. Harga dalam Rupiah."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-3 gap-6 items-start"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative ${plan.popular ? "md:-mt-4" : ""}`}
            >
              {plan.popular ? (
                /* Pro card - animated glow border */
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 2px #0082A6, 0 8px 32px rgba(0,130,166,0.15)",
                      "0 0 0 2px #86B9C7, 0 8px 40px rgba(0,130,166,0.35)",
                      "0 0 0 2px #0082A6, 0 8px 32px rgba(0,130,166,0.15)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl bg-white overflow-hidden"
                >
                  <PlanCard plan={plan} />
                </motion.div>
              ) : (
                <div className="rounded-2xl border border-[#C4DEE3]/60 bg-white overflow-hidden hover:border-[#0082A6]/25 hover:shadow-lg hover:shadow-[#0082A6]/8 transition-all duration-300">
                  <PlanCard plan={plan} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center text-sm text-[#1A1A1A]/40"
        >
          Semua harga belum termasuk PPN. Harga Pro & Bisnis ditagih per bulan, bisa dibatalkan kapan saja.
        </motion.p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: (typeof PLANS)[number] }) {
  return (
    <div className="p-7 flex flex-col h-full">
      {/* Popular badge */}
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0082A6] text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm shadow-[#0082A6]/40">
          ⭐ Paling Populer
        </span>
      )}

      {/* Plan name */}
      <p className="text-sm font-semibold text-[#0082A6] uppercase tracking-wide">{plan.name}</p>

      {/* Price */}
      <div className="mt-3 flex items-end gap-1">
        {plan.price === "0" ? (
          <span className="text-4xl font-extrabold text-[#1A1A1A]">Gratis</span>
        ) : (
          <>
            <span className="text-sm font-semibold text-[#1A1A1A]/50 self-start mt-2">Rp</span>
            <span className="text-4xl font-extrabold text-[#1A1A1A]">{plan.price}</span>
          </>
        )}
      </div>
      <p className="text-xs text-[#1A1A1A]/40 mt-0.5">{plan.period}</p>
      <p className="text-sm text-[#1A1A1A]/60 mt-3 leading-snug">{plan.desc}</p>

      {/* CTA */}
      <Link
        href="#mulai"
        className={`mt-6 block text-center font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 ${plan.ctaStyle}`}
      >
        {plan.cta}
      </Link>

      {/* Divider */}
      <div className="my-6 border-t border-[#C4DEE3]/50" />

      {/* Features */}
      <ul className="flex flex-col gap-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[#1A1A1A]/75">
            <CheckIcon />
            {f}
          </li>
        ))}
        {plan.missing?.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[#1A1A1A]/30 line-through">
            <CheckIcon dim />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
