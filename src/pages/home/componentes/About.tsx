import { useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll(".reveal,.reveal-left,.reveal-right")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 110));
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      id="sobre"
      className="section-pad"
      style={{ padding: "80px 0", background: "#f3eee7" }}
    >
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 40 }} />

        <div className="two-col">
          <div className="reveal-left" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "4/5",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Buzz Digital Team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#5c0a16",
                marginBottom: 22,
              }}
            >
              Quem somos
            </h2>

            <div
              className="reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <p
                style={{
                  color: "#5c0a16",
                  fontSize: "1.08rem",
                  lineHeight: 1.85,
                  opacity: 0.85,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {"A "}
                <strong>Buzz Digital</strong>
                {" é especializada em posicionamento e estratégia de conteúdo para marcas que desejam crescer no digital de forma consistente."}
              </p>

              <p
                style={{
                  color: "#5c0a16",
                  fontSize: "1.08rem",
                  lineHeight: 1.85,
                  opacity: 0.85,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {"Nosso trabalho vai muito além de publicar nas redes sociais. Acreditamos que um perfil bem posicionado precisa de estratégia, clareza de comunicação e conteúdo pensado para gerar resultado."}
              </p>

              <p
                style={{
                  color: "#5c0a16",
                  fontSize: "1.08rem",
                  lineHeight: 1.85,
                  opacity: 0.85,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {"Ao longo dos últimos anos, a Buzz participou da construção de diversos perfis, ajudando empresas a fortalecer sua presença digital e se posicionar com mais autoridade no mercado."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}