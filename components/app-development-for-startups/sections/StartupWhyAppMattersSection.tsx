import { whyAppMatters } from "../data/app-development-for-startups-data";

export default function StartupWhyAppMattersSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why It Matters</div>
          </div>
          <h2 className="lt-h2">Why the Right Mobile App Matters in Today&apos;s Digital Environment</h2>
          <p className="lt-lead">
            For a startup, your app is often your product, your storefront and your first impression, all at
            once. Users decide in seconds whether to stay or delete. Investors look at traction, ratings and
            retention before they look at your pitch deck.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(4, minmax(0,1fr))", marginBottom: "3rem" }}
          className="lt-why-grid">
          {whyAppMatters.map((item) => (
            <div key={item.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="lt-lead" style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          The wrong app does the opposite. It drains your runway, frustrates early adopters and forces an
          expensive rebuild just when you need to move fastest. Smart startup app development is about
          building the right thing first, then building it bigger.
        </p>
      </div>
    </section>
  );
}
