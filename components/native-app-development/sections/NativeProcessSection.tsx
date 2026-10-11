import Image from "next/image";
import { workflowSteps } from "../data/native-app-development-data";

export default function NativeProcessSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">How We Work</div>
          </div>
          <h2 className="lt-h2">Our Systematic Workflow</h2>
          <p className="lt-lead" style={{ maxWidth: "520px", margin: "1rem auto 0" }}>
            A proven five-step process keeps your app on time, on budget and on target. Most projects kick
            off within about two weeks of our first conversation.
          </p>
        </div>

        <div style={{ position: "relative", aspectRatio: "16/7.4", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 20px 50px rgba(108,76,255,0.12)", marginBottom: "3rem" }}>
          <Image
            src="/images/native-app/04-systematic-workflow.webp"
            alt="DEVTYX native app development workflow: proposal, development, QA and UAT, App Store and Google Play launch, and ongoing support"
            fill
            className="object-cover object-center"
          />
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(5, minmax(0,1fr))" }}
          className="lt-process-grid">
          {workflowSteps.map((s) => (
            <div key={s.step} className="lt-process-card">
              <div className="lt-process-icon">
                <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
              </div>
              <div className="lt-process-num">{s.step}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
