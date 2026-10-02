import { featureCategories } from "../data/music-app-developers-data";

export default function MusicFeaturesSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Features We Develop</div>
          </div>
          <h2 className="lt-h2">Built for listeners. Built for scale.</h2>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {featureCategories.map((cat) => (
            <div key={cat.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.875rem" }}>
                {cat.title}
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {cat.items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.6rem", fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.6 }}>
                    <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
