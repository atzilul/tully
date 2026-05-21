"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function heroStyle(step: number, visible: boolean, extra?: React.CSSProperties): React.CSSProperties {
  // 0=headline(first), 1=sub, 2=btn-wa, 3=btn-contact, 4=label(last)
  const delays = [0, 300, 520, 680, 880];
  const delay = delays[step] ?? 0;
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    filter: visible ? "blur(0px)" : "blur(4px)",
    transition: `opacity 0.85s ${EASE} ${delay}ms, transform 0.85s ${EASE} ${delay}ms, filter 0.75s ${EASE} ${delay}ms`,
    ...extra,
  };
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="https://static.wixstatic.com/media/42658c_f1984132e6b44cf986d504d64dcce588~mv2.jpg"
        alt="טולי אציל"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center top" }}
        unoptimized
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to left, rgba(250,246,240,0) 0%, rgba(250,246,240,0.05) 30%, rgba(250,246,240,0.55) 52%, rgba(250,246,240,0.85) 68%, rgba(250,246,240,0.96) 82%, rgba(250,246,240,1) 100%)",
      }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(196,112,74,0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-xl flex flex-col">

          {/* DOM order matches visual order; delay controls appearance sequence */}

          {/* Headline — appears first (delay 0ms) */}
          <h1 className="mb-5 leading-tight" style={heroStyle(0, visible, {
            fontFamily: "'Heebo', sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 700,
            color: "var(--charcoal)",
            lineHeight: 1.2,
            order: 1,
          })}>
            התכוננת ללידה
            <span style={{ display: "block", width: 60, height: 3, background: "var(--terracotta)", borderRadius: 2, marginTop: 8, marginBottom: 4, opacity: 0.7 }} />
            <span style={{ color: "var(--terracotta)", fontWeight: 400 }}>אבל אף אחד לא הכין</span>
            <br />
            <span style={{ color: "var(--terracotta)", fontWeight: 400 }}>אותך ליום שאחרי?</span>
          </h1>

          {/* Subtitle — delay 300ms */}
          <p className="text-lg leading-relaxed mb-10" style={heroStyle(1, visible, {
            fontFamily: "'Heebo', sans-serif",
            color: "var(--charcoal)",
            fontWeight: 300,
            order: 2,
          })}>
            אני כאן בדיוק בשבילך — לאמהות, אבות וכל המשפחה.
            <br />
            ליווי חם, מקצועי ואישי בהיריון, בלידה ואחריה.
          </p>

          {/* WhatsApp button — delay 520ms */}
          <div style={{ order: 3, marginBottom: 12 }}>
            <a
              href="https://wa.me/972505856143"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-pulse inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-medium text-base transition-transform hover:scale-105"
              style={heroStyle(2, visible, { background: "#25D366", color: "white", fontFamily: "'Heebo', sans-serif", fontWeight: 500 })}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              שלחי הודעה בוואטסאפ
            </a>
          </div>

          {/* Contact button — delay 680ms */}
          <div style={{ order: 4, marginBottom: 48 }}>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full font-medium text-base border-2 transition-all hover:scale-105"
              style={heroStyle(3, visible, {
                borderColor: "var(--terracotta)",
                color: "var(--terracotta)",
                background: "rgba(250,246,240,0.88)",
                fontFamily: "'Heebo', sans-serif",
                boxShadow: "0 4px 20px rgba(196,112,74,0.15)",
              })}
            >
              השאירי פרטים
            </button>
          </div>

          {/* Label tag — appears last (delay 880ms), visually above headline via order */}
          <div style={heroStyle(4, visible, { order: 0, marginBottom: 20 })}>
            <span className="section-tag">ליווי אישי · חם · מקצועי</span>
          </div>

        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0 70L60 63C120 56 240 42 360 38.5C480 35 600 42 720 45.5C840 49 960 49 1080 42C1200 35 1320 21 1380 14L1440 7V70H0Z" fill="#F2EAE0"/>
        </svg>
      </div>
    </section>
  );
}
