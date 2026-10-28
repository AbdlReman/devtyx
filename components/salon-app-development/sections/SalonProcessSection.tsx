import { processSteps } from "../data/salon-app-development-data";

export default function SalonProcessSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">How We Work</div>
          </div>
          <h2 className="lt-h2">Our streamlined salon app development process</h2>
          <p className="lt-lead" style={{ maxWidth: "520px", margin: "1rem auto 0" }}>
            Most projects kick off within two weeks of the first call. You get regular demos and senior
            oversight throughout — the same delivery discipline that makes us a trusted salon app
            development company for beauty brands.
          </p>
        </div>

        <div
          style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(5, minmax(0,1fr))" }}
          className="lt-process-grid"
        >
          {processSteps.map((s) => (
            <div key={s.step} className="lt-process-card">
              <div className="lt-process-icon">
                <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
              </div>
              <div className="lt-process-num">{s.step}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
