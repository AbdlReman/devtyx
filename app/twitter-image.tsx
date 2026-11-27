import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DEVTYX — Innovative IT & Digital Transformation Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #1A0842 0%, #2D1B69 45%, #0F172A 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#A78BFA",
            }}
          />
          DEVTYX
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            We Craft Digital Products That Scale
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 820,
            }}
          >
            Web, mobile, cloud, and AI solutions for ambitious teams worldwide.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>70+ products · 23+ countries · 98% satisfaction</span>
          <span style={{ fontWeight: 600, color: "#C4B5FD" }}>devtyx.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
