"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import LetsTalkButton from "@/components/LetsTalkButton";

const navLinks: [string, string][] = [
  ["Portfolio", "/portfolio"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

type ServiceNavItem = {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
};

// Hardcoded on purpose — the services dropdown should not depend on the
// database or any JSON data file, so it always renders even if that data changes.
const serviceLinks: ServiceNavItem[] = [
  { label: "Web & Custom Software", href: "/services/web-custom-software" },
  {
    label: "Mobile & Experience",
    href: "/services/mobile-experience",
    subItems: [
      { label: "Hybrid App", href: "/hybrid-app-development" },
      { label: "Music App", href: "/music-app-developers" },
    ],
  },
  { label: "Data & AI", href: "/services/data-ai" },
  { label: "Cloud, DevOps & Security", href: "/services/cloud-devops-security" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Digital Strategy & Product Consulting", href: "/services/digital-strategy-consulting" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesSubOpen, setServicesSubOpen] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = scrolled || hovered;

  return (
    <>
      {/* ━━━ MOBILE NAV ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="md:hidden">
        <div className={`brelyx-mobile-nav ${menuOpen ? "open" : ""}`}>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className="brelyx-mobile-nav-services-toggle"
            onClick={() => setMobileServicesOpen((open) => !open)}
            aria-expanded={mobileServicesOpen}
          >
            Services
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="brelyx-mobile-nav-services">
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                All Services
              </Link>
              {serviceLinks.map((item) => (
                <div key={item.href} className="brelyx-mobile-nav-service-group">
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="brelyx-mobile-nav-subitems">
                      {item.subItems.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setMenuOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {navLinks.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          {session?.user?.role === "admin" && (
            <Link href="/admin" onClick={() => setMenuOpen(false)}>
              Admin
            </Link>
          )}
          {session ? (
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                signOut();
              }}
            >
              Logout
            </Link>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
          <LetsTalkButton onOptionSelect={() => setMenuOpen(false)} />
        </div>
      </div>

      {/* ━━━ HEADER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header
        className={`brelyx-header ${active ? "brelyx-header--active" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="brelyx-container brelyx-header-inner">
          <Link href="/" className="brelyx-header-logo">
            <Image
              src={active ? "/images/logoforlight.png" : "/images/logo.png"}
              alt="DEVTYX"
              width={160}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="brelyx-header-nav">
            <div
              className="brelyx-nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => {
                setServicesOpen(false);
                setServicesSubOpen(null);
              }}
            >
              <Link href="/services" className="brelyx-nav-link brelyx-nav-link-dropdown">
                Services
                <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="brelyx-nav-dropdown-menu">
                  {serviceLinks.map((item) =>
                    item.subItems ? (
                      <div
                        key={item.href}
                        className="brelyx-nav-dropdown-subwrap"
                        onMouseEnter={() => setServicesSubOpen(item.href)}
                        onMouseLeave={() => setServicesSubOpen(null)}
                      >
                        <Link href={item.href} className="brelyx-nav-dropdown-item brelyx-nav-dropdown-item-parent">
                          {item.label}
                          <svg width="9" height="9" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                        {servicesSubOpen === item.href && (
                          <div className="brelyx-nav-dropdown-submenu">
                            {item.subItems.map((sub) => (
                              <Link key={sub.href} href={sub.href} className="brelyx-nav-dropdown-item">
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link key={item.href} href={item.href} className="brelyx-nav-dropdown-item">
                        {item.label}
                      </Link>
                    )
                  )}
                  <Link href="/services" className="brelyx-nav-dropdown-item brelyx-nav-dropdown-item-all">
                    All Services →
                  </Link>
                </div>
              )}
            </div>
            {navLinks.map(([label, href]) => (
              <Link key={href} href={href} className="brelyx-nav-link">
                {label}
              </Link>
            ))}
          </nav>

          <div className="brelyx-header-actions">
            {session?.user?.role === "admin" && (
              <Link href="/admin" className="brelyx-nav-link hidden md:inline-flex">
                Admin
              </Link>
            )}
            {session ? (
              <button
                type="button"
                onClick={() => signOut()}
                className="brelyx-nav-link hidden md:inline-flex"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="brelyx-nav-link hidden md:inline-flex">
                Login
              </Link>
            )}
            <LetsTalkButton wrapClassName="lt-talk-wrap hidden md:inline-flex" />
            <button
              className={`brelyx-hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
