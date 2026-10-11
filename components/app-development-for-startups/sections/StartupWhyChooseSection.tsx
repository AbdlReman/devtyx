import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { whyChoose } from "../data/app-development-for-startups-data";

export default function StartupWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why DEVTYX</div>
          </div>
          <h2 className="lt-h2">Why Startups Choose DEVTYX as Their App Development Partner</h2>
          <p className="lt-lead">
            The best app developers for startups act like part of your founding team. That is how we work.
          </p>
        </div>

        <ul style={{
          display: "grid",
          gap: "1rem 2rem",
          gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          maxWidth: "900px",
          margin: "0 auto 2.5rem",
        }} className="lt-why-grid">
          {whyChoose.map((item) => (
            <li key={item} style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#374151", lineHeight: 1.6 }}>
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <QuickInquiryButton
            className="lt-btn"
            source="App Development for Startups"
            defaultMessage="I'm a startup founder interested in building an app. "
          >
            Book a Free Strategy Call →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
