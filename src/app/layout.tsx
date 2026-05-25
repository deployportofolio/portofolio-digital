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

export const metadata: Metadata = {
  title: "portofolio.digital — Buat Website Portofolio Profesional Tanpa Coding",
  description:
    "Platform no-code untuk membuat website portofolio profesional dalam hitungan menit. Pilih template, isi konten, dan langsung online. Cocok untuk fotografer, desainer, developer, penulis, dan semua profesi.",
  keywords: [
    "portofolio website",
    "buat portofolio online",
    "no-code portfolio",
    "website portofolio gratis",
    "platform portofolio indonesia",
  ],
  openGraph: {
    title: "portofolio.digital — Buat Website Portofolio Profesional Tanpa Coding",
    description:
      "Buat website portofolio profesional dalam hitungan menit. Tanpa coding, untuk semua profesi.",
    url: "https://portofolio.digital",
    siteName: "portofolio.digital",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "portofolio.digital",
    description: "Buat website portofolio profesional tanpa coding.",
  },
  metadataBase: new URL("https://portofolio.digital"),
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
