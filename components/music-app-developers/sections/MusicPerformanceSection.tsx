import Image from "next/image";

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

          <Image
            src="/images/music-landing-images/03-music-streaming-architecture-transparent.webp"
            alt="Cloud streaming core on AWS, Google Cloud and Azure delivering to phone, web and smart speakers"
            width={1600}
            height={800}
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
