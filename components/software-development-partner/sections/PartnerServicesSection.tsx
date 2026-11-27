import Link from "next/link";
import { partnerServices } from "../data/software-development-partner-data";

export default function PartnerServicesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Services</div>
          </div>
          <h2 className="lt-h2">Our Software Development Partner Services</h2>
          <p className="lt-lead">
            End-to-end capabilities under one roof — from discovery and design to delivery, cloud
            and ongoing support.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {partnerServices.map((svc) => (
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
