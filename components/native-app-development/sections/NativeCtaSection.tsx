import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function NativeCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">Looking for a Reliable App Development Partner?</h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2rem" }}>
          Tell us about your app idea. We&apos;ll reply within 24 hours and set up a free, no-obligation
          discovery call to map out scope, timeline and budget.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <QuickInquiryButton
            className="dark-cta-btn"
            source="Native App Development"
            defaultMessage="I'm interested in building a native mobile app. "
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
