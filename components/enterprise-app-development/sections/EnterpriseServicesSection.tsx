import Link from "next/link";
import { enterpriseServices } from "../data/enterprise-app-development-data";

export default function EnterpriseServicesSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">What We Deliver</div>
          </div>
          <h2 className="lt-h2">Our Enterprise Application Development Services</h2>
          <p className="lt-lead">
            Custom enterprise software development across web, mobile, cloud, AI, integration and
            modernization — owned end to end by one senior-led team.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          }}
          className="lt-why-grid"
        >
          {enterpriseServices.map((svc, i) => (
            <div key={svc.title} className="lt-why-card">
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#6C4CFF",
                  marginBottom: "0.65rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.6rem" }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.75 }}>{svc.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.75rem" }}>
          <p className="lt-lead" style={{ marginBottom: "1.25rem", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
            Not sure which service fits? Tell us your challenge and we will map it to the right solution.
          </p>
          <Link href="/contact" className="lt-btn">
            Talk to an Enterprise Architect →
          </Link>
        </div>
      </div>
    </section>
  );
}
