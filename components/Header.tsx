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

// Hardcoded on purpose — the services dropdown should not depend on the
// database or any JSON data file, so it always renders even if that data changes.
const serviceLinks: [string, string][] = [
  ["Web & Custom Software", "/services/web-custom-software"],
  ["Mobile & Experience", "/services/mobile-experience"],
  ["Data & AI", "/services/data-ai"],
  ["Cloud, DevOps & Security", "/services/cloud-devops-security"],
  ["UI/UX Design", "/services/ui-ux-design"],
  ["Digital Strategy & Product Consulting", "/services/digital-strategy-consulting"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
              {serviceLinks.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
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
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" className="brelyx-nav-link brelyx-nav-link-dropdown">
                Services
                <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="brelyx-nav-dropdown-menu">
                  {serviceLinks.map(([label, href]) => (
                    <Link key={href} href={href} className="brelyx-nav-dropdown-item">
                      {label}
                    </Link>
                  ))}
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
