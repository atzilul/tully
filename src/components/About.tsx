"use client";

const credentials = [
  "דולה מוסמכת לאחר לידה",
  "מלווה הנקה מוסמכת",
  "לימודי נטורופתיה וארומתרפיה",
  "ניהול פרויקטים בהייטק",
  "אמא לאריאל ואלכס",
];

const stats = [
  { num: "+200", label: "משפחות" },
  { num: "8+", label: "שנות ניסיון" },
  { num: "5★", label: "דירוג" },
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative" }}>

      {/* ─── DESKTOP: parallax full-bleed ─── */}
      <div className="about-desktop">
        <div
          style={{
            height: "clamp(720px, 92vw, 1020px)",
            backgroundImage: "url('https://static.wixstatic.com/media/42658c_0bb6e456f21243c0a85ebb2e2aba61e5~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
            backgroundAttachment: "fixed",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(242,234,224,0.35) 0%, transparent 20%)", zIndex: 1 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,10,8,0.78) 0%, rgba(15,10,8,0.4) 35%, rgba(15,10,8,0.1) 60%, transparent 80%)", zIndex: 1 }} />

          <div style={{ position: "absolute", top: 40, right: 48, zIndex: 10 }}>
            <span className="section-tag">אודות</span>
          </div>

          <div className="about-headline" style={{ position: "absolute", top: "22%", right: 0, left: 0, zIndex: 10, padding: "0 48px", transform: "translateY(-50%)" }}>
            <div style={{ maxWidth: 1152, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "'Heebo', sans-serif", fontSize: "clamp(2.6rem, 6vw, 4.8rem)", fontWeight: 800, color: "white", lineHeight: 1.1, textShadow: "0 4px 32px rgba(0,0,0,0.4)", maxWidth: 560 }}>
                היא התחילה כאמא
                <br />
                <span style={{ fontWeight: 300, color: "#F5D0B0" }}>ומצאה את ייעודה</span>
              </h2>
            </div>
          </div>

          <div className="about-section-inner" style={{ position: "absolute", bottom: 48, right: 0, left: 0, zIndex: 10, padding: "0 48px", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "end" }} className="about-grid">
              <div style={{ background: "rgba(250,246,240,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: 18, padding: "22px 26px", border: "1px solid rgba(196,112,74,0.15)" }}>
                <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.9rem", color: "var(--charcoal)", fontWeight: 300, lineHeight: 1.85, marginBottom: 10 }}>
                  שלום, אני טולי. אמא לאריאל ואלכס ובת זוג לדניאל. לאחר שתי היריונות שלי, הבנתי שאמהות לא תמיד קלה — וכמה חשוב שיהיה מישהו שיש לו ידע, סבלנות וחום לעמוד לצידך.
                </p>
                <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.9rem", color: "var(--charcoal)", fontWeight: 300, lineHeight: 1.85 }}>
                  מאז למדתי, הוסמכתי ועבדתי עם מאות משפחות — תמיד עם אותה גישה: לראות אותך, לשמוע אותך, ולתת לך בדיוק את מה שאת צריכה.
                </p>
              </div>
              <div style={{ background: "rgba(250,246,240,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: 18, padding: "22px 26px", border: "1px solid rgba(196,112,74,0.15)" }}>
                <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "var(--terracotta)", letterSpacing: "0.12em", marginBottom: 14 }}>הכשרה וניסיון</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 16 }}>
                  {credentials.map((c) => (
                    <div key={c} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--olive-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#6B7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.86rem", color: "var(--charcoal)", fontWeight: 400 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", borderTop: "1px solid rgba(196,112,74,0.15)", paddingTop: 14 }}>
                  {stats.map((s, i) => (
                    <div key={s.label} style={{ flex: 1, textAlign: "center", borderRight: i < 2 ? "1px solid rgba(196,112,74,0.15)" : "none" }}>
                      <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--terracotta)" }}>{s.num}</div>
                      <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.66rem", color: "var(--warm-gray)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE: stack layout ─── */}
      <div className="about-mobile" style={{ background: "var(--cream-dark)" }}>
        {/* Image */}
        <div style={{
          height: 280,
          backgroundImage: "url('https://static.wixstatic.com/media/42658c_0bb6e456f21243c0a85ebb2e2aba61e5~mv2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          position: "relative",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,10,8,0.65) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", top: 20, right: 20 }}>
            <span className="section-tag">אודות</span>
          </div>
          <div style={{ position: "absolute", bottom: 20, right: 20, left: 20 }}>
            <h2 style={{ fontFamily: "'Heebo', sans-serif", fontSize: "clamp(1.8rem, 7vw, 2.4rem)", fontWeight: 800, color: "white", lineHeight: 1.15, textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
              היא התחילה כאמא
              <br />
              <span style={{ fontWeight: 300, color: "#F5D0B0" }}>ומצאה את ייעודה</span>
            </h2>
          </div>
        </div>

        {/* Story card */}
        <div style={{ padding: "20px 16px 0" }}>
          <div style={{ background: "var(--cream)", borderRadius: 16, padding: "20px 18px", border: "1px solid rgba(196,112,74,0.12)" }}>
            <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.9rem", color: "var(--charcoal)", fontWeight: 300, lineHeight: 1.85, marginBottom: 10 }}>
              שלום, אני טולי. אמא לאריאל ואלכס ובת זוג לדניאל. לאחר שתי היריונות שלי, הבנתי שאמהות לא תמיד קלה.
            </p>
            <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.9rem", color: "var(--charcoal)", fontWeight: 300, lineHeight: 1.85 }}>
              מאז למדתי, הוסמכתי ועבדתי עם מאות משפחות — תמיד עם אותה גישה: לראות אותך, לשמוע אותך, ולתת לך בדיוק את מה שאת צריכה.
            </p>
          </div>
        </div>

        {/* Credentials card */}
        <div style={{ padding: "12px 16px 24px" }}>
          <div style={{ background: "var(--cream)", borderRadius: 16, padding: "20px 18px", border: "1px solid rgba(196,112,74,0.12)" }}>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "var(--terracotta)", letterSpacing: "0.12em", marginBottom: 14 }}>הכשרה וניסיון</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
              {credentials.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--olive-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#6B7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.86rem", color: "var(--charcoal)", fontWeight: 400 }}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", borderTop: "1px solid rgba(196,112,74,0.12)", paddingTop: 14 }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ flex: 1, textAlign: "center", borderRight: i < 2 ? "1px solid rgba(196,112,74,0.12)" : "none" }}>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--terracotta)" }}>{s.num}</div>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.66rem", color: "var(--warm-gray)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
