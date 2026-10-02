import { whyChoose } from "../data/hybrid-app-development-data";

export default function HybridWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why DEVTYX</div>
          </div>
          <h2 className="lt-h2">A dependable hybrid app development company.</h2>
          <p className="lt-lead">
            Among hybrid mobile app development companies, we're known for shipping reliably — whether
            you're searching for a hybrid app development company in the USA, a hybrid application
            development company closer to home, or a remote hybrid mobile app development service.
          </p>
        </div>

        <ul style={{
          display: "grid",
          gap: "1rem 2rem",
          gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          maxWidth: "860px",
          margin: "0 auto",
        }} className="lt-why-grid">
          {whyChoose.map((item) => (
            <li key={item} style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#374151", lineHeight: 1.6 }}>
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
