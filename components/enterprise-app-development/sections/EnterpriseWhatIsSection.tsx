import { enterpriseMusts } from "../data/enterprise-app-development-data";

export default function EnterpriseWhatIsSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Definition</div>
          </div>
          <h2 className="lt-h2" style={{ marginBottom: "1rem" }}>
            What Are Enterprise App Development Services?
          </h2>
          <p className="lt-lead">
            Enterprise app development is the design, engineering and long-term support of software that
            runs core business operations across departments, locations and user roles. Unlike a consumer
            app, an enterprise application has to:
          </p>
        </div>

        {/* Full-width image — always visible */}
        <div
          style={{
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid #E5E7EB",
            boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
            marginBottom: "2.75rem",
            background: "#0B1220",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/enterprise-app/modern-abstract-visualization-2.jpg"
            alt="Enterprise systems integration connecting ERP, CRM and custom apps via secure APIs"
            width={1792}
            height={1008}
            loading="eager"
            style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(2, minmax(0,1fr))",
            maxWidth: "960px",
            margin: "0 auto",
          }}
          className="lt-why-grid"
        >
          {enterpriseMusts.map((item) => (
            <div key={item.title} className="lt-why-card">
              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ color: "#6C4CFF", fontWeight: 700 }}>✓</span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", margin: 0 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="lt-lead" style={{ textAlign: "center", marginTop: "2.5rem", maxWidth: "720px", marginLeft: "auto", marginRight: "auto" }}>
          Good enterprise application development services cover the whole lifecycle: strategy,
          architecture, UX, development, integration, QA, deployment, and ongoing maintenance. That is
          exactly how DEVTYX delivers.
        </p>
      </div>
    </section>
  );
}
