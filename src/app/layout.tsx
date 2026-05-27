import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const BASE_URL = "https://portofolio.digital";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "portofolio.digital — Buat Website Portofolio Profesional Tanpa Coding",
    template: "%s | portofolio.digital",
  },
  description:
    "Platform no-code untuk membuat website portofolio profesional dalam hitungan menit. Pilih template, isi konten, dan langsung online. Cocok untuk fotografer, desainer, developer, penulis, dan semua profesi.",

  keywords: [
    "buat website portofolio",
    "portofolio online gratis",
    "platform portofolio indonesia",
    "no-code portfolio builder",
    "website portofolio tanpa coding",
    "portofolio fotografer",
    "portofolio desainer",
    "portofolio developer",
    "template portofolio profesional",
    "portofolio.digital",
  ],

  authors: [{ name: "portofolio.digital", url: BASE_URL }],
  creator: "portofolio.digital",
  publisher: "portofolio.digital",
  category: "technology",

  alternates: {
    canonical: BASE_URL,
    languages: {
      "id-ID": BASE_URL,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "portofolio.digital",
    title: "portofolio.digital — Buat Website Portofolio Profesional Tanpa Coding",
    description:
      "Buat website portofolio profesional dalam hitungan menit. Tanpa coding, untuk semua profesi. Pilih template, isi konten, langsung online.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "portofolio.digital — Buat Website Portofolio Profesional Tanpa Coding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@portofoliodigital",
    creator: "@portofoliodigital",
    title: "portofolio.digital — Website Portofolio Profesional Tanpa Coding",
    description:
      "Buat website portofolio profesional dalam hitungan menit. Tanpa coding, untuk semua profesi.",
    images: ["/opengraph-image"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/logo.png",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  other: {
    "google-site-verification": "GANTI_DENGAN_KODE_VERIFIKASI_GOOGLE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
