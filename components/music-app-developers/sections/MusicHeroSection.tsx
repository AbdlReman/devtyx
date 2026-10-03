import Image from "next/image";
import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { googleReviewsUrl } from "@/components/about/data/about-data";

export default function MusicHeroSection() {
  return (
    <section className="hero-purple-section" style={{ textAlign: "left", paddingBottom: "5rem" }}>
      {/* Background decorations — same atmosphere as the rest of the site, different layout */}
      <div className="pointer-events-none" aria-hidden="true">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-grid-bg" />
        <div className="hero-bottom-fade" />
      </div>

      <div className="brelyx-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center" }}
          className="lt-split-heading">

          {/* ── Copy ─────────────────────────────────────────── */}
          <div>
            <div className="hero-p-badge" style={{ margin: "0 0 2rem" }}>
              <span className="hero-p-badge-dot" />
              Music App Development
            </div>

            <h1 className="hero-p-h1" style={{ margin: "0 0 1.5rem", maxWidth: "none" }}>
              We Build Music Apps<br />
              <span className="hero-p-h1-gradient">That People Play on Repeat</span>
            </h1>

            <p className="hero-p-sub" style={{ margin: "0 0 2.25rem", maxWidth: "540px" }}>
              From streaming platforms to artist fan apps, DEVTYX designs, builds and scales music apps
              for iOS, Android and web. We&apos;ve delivered 70+ products for 120+ clients in 23+ countries.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
              <QuickInquiryButton
                className="hero-p-btn"
                source="Music App Developers"
                defaultMessage="I'm interested in building a music app. "
              >
                Book a Free Discovery Call →
              </QuickInquiryButton>
              <Link href="/portfolio" className="hero-p-ghost">See Our Work</Link>
            </div>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.65rem 1.25rem",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#FBBF24" }}>★★★★★</span>
              Rated by real clients — see our Google reviews
            </a>
          </div>

          {/* ── Visual ───────────────────────────────────────── */}
          <div style={{ position: "relative" }}>
            <div className="hero-mockup-glow" style={{ opacity: 0.7 }} />

            <div style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: "1.75rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 40px 100px rgba(3,10,30,0.55)",
            }}>
              <Image
                src="/images/musicapp.jpg"
                alt="DEVTYX music app development"
                fill
                className="object-cover object-center"
                priority
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(185deg, rgba(3,10,30,0) 40%, rgba(3,10,30,0.65) 100%)",
              }} />
            </div>

            {/* Floating glass badges */}
            <div
              className="music-hero-float-badge"
              style={{ top: "8%", left: "-8%", animation: "hero-chip-float 4s ease-in-out infinite" }}
            >
              <span style={{ fontSize: "1.2rem" }}>🎧</span>
              <div>
                <div style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 700 }}>Now Streaming</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem" }}>Gapless playback</div>
              </div>
            </div>

            <div
              className="music-hero-float-badge"
              style={{ bottom: "10%", right: "-6%", animation: "hero-chip-float 4.5s ease-in-out infinite 0.8s" }}
            >
              <span style={{ fontSize: "1.2rem" }}>🎵</span>
              <div>
                <div style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 700 }}>AI Recommendations</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem" }}>Personalized for every listener</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
