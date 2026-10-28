import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { googleReviewsUrl } from "@/components/about/data/about-data";

export default function SalonHeroSection() {
  return (
    <section className="hero-purple-section" style={{ textAlign: "center", paddingBottom: "5rem" }}>
      <div className="pointer-events-none" aria-hidden="true">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-grid-bg" />
        <div className="hero-bottom-fade" />
      </div>

      <div className="brelyx-container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="hero-p-badge" style={{ margin: "0 auto 2rem" }}>
            <span className="hero-p-badge-dot" />
            Salon App Development Company
          </div>

          <h1 className="hero-p-h1" style={{ margin: "0 0 1.5rem", maxWidth: "none" }}>
            Salon App Development Company That{" "}
            <span className="hero-p-h1-gradient">Fills Chairs and Reduces No-Shows</span>
          </h1>

          <p className="hero-p-sub" style={{ margin: "0 auto 1.25rem", maxWidth: "600px" }}>
            Clients book hair, spa, and beauty services at 11 p.m. from their phones. Salons that still rely
            on phone calls and paper books lose those bookings to competitors with smooth apps.
          </p>

          <p className="hero-p-sub" style={{ margin: "0 auto 2.25rem", maxWidth: "600px" }}>
            Devtyx is a salon app development company that builds custom booking and management platforms for
            single-location salons, multi-branch chains, and beauty marketplaces. We combine real-time
            scheduling, secure payments, staff tools, and AI-powered recommendations so your chairs stay full
            and your team spends less time on admin.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2.25rem",
              justifyContent: "center",
            }}
          >
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
      </div>
    </section>
  );
}
