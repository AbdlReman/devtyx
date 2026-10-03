import Image from "next/image";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";

export default function MusicCtaSection() {
  return (
    <div
      className="dark-cta-band"
      style={{ textAlign: "left", background: "linear-gradient(135deg, #050C2E 0%, #071952 50%, #050C2E 100%)" }}
    >
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "2.5rem", alignItems: "center" }} className="lt-split-heading">
          <div>
            <h2 className="dark-cta-h2" style={{ margin: "0 0 1.25rem" }}>Ready to Launch Your Music App?</h2>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.8, maxWidth: "440px", margin: "0 0 2rem" }}>
              Tell us your idea. We&apos;ll help you shape it into a product your listeners love, built to scale from day one.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <QuickInquiryButton
                className="dark-cta-btn"
                source="Music App Developers"
                defaultMessage="I'm interested in building a music app. "
              >
                Book Your Free Discovery Call →
              </QuickInquiryButton>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
              <a href="mailto:support@devtyx.com" style={{ color: "inherit" }}>support@devtyx.com</a>
              {" · "}
              <a href="tel:+923020058237" style={{ color: "inherit" }}>+92-302-005-8237</a>
              {" · WhatsApp available"}
            </p>
          </div>

          <Image
            src="/images/music-landing-images/05-launch-your-music-app-transparent.webp"
            alt="A DEVTYX music app published live on the App Store and Google Play, with growing active listeners"
            width={1600}
            height={800}
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
