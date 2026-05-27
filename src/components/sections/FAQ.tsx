"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const FAQS = [
  {
    q: "Apakah perlu bisa coding untuk membuat website?",
    a: "Sama sekali tidak. portofolio.digital dirancang khusus agar siapa pun bisa membuat website profesional tanpa pengetahuan coding apapun. Cukup pilih template, klik, ketik, dan website kamu langsung jadi.",
  },
  {
    q: "Bisakah menggunakan domain sendiri (custom domain)?",
    a: "Bisa! Pada paket Pro dan Bisnis, kamu bisa menghubungkan domain milikmu sendiri seperti namakamu.com atau namakamu.id. Kami menyediakan panduan langkah demi langkah agar prosesnya mudah. Paket Gratis mendapatkan subdomain gratis berformat nama.portofolio.digital.",
  },
  {
    q: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    a: "Rata-rata pengguna kami menyelesaikan website pertama mereka dalam 15–30 menit. Prosesnya terdiri dari tiga langkah: pilih template, isi konten (foto, bio, karya), lalu klik publish. Sesederhana itu.",
  },
  {
    q: "Apakah ada paket gratis? Apa saja batasannya?",
    a: "Ya, ada paket Gratis selamanya tanpa kartu kredit. Kamu mendapatkan 1 website portofolio dengan subdomain gratis, akses ke 20+ template dasar, 5 halaman konten, formulir kontak, dan SSL gratis. Untuk fitur lengkap seperti domain custom dan analytics, tersedia di paket Pro.",
  },
  {
    q: "Apakah website saya akan tampil bagus di HP?",
    a: "Semua template di portofolio.digital bersifat responsive secara otomatis. Artinya tampilannya akan menyesuaikan sempurna di smartphone, tablet, maupun desktop tanpa perlu pengaturan tambahan dari kamu.",
  },
  {
    q: "Bagaimana jika saya ingin berhenti berlangganan?",
    a: "Tidak ada kontrak jangka panjang atau biaya penalti. Kamu bisa membatalkan langganan kapan saja. Website kamu akan tetap aktif hingga akhir periode tagihan berjalan. Setelah itu, akun akan kembali ke paket Gratis dan websitemu tetap online.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="w-5 h-5 shrink-0 text-[#0082A6]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeUp} className="border-b border-[#C4DEE3]/50 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="flex items-center gap-3">
          <span className="text-xs font-bold text-[#0082A6]/50 shrink-0 w-5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm sm:text-base font-semibold text-[#1A1A1A] group-hover:text-[#0082A6] transition-colors duration-200">
            {q}
          </span>
        </span>
        <ChevronIcon open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-8 text-sm text-[#1A1A1A]/60 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#F7F5ED] relative">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4DEE3] to-transparent"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="FAQ"
          title={`Pertanyaan yang <span class='text-[#0082A6]'>Sering Ditanya</span>`}
          subtitle="Tidak menemukan jawaban yang kamu cari? Hubungi tim support kami kapan saja."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 bg-white rounded-2xl border border-[#C4DEE3]/50 shadow-sm px-6"
        >
          {FAQS.map((faq, i) => (
            <FAQItem key={i} {...faq} index={i} />
          ))}
        </motion.div>

        {/* Support CTA */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 text-center text-sm text-[#1A1A1A]/50"
        >
          Masih ada pertanyaan?{" "}
          <a
            href="mailto:hello@portofolio.digital"
            className="text-[#0082A6] font-semibold hover:underline"
          >
            Hubungi kami
          </a>
        </motion.p>
      </div>
    </section>
  );
}
