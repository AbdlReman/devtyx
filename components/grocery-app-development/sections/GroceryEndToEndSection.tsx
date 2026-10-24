import Image from "next/image";
import { endToEndApps } from "../data/grocery-app-development-data";

export default function GroceryEndToEndSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">End-to-End Platform</div>
          </div>
          <h2 className="lt-h2">Customer, admin and driver — one connected system.</h2>
          <p className="lt-lead" style={{ margin: "1rem auto 0" }}>
            A grocery business only works when shoppers, store ops and couriers stay in sync.
            We build the full stack so every order moves cleanly from cart to kitchen to curb.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))", marginBottom: "3rem" }}
          className="lt-why-grid">
          {endToEndApps.map((app) => (
            <div key={app.title} className="lt-why-card">
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.4rem" }}>
                {app.title}
              </div>
              <p style={{ fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                {app.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {app.points.map((point) => (
                  <span key={point} className="lt-tech-tag">{point}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "1.5rem",
          overflow: "hidden",
          border: "1px solid #E5E7EB",
          boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
        }}>
          <Image
            src="/images/grocery-app/End-to-End-Solutions-Customer-Admin-Driver.jpg"
            alt="DEVTYX end-to-end grocery app solutions — customer app, admin dashboard and driver app"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
