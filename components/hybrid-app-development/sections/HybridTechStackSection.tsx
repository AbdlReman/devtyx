import Image from "next/image";
import { techStack } from "../data/hybrid-app-development-data";

export default function HybridTechStackSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Tech Stack</div>
          </div>
          <h2 className="lt-h2">The tools behind every build.</h2>
        </div>

        <Image
          src="/images/hybrid-app-images/05-tech-stack-transparent.webp"
          alt="Hybrid app tech stack: Flutter, React Native, Ionic, Expo, Swift, Kotlin, AWS, Firebase, Stripe and more"
          width={1600}
          height={1000}
          className="object-contain"
          style={{ width: "100%", maxWidth: "980px", height: "auto", display: "block", margin: "0 auto 3rem" }}
        />

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
