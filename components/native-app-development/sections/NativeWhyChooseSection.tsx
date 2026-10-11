import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { whyChoose } from "../data/native-app-development-data";

export default function NativeWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why Are We Perfect for Your Project?</div>
          </div>
          <h2 className="lt-h2">A dependable native app development company.</h2>
          <p className="lt-lead">
            Whether you are a funded startup or an established US enterprise, you need a partner who
            delivers without hand-holding. Many US companies outsource react native app development
            services and native builds to us because of this.
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
            source="Native App Development"
            defaultMessage="I'm interested in building a native mobile app. "
          >
            Talk to a Native App Expert →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
