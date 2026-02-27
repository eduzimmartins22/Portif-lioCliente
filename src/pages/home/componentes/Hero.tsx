import heroBg from "../../../assets/hero-bg.png";
import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger fade-in-up by adding class after mount
    ref.current?.querySelectorAll(".fade-in-up").forEach(el => {
      (el as HTMLElement).style.animationPlayState = "running";
    });
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} id="hero" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      {/* BG */}
      <img src={heroBg} alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.35) 50%, rgba(8,8,8,1) 100%)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(8,8,8,0.4) 0%, transparent 40%, transparent 60%, rgba(8,8,8,0.4) 100%)",
      }} />

      {/* Glow */}
      <div style={{
        position: "absolute", top: "35%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,232,122,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        textAlign: "center", width: "100%",
        maxWidth: 900, margin: "0 auto",
        padding: "96px 24px 48px",
      }}>
        {/* Badge */}
        <div className="fade-in-up d1" style={{ marginBottom: 28 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#00e87a", display: "inline-block",
            }} />
            Disponível para novos projetos
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-in-up d2" style={{
          fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
          fontWeight: 900, lineHeight: 0.96,
          letterSpacing: "-0.03em", color: "#fff",
          marginBottom: 24,
        }}>
          Transformando<br />
          Ideias em{" "}
          <span className="gradient-text">Conteúdo</span>
          <br />que Conecta
        </h1>

        {/* Sub */}
        <p className="fade-in-up d3" style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          color: "#888", maxWidth: 520, margin: "0 auto 36px",
          lineHeight: 1.7,
        }}>
          Estratégias de conteúdo autênticas e personalizadas que impulsionam
          marcas no digital.{" "}
          <strong style={{ color: "#ccc", fontWeight: 500 }}>
            Há mais de 3 anos
          </strong>{" "}
          criando resultados reais.
        </p>

        {/* CTAs */}
        <div className="fade-in-up d4" style={{
          display: "flex", gap: 12,
          justifyContent: "center", flexWrap: "wrap",
        }}>
          <button onClick={() => go("contato")} className="btn-primary"
            style={{ fontSize: "0.9rem", padding: "15px 30px" }}>
            Quero mais informações
            <i className="ri-arrow-right-line" />
          </button>
          <button onClick={() => go("portfolio")} className="btn-outline"
            style={{ fontSize: "0.9rem", padding: "15px 30px" }}>
            Ver portfólio
          </button>
        </div>

        {/* Stats */}
        <div className="fade-in-up d5" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16, marginTop: 64, maxWidth: 480, margin: "64px auto 0",
        }}>
          {[
            { v: "500K+", l: "Seguidores" },
            { v: "3Bi+", l: "Visualizações" },
            { v: "200+", l: "Marcas" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "Syne, sans-serif", fontWeight: 900,
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                color: i === 0 ? "#00e87a" : i === 1 ? "#00b85f" : "#009040",
                lineHeight: 1,
              }}>{s.v}</div>
              <div style={{
                fontSize: "0.65rem", color: "#555",
                textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 6,
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fade-in-up d6" style={{
        position: "absolute", bottom: 36, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <span style={{ fontSize: "0.6rem", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          scroll
        </span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, rgba(0,232,122,0.5), transparent)",
        }} />
      </div>
    </section>
  );
}
