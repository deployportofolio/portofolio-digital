"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#template", label: "Template" },
  { href: "#harga", label: "Harga" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5ED]/95 backdrop-blur-md shadow-sm border-b border-[#C4DEE3]/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="portofolio.digital"
            width={34}
            height={34}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-[15px] text-[#1A1A1A] tracking-tight">
            portofolio<span className="text-[#0082A6]">.digital</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#0082A6] px-3 py-1.5 rounded-lg hover:bg-[#0082A6]/8 transition-all duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          <Link
            href="#mulai"
            className="hidden md:inline-flex items-center bg-[#0082A6] text-white text-sm font-semibold px-5 py-2 rounded-xl
                       hover:bg-[#006d8c] transition-all duration-200 hover:scale-105
                       hover:shadow-lg hover:shadow-[#0082A6]/30 active:scale-95"
          >
            Mulai Gratis
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] rounded-lg hover:bg-[#C4DEE3]/40 transition-colors"
          >
            <span
              className={`block w-5 h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#1A1A1A] rounded-full transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#F7F5ED]/98 backdrop-blur-md border-t border-[#C4DEE3]/40"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[#1A1A1A]/65 hover:text-[#0082A6] px-3 py-2.5 rounded-xl hover:bg-[#0082A6]/8 transition-all"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#mulai"
                onClick={() => setOpen(false)}
                className="mt-2 bg-[#0082A6] text-white text-sm font-semibold px-4 py-2.5 rounded-xl text-center hover:bg-[#006d8c] transition-colors"
              >
                Mulai Gratis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
