import { techStack } from "../data/native-app-development-data";

export default function NativeTechStackSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Tech Stack</div>
          </div>
          <h2 className="lt-h2">The tools behind every native build.</h2>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(2, minmax(0,1fr))", maxWidth: "900px", margin: "0 auto" }}
          className="lt-why-grid">
          {techStack.map((group) => (
            <div key={group.label} className="lt-why-card">
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827", marginBottom: "0.75rem" }}>
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {group.items.map((item) => (
                  <span key={item} className="lt-tech-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
