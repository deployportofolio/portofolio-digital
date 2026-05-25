"use client";

/**
 * Spline wrapper — hanya di-render di client (di-import via next/dynamic ssr:false).
 * Ganti NEXT_PUBLIC_SPLINE_URL di .env.local dengan URL scene Spline milikmu.
 */

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import PortfolioMockup from "./PortfolioMockup";

const SCENE_URL = process.env.NEXT_PUBLIC_SPLINE_URL ?? "";

export default function SplineScene() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!SCENE_URL || error) return <PortfolioMockup />;

  return (
    <div className="relative w-full h-full">
      {/* Fallback visible sampai Spline selesai load */}
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <PortfolioMockup />
        </div>
      )}
      <Spline
        scene={SCENE_URL}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
