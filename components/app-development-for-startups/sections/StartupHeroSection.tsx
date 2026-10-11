import Image from "next/image";
import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { trustStats } from "../data/app-development-for-startups-data";

export default function StartupHeroSection() {
  return (
    <section className="hero-purple-section" style={{ textAlign: "left", paddingBottom: "5rem" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(3,105,161,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="brelyx-container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center" }}
          className="lt-split-heading">

          {/* ── Copy ─────────────────────────────────────────── */}
          <div>
            <div className="hero-p-badge" style={{ margin: "0 0 2rem" }}>● App Development for Startups</div>
            <h1 className="hero-p-h1" style={{ margin: "0 0 1.5rem", maxWidth: "none", fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}>
              App Development for Startups:<br />From Idea to MVP to Scale
            </h1>
            <p className="hero-p-sub" style={{ margin: "0 0 2.25rem", maxWidth: "560px" }}>
              Mobile app development for startups that need to launch fast, spend wisely and grow without
              rebuilding. We turn your idea into a market-ready app, then help you scale it.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
              <QuickInquiryButton
                className="hero-p-btn"
                source="App Development for Startups"
                defaultMessage="I'm a startup founder interested in building an app. "
              >
                Book a Free Strategy Call →
              </QuickInquiryButton>
              <Link href="/portfolio" className="hero-p-ghost">See How We Work</Link>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
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

          {/* ── Visual ───────────────────────────────────────── */}
          <div style={{ position: "relative" }}>
            <div className="hero-mockup-glow" style={{ opacity: 0.7 }} />
            <Image
              src="/images/startup-app-images/01-hero-idea-to-mvp-to-scale-transparent.webp"
              alt="App development for startups by DEVTYX: turning an idea into an MVP, then scaling it into a market-ready mobile app"
              width={1600}
              height={900}
              className="object-contain"
              style={{ width: "100%", height: "auto", position: "relative" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
