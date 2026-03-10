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
    id: 1, author: "Carlos Mendes", role: "CEO", company: "Loja Urbana",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    quote: "Trabalhar com a Buzz Digital foi transformador para nossa marca. O posicionamento estrategico e o conteudo criado superaram todas as expectativas e geraram engajamento incrivel.",
  },
  {
    id: 2, author: "Fernanda Costa", role: "Diretora de Marketing", company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    quote: "A equipe da Buzz entende de verdade o negocio antes de criar qualquer conteudo. Cada estrategia e pensada para gerar resultado real, nao apenas likes.",
  },
  {
    id: 3, author: "Rafael Oliveira", role: "Fundador", company: "Startup BR",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    quote: "Desde que comeamos a trabalhar com a Buzz, nossa presenca digital mudou completamente. Mais autoridade, mais leads e mais vendas.",
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
    <section ref={ref} id="depoimentos" className="section-pad" style={{ padding: "64px 0", background: "#0d0d0d" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 36 }} />

        <div className="reveal" style={{ marginBottom: 24 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            Depoimentos
          </span>
        </div>

        <div className="two-col">
          <div className="reveal-left" style={{ position: "relative" }}>
            <div style={{
              borderRadius: 14, overflow: "hidden",
              aspectRatio: "4/5", position: "relative",
              opacity: anim ? 0 : 1, transition: "opacity 0.28s",
            }}>
              <img src={cur.image} alt={cur.author} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.45) 0%, transparent 60%)" }} />
            </div>
            <div style={{
              position: "absolute", top: 14, left: 14,
              background: "rgba(8,8,8,0.82)", backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10, padding: "9px 13px",
              opacity: anim ? 0 : 1, transition: "opacity 0.28s",
            }}>
              <div style={{ color: "#00e87a", fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{cur.company}</div>
              <div style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 500, marginTop: 2 }}>{cur.role}</div>
            </div>
          </div>

          <div>
            <h2 className="reveal" style={{
              fontFamily: "Syne, sans-serif", fontWeight: 900,
              fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: 28,
            }}>
              O que dizem<br /><span style={{ color: "#333" }}>sobre nosso trabalho</span>
            </h2>

            <div style={{ opacity: anim ? 0 : 1, transition: "opacity 0.28s" }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontSize: "3rem", color: "#00e87a", lineHeight: 0.8, marginBottom: 14 }}>"</div>
              <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: 20 }}>{cur.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 3, height: 32, background: "#00e87a", borderRadius: 2 }} />
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, color: "#fff", fontSize: "0.85rem" }}>{cur.author}</div>
                  <div style={{ color: "#444", fontSize: "0.7rem", marginTop: 1 }}>{cur.role} · {cur.company}</div>
                </div>
              </div>
            </div>

            <div className="reveal testimonial-controls" style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 28 }}>
              <button onClick={() => goTo(idx === 0 ? testimonials.length - 1 : idx - 1)}
                style={{
                  width: 40, height: 40, borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#777", fontSize: "0.95rem", cursor: "pointer",
                  background: "transparent", transition: "all 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#777"; }}>
                <i className="ri-arrow-left-line" />
              </button>
              <button onClick={() => goTo(idx === testimonials.length - 1 ? 0 : idx + 1)}
                style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#00e87a", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#000", fontSize: "0.95rem", cursor: "pointer",
                  transition: "background 0.25s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#00ff88"}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "#00e87a"}>
                <i className="ri-arrow-right-line" />
              </button>
              <div style={{ display: "flex", gap: 6, marginLeft: 4 }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{
                    borderRadius: 999, border: "none", cursor: "pointer",
                    width: i === idx ? 18 : 6, height: 6,
                    background: i === idx ? "#00e87a" : "rgba(255,255,255,0.12)",
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
