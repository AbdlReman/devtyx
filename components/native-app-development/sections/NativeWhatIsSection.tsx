import { nativeBenefits } from "../data/native-app-development-data";

export default function NativeWhatIsSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}
          className="lt-split-heading">
          <div>
            <div className="lt-kicker">What Is a Native App?</div>
            <h2 className="lt-h2">Built for one platform. Built to perform.</h2>
            <p className="lt-lead" style={{ margin: 0 }}>
              A native app is a mobile application built specifically for one operating system, using that
              platform&apos;s official language and tools: Swift for iOS and Kotlin for Android. Native app
              development services cover the full process of planning, designing, coding, testing and
              launching these platform-specific apps.
            </p>
          </div>
          <div>
            <p className="lt-lead" style={{ margin: 0 }}>
              Because native apps talk directly to the device&apos;s hardware and operating system, they run
              faster, feel smoother and can use every feature the phone offers, from the camera and GPS to
              Face ID and push notifications.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {nativeBenefits.map((item) => (
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
