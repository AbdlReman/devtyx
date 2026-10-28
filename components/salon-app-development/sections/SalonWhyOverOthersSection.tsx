import { whyOverOthers } from "../data/salon-app-development-data";

export default function SalonWhyOverOthersSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why Devtyx</div>
          </div>
          <h2 className="lt-h2">Why Devtyx over other salon app development companies</h2>
          <p className="lt-lead" style={{ margin: "1rem auto 0" }}>
            Choosing the right salon app development company matters as much as the feature list. Here is
            what sets our senior-led delivery apart.
          </p>
        </div>

        <ul
          style={{
            display: "grid",
            gap: "1rem 2rem",
            gridTemplateColumns: "repeat(1, minmax(0,1fr))",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          {whyOverOthers.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                gap: "0.75rem",
                fontSize: "0.95rem",
                color: "#374151",
                lineHeight: 1.65,
                padding: "1rem 1.25rem",
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "1rem",
              }}
            >
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
