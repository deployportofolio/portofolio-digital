"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp, viewportOnce } from "@/lib/motion";

const TESTIMONIALS = [
  {
    name: "Andi Pratama",
    role: "Fotografer Profesional",
    avatar: "AP",
    color: "bg-[#0082A6]",
    quote:
      "Dulu saya pakai WordPress dan butuh 2 minggu buat setup. Dengan portofolio.digital, website saya jadi dalam 30 menit. Klien sekarang langsung bisa lihat portofolio saya yang rapi dan profesional.",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "UI/UX Designer",
    avatar: "SD",
    color: "bg-[#86B9C7]",
    quote:
      "Template-nya keren banget dan sangat customizable. Saya bisa sesuaikan warna dan font sesuai branding saya tanpa coding sama sekali. Banyak klien yang komplimen soal tampilan website saya.",
    rating: 5,
  },
  {
    name: "Rizky Mahendra",
    role: "Full-Stack Developer",
    avatar: "RM",
    color: "bg-[#1A1A1A]",
    quote:
      "Ironis sih - saya developer tapi pilih platform no-code untuk portofolio sendiri. Karena yang penting hasilnya, bukan prosesnya. Dan hasilnya memang memuaskan, SEO-nya juga bagus.",
    rating: 5,
  },
  {
    name: "Maya Kusuma",
    role: "Penulis & Content Creator",
    avatar: "MK",
    color: "bg-[#C4DEE3]",
    quote:
      "Akhirnya ada platform yang ngerti kebutuhan penulis. Saya bisa showcase artikel, buku, dan klien dalam satu website yang elegan. Domain custom-nya gampang banget di-setup.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Konsultan Bisnis",
    avatar: "BS",
    color: "bg-[#0082A6]/70",
    quote:
      "Credibility itu penting dalam bisnis konsultasi. Sejak punya website dari portofolio.digital, inquiry saya naik 3x lipat. Platform ini investasi terbaik untuk personal brand.",
    rating: 5,
  },
  {
    name: "Lina Harahap",
    role: "Ilustrator Digital",
    avatar: "LH",
    color: "bg-[#86B9C7]/80",
    quote:
      "Galeri foto dan karya saya tampil dengan sangat cantik. Saya bisa drag-and-drop semua gambar dan langsung publish. Tidak ada platform lain yang semudah ini.",
    rating: 5,
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 4000);
  }, [emblaApi, stopAutoplay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      startAutoplay();
    },
    [emblaApi, startAutoplay]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);
    startAutoplay();
    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  return (
    <section id="testimoni" className="py-24 bg-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4DEE3] to-transparent"
      />
      {/* Background blob */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#C4DEE3]/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Testimoni"
          title={`Dipercaya <span class='text-[#0082A6]'>Ribuan Profesional</span>`}
          subtitle="Jangan percaya kata kami - dengarkan langsung dari pengguna yang sudah membuktikannya."
        />

        {/* Carousel */}
        <div className="mt-14">
          <div
            ref={emblaRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
          >
            <div className="flex gap-5 touch-pan-y">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="flex-none w-[85vw] sm:w-[420px] md:w-[380px] lg:w-[360px]"
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Testimoni ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "w-6 bg-[#0082A6]"
                    : "w-2 bg-[#C4DEE3] hover:bg-[#86B9C7]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Marquee strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 overflow-hidden relative"
        >
          <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div
            className="flex gap-6 w-max"
            style={{ animation: "marquee-left 28s linear infinite" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-[#F7F5ED] border border-[#C4DEE3]/50 rounded-full px-4 py-2 shrink-0"
              >
                <div
                  className={`w-7 h-7 rounded-full ${t.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <p className="text-xs text-[#1A1A1A]/65 font-medium whitespace-nowrap max-w-[200px] truncate">
                  &ldquo;{t.quote.slice(0, 55)}...&rdquo;
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  avatar,
  color,
  quote,
  rating,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="h-full bg-[#F7F5ED] rounded-2xl border border-[#C4DEE3]/50 hover:border-[#0082A6]/25 hover:shadow-lg hover:shadow-[#0082A6]/8 transition-all duration-300 p-6 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-[#1A1A1A]/70 leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#C4DEE3]/40">
        <div
          className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
        >
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1A1A1A]">{name}</p>
          <p className="text-xs text-[#1A1A1A]/45">{role}</p>
        </div>
      </div>
    </div>
  );
}
