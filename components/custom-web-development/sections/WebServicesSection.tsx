import Link from "next/link";
import { webServices } from "../data/custom-web-development-data";

export default function WebServicesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Services</div>
          </div>
          <h2 className="lt-h2">Our Custom Web Development Services</h2>
          <p className="lt-lead">
            From marketing sites and portals to SaaS platforms, marketplaces and AI-powered
            automation — one senior-led team.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {webServices.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="lt-why-card"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.6rem" }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "0.85rem" }}>
                {svc.desc}
              </p>
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#6C4CFF" }}>Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
