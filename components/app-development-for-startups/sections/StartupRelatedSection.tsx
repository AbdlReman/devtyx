import Link from "next/link";

export default function StartupRelatedSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Related Resources</div>
          </div>
          <h2 className="lt-h2" style={{ marginBottom: 0 }}>Going Native Later?</h2>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/native-app-development" style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.1rem 1.5rem",
            maxWidth: "520px",
            width: "100%",
            border: "1px solid #E5E7EB",
            borderRadius: "1rem",
            textDecoration: "none",
            color: "#111827",
          }}>
            <span style={{ fontSize: "1.3rem" }}>📱</span>
            <div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.2rem" }}>
                Native Mobile App Development Services
              </div>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", margin: 0 }}>
                Once you know what your users love, see how we build dedicated Swift and Kotlin apps for
                top performance and full device access.
              </p>
            </div>
            <span style={{ marginLeft: "auto", color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
