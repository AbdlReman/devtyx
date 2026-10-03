import Image from "next/image";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function ConsultHeroSection() {
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
            <div className="hero-p-badge" style={{ margin: "0 0 2rem" }}>● Mobile App Consulting</div>
            <h1 className="hero-p-h1" style={{ margin: "0 0 1.5rem", maxWidth: "none" }}>
              Mobile App Consulting Services
            </h1>
            <p className="hero-p-sub" style={{ margin: "0 0 2.25rem", maxWidth: "560px" }}>
              Have an app idea but not sure where to start? DEVTYX mobile app development consulting gives
              you a clear strategy, the right technology and a realistic budget before you write a single
              line of code, so your app launches faster and costs less.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <QuickInquiryButton
                className="hero-p-btn"
                source="Mobile App Consultation"
                defaultMessage="I'd like to talk to your consultants about my app idea. "
              >
                Talk to Our Consultants →
              </QuickInquiryButton>
            </div>
          </div>

          {/* ── Visual ───────────────────────────────────────── */}
          <div style={{ position: "relative" }}>
            <div className="hero-mockup-glow" style={{ opacity: 0.7 }} />
            <Image
              src="/images/app-consultation-images/01-hero-mobile-app-consulting-transparent.webp"
              alt="DEVTYX mobile app consulting: a free 30-minute consultation call and a live app strategy board"
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
