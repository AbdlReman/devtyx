import Image from "next/image";
import { hybridAppTypes } from "../data/hybrid-app-development-data";

export default function HybridTypesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}
          className="lt-split-heading">
          <div>
            <div className="lt-kicker">What We Build</div>
            <h2 className="lt-h2">Every kind of hybrid app, covered.</h2>
            <p className="lt-lead" style={{ margin: 0 }}>
              From enterprise tools to mobile games, we build cross-platform apps that feel native on every device.
            </p>
          </div>
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 20px 50px rgba(108,76,255,0.12)" }}>
            <Image
              src="/images/hybrid-app-images/02-hybrid-apps-we-build.webp"
              alt="Hybrid apps DEVTYX builds: e-commerce, on-demand booking, fintech, health and fitness, and social apps"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {hybridAppTypes.map((item) => (
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
