import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { costGuidance } from "../data/enterprise-app-development-data";

export default function EnterpriseCostSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Pricing Guidance</div>
          </div>
          <h2 className="lt-h2">How Much Do Enterprise App Development Services Cost?</h2>
          <p className="lt-lead">
            Cost depends on scope, number of user roles, integrations, platforms (web, iOS, Android),
            security and compliance requirements, and data migration. As a general market guide:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            marginBottom: "2.5rem",
          }}
          className="lt-why-grid"
        >
          {costGuidance.map((item) => (
            <div key={item.title} className="lt-why-card" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
          <p className="lt-lead" style={{ marginBottom: "1.5rem" }}>
            Because every organization is different, we give you a detailed estimate after a free
            discovery call — with scope, timeline and price in one document.
          </p>
          <QuickInquiryButton
            className="lt-btn"
            source="Enterprise App Development"
            defaultMessage="I'd like a free estimate for an enterprise app. "
          >
            Get a Free Estimate for Your Enterprise App →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
