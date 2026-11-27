import { industries } from "../data/enterprise-app-development-data";

export default function EnterpriseIndustriesSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Industries</div>
          </div>
          <h2 className="lt-h2">Industries We Serve</h2>
          <p className="lt-lead">
            Every industry has its own regulations, data and workflows. Our enterprise application
            development services adapt to each.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
          }}
          className="lt-why-grid"
        >
          {industries.map((item) => (
            <div key={item.title} className="lt-why-card">
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
