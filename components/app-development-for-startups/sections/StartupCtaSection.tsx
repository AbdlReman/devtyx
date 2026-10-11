import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function StartupCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">Ready to Build Your Startup&apos;s App?</h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2rem" }}>
          Tell us about your idea. In a free, no-obligation strategy call, we will help you define your MVP,
          choose the right technology, and give you a clear timeline and estimate. We reply to every inquiry
          within 24 hours.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <QuickInquiryButton
            className="dark-cta-btn"
            source="App Development for Startups"
            defaultMessage="I'm a startup founder interested in building an app. "
          >
            Get Your Free MVP Plan →
          </QuickInquiryButton>
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
          <a href="mailto:support@devtyx.com" style={{ color: "inherit" }}>support@devtyx.com</a>
          {" · "}
          <a href="tel:+923020058237" style={{ color: "inherit" }}>+92-302-005-8237</a>
          {" · WhatsApp available"}
        </p>
      </div>
    </div>
  );
}
