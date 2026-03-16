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
      "Criamos estratégias de conteúdo que posicionam sua marca e fortalecem sua presença digital. Do planejamento à publicação, cuidamos de todo o processo para que sua empresa tenha consistência, clareza de comunicação e presença forte nas redes sociais.",
  },
  {
    icon: "ri-video-line",
    title: "Audiovisual",
    subtitle: "Captação e produção audiovisual",
    description:
      "Produzimos conteúdos visuais que elevam o posicionamento da sua marca no digital. Planejamos, roteirizamos e realizamos captações profissionais para transformar sua comunicação em conteúdos que geram conexão, autoridade e engajamento.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Cobertura em Tempo Real",
    subtitle: "Cobertura estratégica de stories para empresas",
    description:
      "Realizamos a cobertura dos bastidores do seu negócio diretamente no seu espaço, registrando atendimentos, rotina, experiências com clientes e momentos reais da marca. Produzimos stories em tempo real que mostram a autenticidade do seu negócio e fortalecem a conexão com o público.",
  },
];

const WHATSAPP =
  "https://wa.me/5527996687400?text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Buzz%20Digital.";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      id="servicos"
      style={{
        padding: "120px 0",
        background: "#5c0a16",
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
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(194,166,137,0.12)",
              border: "1px solid rgba(194,166,137,0.35)",
              borderRadius: 999,
              padding: "5px 14px",
              fontSize: "0.72rem",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "#c2a689",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#c2a689",
                display: "inline-block",
              }}
            />
            {"O que fazemos"}
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
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#f3eee7",
              maxWidth: 540,
              lineHeight: 1.2,
            }}
          >
            {"A Buzz Digital estrutura o marketing da sua empresa com soluções "}
            <span style={{ color: "#c2a689", fontStyle: "normal" }}>
              {"feitas sob medida."}
            </span>
          </h2>

          <p
            className="reveal"
            style={{
              maxWidth: 260,
              color: "rgba(243,238,231,0.6)",
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            {"Conheça todos os serviços que oferecemos para que sua empresa tenha mais resultados."}
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
                border: "1px solid rgba(194,166,137,0.15)",
                background: "rgba(243,238,231,0.04)",
                padding: 40,
                display: "flex",
                gap: 60,
                alignItems: "center",
                transition: "all .35s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(194,166,137,0.45)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(194,166,137,0.15)";
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
                    background: "linear-gradient(135deg, #c2a689, #a8896e)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    boxShadow: "0 8px 30px rgba(194,166,137,0.25)",
                  }}
                >
                  <i
                    className={service.icon}
                    style={{ color: "#5c0a16", fontSize: 24 }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.9rem",
                    color: "#f3eee7",
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#c2a689",
                    fontFamily: "Inter, sans-serif",
                    fontSize: ".88rem",
                    opacity: 0.85,
                  }}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Right */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    color: "rgba(243,238,231,0.75)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
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
          
           <a href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              borderRadius: 999,
              background: "#c2a689",
              color: "#5c0a16",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 10px 35px rgba(194,166,137,0.3)",
              transition: "all .25s",
            }}
          >
            <i className="ri-whatsapp-line" style={{ fontSize: 18 }} />
            {"Quero mais informações"}
          </a>
        </div>
      </div>
    </section>
  );
}