import Image from "next/image";
import { enterpriseMusts } from "../data/enterprise-app-development-data";

export default function EnterpriseWhatIsSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div
          style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}
          className="lt-split-heading"
        >
          <div>
            <div className="lt-kicker">Definition</div>
            <h2 className="lt-h2" style={{ marginBottom: "1.25rem" }}>
              What Are Enterprise App Development Services?
            </h2>
            <p className="lt-lead" style={{ marginBottom: "1.25rem" }}>
              Enterprise app development is the design, engineering and long-term support of software that
              runs core business operations across departments, locations and user roles. Unlike a consumer
              app, an enterprise application has to:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {enterpriseMusts.map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "0.85rem" }}>
                  <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0, marginTop: "0.15rem" }}>✓</span>
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.25rem" }}>
                      {item.title}
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="lt-lead" style={{ marginTop: "1.5rem" }}>
              Good enterprise application development services cover the whole lifecycle: strategy,
              architecture, UX, development, integration, QA, deployment, and ongoing maintenance. That is
              exactly how DEVTYX delivers.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              aspectRatio: "4/3",
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
              boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
            }}
          >
            <Image
              src="/images/enterprise-app/modern-abstract-visualization-2.jpg"
              alt="Enterprise systems integration connecting ERP, CRM and custom apps via secure APIs"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
