import { useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll(".reveal,.reveal-left,.reveal-right")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 90));
      });
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

const services = [
  {
    icon: "ri-quill-pen-line", name: "Criação de Conteúdo",
    price: "A partir de R$ 5.000", featured: false,
    description: "Produção completa de conteúdo para redes sociais com estratégia, criatividade e consistência. Do briefing à publicação, cuido de tudo.",
    tags: ["Instagram", "TikTok", "YouTube"],
  },
  {
    icon: "ri-lightbulb-flash-line", name: "Consultoria Digital",
    price: "A partir de R$ 3.000", featured: true,
    description: "Estratégias personalizadas para crescimento digital e posicionamento de marca. Análise profunda do seu negócio e plano de ação.",
    tags: ["Estratégia", "Branding", "Growth"],
  },
  {
    icon: "ri-megaphone-line", name: "Gestão de Campanhas",
    price: "A partir de R$ 8.000", featured: false,
    description: "Planejamento e execução de campanhas completas. Meta Ads, Google Ads e conteúdo orgânico integrados para máximo resultado.",
    tags: ["Meta Ads", "Google", "Performance"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const go = () => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} id="servicos" style={{ padding: "96px 0", background: "#0d0d0d" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "flex-end",
          gap: 24, marginBottom: 56,
        }}>
          <div>
            <div className="reveal" style={{ marginBottom: 20 }}>
              <span className="tag-badge">
                <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
                O que ofereço
              </span>
            </div>
            <h2 className="reveal" style={{
              fontFamily: "Syne, sans-serif", fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Soluções feitas<br />
              <span style={{ color: "#333" }}>sob medida</span>
            </h2>
          </div>
          <p className="reveal" style={{
            color: "#555", fontSize: "0.875rem", maxWidth: 280, lineHeight: 1.7,
          }}>
            Cada projeto é único. Trabalho com você para entender seus objetivos e criar uma estratégia que realmente funciona.
          </p>
        </div>

        <div className="three-col">
          {services.map((s, i) => (
            <div key={i} className="reveal" style={{
              borderRadius: 20, padding: "32px",
              background: s.featured ? "#00e87a" : "#111",
              border: s.featured ? "none" : "1px solid rgba(255,255,255,0.06)",
              display: "flex", flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s",
              position: "relative",
              animationDelay: `${i * 80}ms`,
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = s.featured
                  ? "0 20px 60px rgba(0,232,122,0.2)"
                  : "0 20px 60px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "none";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {s.featured && (
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  background: "rgba(0,0,0,0.15)", color: "#000",
                  fontSize: "0.65rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: 999,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                }}>Mais popular</div>
              )}

              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: s.featured ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                <i className={s.icon} style={{
                  fontSize: "1.3rem",
                  color: s.featured ? "#000" : "#00e87a",
                }} />
              </div>

              <h3 style={{
                fontFamily: "Syne, sans-serif", fontWeight: 900,
                fontSize: "1.3rem", color: s.featured ? "#000" : "#fff",
                marginBottom: 12,
              }}>{s.name}</h3>

              <p style={{
                fontSize: "0.875rem", lineHeight: 1.7,
                color: s.featured ? "rgba(0,0,0,0.65)" : "#666",
                flex: 1, marginBottom: 20,
              }}>{s.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontSize: "0.7rem", padding: "3px 10px", borderRadius: 999,
                    background: s.featured ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.06)",
                    color: s.featured ? "rgba(0,0,0,0.6)" : "#777",
                  }}>{t}</span>
                ))}
              </div>

              <div style={{
                fontSize: "0.85rem", fontWeight: 600,
                color: s.featured ? "#000" : "#777",
                marginBottom: 20,
              }}>{s.price}</div>

              <button onClick={go} style={{
                width: "100%", padding: "13px",
                borderRadius: 999, fontWeight: 700,
                fontSize: "0.82rem", transition: "all 0.25s",
                background: s.featured ? "#000" : "rgba(255,255,255,0.06)",
                color: s.featured ? "#00e87a" : "#fff",
                border: s.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
              }}
                onMouseEnter={e => {
                  if (!s.featured) {
                    (e.currentTarget as HTMLButtonElement).style.background = "#00e87a";
                    (e.currentTarget as HTMLButtonElement).style.color = "#000";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
                  }
                }}
                onMouseLeave={e => {
                  if (!s.featured) {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }
                }}
              >Solicitar orçamento</button>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="reveal" style={{
          marginTop: 24, display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: 20, padding: "28px 32px",
          background: "#111", borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div>
            <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>
              Não encontrou o que precisa?
            </p>
            <p style={{ color: "#555", fontSize: "0.82rem", marginTop: 4 }}>
              Vamos criar um pacote personalizado para você.
            </p>
          </div>
          <button onClick={go} className="btn-primary" style={{ padding: "11px 24px" }}>
            Falar agora <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>
    </section>
  );
}
