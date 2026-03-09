import Ela from "../../../assets/ela.png";
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
    id: 1, author: "Maria Silva", role: "Diretora de Marketing", company: "Fashion Brand",
    image: "https://readdy.ai/api/search-image?query=professional business woman executive smiling confidently pastel background modern office&width=600&height=750&seq=testimonial-01&orientation=portrait",
    quote: "Trabalhar com a Yhasmin foi transformador para nossa marca. O conteúdo criado superou todas as expectativas e gerou um engajamento incrível com nosso público. Profissionalismo e criatividade em cada detalhe.",
  },
  {
    id: 2, author: "Yhasmin Fagundes", role: "Social Media Manager", company: "Tech Startup",
    image: Ela,
    quote: "Cada imagem, cada legenda e cada estratégia são pensadas para ir além do alcance: o objetivo é criar impacto, gerar reconhecimento e transformar seguidores em uma comunidade engajada.",
  },
  {
    id: 3, author: "Ana Costa", role: "Gerente de Comunicação", company: "Wellness Co.",
    image: "https://readdy.ai/api/search-image?query=professional businesswoman friendly smile business casual contemporary bright modern office&width=600&height=750&seq=testimonial-03&orientation=portrait",
    quote: "Parceria incrível! O conteúdo produzido foi autêntico e alinhado perfeitamente com os valores da nossa marca. Os resultados foram além do esperado, com milhões de visualizações e ROI impressionante.",
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
    <section ref={ref} id="depoimentos" style={{ padding: "96px 0", background: "#0d0d0d" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 48 }} />

        <div className="reveal" style={{ marginBottom: 32 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            Depoimentos
          </span>
        </div>

        <div className="two-col">
          {/* Image */}
          <div className="reveal-left" style={{ position: "relative" }}>
            <div style={{
              borderRadius: 20, overflow: "hidden",
              aspectRatio: "4/5", position: "relative",
              opacity: anim ? 0 : 1, transition: "opacity 0.28s",
            }}>
              <img src={cur.image} alt={cur.author} style={{
                width: "100%", height: "100%", objectFit: "cover",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(8,8,8,0.45) 0%, transparent 60%)",
              }} />
            </div>
            {/* Company badge */}
            <div style={{
              position: "absolute", top: 18, left: 18,
              background: "rgba(8,8,8,0.8)", backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14, padding: "12px 18px",
              opacity: anim ? 0 : 1, transition: "opacity 0.28s",
            }}>
              <div style={{ color: "#00e87a", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {cur.company}
              </div>
              <div style={{ color: "#fff", fontSize: "0.82rem", fontWeight: 500, marginTop: 2 }}>{cur.role}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="reveal" style={{
              fontFamily: "Syne, sans-serif", fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: 40,
            }}>
              O que dizem<br />
              <span style={{ color: "#333" }}>sobre meu trabalho</span>
            </h2>

            <div style={{ opacity: anim ? 0 : 1, transition: "opacity 0.28s" }}>
              <div style={{
                fontFamily: "Syne, sans-serif", fontSize: "5rem",
                color: "#00e87a", lineHeight: 0.8, marginBottom: 20,
              }}>"</div>
              <p style={{
                color: "#aaa", fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                lineHeight: 1.75, marginBottom: 28,
              }}>{cur.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 3, height: 44, background: "#00e87a", borderRadius: 2 }} />
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, color: "#fff", fontSize: "0.95rem" }}>
                    {cur.author}
                  </div>
                  <div style={{ color: "#555", fontSize: "0.78rem", marginTop: 2 }}>
                    {cur.role} · {cur.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 40 }}>
              <button onClick={() => goTo(idx === 0 ? testimonials.length - 1 : idx - 1)}
                style={{
                  width: 48, height: 48, borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#888", fontSize: "1.2rem", cursor: "pointer",
                  background: "transparent", transition: "all 0.25s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#888";
                }}>
                <i className="ri-arrow-left-line" />
              </button>
              <button onClick={() => goTo(idx === testimonials.length - 1 ? 0 : idx + 1)}
                style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: "#00e87a", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#000", fontSize: "1.2rem", cursor: "pointer",
                  transition: "background 0.25s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#00ff88"}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "#00e87a"}>
                <i className="ri-arrow-right-line" />
              </button>
              {/* Dots */}
              <div style={{ display: "flex", gap: 8, marginLeft: 8 }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{
                    borderRadius: 999, border: "none", cursor: "pointer",
                    width: i === idx ? 24 : 8, height: 8,
                    background: i === idx ? "#00e87a" : "rgba(255,255,255,0.15)",
                    transition: "all 0.3s",
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
