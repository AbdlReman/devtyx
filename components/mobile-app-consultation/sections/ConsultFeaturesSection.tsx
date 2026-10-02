import { featureHighlights } from "../data/mobile-app-consultation-data";

export default function ConsultFeaturesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Features</div>
          </div>
          <h2 className="lt-h2">Top Features to Consider for Your App</h2>
          <p className="lt-lead">
            The right features drive engagement and retention more than visuals alone. We help you
            choose the ones that matter for your users.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1rem 2rem", gridTemplateColumns: "repeat(2, minmax(0,1fr))", maxWidth: "860px", margin: "0 auto" }}
          className="lt-why-grid">
          {featureHighlights.map((item) => (
            <div key={item.title} style={{ display: "flex", gap: "0.75rem" }}>
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>•</span>
              <p style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.6 }}>
                <strong style={{ color: "#111827" }}>{item.title}:</strong> {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
