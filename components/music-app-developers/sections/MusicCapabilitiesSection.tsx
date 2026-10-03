import { capabilityHighlights } from "../data/music-app-developers-data";

export default function MusicCapabilitiesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr 1.1fr", alignItems: "center" }}
          className="lt-split-heading">
          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "1.5rem", overflow: "hidden", background: "#F0FBFF", border: "1px solid #E5E7EB" }}>
            <div className="pointer-events-none absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 30% 30%, rgba(108,76,255,0.12) 0%, transparent 45%), radial-gradient(circle at 75% 70%, rgba(63,224,208,0.18) 0%, transparent 40%)",
            }} />
            <div style={{
              position: "absolute", inset: "1.5rem",
              borderRadius: "1.1rem",
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: "0.6rem",
            }}>
              <span style={{ fontSize: "2.75rem" }}>🎚️</span>
              <span style={{ color: "#111827", fontWeight: 700, fontSize: "0.9rem" }}>Built for advanced capabilities</span>
            </div>
          </div>

          <div>
            <div className="lt-kicker">Capabilities</div>
            <h2 className="lt-h2">Advanced music app development capabilities we offer.</h2>
            <p className="lt-lead" style={{ marginBottom: "2rem" }}>
              Music app development requires a specific toolkit. These are audio-specific capabilities
              our team implements across production music platforms.
            </p>

            <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
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
        </div>
      </div>
    </section>
  );
}
