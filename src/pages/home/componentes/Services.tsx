import { useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll(".reveal,.reveal-scale")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
      });
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

const services = [
  {
    id: 1,
    icon: "ri-edit-2-line",
    name: "Conteudo",
    subtitle: "Criacao de conteudo e gestao de redes sociais",
    description: "Criamos e publicamos o conteudo da sua marca com consistencia e estrategia. Do briefing a legenda, nosso time cuida de tudo sem que voce precise se preocupar com nada.",
  },
  {
    id: 2,
    icon: "ri-video-line",
    name: "Audiovisual",
    subtitle: "Captacao e producao audiovisual",
    description: "Seu conteudo com qualidade de cinema. Roteirizamos, gravamos, editamos e entregamos videos e fotos que posicionam sua marca em outro nivel — tudo com equipe in house.",
  },
  {
    id: 3,
    icon: "ri-bar-chart-2-line",
    name: "Performance",
    subtitle: "Gestao de anuncios online em Meta e Google",
    description: "Gerenciamos a sua compra de midia. Criamos, validamos e otimizamos campanhas em Meta e Google com foco total em performance — com relatorios claros e objetivos.",
  },
  {
    id: 4,
    icon: "ri-smartphone-line",
    name: "Cobertura em Tempo Real",
    subtitle: "Cobertura estrategica de stories para empresas",
    description: "Realizamos a cobertura dos bastidores do seu negocio diretamente no seu espaco, registrando atendimentos, rotina e momentos reais da marca.",
  },
];

const WHATSAPP_URL = "https://wa.me/5527996687400?text=Ola!%20Quero%20mais%20informacoes%20sobre%20os%20servicos%20da%20Buzz%20Digital.";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="servicos" style={{ padding: "72px 0", background: "#0f0f13" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 40 }} />

        <div className="reveal" style={{ marginBottom: 14 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            O que oferecemos
          </span>
        </div>

        <div style={{
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "flex-end",
          gap: 16, marginBottom: 36,
        }}>
          <h2 className="reveal" style={{
            fontFamily: "Syne, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
            lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff",
            maxWidth: 560,
          }}>
            A Buzz Digital estrutura o marketing da sua empresa com solucoes{" "}
            <span style={{ color: "#333" }}>feitas sob medida.</span>
          </h2>
          <p className="reveal" style={{ color: "#444", fontSize: "0.8rem", maxWidth: 220, lineHeight: 1.65 }}>
            Conheca todos os servicos que oferecemos para que sua empresa tenha mais resultados.
          </p>
        </div>

        {/* Service cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {services.map((service) => (
            <div
              key={service.id}
              className="reveal-scale"
              style={{
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "#16161d",
                padding: "24px 28px",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLDivElement).style.background = "#1a1a24";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.background = "#16161d";
              }}
            >
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 32 }}>
                {/* Left */}
                <div style={{ minWidth: 180, flexShrink: 0 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(0,232,122,0.08)", border: "1px solid rgba(0,232,122,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
                  }}>
                    <i className={service.icon} style={{ color: "#00e87a", fontSize: "1.1rem" }} />
                  </div>
                  <h3 style={{
                    fontFamily: "Syne, sans-serif", fontWeight: 800,
                    fontSize: "1.3rem", color: "#fff", marginBottom: 6,
                  }}>{service.name}</h3>
                  <p style={{ color: "#3a3a3a", fontSize: "0.72rem", lineHeight: 1.5 }}>{service.subtitle}</p>
                </div>

                {/* Right */}
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <p style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.75 }}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "12px 28px" }}
          >
            <i className="ri-whatsapp-line" style={{ fontSize: "0.95rem" }} />
            Quero mais informacoes
          </a>
        </div>
      </div>
    </section>
  );
}
