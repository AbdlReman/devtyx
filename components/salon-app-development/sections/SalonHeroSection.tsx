import Image from "next/image";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { googleReviewsUrl } from "@/components/about/data/about-data";

export default function SalonHeroSection() {
  return (
    <section className="hero-purple-section" style={{ textAlign: "left", paddingBottom: "5rem" }}>
      <div className="pointer-events-none" aria-hidden="true">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-grid-bg" />
        <div className="hero-bottom-fade" />
      </div>

      <div className="brelyx-container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center" }}
          className="lt-split-heading"
        >
          <div>
            <div className="hero-p-badge" style={{ margin: "0 0 2rem" }}>
              <span className="hero-p-badge-dot" />
              Salon App Development Company
            </div>

            <h1 className="hero-p-h1" style={{ margin: "0 0 1.5rem", maxWidth: "none" }}>
              Salon App Development Company That{" "}
              <span className="hero-p-h1-gradient">Fills Chairs and Reduces No-Shows</span>
            </h1>

            <p className="hero-p-sub" style={{ margin: "0 0 1.25rem", maxWidth: "540px" }}>
              Clients book hair, spa, and beauty services at 11 p.m. from their phones. Salons that still
              rely on phone calls and paper books lose those bookings to competitors with smooth apps.
            </p>

            <p className="hero-p-sub" style={{ margin: "0 0 2.25rem", maxWidth: "540px" }}>
              Devtyx is a salon app development company that builds custom booking and management platforms
              for single-location salons, multi-branch chains, and beauty marketplaces. We combine real-time
              scheduling, secure payments, staff tools, and AI-powered recommendations so your chairs stay
              full and your team spends less time on admin.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
              <QuickInquiryButton
                className="hero-p-btn"
                source="Salon App Development"
                defaultMessage="I'd like to schedule a free 30-minute strategy call about a salon booking app. "
              >
                Schedule a Free 30-Minute Strategy Call →
              </QuickInquiryButton>
              <QuickInquiryButton
                className="hero-p-ghost"
                source="Salon App Development"
                defaultMessage="I'd like a custom quote for a salon app. "
              >
                Get a Custom Quote
              </QuickInquiryButton>
            </div>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", marginBottom: "1.5rem" }}>
              70+ digital products · 23+ countries · 98% client satisfaction · Senior-led teams
            </p>

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

          <div style={{ position: "relative" }}>
            <div className="hero-mockup-glow" style={{ opacity: 0.7 }} />

            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: "1.75rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 40px 100px rgba(3,10,30,0.55)",
              }}
            >
              <Image
                src="/images/salon-app/Multi-device-verview.jpg"
                alt="Custom salon booking app across client, stylist, and admin devices by Devtyx"
                fill
                className="object-cover object-center"
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(185deg, rgba(3,10,30,0) 40%, rgba(3,10,30,0.55) 100%)",
                }}
              />
            </div>

            <div
              className="music-hero-float-badge"
              style={{ top: "8%", left: "-8%", animation: "hero-chip-float 4s ease-in-out infinite" }}
            >
              <span style={{ fontSize: "1.2rem" }}>📅</span>
              <div>
                <div style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 700 }}>Live Booking</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem" }}>Real-time slots</div>
              </div>
            </div>

            <div
              className="music-hero-float-badge"
              style={{ bottom: "10%", right: "-6%", animation: "hero-chip-float 4.5s ease-in-out infinite 0.8s" }}
            >
              <span style={{ fontSize: "1.2rem" }}>💳</span>
              <div>
                <div style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 700 }}>Deposits & Tips</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem" }}>Fewer no-shows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
