import { useState, useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll(".reveal,.reveal-scale")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 90));
      });
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

// ────────────────────────────────────────────────
// Substitua os src abaixo pelos arquivos reais
// quando a cliente enviar as fotos e vídeos
// ────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    category: "Conteúdo Estratégico",
    title: "Gestão de Redes Sociais",
    tags: ["Instagram", "TikTok", "Reels"],
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&q=80",
    category: "Audiovisual",
    title: "Produção Audiovisual",
    tags: ["Vídeo", "Fotografia", "Edição"],
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Performance",
    title: "Campanhas Meta e Google",
    tags: ["Meta Ads", "Google Ads"],
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    category: "Stories em Tempo Real",
    title: "Cobertura de Eventos",
    tags: ["Stories", "Instagram"],
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    category: "Branding Digital",
    title: "Posicionamento de Marca",
    tags: ["Branding", "Estratégia"],
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    category: "Audiovisual",
    title: "Campanha Institucional",
    tags: ["Vídeo", "Institucional"],
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      id="portfolio"
      className="section-pad"
      style={{ padding: "80px 0", background: "#f3eee7" }}
    >
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 36 }} />

        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div>
            <div className="reveal" style={{ marginBottom: 14 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "rgba(92,10,22,0.08)",
                  border: "1px solid rgba(92,10,22,0.2)",
                  borderRadius: 999,
                  padding: "5px 14px",
                  fontSize: "0.72rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "#5c0a16",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#5c0a16",
                    display: "inline-block",
                  }}
                />
                {"Trabalhos"}
              </span>
            </div>

            <h2
              className="reveal"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                lineHeight: 1.1,
                color: "#5c0a16",
              }}
            >
              {"Sua marca mais "}
              <span style={{ fontStyle: "normal", color: "#c2a689" }}>
                {"reconhecida."}
              </span>
            </h2>
          </div>

          <p
            className="reveal"
            style={{
              color: "rgba(92,10,22,0.5)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.88rem",
              maxWidth: 240,
              lineHeight: 1.7,
            }}
          >
            {"Conteúdo autêntico construído para gerar presença e autoridade no digital."}
          </p>
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="reveal-scale"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "3/4",
                animationDelay: `${i * 100}ms`,
                cursor: "default",
              }}
            >
              {p.type === "video" ? (
                <video
                  src={p.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(.16,1,.3,1)",
                    transform: hovered === p.id ? "scale(1.06)" : "scale(1)",
                  }}
                />
              ) : (
                <img
                  src={p.src}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(.16,1,.3,1)",
                    transform: hovered === p.id ? "scale(1.06)" : "scale(1)",
                  }}
                />
              )}

              {/* Overlay gradiente */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(92,10,22,0.92) 0%, rgba(92,10,22,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Badge categoria */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  right: 14,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(194,166,137,0.15)",
                    border: "1px solid rgba(194,166,137,0.35)",
                    borderRadius: 999,
                    padding: "3px 10px",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c2a689",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {p.category}
                </span>
              </div>

              {/* Info bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "18px 16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 5,
                    marginBottom: 8,
                  }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.6rem",
                        color: "rgba(243,238,231,0.6)",
                        background: "rgba(243,238,231,0.08)",
                        padding: "2px 7px",
                        borderRadius: 999,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#f3eee7",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}