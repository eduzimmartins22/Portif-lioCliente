import Ela from "../../../assets/ela.png";
import { useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 110));
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const socials = [
    { icon: "ri-instagram-line", href: "https://instagram.com/" },
    { icon: "ri-youtube-line", href: "https://youtube.com/" },
    { icon: "ri-tiktok-line", href: "https://tiktok.com/" },
  ];

  return (
    <section ref={ref} id="sobre" style={{ padding: "96px 0", background: "#080808" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 48 }} />

        <div className="reveal" style={{ marginBottom: 48 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            Quem sou eu
          </span>
        </div>

        <div className="two-col">
          {/* Image */}
          <div className="reveal-left" style={{ position: "relative" }}>
            <div style={{
              borderRadius: 20, overflow: "hidden",
              aspectRatio: "4/5", position: "relative",
            }}>
              <img src={Ela} alt="Yhasmin Fagundes" style={{
                width: "100%", height: "100%", objectFit: "cover",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 60%)",
              }} />
              {/* Floating badge */}
              <div style={{
                position: "absolute", bottom: 20, left: 20, right: 20,
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14, padding: "14px 18px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
                  <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 500 }}>Disponível para parcerias</span>
                </div>
                <div style={{ color: "#888", fontSize: "0.72rem", marginTop: 4 }}>
                  Social media · Conteúdo · Campanhas
                </div>
              </div>
            </div>
            {/* Corner accents */}
            <div style={{
              position: "absolute", bottom: -12, right: -12,
              width: 80, height: 80,
              borderRight: "2px solid rgba(0,232,122,0.25)",
              borderBottom: "2px solid rgba(0,232,122,0.25)",
              borderRadius: "0 0 16px 0", pointerEvents: "none",
            }} />
          </div>

          {/* Text */}
          <div>
            <h2 className="reveal" style={{
              fontFamily: "Syne, sans-serif", fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.05, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: 32,
            }}>
              Criando Impacto<br />
              <span style={{ color: "#333" }}>No Mundo Digital</span>
            </h2>

            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {[
                <>Sou <strong style={{ color: "#fff" }}>Yhasmin Fagundes</strong>, criadora de conteúdo apaixonada por conectar marcas com suas audiências de forma autêntica e impactante. Com anos de experiência no universo digital, transformo ideias em campanhas que geram resultados reais.</>,
                <>Minha jornada começou com a paixão por contar histórias e evoluiu para uma carreira dedicada a ajudar empresas a alcançarem seu potencial máximo nas redes sociais. Cada projeto é uma oportunidade de criar algo único e memorável.</>,
                <>Trabalho com as principais plataformas digitais, sempre buscando inovação e autenticidade em cada conteúdo produzido. Meu objetivo é criar conexões verdadeiras que transcendem a tela.</>,
              ].map((p, i) => (
                <p key={i} style={{ color: "#888", lineHeight: 1.75, fontSize: "0.95rem" }}>{p}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="reveal" style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)",
              gap: 16, paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              marginBottom: 32,
            }}>
              {[
                { v: "500K+", l: "Seguidores", c: "#00e87a" },
                { v: "3Bi+", l: "Visualizações", c: "#00b85f" },
                { v: "200+", l: "Marcas", c: "#009040" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "Syne, sans-serif", fontWeight: 900,
                    fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                    color: s.c, lineHeight: 1, marginBottom: 6,
                  }}>{s.v}</div>
                  <div style={{ fontSize: "0.65rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="reveal" style={{ display: "flex", gap: 10 }}>
              {socials.map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
