import { whatToLookFor } from "../data/app-development-for-startups-data";

export default function StartupLookForSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">What to Look For</div>
          </div>
          <h2 className="lt-h2">What to Look for When Browsing Mobile App Development Services as a Startup</h2>
          <p className="lt-lead">
            Startups have different needs than large enterprises. You need speed, flexibility and a partner
            who understands that every dollar of runway counts.
          </p>
        </div>

        <ul style={{
          display: "grid",
          gap: "1rem 2rem",
          gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          maxWidth: "960px",
          margin: "0 auto",
        }} className="lt-why-grid">
          {whatToLookFor.map((item) => (
            <li key={item} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
