import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { trustStats } from "../data/music-app-developers-data";

export default function MusicHeroSection() {
  return (
    <section className="hero-purple-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(3,105,161,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="brelyx-container" style={{ position: "relative" }}>
        <div className="hero-p-badge">● Music App Development</div>
        <h1 className="hero-p-h1">
          We Build Music Apps<br />That People Play on Repeat
        </h1>
        <p className="hero-p-sub">
          From streaming platforms to artist fan apps, DEVTYX designs, builds and scales music apps
          for iOS, Android and web. Since 2009, we&apos;ve delivered 70+ products for 120+ clients in 23+ countries.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          <QuickInquiryButton
            className="hero-p-btn"
            source="Music App Developers"
            defaultMessage="I'm interested in building a music app. "
          >
            Book a Free Discovery Call →
          </QuickInquiryButton>
          <Link href="/portfolio" className="hero-p-ghost">See Our Work</Link>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
          paddingBottom: "3.5rem",
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.65)",
        }}>
          {trustStats.map(({ num, label }, i) => (
            <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
              <span>
                <span style={{ color: "#93E2F9" }}>{num}</span> {label}
              </span>
              {i < trustStats.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
