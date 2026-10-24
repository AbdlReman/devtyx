import { capabilityHighlights } from "../data/grocery-app-development-data";

export default function GroceryCapabilitiesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ maxWidth: "640px", marginBottom: "3rem" }}>
          <div className="lt-kicker">Capabilities</div>
          <h2 className="lt-h2">Advanced grocery app capabilities we offer.</h2>
          <p className="lt-lead" style={{ marginBottom: 0 }}>
            Grocery platforms need more than a pretty catalog. These are the operational capabilities
            our team implements across production delivery and retail apps.
          </p>
        </div>

        <div style={{ position: "relative", paddingLeft: "2.5rem", maxWidth: "760px" }}>
          <div style={{ position: "absolute", left: "0.9rem", top: "0.5rem", bottom: "0.5rem", width: "2px", background: "#E5E7EB" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {capabilityHighlights.map((item) => (
              <div key={item.step} style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", left: "-2.5rem", top: 0,
                  width: "1.9rem", height: "1.9rem",
                  borderRadius: "999px",
                  background: "#6C4CFF",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {item.step}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.4rem" }}>
                  {item.title}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
