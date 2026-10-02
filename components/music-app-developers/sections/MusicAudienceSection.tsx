import { audience } from "../data/music-app-developers-data";

export default function MusicAudienceSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Who We Build For</div>
          </div>
          <h2 className="lt-h2">Teams shipping sound.</h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", maxWidth: "900px", margin: "0 auto" }}>
          {audience.map((item) => (
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
