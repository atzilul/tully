"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "ראשי", href: "#hero" },
  { label: "מפגשים", href: "#services" },
  { label: "אודות", href: "#about" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צרי קשר", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || open ? "rgba(250,246,240,0.97)" : "transparent",
          backdropFilter: scrolled || open ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(196,112,74,0.1)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(44,36,32,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNav("#hero")} className="flex flex-col items-start leading-tight">
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--charcoal)" }}>
              טולי אציל
            </span>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.65rem", color: "var(--terracotta)", letterSpacing: "0.12em" }}>
              תומכת לפני ואחרי לידה
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="nav-link text-sm transition-colors"
                style={{ color: "var(--charcoal)", fontFamily: "'Heebo', sans-serif", fontWeight: 400 }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/972505856143"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 flex items-center justify-center"
              style={{ background: "var(--terracotta)", color: "white", width: 40, height: 40, borderRadius: "50%" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Animated hamburger button */}
          <button
            className="md:hidden relative"
            onClick={() => setOpen(!open)}
            aria-label={open ? "סגור תפריט" : "פתח תפריט"}
            style={{ width: 44, height: 44, alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            {/* Animated bars */}
            <span style={{ position: "relative", width: 24, height: 18, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span style={{
                display: "block", height: 2, borderRadius: 2,
                background: "var(--charcoal)",
                transformOrigin: "right center",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease, width 0.35s cubic-bezier(0.16,1,0.3,1)",
                transform: open ? "rotate(-45deg) translate(2px, 8px)" : "rotate(0deg)",
                width: "100%",
              }} />
              <span style={{
                display: "block", height: 2, borderRadius: 2,
                background: "var(--terracotta)",
                transition: "transform 0.25s ease, opacity 0.25s ease, width 0.35s cubic-bezier(0.16,1,0.3,1)",
                opacity: open ? 0 : 1,
                transform: open ? "scaleX(0)" : "scaleX(1)",
                width: "75%",
              }} />
              <span style={{
                display: "block", height: 2, borderRadius: 2,
                background: "var(--charcoal)",
                transformOrigin: "right center",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease, width 0.35s cubic-bezier(0.16,1,0.3,1)",
                transform: open ? "rotate(45deg) translate(2px, -8px)" : "rotate(0deg)",
                width: open ? "100%" : "50%",
              }} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay backdrop */}
      <div
        className="md:hidden fixed inset-0 z-40"
        style={{
          background: "rgba(44,36,32,0.4)",
          backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu panel — slides from top */}
      <div
        className="md:hidden fixed left-0 right-0 z-40"
        style={{
          top: 64,
          background: "rgba(250,246,240,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(196,112,74,0.12)",
          boxShadow: "0 20px 60px rgba(44,36,32,0.15)",
          transform: open ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          borderRadius: "0 0 24px 24px",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "8px 24px 28px" }}>
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              style={{
                display: "block", width: "100%", textAlign: "right",
                padding: "16px 0",
                borderBottom: i < navItems.length - 1 ? "1px solid rgba(196,112,74,0.08)" : "none",
                background: "none", border: "none",
                fontFamily: "'Heebo', sans-serif", fontSize: "1.05rem",
                color: "var(--charcoal)", cursor: "pointer",
                fontWeight: 400,
                transform: open ? "translateX(0)" : "translateX(20px)",
                opacity: open ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.06}s, opacity 0.35s ease ${0.05 + i * 0.06}s`,
              }}
            >
              {item.label}
            </button>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/972505856143"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              marginTop: 20, padding: "14px",
              background: "#25D366", color: "white", borderRadius: 14,
              fontFamily: "'Heebo', sans-serif", fontWeight: 600, fontSize: "0.95rem",
              textDecoration: "none",
              transform: open ? "translateY(0)" : "translateY(12px)",
              opacity: open ? 1 : 0,
              transition: `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${0.05 + navItems.length * 0.06}s, opacity 0.35s ease ${0.05 + navItems.length * 0.06}s`,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            שלחי הודעה בוואטסאפ
          </a>
        </div>
      </div>
    </>
  );
}
