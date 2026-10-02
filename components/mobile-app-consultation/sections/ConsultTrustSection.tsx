import { trustStats } from "../data/mobile-app-consultation-data";

export default function ConsultTrustSection() {
  return (
    <section className="lt-section" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="brelyx-container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", letterSpacing: "0.01em" }}>
            Trusted by Startups and Businesses in 23+ Countries
          </h2>
        </div>
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(4, minmax(0,1fr))", maxWidth: "720px", margin: "0 auto" }}
          className="lt-why-grid">
          {trustStats.map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#6C4CFF" }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "#6B7280", fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
