"use client";
import { useState, useEffect } from "react";

const testimonials = [
  { name: "אביגיל", role: "אמא בפעם הראשונה", quote: "טולי נכנסה ללבנו ולמשפחה שלנו. הבינה בדיוק איך לעזור לי עם רגישות ואינטואיציה חדה." },
  { name: "מאיה ויובל", role: "זוג אחרי לידה שנייה", quote: "עשתה את זה בצורה הכי חמה ולא שיפוטית שיכולה להיות. גרמה לנו להבין כמה עוד יש ללמוד." },
  { name: "שירה", role: "תמיכת לילה", quote: "הלילות הראשונים היו סיוט. טולי הגיעה ושקטה הכל. הבוקר הראשון שישנתי — בכיתי מאושר." },
  { name: "נועה", role: "ליווי הנקה", quote: "ישבה איתי שעות, לא עזבה עד שהכל עבד. בגללה הנקתי 8 חודשים." },
  { name: "רותם", role: "הכנה ללידה", quote: "נכנסתי לחדר לידה עם ביטחון שלא הייתי מאמינה שאפשר. טולי הכינה אותי לכל תרחיש." },
  { name: "ליאת", role: "אימון משפחתי", quote: "עזרה לנו למצוא את הקצב שלנו כמשפחה חדשה. הזוגיות שלנו חזרה לעצמה." },
  { name: "כרמית", role: "ליווי אחרי לידה", quote: "הרגשתי שיש מישהי שבאמת רואה אותי, לא רק את התינוק. טולי נתנה לי להרגיש שאני לא לבד." },
  { name: "דנית", role: "שובר מתנה", quote: "קניתי שובר לאחייניתי. היא אמרה שזה המתנה הטובה ביותר שקיבלה. תודה טולי!" },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--terracotta)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const visibleCount = 3;

  const goTo = (idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setFading(false);
    }, 350);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeIndex + 1) % testimonials.length;
      goTo(next);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  const visible = getVisible();

  return (
    <section id="testimonials" style={{ background: "#F5EDE0", position: "relative" }}>
      {/* Diagonal wave from services */}
      <div style={{ lineHeight: 0, marginTop: -2 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0 0L1440 60V80H0V0Z" fill="#F5EDE0"/>
        </svg>
      </div>

      <div className="pb-16 md:pb-24 pt-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center reveal-blur">
        <span className="section-tag">מה אומרות המשפחות</span>
        <h2 className="mt-5" style={{ fontFamily: "'Heebo', sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--charcoal)" }}>
          מילים מהלב
        </h2>
        <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "1rem", color: "var(--warm-gray)", fontWeight: 300, marginTop: 10 }}>
          מאות משפחות כבר חוו את הליווי. הנה מה שהן אומרות.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 reveal reveal-delay-1">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {visible.map((t, i) => (
            <div
              key={`${activeIndex}-${i}`}
              style={{
                background: "var(--cream)",
                borderRadius: 20,
                padding: "26px 24px",
                border: "1px solid rgba(196,112,74,0.1)",
                display: "flex",
                flexDirection: "column",
                minHeight: 220,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative quote mark */}
              <div style={{
                position: "absolute",
                top: 10, left: 16,
                fontFamily: "Georgia, serif",
                fontSize: "5rem",
                lineHeight: 1,
                color: "rgba(196,112,74,0.08)",
                userSelect: "none",
                pointerEvents: "none",
              }}>
                ״
              </div>
              <Stars />
              <p style={{
                fontFamily: "'Heebo', sans-serif",
                fontSize: "0.9rem",
                color: "var(--charcoal)",
                fontWeight: 300,
                lineHeight: 1.75,
                marginBottom: 20,
                flex: 1,
                position: "relative",
                zIndex: 1,
              }}>
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--terracotta), #D98A65)",
                  color: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Heebo', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                  flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "var(--charcoal)" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.72rem", color: "var(--warm-gray)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: activeIndex === i ? 28 : 10,
                height: 10,
                borderRadius: 100,
                background: activeIndex === i ? "var(--terracotta)" : "rgba(196,112,74,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
      </div>
      {/* Wave bottom to pricing */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="#FAF6F0"/>
        </svg>
      </div>
    </section>
  );
}
