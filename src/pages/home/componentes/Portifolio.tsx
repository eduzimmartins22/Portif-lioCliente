import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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

const projects = [
  {
    id: 1, category: "Conteudo Estrategico",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    title: "Gestao de Redes Sociais",
    description: "Estrategia completa de conteudo com crescimento de 300% em engajamento.",
    tags: ["Instagram", "TikTok", "Reels"],
  },
  {
    id: 2, category: "Audiovisual",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&q=80",
    title: "Producao Audiovisual",
    description: "Videos profissionais com mais de 1 milhao de visualizacoes.",
    tags: ["Video", "Fotografia", "Edicao"],
  },
  {
    id: 3, category: "Performance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Campanhas Meta e Google",
    description: "Gestao de midia paga com ROAS de 8x e -40% no custo por aquisicao.",
    tags: ["Meta Ads", "Google Ads", "Performance"],
  },
  {
    id: 4, category: "Stories em Tempo Real",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    title: "Cobertura de Eventos",
    description: "Stories estrategicos de evento corporativo com alta retencao.",
    tags: ["Stories", "Instagram", "Ao Vivo"],
  },
  {
    id: 5, category: "Branding Digital",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    title: "Posicionamento de Marca",
    description: "Construcao completa de identidade digital para startup.",
    tags: ["Branding", "Conteudo", "Estrategia"],
  },
  {
    id: 6, category: "Audiovisual",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    title: "Campanha Institucional",
    description: "Serie de videos que definiram o posicionamento da marca.",
    tags: ["Video", "Institucional", "Campanha"],
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="portfolio" className="section-pad" style={{ padding: "64px 0", background: "#080808" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 36 }} />

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 36 }}>
          <div>
            <div className="reveal" style={{ marginBottom: 14 }}>
              <span className="tag-badge">
                <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
                Trabalhos
              </span>
            </div>
            <h2 className="reveal" style={{
              fontFamily: "Syne, sans-serif", fontWeight: 900,
              fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)",
              lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Projetos em<br /><span style={{ color: "#333" }}>Destaque</span>
            </h2>
          </div>
          <p className="reveal" style={{ color: "#444", fontSize: "0.78rem", maxWidth: 220, lineHeight: 1.65 }}>
            Conteudo autentico com resultados reais.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={p.id} className="reveal-scale"
              onClick={() => navigate(`/projeto/${p.id}`)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative", borderRadius: 14,
                overflow: "hidden", cursor: "pointer",
                aspectRatio: "3/4",
                animationDelay: `${i * 100}ms`,
              }}>
              <img src={p.image} alt={p.title} style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform 0.6s cubic-bezier(.16,1,.3,1)",
                transform: hovered === p.id ? "scale(1.06)" : "scale(1)",
              }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)" }} />

              <div style={{ position: "absolute", top: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between" }}>
                <span className="tag-badge" style={{ fontSize: "0.58rem" }}>{p.category}</span>
              </div>

              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 16px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 8 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: "0.6rem", color: "#777", background: "rgba(255,255,255,0.06)", padding: "2px 7px", borderRadius: 999 }}>{t}</span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "0.95rem", color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>{p.title}</h3>
                <p style={{
                  fontSize: "0.75rem", color: "#777", lineHeight: 1.6,
                  maxHeight: hovered === p.id ? 60 : 0,
                  opacity: hovered === p.id ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.35s cubic-bezier(.16,1,.3,1)",
                }}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
