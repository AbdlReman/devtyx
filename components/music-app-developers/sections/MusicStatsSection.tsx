import { statHighlights } from "../data/music-app-developers-data";

export default function MusicStatsSection() {
  return (
    <section className="lt-section" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}
          className="lt-why-grid">
          {statHighlights.map((item) => (
            <div key={item.label} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              </div>
              <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "#6C4CFF", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {item.num}
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827", margin: "0.35rem 0 0.5rem" }}>
                {item.label}
              </div>
              <p style={{ fontSize: "0.78rem", color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
