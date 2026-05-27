import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Templates from "@/components/sections/Templates";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";

const BASE = "https://portofolio.digital";

const jsonLd = [
  // 1. Organization
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "portofolio.digital",
    url: BASE,
    logo: {
      "@type": "ImageObject",
      url: `${BASE}/logo.png`,
      width: 200,
      height: 200,
    },
    description:
      "Platform no-code untuk membuat website portofolio profesional dalam hitungan menit. Tanpa coding, untuk semua profesi.",
    foundingDate: "2024",
    inLanguage: "id",
    sameAs: [
      "https://instagram.com/portofoliodigital",
      "https://twitter.com/portofoliodigital",
      "https://linkedin.com/company/portofoliodigital",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@portofolio.digital",
      contactType: "customer support",
      availableLanguage: "Indonesian",
    },
  },

  // 2. WebSite (enables Sitelinks Search Box di Google)
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "portofolio.digital",
    description:
      "Buat website portofolio profesional tanpa coding. Pilih template, isi konten, langsung online.",
    publisher: { "@id": `${BASE}/#organization` },
    inLanguage: "id",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/template?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. SoftwareApplication
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE}/#app`,
    name: "portofolio.digital",
    url: BASE,
    applicationCategory: "WebApplication",
    applicationSubCategory: "Website Builder",
    operatingSystem: "Web",
    description:
      "Platform no-code untuk membuat website portofolio profesional. Tersedia template siap pakai, editor drag & drop, domain custom, dan SEO otomatis.",
    inLanguage: "id",
    featureList: [
      "100+ Template Siap Pakai",
      "Editor Drag & Drop",
      "Domain Custom",
      "Responsif Otomatis",
      "SEO-Friendly",
      "Tanpa Coding",
    ],
    screenshot: `${BASE}/opengraph-image`,
    offers: [
      {
        "@type": "Offer",
        name: "Gratis",
        price: "0",
        priceCurrency: "IDR",
        description: "1 website portofolio, subdomain gratis, 20+ template dasar.",
        eligibleCustomerType: "http://schema.org/EndUser",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "79000",
        priceCurrency: "IDR",
        billingIncrement: "P1M",
        description: "Unlimited website, domain custom, 80+ template premium, analytics lengkap.",
      },
      {
        "@type": "Offer",
        name: "Bisnis",
        price: "199000",
        priceCurrency: "IDR",
        billingIncrement: "P1M",
        description: "5 website tim, semua fitur Pro, white-label, dedicated account manager.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1240",
      bestRating: "5",
      worstRating: "1",
    },
    publisher: { "@id": `${BASE}/#organization` },
  },

  // 4. FAQPage - sync dengan FAQ.tsx
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah perlu bisa coding untuk membuat website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sama sekali tidak. portofolio.digital dirancang khusus agar siapa pun bisa membuat website profesional tanpa pengetahuan coding apapun. Cukup pilih template, klik, ketik, dan website kamu langsung jadi.",
        },
      },
      {
        "@type": "Question",
        name: "Bisakah menggunakan domain sendiri (custom domain)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bisa! Pada paket Pro dan Bisnis, kamu bisa menghubungkan domain milikmu sendiri seperti namakamu.com atau namakamu.id. Kami menyediakan panduan langkah demi langkah agar prosesnya mudah. Paket Gratis mendapatkan subdomain gratis berformat nama.portofolio.digital.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rata-rata pengguna kami menyelesaikan website pertama mereka dalam 15–30 menit. Prosesnya terdiri dari tiga langkah: pilih template, isi konten (foto, bio, karya), lalu klik publish. Sesederhana itu.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah ada paket gratis? Apa saja batasannya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, ada paket Gratis selamanya tanpa kartu kredit. Kamu mendapatkan 1 website portofolio dengan subdomain gratis, akses ke 20+ template dasar, 5 halaman konten, formulir kontak, dan SSL gratis. Untuk fitur lengkap seperti domain custom dan analytics, tersedia di paket Pro.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah website saya akan tampil bagus di HP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Semua template di portofolio.digital bersifat responsive secara otomatis. Artinya tampilannya akan menyesuaikan sempurna di smartphone, tablet, maupun desktop tanpa perlu pengaturan tambahan dari kamu.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana jika saya ingin berhenti berlangganan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tidak ada kontrak jangka panjang atau biaya penalti. Kamu bisa membatalkan langganan kapan saja. Website kamu akan tetap aktif hingga akhir periode tagihan berjalan. Setelah itu, akun akan kembali ke paket Gratis dan websitemu tetap online.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <main>
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <Stats />
        <Templates />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ClosingCTA />
        <Footer />
      </main>
    </>
  );
}
