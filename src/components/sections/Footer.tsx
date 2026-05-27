"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const LINKS = {
  Produk: [
    { label: "Fitur", href: "#fitur" },
    { label: "Template", href: "#template" },
    { label: "Harga", href: "#harga" },
    { label: "Cara Kerja", href: "#cara-kerja" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Karier", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Bantuan: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Hubungi Kami", href: "#" },
    { label: "Status Layanan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
  ],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <div>
      <p className="text-sm font-semibold text-white mb-1">Dapatkan tips & update terbaru</p>
      <p className="text-xs text-white/50 mb-3">Tidak ada spam. Berhenti kapan saja.</p>

      {status === "success" ? (
        <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
          <svg className="w-4 h-4 text-[#86B9C7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span className="text-sm text-white/80">Terima kasih! Kamu sudah berlangganan.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="emailkamu@contoh.com"
              aria-label="Alamat email"
              className={`w-full bg-white/10 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none
                focus:ring-2 focus:ring-white/40 transition-all
                ${status === "error" ? "border-red-400/60" : "border-white/20 focus:border-white/40"}`}
            />
            {status === "error" && (
              <p className="mt-1 text-xs text-red-300">Masukkan alamat email yang valid.</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-white text-[#0082A6] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#F7F5ED] transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
          >
            Berlangganan
          </button>
        </form>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0082A6]/50 to-transparent" />

      {/* Newsletter banner */}
      <div className="border-b border-white/8 relative">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(0,130,166,0.08) 0%, transparent 70%)",
          }}
        />
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
        >
          <motion.div variants={fadeUp} className="md:flex-1">
            <h3 className="text-xl font-bold text-white">
              Tetap update dengan <span className="text-[#86B9C7]">portofolio.digital</span>
            </h3>
            <p className="text-sm text-white/50 mt-1">
              Tips membangun personal brand, update fitur terbaru, dan inspirasi portofolio.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="md:w-[420px] shrink-0">
            <NewsletterForm />
          </motion.div>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="portofolio.digital"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-[15px] text-white tracking-tight">
                portofolio<span className="text-[#86B9C7]">.digital</span>
              </span>
            </Link>
            <p className="text-sm text-white/45 leading-relaxed max-w-[200px]">
              Platform no-code untuk website portofolio profesional, untuk semua profesi.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/8 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 portofolio.digital. Semua hak dilindungi.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
