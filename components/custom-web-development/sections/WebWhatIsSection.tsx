import { servicePillars } from "../data/custom-web-development-data";

export default function WebWhatIsSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Definition</div>
          </div>
          <h2 className="lt-h2" style={{ marginBottom: "1rem" }}>
            What Are Custom Web Development Services?
          </h2>
          <p className="lt-lead">
            Custom web development means designing and building a website or web application from
            your requirements — instead of adapting a ready-made theme. You control the code, the
            data and the roadmap.
          </p>
        </div>

        <div
          style={{
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid #E5E7EB",
            boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
            marginBottom: "2.75rem",
            background: "#0B1220",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/banerwebportfolio_4.png"
            alt="DEVTYX custom website and web application portfolio work"
            width={1600}
            height={900}
            loading="eager"
            style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {servicePillars.map((item) => (
            <div key={item.title} className="lt-why-card">
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
