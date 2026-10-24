import { groceryAppTypes } from "../data/grocery-app-development-data";

export default function GroceryTypesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">What We Build</div>
          </div>
          <h2 className="lt-h2">Every kind of grocery app, covered.</h2>
          <p className="lt-lead" style={{ margin: "1rem auto 0" }}>
            Grocery apps are not one category. Delivery, dark stores, supermarket loyalty and wholesale
            platforms all serve different users and operational models. Whatever you&apos;re imagining,
            we&apos;ve likely built something close to it.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {groceryAppTypes.map((item) => (
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
