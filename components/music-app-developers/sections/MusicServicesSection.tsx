import { ourServices } from "../data/music-app-developers-data";

export default function MusicServicesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Our Services</div>
          </div>
          <h2 className="lt-h2">End-to-end, from idea to app store.</h2>
        </div>

        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}
          className="lt-why-grid">
          {ourServices.map((svc) => (
            <div key={svc.title} style={{ display: "flex", gap: "1rem", padding: "1.25rem", border: "1px solid #E5E7EB", borderRadius: "1rem" }}>
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>→</span>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827", marginBottom: "0.35rem" }}>
                  {svc.title}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.6 }}>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
