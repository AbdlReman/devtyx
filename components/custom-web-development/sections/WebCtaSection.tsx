import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_E164 } from "@/lib/seo";

export default function WebCtaSection() {
  return (
    <div className="dark-cta-band">
      <div className="brelyx-container">
        <h2 className="dark-cta-h2">Ready to Build Your Custom Website or Web Application?</h2>
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            maxWidth: "540px",
            margin: "0 auto 2rem",
          }}
        >
          Tell us about your project, your users and your timeline. We will reply within 24 hours
          with an honest recommendation — even if that means starting smaller.
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
            source="Custom Web Development Services"
            defaultMessage="I'd like a free project quote for custom web development. "
          >
            Get a Free Project Quote →
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
