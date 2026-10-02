import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function ConsultHeroSection() {
  return (
    <section className="hero-purple-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(3,105,161,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="brelyx-container" style={{ position: "relative" }}>
        <div className="hero-p-badge">● Mobile App Consulting</div>
        <h1 className="hero-p-h1">
          Mobile App Consulting Services
        </h1>
        <p className="hero-p-sub">
          Have an app idea but not sure where to start? DEVTYX mobile app development consulting gives
          you a clear strategy, the right technology and a realistic budget before you write a single
          line of code, so your app launches faster and costs less.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <QuickInquiryButton
            className="hero-p-btn"
            source="Mobile App Consultation"
            defaultMessage="I'd like to talk to your consultants about my app idea. "
          >
            Talk to Our Consultants →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
