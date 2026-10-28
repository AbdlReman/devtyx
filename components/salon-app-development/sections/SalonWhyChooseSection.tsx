import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { whyChooseReasons } from "../data/salon-app-development-data";

export default function SalonWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why Salons Choose Devtyx</div>
          </div>
          <h2 className="lt-h2">Why salons choose Devtyx for custom app development</h2>
          <p className="lt-lead" style={{ margin: "1rem auto 0" }}>
            Most generic agencies list the same features. As a salon app development company, we focus on
            what actually moves revenue for beauty businesses.
          </p>
        </div>

        <div
          style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(1, minmax(0,1fr))", maxWidth: "860px", margin: "0 auto" }}
        >
          {whyChooseReasons.map((item, i) => (
            <div
              key={item.title}
              className="lt-why-card"
              style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "auto 1fr", alignItems: "start" }}
            >
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "999px",
                  background: "#6C4CFF",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.4rem" }}>
                  {item.title}
                </div>
                <p style={{ fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
          <QuickInquiryButton
            className="lt-btn"
            source="Salon App Development"
            defaultMessage="I'd like to talk to a senior engineer about my salon app. "
          >
            Talk to a Senior Engineer About Your Salon App →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
