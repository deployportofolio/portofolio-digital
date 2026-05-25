"use client";

import { useLenis } from "@/lib/lenis";

/** Initialises Lenis smooth scroll for the whole page. Render once in layout. */
export default function SmoothScroll() {
  useLenis();
  return null;
}
