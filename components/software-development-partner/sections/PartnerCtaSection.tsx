import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_E164 } from "@/lib/seo";

export default function PartnerCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">Ready to Find Your Long-Term Software Development Partner?</h2>
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            maxWidth: "540px",
            margin: "0 auto 2rem",
          }}
        >
          Tell us about your product, your goals and your timeline. We will reply within 24 hours to
          arrange a call and give you an honest view of the best way to build it — even if that means
          a smaller first step.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <QuickInquiryButton
            className="dark-cta-btn"
            source="Software Development Partner"
            defaultMessage="I'd like to book a free consultation about becoming our software development partner. "
          >
            Book a Free Consultation →
          </QuickInquiryButton>
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
          <a href={`mailto:${BUSINESS_EMAIL}`} style={{ color: "inherit" }}>
            {BUSINESS_EMAIL}
          </a>
          {" · "}
          <a href={`tel:${BUSINESS_PHONE_E164}`} style={{ color: "inherit" }}>
            {BUSINESS_PHONE}
          </a>
          {" · WhatsApp available"}
        </p>
      </div>
    </div>
  );
}
