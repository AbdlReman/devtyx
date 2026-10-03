import Image from "next/image";
import { musicAppTypes } from "../data/music-app-developers-data";

export default function MusicTypesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}
          className="lt-split-heading">
          <div>
            <div className="lt-kicker">What We Build</div>
            <h2 className="lt-h2">Every kind of music app, covered.</h2>
            <p className="lt-lead" style={{ margin: 0 }}>
              Music apps are not one category. Streaming, live events, creator tools and podcast
              platforms all serve different users, monetization models and technical requirements.
              Whatever you&apos;re imagining, we&apos;ve likely built something close to it.
            </p>
          </div>
          <Image
            src="/images/music-landing-images/02-music-app-types-transparent.webp"
            alt="Music streaming, podcast, radio, karaoke, learning and sleep app types DEVTYX builds"
            width={1400}
            height={1000}
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {musicAppTypes.map((item) => (
            <div key={item.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
