import Link from "next/link";
import { howWeWork } from "../data/software-development-partner-data";

export default function PartnerHowWeWorkSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">How We Work</div>
          </div>
          <h2 className="lt-h2">How We Work with You</h2>
          <p className="lt-lead">
            Transparent communication, clear ownership, and security by default — so the partnership
            stays productive across time zones.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {howWeWork.map((block) => (
            <div key={block.title} className="lt-why-card">
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.85rem" }}>
                {block.title}
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "0.55rem" }}>
                {block.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      fontSize: "0.86rem",
                      color: "#6B7280",
                      lineHeight: 1.65,
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "0.9rem",
            color: "#6B7280",
          }}
        >
          IP terms are detailed in our{" "}
          <Link href="/client-agreement" style={{ color: "#6C4CFF", fontWeight: 600 }}>
            Client Agreement
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
