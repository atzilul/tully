"use client";
import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, message: form.message }),
      });

      const data = await res.json();
      if (data.success) {
        setState("success");
        setForm({ name: "", phone: "", message: "" });
        setTimeout(() => setState("idle"), 6000);
      } else {
        setState("error");
        setTimeout(() => setState("idle"), 4000);
      }
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1.5px solid #E5D8CC",
    background: "#FAF6F0",
    color: "var(--charcoal)",
    fontFamily: "'Heebo', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
    textAlign: "right",
    direction: "rtl",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Heebo', sans-serif",
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "var(--charcoal)",
    display: "block",
    marginBottom: 7,
    letterSpacing: "0.03em",
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "#F2EAE0" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Decorative line */}
        <div className="flex items-center gap-4 mb-14">
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, var(--terracotta-pale), transparent)" }} />
          <span style={{ fontSize: "0.7rem", color: "var(--terracotta)", letterSpacing: "0.2em" }}>❋</span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, var(--terracotta-pale), transparent)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Info side */}
          <div className="reveal-right">
            <span className="section-tag mb-5 inline-block">בואי נדבר</span>
            <h2 className="mt-4 mb-5" style={{ fontFamily: "'Heebo', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--charcoal)", lineHeight: 1.25 }}>
              הצעד הראשון הוא
              <br />
              <span style={{ color: "var(--terracotta)", fontWeight: 400 }}>לפנות אליי</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--warm-gray)", fontWeight: 300, fontFamily: "'Heebo', sans-serif", maxWidth: 380 }}>
              שאלה אחת, שיחת היכרות או תיאום מפגש — כולם מוזמנים לפנות. אחזור בהקדם.
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              <div style={{ background: "var(--cream)", borderRadius: 12, overflow: "hidden" }}>
                <a href="tel:0505856143" className="flex items-center gap-4 p-4 transition-all hover:scale-[1.02]" style={{ borderBottom: "1px solid rgba(196,112,74,0.08)" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--terracotta-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.2rem" }}>📞</div>
                  <div>
                    <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "var(--charcoal)" }}>טלפון</div>
                    <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.82rem", color: "var(--warm-gray)" }}>050-5856143</div>
                  </div>
                </a>
                <a href="https://wa.me/972505856143" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3.5 font-medium transition-transform hover:opacity-90"
                  style={{ background: "#25D366", color: "white", fontFamily: "'Heebo', sans-serif", fontWeight: 500, fontSize: "0.88rem", justifyContent: "flex-start" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  שלחי לי הודעת וואטסאפ עכשיו
                </a>
              </div>

              <a href="mailto:tullygrad@gmail.com" className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02]" style={{ background: "var(--cream)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--olive-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.2rem" }}>✉️</div>
                <div>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "var(--charcoal)" }}>מייל</div>
                  <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.82rem", color: "var(--warm-gray)" }}>tullygrad@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-left">
            <div style={{
              background: "var(--cream)",
              borderRadius: 24,
              padding: "36px 32px",
              border: "1px solid rgba(196,112,74,0.12)",
              boxShadow: "0 8px 40px rgba(196,112,74,0.08)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative top accent */}
              <div style={{
                position: "absolute", top: 0, right: 0, left: 0, height: 4,
                background: "linear-gradient(to left, var(--terracotta), #D98A65)",
              }} />

              {/* Form header */}
              <div style={{ marginBottom: 28, textAlign: "right" }}>
                <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "var(--terracotta)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 8px 0" }}>
                  פניה מאתר
                </p>
                <h3 style={{ fontFamily: "'Heebo', sans-serif", fontWeight: 800, fontSize: "1.45rem", color: "var(--charcoal)", margin: "0 0 6px 0", letterSpacing: "0.04em" }}>
                  TULLYBABY
                </h3>
                <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.83rem", color: "var(--warm-gray)", fontWeight: 300, margin: 0 }}>
                  מלאי את הפרטים ואחזור אליך בהקדם
                </p>
                <div style={{ marginTop: 14, height: 2, width: 48, background: "linear-gradient(to left, var(--terracotta), transparent)", borderRadius: 2 }} />
              </div>

              {/* Success state */}
              {state === "success" && (
                <div style={{
                  textAlign: "center", padding: "48px 24px",
                  background: "linear-gradient(135deg, #F0F3EC, #E8F0E0)",
                  borderRadius: 16, border: "1px solid rgba(107,122,78,0.2)",
                }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>🌿</div>
                  <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--olive)", margin: "0 0 8px 0" }}>הפניה נשלחה בהצלחה!</p>
                  <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.85rem", color: "var(--warm-gray)", margin: 0, fontWeight: 300 }}>תודה! אחזור אליך בהקדם האפשרי 🤍</p>
                </div>
              )}

              {/* Error state */}
              {state === "error" && (
                <div style={{
                  textAlign: "center", padding: "24px",
                  background: "#FEF2F0", borderRadius: 12,
                  border: "1px solid rgba(196,80,60,0.2)", marginBottom: 20,
                }}>
                  <p style={{ fontFamily: "'Heebo', sans-serif", fontSize: "0.9rem", color: "#C43020", margin: 0 }}>
                    אירעה שגיאה בשליחה. אפשר לנסות שוב או לפנות בוואטסאפ.
                  </p>
                </div>
              )}

              {/* Form fields */}
              {state !== "success" && (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>
                      <span style={{ color: "var(--terracotta)", marginLeft: 2 }}>*</span> שם מלא
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="את שמך"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--terracotta)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(196,112,74,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5D8CC";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>
                      <span style={{ color: "var(--terracotta)", marginLeft: 2 }}>*</span> טלפון
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="050-0000000"
                      style={{ ...inputStyle, direction: "ltr", textAlign: "right" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--terracotta)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(196,112,74,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5D8CC";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>הודעה (אופציונלי)</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="ספרי לי קצת על המצב שלך..."
                      style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--terracotta)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(196,112,74,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#E5D8CC";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: 12,
                      border: "none",
                      background: state === "sending"
                        ? "#D8A888"
                        : "linear-gradient(135deg, var(--terracotta), #D98A65)",
                      color: "white",
                      fontFamily: "'Heebo', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      cursor: state === "sending" ? "not-allowed" : "pointer",
                      transition: "opacity 0.2s, transform 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow: "0 4px 20px rgba(196,112,74,0.3)",
                    }}
                    onMouseEnter={(e) => { if (state !== "sending") (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    {state === "sending" ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.3"/>
                          <path d="M21 12a9 9 0 00-9-9"/>
                        </svg>
                        שולחת...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                        </svg>
                        שליחה
                      </>
                    )}
                  </button>

                  <p style={{ textAlign: "center", fontFamily: "'Heebo', sans-serif", fontSize: "0.75rem", color: "var(--warm-gray)", margin: 0, fontWeight: 300 }}>
                    🔒 הפרטים שלך מוגנים ולא יועברו לצד שלישי
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
