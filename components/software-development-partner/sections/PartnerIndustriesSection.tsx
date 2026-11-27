import { industries } from "../data/software-development-partner-data";

export default function PartnerIndustriesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Industries</div>
          </div>
          <h2 className="lt-h2">Industries We Partner With</h2>
          <p className="lt-lead">
            From PropTech and FinTech to grocery, salon and music products — we adapt to your
            domain, data and compliance needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          }}
        >
          {industries.map((item) => (
            <div key={item.title} className="lt-why-card">
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
