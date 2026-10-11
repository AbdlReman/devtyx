import Image from "next/image";
import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { trustStats } from "../data/native-app-development-data";

export default function NativeHeroSection() {
  return (
    <section className="hero-purple-section" style={{ textAlign: "left", paddingBottom: "5rem" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(3,105,161,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="brelyx-container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1.05fr 0.95fr", alignItems: "center" }}
          className="lt-split-heading">

          {/* ── Copy ─────────────────────────────────────────── */}
          <div>
            <div className="hero-p-badge" style={{ margin: "0 0 2rem" }}>● Native Mobile App Development</div>
            <h1 className="hero-p-h1" style={{ margin: "0 0 1.5rem", maxWidth: "none", fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)" }}>
              Native Mobile App<br />Development Services
            </h1>
            <p className="hero-p-sub" style={{ margin: "0 0 2.25rem", maxWidth: "560px" }}>
              DEVTYX provides native mobile app development services for US businesses that need fast, secure
              and intuitive apps for iPhone, iPad and Android. We build in each platform&apos;s own language —
              Swift for iOS, Kotlin for Android — so your app takes full advantage of the device and delivers
              the experience your users expect.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
              <QuickInquiryButton
                className="hero-p-btn"
                source="Native App Development"
                defaultMessage="I'm interested in building a native mobile app. "
              >
                Book a Free Discovery Call →
              </QuickInquiryButton>
              <Link href="/portfolio" className="hero-p-ghost">See Our Work</Link>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.65)",
            }}>
              {trustStats.map(({ num, label }, i) => (
                <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
                  <span>
                    <span style={{ color: "#93E2F9" }}>{num}</span> {label}
                  </span>
                  {i < trustStats.length - 1 && <span style={{ opacity: 0.4 }}>·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* ── Visual ───────────────────────────────────────── */}
          <div style={{ position: "relative" }}>
            <div className="hero-mockup-glow" style={{ opacity: 0.7 }} />
            <Image
              src="/images/native-app/01-hero-native-mobile-app-development.webp"
              alt="Native mobile app development services by DEVTYX: iOS app in Swift and Android app in Kotlin with Face ID, camera, GPS and push notifications"
              width={1600}
              height={900}
              className="object-contain"
              style={{ width: "100%", height: "auto", position: "relative" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
