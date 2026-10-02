import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function HybridCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">Ready to Build Your Hybrid App?</h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2rem" }}>
          Tell us your idea. We&apos;ll help you shape it into a cross-platform product built to scale from day one.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <QuickInquiryButton
            className="dark-cta-btn"
            source="Hybrid App Development"
            defaultMessage="I'm interested in building a hybrid app. "
          >
            Book Your Free Discovery Call →
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
