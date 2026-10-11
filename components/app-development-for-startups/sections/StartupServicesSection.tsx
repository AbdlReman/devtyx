import Image from "next/image";
import { startupServices } from "../data/app-development-for-startups-data";

export default function StartupServicesSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Our Services</div>
          </div>
          <h2 className="lt-h2">The 4 Top Custom Mobile App Development Services for Startups</h2>
          <p className="lt-lead">
            Successful app development for startups covers the whole journey, not just the coding. Here are
            the four services you will need, and what each one includes.
          </p>
        </div>

        <Image
          src="/images/startup-app-images/03-four-startup-app-services-transparent.webp"
          alt="The four startup app development services from DEVTYX: pre-development, app development, app release and app maintenance"
          width={1400}
          height={1000}
          className="object-contain"
          style={{ width: "100%", maxWidth: "760px", height: "auto", display: "block", margin: "0 auto 3rem" }}
        />

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}
          className="lt-why-grid">
          {startupServices.map((svc) => (
            <div key={svc.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{svc.icon}</span>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {svc.title}
              </div>
              <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.6, marginBottom: "0.875rem" }}>{svc.desc}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {svc.items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.6rem", fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.6 }}>
                    <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
