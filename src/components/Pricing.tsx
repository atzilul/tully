"use client";

const plans = [
  {
    name: "שובר מתנה",
    price: "250–1,000",
    unit: "₪",
    desc: "מתנה מיוחדת ומשמעותית לאמא שעומדת ללדת",
    features: ["ניתן להזמין ולשלוח דיגיטלית", "לבחירת המקבלת", "מגוון ערכים"],
    cta: "הזמיני שובר",
    featured: false,
    icon: "🎁",
  },
  {
    name: "ליווי אחרי לידה",
    price: "400",
    unit: "₪",
    desc: "מפגש בית אחד + תמיכה טלפונית שבועיים",
    features: [
      "עד שעתיים בבית",
      "טיפול ראשוני בתינוק",
      "מענה לשאלות",
      "תמיכה טלפונית שבועיים",
    ],
    cta: "לתיאום מפגש",
    featured: true,
    icon: "🌿",
  },
  {
    name: "ליווי מלא",
    price: "600",
    unit: "₪",
    desc: "לפני ואחרי הלידה — הליווי הכי מקיף",
    features: [
      "מפגש לפני הלידה",
      "מפגש אחרי הלידה",
      "תמיכה טלפונית שבועיים",
      "הכנה מנטלית ופרקטית",
    ],
    cta: "לתיאום מפגש",
    featured: false,
    icon: "✨",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pb-20 md:pb-28 pt-10 md:pt-16" style={{ background: "#F2EAE0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal-blur">
          <span className="section-tag">מוכנה להתחיל?</span>
          <h2
            className="mt-5"
            style={{ fontFamily: "'Heebo', sans-serif", fontSize: "clamp(1.35rem, 5vw, 2.8rem)", fontWeight: 700, color: "var(--charcoal)", whiteSpace: "nowrap" }}
          >
            בחרי את הליווי המתאים לך
          </h2>
          <p className="mt-3 text-base md:text-lg max-w-md mx-auto" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>
            ללא מחויבות, ללא הפתעות · ניתן לשלם גם דרך ביט ופייבוקס
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 md:p-8 reveal-scale reveal-delay-${i + 1} ${plan.featured ? "pricing-featured" : ""}`}
              style={{
                background: plan.featured ? "var(--cream)" : "rgba(250,246,240,0.5)",
                ...(plan.featured ? { boxShadow: "0 12px 40px rgba(196, 112, 74, 0.12)" } : {}),
              }}
            >
              <div className="text-3xl mb-4">{plan.icon}</div>
              <div className="text-sm font-medium mb-1" style={{ color: "var(--terracotta)" }}>{plan.name}</div>
              <div className="mb-3" style={{ fontFamily: "'Heebo', sans-serif", fontSize: "2.8rem", fontWeight: 800, color: "var(--charcoal)", lineHeight: 1 }}>
                {plan.price}
                <span className="text-xl mr-1" style={{ color: "var(--warm-gray)" }}>{plan.unit}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--warm-gray)", fontWeight: 300 }}>{plan.desc}</p>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="flex-shrink-0">
                      <path d="M1 5.5L5 9.5L13 1.5" stroke="#6B7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: "var(--charcoal)", fontWeight: 300 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
                style={{
                  background: plan.featured ? "var(--terracotta)" : "transparent",
                  color: plan.featured ? "white" : "var(--terracotta)",
                  border: plan.featured ? "none" : "1.5px solid var(--terracotta)",
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
