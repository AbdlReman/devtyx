import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { whyChoose } from "../data/enterprise-app-development-data";

export default function EnterpriseWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why DEVTYX</div>
          </div>
          <h2 className="lt-h2">Why Choose DEVTYX as Your Enterprise App Development Company</h2>
          <p className="lt-lead">
            A partner built for enterprise application development — senior-led, security-first, and
            accountable from strategy through support.
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
          {whyChoose.map((item) => (
            <div key={item.title} className="lt-why-card">
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.84rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <QuickInquiryButton
            className="lt-btn"
            source="Enterprise App Development"
            defaultMessage="I'd like to discuss an enterprise application project. "
          >
            Talk to an Enterprise Expert →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
