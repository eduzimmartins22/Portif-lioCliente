import { useState, useEffect, useRef } from "react";

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

const testimonials = [
  {
    id: 1,
    author: "Carlos Mendes",
    role: "CEO · Loja Urbana",
    quote: "Trabalhar com a Buzz Digital foi transformador para nossa marca. O posicionamento estratégico e o conteúdo criado superaram todas as expectativas e geraram engajamento incrível.",
  },
  {
    id: 2,
    author: "Fernanda Costa",
    role: "Diretora de Marketing · Tech Solutions",
    quote: "A equipe da Buzz entende de verdade o negócio antes de criar qualquer conteúdo. Cada estratégia é pensada para gerar resultado real, não apenas likes.",
  },
  {
    id: 3,
    author: "Rafael Oliveira",
    role: "Fundador · Startup BR",
    quote: "Desde que começamos a trabalhar com a Buzz, nossa presença digital mudou completamente. Mais autoridade, mais leads e mais vendas.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const goTo = (i: number) => {
    if (anim || i === idx) return;
    setAnim(true);
    setTimeout(() => { setIdx(i); setAnim(false); }, 280);
  };

  const cur = testimonials[idx];

  return (
    <section
      ref={ref}
      id="depoimentos"
      className="section-pad"
      style={{ padding: "100px 0", background: "#5c0a16" }}
    >
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 36 }} />

        {/* Badge */}
        <div className="reveal" style={{ marginBottom: 16 }}>
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
            {"Depoimentos"}
          </span>
        </div>

        {/* Título */}
        <h2
          className="reveal"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            lineHeight: 1.1,
            color: "#f3eee7",
            marginBottom: 64,
          }}
        >
          {"O que dizem sobre "}
          <span style={{ fontStyle: "normal", color: "#c2a689" }}>
            {"nosso trabalho"}
          </span>
        </h2>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="reveal"
              onClick={() => goTo(i)}
              style={{
                borderRadius: 20,
                border: `1px solid ${i === idx ? "rgba(194,166,137,0.5)" : "rgba(194,166,137,0.12)"}`,
                background: i === idx
                  ? "rgba(194,166,137,0.1)"
                  : "rgba(243,238,231,0.03)",
                padding: "32px 28px",
                cursor: "pointer",
                transition: "all 0.35s ease",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(194,166,137,0.4)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = i === idx
                  ? "rgba(194,166,137,0.5)"
                  : "rgba(194,166,137,0.12)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Aspas */}
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "3.5rem",
                  color: "#c2a689",
                  lineHeight: 0.7,
                  opacity: i === idx ? 1 : 0.4,
                  transition: "opacity 0.3s",
                }}
              >
                {"\u201C"}
              </div>

              {/* Fala */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.85,
                  color: i === idx
                    ? "rgba(243,238,231,0.9)"
                    : "rgba(243,238,231,0.5)",
                  flex: 1,
                  transition: "color 0.3s",
                }}
              >
                {t.quote}
              </p>

              {/* Autor */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(194,166,137,0.12)",
                }}
              >
                <div
                  style={{
                    width: 3,
                    height: 36,
                    borderRadius: 2,
                    background: i === idx ? "#c2a689" : "rgba(194,166,137,0.25)",
                    transition: "background 0.3s",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: i === idx ? "#f3eee7" : "rgba(243,238,231,0.5)",
                      transition: "color 0.3s",
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.72rem",
                      color: i === idx ? "#c2a689" : "rgba(194,166,137,0.4)",
                      marginTop: 3,
                      transition: "color 0.3s",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots de navegação */}
        <div
          className="reveal"
          style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                width: i === idx ? 24 : 7,
                height: 7,
                background: i === idx ? "#c2a689" : "rgba(194,166,137,0.2)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}