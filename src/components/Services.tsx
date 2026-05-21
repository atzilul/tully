"use client";

const services = [
  {
    icon: "🤱",
    title: "ליווי אחרי לידה",
    desc: "מפגש בית אחד + תמיכה טלפונית שבועיים. טיפול ראשוני בתינוק, האכלה, שינה ומענה לכל שאלה.",
    price: "400₪",
    accent: "var(--terracotta)",
    bg: "#FDF5EE",
  },
  {
    icon: "🌙",
    title: "תמיכת לילה",
    desc: "מגיעה אליכם הביתה בשעות הלילה, מטפלת בתינוק כדי שתוכלו לישון ולהתאושש.",
    price: "לפי שעות",
    accent: "#4A6080",
    bg: "#EEF1F5",
  },
  {
    icon: "🍼",
    title: "ליווי הנקה",
    desc: "עזרה מעשית וסבלנית מהלידה הראשונה ועד להצלחה — לאמא ולתינוק יחד.",
    price: "250₪",
    accent: "#6B7A4E",
    bg: "#F0F3EC",
  },
  {
    icon: "✨",
    title: "ליווי מלא",
    desc: "2 מפגשים (לפני ואחרי לידה) + תמיכה טלפונית שבועיים — הליווי הכי מקיף.",
    price: "600₪",
    accent: "#A06446",
    bg: "#F5EDE5",
    featured: true,
  },
  {
    icon: "🎁",
    title: "שובר מתנה",
    desc: "מתנה משמעותית לאמא שעומדת ללדת — ניתן לשלוח דיגיטלית ולהתאים לכל תקציב.",
    price: "250–1,000₪",
    accent: "#8A6A5A",
    bg: "#F5EFEA",
  },
];

export default function Services() {
  return (
    <section id="services" className="pb-4 pt-0" style={{ background: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 reveal-blur">
          <span className="section-tag">מה אני מציעה</span>
          <h2 className="mt-5" style={{ fontFamily: "'Heebo', sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--charcoal)" }}>
            שירותים שמותאמים לך
          </h2>
          <p className="mt-3 max-w-md mx-auto" style={{ color: "var(--warm-gray)", fontFamily: "'Heebo', sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.7 }}>
            כל מפגש מתאים אישית לצרכים שלך, של התינוק ושל המשפחה
          </p>
        </div>

        {/* Service list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: s.featured ? `linear-gradient(135deg, #F5EDE5, #FDF5EE)` : s.bg,
                borderRadius: 18,
                padding: "22px 28px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                border: s.featured ? `1.5px solid ${s.accent}` : "1px solid rgba(196,112,74,0.08)",
                boxShadow: s.featured ? "0 4px 24px rgba(196,112,74,0.10)" : "none",
                position: "relative",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(44,36,32,0.09)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Featured badge */}
              {s.featured && (
                <div style={{
                  position: "absolute", top: -12, right: 24,
                  background: s.accent, color: "white",
                  fontFamily: "'Heebo', sans-serif", fontSize: "0.65rem", fontWeight: 600,
                  padding: "3px 14px", borderRadius: 100, letterSpacing: "0.06em",
                }}>
                  הכי פופולרי
                </div>
              )}

              {/* Top row: icon + title + price + arrow (desktop) / icon + title (mobile) */}
              <div className="service-card-top-row" style={{ display: "contents" }}>
                {/* Icon */}
                <div className="service-icon" style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem",
                  background: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}>
                  {s.icon}
                </div>

                {/* Text */}
                <div className="service-text" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--charcoal)", marginBottom: 4 }}>
                    {s.icon && <span className="service-icon-inline" style={{ display: "none", marginLeft: 8 }}>{s.icon}</span>}
                    {s.title}
                  </div>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.85rem", color: "var(--warm-gray)", fontWeight: 300, lineHeight: 1.65 }}>
                    {s.desc}
                  </div>
                  {/* Mobile: price + arrow inline under description */}
                  <div className="service-card-bottom-row" style={{ display: "none" }}>
                    <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: s.accent }}>
                      {s.price}
                    </div>
                    <button
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                      style={{
                        width: 34, height: 34, borderRadius: "50%",
                        background: "rgba(196,112,74,0.1)",
                        border: "none", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: s.accent,
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11 7H3M7 3L3 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Price — desktop only */}
                <div className="service-price" style={{
                  flexShrink: 0, textAlign: "center",
                  borderRight: "1px solid rgba(196,112,74,0.12)",
                  paddingRight: 20, marginRight: 4,
                }}>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: s.accent }}>
                    {s.price}
                  </div>
                </div>

                {/* Arrow CTA — desktop only */}
                <button
                  className="service-arrow"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    flexShrink: 0,
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(196,112,74,0.1)",
                    border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s, transform 0.2s",
                    color: s.accent,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = s.accent;
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(196,112,74,0.1)";
                    (e.currentTarget as HTMLElement).style.color = s.accent;
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11 7H3M7 3L3 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-5 text-sm reveal" style={{ color: "var(--warm-gray)", fontFamily: "'Heebo', sans-serif", fontWeight: 300 }}>
          * המחירים הם למפגש בודד. ניתן לשלם דרך ביט ופייבוקס.
        </p>

        {/* CTA */}
        <div className="text-center mt-8 reveal">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{ background: "var(--terracotta)", color: "white", fontFamily: "'Heebo', sans-serif", fontWeight: 500 }}
          >
            לפרטים נוספים ותיאום מפגש
          </button>
        </div>
      </div>

      {/* Wave to Pricing */}
      <div style={{ lineHeight: 0, marginTop: 40 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0 0C360 60 720 60 1080 30C1260 15 1380 5 1440 0V60H0V0Z" fill="#F2EAE0"/>
        </svg>
      </div>
    </section>
  );
}
