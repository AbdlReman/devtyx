import { processSteps } from "../data/software-development-partner-data";

export default function PartnerProcessSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Process</div>
          </div>
          <h2 className="lt-h2">Our Partnership Process</h2>
          <p className="lt-lead">
            Most projects kick off within two weeks of our first conversation — with working software
            you can review every sprint.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {processSteps.map((step) => (
            <div key={step.step} className="lt-why-card">
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: "#6C4CFF",
                  marginBottom: "0.65rem",
                }}
              >
                {step.step}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
