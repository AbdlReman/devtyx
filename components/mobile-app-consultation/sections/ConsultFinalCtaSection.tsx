import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function ConsultFinalCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">Ready to Plan Your App the Right Way?</h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2rem" }}>
          Share your idea or your existing app with us. Our consultants will reply within 24 hours and
          set up a free strategy call.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <QuickInquiryButton
            className="dark-cta-btn"
            source="Mobile App Consultation"
            defaultMessage="I'd like to talk to your consultants about my app idea. "
          >
            Talk to Our Consultants →
          </QuickInquiryButton>
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
          <a href="mailto:support@devtyx.com" style={{ color: "inherit" }}>support@devtyx.com</a>
          {" · "}
          <a href="tel:+923020058237" style={{ color: "inherit" }}>+92 302 0058237</a>
          {" · "}
          <a href="https://wa.me/923417547700" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            WhatsApp +92 341 7547700
          </a>
        </p>
      </div>
    </div>
  );
}
