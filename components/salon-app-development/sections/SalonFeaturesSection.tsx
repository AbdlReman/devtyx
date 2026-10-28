import Image from "next/image";
import { featureCategories } from "../data/salon-app-development-data";

export default function SalonFeaturesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Core Features</div>
          </div>
          <h2 className="lt-h2">Core features of a high-converting salon app</h2>
          <p className="lt-lead" style={{ margin: "1rem auto 0" }}>
            We tailor the feature set to your model — single salon, chain, or on-demand platform — so you
            only build what drives bookings and retention. Every custom salon app we ship is scoped around
            conversion, not feature bloat.
          </p>
        </div>

        <div
          style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))", marginBottom: "3rem" }}
          className="lt-why-grid"
        >
          {featureCategories.map((cat) => (
            <div key={cat.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.875rem" }}>
                {cat.title}
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{ display: "flex", gap: "0.6rem", fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.6 }}
                  >
                    <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid #E5E7EB",
            boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
          }}
        >
          <Image
            src="/images/salon-app/Clientapp-booking-experience.jpg"
            alt="Salon booking app appointment flow with stylist selection, calendar, and services"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
