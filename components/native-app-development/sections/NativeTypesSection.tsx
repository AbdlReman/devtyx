import { domainsServed, nativeAppTypes } from "../data/native-app-development-data";

export default function NativeTypesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">What We Build</div>
          </div>
          <h2 className="lt-h2">Every kind of native app, covered.</h2>
          <p className="lt-lead">
            From consumer apps to enterprise tools, here are the types of native apps we design, build and
            launch for our clients.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))", marginBottom: "3.5rem" }}
          className="lt-why-grid">
          {nativeAppTypes.map((item) => (
            <div key={item.title} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.1rem 1.25rem", border: "1px solid #E5E7EB", borderRadius: "1rem" }}>
              <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111827" }}>{item.title}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
          <div className="lt-kicker" style={{ margin: "0 auto 0.5rem" }}>Domains We Serve</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", maxWidth: "900px", margin: "0 auto" }}>
          {domainsServed.map((item) => (
            <span key={item} style={{
              padding: "0.6rem 1.25rem",
              borderRadius: "999px",
              border: "1px solid #E5E7EB",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#374151",
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
