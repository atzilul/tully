"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--cream)", borderTop: "1px solid rgba(196,112,74,0.12)" }}>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-8 md:px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand */}
          <div>
            {/* Logo + tagline */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>
                טולי אציל
              </div>
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.75rem", color: "var(--terracotta)", letterSpacing: "0.14em", fontWeight: 500 }}>
                תומכת לפני ואחרי לידה
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 40, height: 2, background: "var(--terracotta)", borderRadius: 2, opacity: 0.5, marginBottom: 14 }} />

            <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.85rem", color: "var(--warm-gray)", fontWeight: 300, lineHeight: 1.7, maxWidth: 260 }}>
              ליווי חם, אישי ומקצועי בהיריון, בלידה ואחריה — לאמא ולכל המשפחה.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
              {[
                {
                  href: "https://wa.me/972505856143",
                  target: "_blank",
                  label: "WhatsApp",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
                {
                  href: "https://www.facebook.com/tullyg",
                  target: "_blank",
                  label: "Facebook",
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  href: "tel:0505856143",
                  target: undefined,
                  label: "Phone",
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1.5px solid rgba(196,112,74,0.3)",
                    color: "var(--terracotta)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--terracotta)";
                    el.style.borderColor = "var(--terracotta)";
                    el.style.color = "white";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.borderColor = "rgba(196,112,74,0.3)";
                    el.style.color = "var(--terracotta)";
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.7rem", color: "var(--terracotta)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
              ניווט
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "מפגשים", id: "#services" },
                { label: "אודות", id: "#about" },
                { label: "המלצות", id: "#testimonials" },
                { label: "מחירים", id: "#pricing" },
                { label: "צרי קשר", id: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    style={{
                      background: "none", border: "none", cursor: "pointer", padding: 0,
                      fontFamily: "'Heebo', sans-serif", fontSize: "0.9rem",
                      color: "var(--warm-gray)", fontWeight: 300,
                      display: "flex", alignItems: "center", gap: 6,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--terracotta)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--warm-gray)"}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--terracotta-pale)", display: "inline-block", flexShrink: 0 }} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.7rem", color: "var(--terracotta)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
              יצירת קשר
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  href: "tel:0505856143", label: "050-5856143", target: undefined,
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>,
                },
                {
                  href: "mailto:tullygrad@gmail.com", label: "tullygrad@gmail.com", target: undefined,
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                },
                {
                  href: "https://wa.me/972505856143", label: "וואטסאפ", target: "_blank",
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                },
                {
                  href: "https://www.facebook.com/tullyg", label: "פייסבוק", target: "_blank",
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target ? "noopener noreferrer" : undefined}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      fontFamily: "'Heebo', sans-serif", fontSize: "0.88rem",
                      color: "var(--warm-gray)", fontWeight: 300, textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--terracotta)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--warm-gray)"}
                  >
                    <span style={{
                      width: 26, height: 26, borderRadius: "50%",
                      border: "1.5px solid rgba(196,112,74,0.25)",
                      color: "var(--terracotta)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(196,112,74,0.1)", background: "rgba(196,112,74,0.03)" }}>
        <div className="max-w-6xl mx-auto px-8 md:px-6 py-4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.75rem", color: "var(--warm-gray)", textAlign: "center" }}>
            © {new Date().getFullYear()} טולי אציל · כל הזכויות שמורות
          </span>
          <span style={{ color: "var(--terracotta-pale)", fontSize: "0.6rem" }}>✦</span>
          <a href="mailto:tullygrad@gmail.com" style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.75rem", color: "var(--terracotta)", textDecoration: "none", opacity: 0.7 }}>
            tullybaby.com
          </a>
        </div>
      </div>

    </footer>
  );
}
