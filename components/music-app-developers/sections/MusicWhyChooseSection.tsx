import { whyChoose } from "../data/music-app-developers-data";

export default function MusicWhyChooseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why DEVTYX</div>
          </div>
          <h2 className="lt-h2">A partner, not just a dev shop.</h2>
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
