import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { whyChoose } from "../data/mobile-app-consultation-data";

export default function ConsultWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why DEVTYX</div>
          </div>
          <h2 className="lt-h2">Why Businesses Choose DEVTYX for App Consulting</h2>
          <p className="lt-lead">
            Good consulting saves you from building the wrong thing. Here&apos;s what you get when you
            work with us.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {whyChoose.map((item) => (
            <div key={item.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <QuickInquiryButton
            className="lt-btn"
            source="Mobile App Consultation"
            defaultMessage="I'd like to choose the right partner for my app. "
          >
            Choose the Right Partner →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
