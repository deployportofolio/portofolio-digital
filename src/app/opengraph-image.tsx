import { ImageResponse } from "next/og";

export const alt = "portofolio.digital - Buat Website Portofolio Profesional Tanpa Coding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0082A6",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative circles - no blur/filter, just opacity */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            backgroundColor: "rgba(196,222,227,0.20)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.07)",
            display: "flex",
          }}
        />

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Logo circle */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#1A1A1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                color: "#86B9C7",
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              pd
            </span>
          </div>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              portofolio
            </span>
            <span
              style={{
                color: "#C4DEE3",
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              .digital
            </span>
          </div>

          {/* Headline */}
          <p
            style={{
              color: "white",
              fontSize: 54,
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 18px 0",
              letterSpacing: "-2px",
              textAlign: "center",
            }}
          >
            Buat Website Portofolio
          </p>
          <p
            style={{
              color: "white",
              fontSize: 54,
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 20px 0",
              letterSpacing: "-2px",
              textAlign: "center",
            }}
          >
            Profesional Tanpa Coding
          </p>

          {/* Subheadline */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 22,
              margin: "0 0 36px 0",
              lineHeight: 1.4,
            }}
          >
            Pilih template · Isi konten · Langsung online
          </p>

          {/* Badges */}
          <div style={{ display: "flex", gap: 12 }}>
            {["✓ Gratis Selamanya", "✓ Tanpa Kartu Kredit", "✓ Online dalam Menit"].map((b) => (
              <div
                key={b}
                style={{
                  display: "flex",
                  backgroundColor: "rgba(255,255,255,0.13)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 100,
                  padding: "8px 20px",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
