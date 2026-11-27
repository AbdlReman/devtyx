import { securityFeatures } from "../data/enterprise-app-development-data";

export default function EnterpriseSecuritySection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Security</div>
          </div>
          <h2 className="lt-h2">Security and Compliance Built In</h2>
          <p className="lt-lead">
            Security is part of the architecture from sprint one — not a final checklist. We design
            for SSO, RBAC and auditability from day one.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
          }}
          className="lt-why-grid"
        >
          {securityFeatures.map((item) => (
            <div key={item.title} className="lt-why-card">
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.84rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
