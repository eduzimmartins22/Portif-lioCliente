import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Ela from "../../../assets/ela.png";

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
    id: 1, category: "Casamento", image: Ela,
    title: "Breno & Yhasmin — Casamento",
    description: "Captei e curei os melhores momentos do casamento, criando posts e stories que eternizaram o dia especial nas redes sociais.",
    tags: ["Instagram", "Stories", "Reels"],
  },
  {
    id: 2, category: "Tecnologia",
    image: "https://readdy.ai/api/search-image?query=modern technology gadgets minimalist desk clean lighting smartphones tablets&width=800&height=1000&seq=portfolio-02&orientation=portrait",
    title: "Série Tech Reviews",
    description: "Conteúdo viral sobre tecnologia com 10M+ visualizações e alta retenção de audiência.",
    tags: ["YouTube", "TikTok", "Reviews"],
  },
  {
    id: 3, category: "Fitness & Wellness",
    image: "https://readdy.ai/api/search-image?query=dynamic fitness lifestyle photography athletic wear bright modern gym minimalist&width=800&height=1000&seq=portfolio-03&orientation=portrait",
    title: "Collab Fitness Brand",
    description: "Parceria estratégica com marca fitness líder de mercado, gerando engajamento recorde.",
    tags: ["Collab", "Fitness", "Sponsored"],
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="portfolio" style={{ padding: "96px 0", background: "#080808" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "flex-end",
          gap: 24, marginBottom: 48,
        }}>
          <div>
            <div className="reveal" style={{ marginBottom: 20 }}>
              <span className="tag-badge">
                <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
                Trabalhos
              </span>
            </div>
            <h2 className="reveal" style={{
              fontFamily: "Syne, sans-serif", fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Projetos em<br />
              <span style={{ color: "#333" }}>Destaque</span>
            </h2>
          </div>
          <p className="reveal" style={{ color: "#555", fontSize: "0.875rem", maxWidth: 260, lineHeight: 1.7 }}>
            Conteúdo autêntico com resultados reais.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={p.id} className="reveal-scale"
              onClick={() => navigate(`/projeto/${p.id}`)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative", borderRadius: 18,
                overflow: "hidden", cursor: "pointer",
                aspectRatio: "3/4",
                animationDelay: `${i * 100}ms`,
              }}>
              <img src={p.image} alt={p.title} style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform 0.6s cubic-bezier(.16,1,.3,1)",
                transform: hovered === p.id ? "scale(1.06)" : "scale(1)",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)",
              }} />

              {/* Category */}
              <div style={{ position: "absolute", top: 18, left: 18, right: 18, display: "flex", justifyContent: "space-between" }}>
                <span className="tag-badge" style={{ fontSize: "0.6rem" }}>{p.category}</span>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: hovered === p.id ? 1 : 0,
                  transform: hovered === p.id ? "scale(1)" : "scale(0.7)",
                  transition: "all 0.3s",
                }}>
                  <i className="ri-external-link-line" style={{ color: "#fff", fontSize: "0.85rem" }} />
                </div>
              </div>

              {/* Content */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 22px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontSize: "0.65rem", color: "#888",
                      background: "rgba(255,255,255,0.06)",
                      padding: "2px 8px", borderRadius: 999,
                    }}>{t}</span>
                  ))}
                </div>
                <h3 style={{
                  fontFamily: "Syne, sans-serif", fontWeight: 900,
                  fontSize: "1.1rem", color: "#fff", lineHeight: 1.2, marginBottom: 8,
                }}>{p.title}</h3>
                <p style={{
                  fontSize: "0.8rem", color: "#888", lineHeight: 1.6,
                  maxHeight: hovered === p.id ? 80 : 0,
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
