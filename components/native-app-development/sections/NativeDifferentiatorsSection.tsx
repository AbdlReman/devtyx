import Image from "next/image";
import { differentiators } from "../data/native-app-development-data";

export default function NativeDifferentiatorsSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Why DEVTYX</div>
          </div>
          <h2 className="lt-h2">How We Differ From Others?</h2>
          <p className="lt-lead">
            Many agencies can write code. Fewer give you full visibility, a polished product and complete
            ownership of what you paid for. That is where we stand apart.
          </p>
        </div>

        <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 20px 50px rgba(108,76,255,0.12)", marginBottom: "3rem" }}>
          <Image
            src="/images/native-app/03-how-we-differ.webp"
            alt="Why DEVTYX is a different native app development company: transparent project board, pixel-accurate UI from Figma, and Git source control you own"
            fill
            className="object-cover object-center"
          />
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {differentiators.map((item) => (
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
