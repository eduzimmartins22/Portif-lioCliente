import { useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".reveal")
            .forEach((el, i) =>
              setTimeout(() => el.classList.add("visible"), i * 120)
            );
        }
      });
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

const services = [
  {
    icon: "ri-edit-2-line",
    title: "Conteúdo",
    subtitle: "Criação de conteúdo e gestão de redes sociais",
    description:
      "Criamos e publicamos o conteúdo da sua marca com consistência e estratégia. Do briefing à legenda, nosso time cuida de tudo — sem que você precise se preocupar com nada.",
  },
  {
    icon: "ri-video-line",
    title: "Audiovisual",
    subtitle: "Captação e produção audiovisual",
    description:
      "Seu conteúdo com qualidade de cinema. Roteirizamos, gravamos, editamos e entregamos vídeos e fotos que posicionam sua marca em outro nível — tudo com equipe in house.",
  },
  {
    icon: "ri-bar-chart-2-line",
    title: "Performance",
    subtitle: "Gestão de anúncios online em Meta e Google",
    description:
      "Gerenciamos a sua compra de mídia. Criamos, validamos e otimizamos campanhas em Meta e Google com foco total em performance — acompanhado de relatórios claros e objetivos.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Cobertura em Tempo Real",
    subtitle: "Cobertura estratégica de stories para empresas",
    description:
      "Realizamos a cobertura dos bastidores do seu negócio diretamente no seu espaço, registrando atendimentos, rotina e momentos reais da marca.",
  },
];

const WHATSAPP =
  "https://wa.me/5527996687400?text=Olá! Quero mais informações sobre os serviços da Buzz Digital.";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      id="servicos"
      style={{
        padding: "120px 0",
        background: "#0a0a0f",
      }}
    >
      <div
        style={{
          maxWidth: 1150,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Badge */}

      <div className="reveal" style={{ marginBottom: 14 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            O que fazemos
          </span>
        </div>

        {/* Title */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 30,
            marginBottom: 70,
          }}
        >
          <h2
            className="reveal"
            style={{
              fontSize: "2.6rem",
              fontWeight: 700,
              color: "#fff",
              maxWidth: 540,
              lineHeight: 1.2,
            }}
          >
            A Buzz Digital estrutura o marketing da sua empresa com soluções{" "}
            <span style={{ color: "#6c6c76" }}>feitas sob medida.</span>
          </h2>

          <p
            className="reveal"
            style={{
              maxWidth: 260,
              color: "#8d8d95",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Conheça todos os serviços que oferecemos para que sua empresa tenha
            mais resultados.
          </p>
        </div>

        {/* Cards */}

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal"
              style={{
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))",
                padding: 40,
                display: "flex",
                gap: 60,
                alignItems: "center",
                transition: "all .35s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(255,255,255,0.18)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0px)";
              }}
            >
              {/* Left */}

              <div style={{ minWidth: 280 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background:
                      "linear-gradient(135deg,#7c82ff,#5a60ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    boxShadow: "0 8px 30px rgba(92,99,255,0.25)",
                  }}
                >
                  <i
                    className={service.icon}
                    style={{ color: "#fff", fontSize: 24 }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: "2rem",
                    color: "#f1f1f4",
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#9b9ba4",
                    fontSize: ".9rem",
                  }}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Right */}

              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: "#d3d3db",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    maxWidth: 560,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div style={{ marginTop: 60 }}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 28px",
              borderRadius: 12,
              background: "#00e87a",
              color: "#000",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 10px 35px rgba(0,232,122,0.35)",
              transition: "all .25s",
            }}
          >
            <i className="ri-whatsapp-line" style={{ fontSize: 18 }} />
            Quero mais informações
          </a>
        </div>
      </div>
    </section>
  );
}