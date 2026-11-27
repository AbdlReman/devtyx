import { whyChoose } from "../data/software-development-partner-data";

export default function PartnerWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why DEVTYX</div>
          </div>
          <h2 className="lt-h2">Why Businesses Choose DEVTYX as Their Software Development Partner</h2>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {whyChoose.map((item) => (
            <div key={item.title} className="lt-why-card">
              <div style={{ display: "flex", gap: "0.65rem", marginBottom: "0.5rem" }}>
                <span style={{ color: "#6C4CFF", fontWeight: 700 }}>✓</span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", margin: 0 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
