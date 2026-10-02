import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function ConsultMidCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">Don&apos;t Leave Your App&apos;s Success to Chance</h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2rem" }}>
          Avoid wasted budget and months of rework. Get expert guidance from DEVTYX before you build.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <QuickInquiryButton
            className="dark-cta-btn"
            source="Mobile App Consultation"
            defaultMessage="I'd like to book a strategy call for my app. "
          >
            Book Your Strategy Call →
          </QuickInquiryButton>
        </div>
      </div>
    </div>
  );
}
