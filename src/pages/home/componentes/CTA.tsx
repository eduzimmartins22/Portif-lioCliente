import { useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll(".reveal,.reveal-scale")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 90));
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

const items = [
  "Conteúdo", "Design", "Estratégia", "Reels", "Copywriting",
  "Performance", "Branding", "Growth", "Audiovisual", "Campanhas",
  "Conteúdo", "Design", "Estratégia", "Reels", "Copywriting",
  "Performance", "Branding", "Growth", "Audiovisual", "Campanhas",
];

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const go = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} style={{ background: "#080808", overflow: "hidden" }}>
      {/* Marquee top */}
      <div className="marquee-wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 16px", whiteSpace: "nowrap" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#3a3a3a", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item}</span>
              <span className="dot-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            </span>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ padding: "96px 0" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ marginBottom: 24 }}>
            <span className="tag-badge">
              <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
              Vamos trabalhar juntos
            </span>
          </div>

          <h2 className="reveal" style={{
            fontFamily: "Syne, sans-serif", fontWeight: 900,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 0.96, letterSpacing: "-0.03em",
            color: "#fff", marginBottom: 24,
          }}>
            Sua história<br />merece ser{" "}
            <span className="gradient-text">bem contada.</span>
          </h2>

          <p className="reveal" style={{
            color: "#555", fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7,
          }}>
            E a gente sabe como fazer isso. Vamos transformar sua visão em conteúdo que conecta, engaja e gera resultado.
          </p>

          <div className="reveal">
            <button onClick={go} className="btn-primary" style={{ fontSize: "0.95rem", padding: "16px 36px" }}>
              Quero mais informações
              <i className="ri-arrow-right-line" />
            </button>
          </div>

          {/* Social proof */}
          <div className="reveal" style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: "12px 32px",
            marginTop: 48, fontSize: "0.8rem", color: "#444",
          }}>
            {[
              "Mais de 200 marcas atendidas",
              "3 bilhões de visualizações",
              "500K+ seguidores orgânicos",
            ].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <i className="ri-check-line" style={{ color: "#00e87a" }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="marquee-wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
        <div className="marquee-track-rev">
          {[...items].reverse().map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 16px", whiteSpace: "nowrap" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#222", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item}</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#2a2a2a", display: "inline-block" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
