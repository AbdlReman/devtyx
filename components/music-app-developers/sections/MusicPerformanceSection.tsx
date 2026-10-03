export default function MusicPerformanceSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}
          className="lt-split-heading">
          <div>
            <div className="lt-kicker">Built to Perform</div>
            <h2 className="lt-h2">What separates a good music app from one listeners actually keep.</h2>
            <p style={{ fontSize: "0.92rem", color: "#6B7280", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Most listeners leave an app the moment playback feels slow, unstable or inconsistent
              across devices. Performance isn&apos;t a feature we bolt on at the end — it&apos;s built in from
              the first sprint, with optimized caching, efficient buffering and streaming infrastructure
              designed to hold up under real-world network conditions.
            </p>
            <p style={{ fontSize: "0.92rem", color: "#6B7280", lineHeight: 1.8 }}>
              We test across real listening scenarios — poor connectivity, high-traffic launches and
              multiple devices in sync — so playback stays fast and reliable when it matters most, not
              just in a clean lab environment.
            </p>
          </div>

          <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "1.5rem", overflow: "hidden", background: "linear-gradient(135deg, #6C4CFF 0%, #3FE0D0 100%)" }}>
            <div className="pointer-events-none absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.25) 0%, transparent 45%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.2) 0%, transparent 40%)",
            }} />
            <div style={{
              position: "absolute", inset: "1.5rem",
              borderRadius: "1.1rem",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(6px)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: "0.75rem",
            }}>
              <span style={{ fontSize: "3rem" }}>🎧</span>
              <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>Fast, stable playback by design</span>
              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem" }}>Tested under real listening conditions</span>
            </div>
            <span style={{ position: "absolute", top: "1rem", left: "1.25rem", fontSize: "1.3rem" }}>🎵</span>
            <span style={{ position: "absolute", bottom: "1.25rem", right: "1.5rem", fontSize: "1.4rem" }}>🎶</span>
          </div>
        </div>
      </div>
    </section>
  );
}
