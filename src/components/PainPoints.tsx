"use client";
import { useInView } from "../hooks/useInView";

const painPoints = [
  {
    icon: "🌙",
    title: "לילות ללא שינה",
    desc: "התינוק בוכה ואת לא יודעת למה. גזים? רעב? עייפות? אני עוזרת לך להבין ולמצוא שגרה שתיתן לכם לנשום.",
    accent: "#4A6080",
    accentPale: "#EEF1F5",
  },
  {
    icon: "🤱",
    title: "ההנקה לא הולכת כמו שחשבת",
    desc: "כאב, חרדה, חשש שאין מספיק חלב — ליוויתי עשרות אמהות בדיוק בנקודה הזו. את לא לבד בזה.",
    accent: "var(--terracotta)",
    accentPale: "var(--terracotta-pale)",
  },
  {
    icon: "💔",
    title: 'מרגישה "רק" אמא',
    desc: "את אישה, זוגית, עצמאית — ועכשיו הכל מסתכם בתינוק? בואי נדבר על שמירת הזהות שלך בתוך המציאות החדשה.",
    accent: "#A06080",
    accentPale: "#F5EEF2",
  },
  {
    icon: "👫",
    title: "הזוגיות השתנתה",
    desc: "פחות זמן, יותר מתח, ציפיות שונות. ליווי הזוג אחרי הלידה הוא חלק מרכזי בעבודה שלי.",
    accent: "var(--olive)",
    accentPale: "var(--olive-pale)",
  },
];

export default function PainPoints() {
  const { ref } = useInView(0.05);

  return (
    <section ref={ref} style={{ background: "#F2EAE0", position: "relative" }}>
      {/* Wave top from hero */}
      <div style={{ marginTop: -2, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0 0C240 72 480 72 720 40C960 8 1200 8 1440 40V72H0V0Z" fill="#F2EAE0"/>
        </svg>
      </div>
      <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal-blur">
          <span className="section-tag">את לא לבד</span>
          <h2
            className="mt-5"
            style={{
              fontFamily: "'Heebo', sans-serif",
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--charcoal)",
            }}
          >
            הרגשות שלך לגמרי מובנים
          </h2>
          <p className="mt-3 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
            אני כאן כדי לשמוע, לעזור ולהתאים פתרון בדיוק לך.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {painPoints.map((p, i) => (
            <div
              key={p.title}
              className={`card-lift rounded-2xl p-7 md:p-8 reveal-scale reveal-delay-${i + 1}`}
              style={{
                background: "var(--cream)",
                borderRight: `3px solid ${p.accent}`,
              }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: "50%",
                background: p.accentPale,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.35rem",
                marginBottom: 16,
              }}>
                {p.icon}
              </div>
              <h3 className="text-lg font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
      {/* Wave bottom to services */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0 32C240 0 480 0 720 32C960 64 1200 64 1440 32V72H0V32Z" fill="var(--cream)"/>
        </svg>
      </div>
    </section>
  );
}
