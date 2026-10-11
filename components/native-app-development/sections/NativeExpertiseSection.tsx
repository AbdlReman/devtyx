import { expertiseAreas } from "../data/native-app-development-data";

export default function NativeExpertiseSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Our Expertise</div>
          </div>
          <h2 className="lt-h2">Our Native App Development Expertise</h2>
          <p className="lt-lead">
            From iOS and Android to react native mobile app development services, our team covers every
            layer of a native build — design, engineering, AI and the cloud behind it.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}
          className="lt-why-grid">
          {expertiseAreas.map((item) => (
            <div key={item.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
