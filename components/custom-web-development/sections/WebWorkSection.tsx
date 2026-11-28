import Link from "next/link";
import { portfolioHighlights, workList } from "../data/custom-web-development-data";

export default function WebWorkSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Portfolio</div>
          </div>
          <h2 className="lt-h2">Custom Web Development Work from DEVTYX</h2>
          <p className="lt-lead">A selection of web projects from our portfolio.</p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            marginBottom: "2.5rem",
          }}
        >
          {portfolioHighlights.map((item) => (
            <div key={item.title} className="lt-why-card" style={{ padding: 0, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.alt}
                width={800}
                height={500}
                loading="lazy"
                style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "1.25rem 1.35rem 1.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ul
          style={{
            maxWidth: "820px",
            margin: "0 auto 2rem",
            display: "grid",
            gap: "0.65rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {workList.map((item) => (
            <li
              key={item}
              style={{
                fontSize: "0.9rem",
                color: "#4B5563",
                lineHeight: 1.65,
                display: "flex",
                gap: "0.55rem",
              }}
            >
              <span style={{ color: "#6C4CFF", fontWeight: 700 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center" }}>
          <Link href="/portfolio" className="lt-btn">
            Browse Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
