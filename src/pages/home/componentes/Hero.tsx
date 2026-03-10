import heroBg from "../../../assets/hero-bg.png";

const WA_URL = "https://wa.me/5527996687400?text=Ola!%20Quero%20mais%20informacoes%20sobre%20os%20servicos%20da%20Buzz%20Digital.";

export function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px 20px" }}>
      <div
        style={{
          position: "absolute", inset: "12px", borderRadius: 20,
          overflow: "hidden", backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%)" }} />
      </div>

      <div className="hero-content" style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 560, width: "100%", paddingTop: 90 }}>
        <div className="fade-in-up d1" style={{ marginBottom: 14 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            Agencia de marketing digital
          </span>
        </div>

        <h2 className="fade-in-up d2" style={{
          fontFamily: "Syne, sans-serif", fontWeight: 900,
          fontSize: "clamp(1.5rem, 5vw, 2.8rem)",
          lineHeight: 1.15, letterSpacing: "-0.02em",
          color: "#fff", marginBottom: 14,
        }}>
          Construimos posicionamento digital para marcas que querem{" "}
          <span className="gradient-text">crescer de verdade.</span>
        </h2>

        <p className="fade-in-up d3" style={{
          fontSize: "clamp(0.82rem, 2.5vw, 0.92rem)",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          maxWidth: 360, margin: "0 auto 28px",
        }}>
          Estrategia, conteudo e resultado — tudo em um so lugar.
        </p>

        <div className="fade-in-up d4 hero-btns" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ fontSize: "0.82rem", padding: "11px 22px" }}>
            <i className="ri-whatsapp-line" />
            Quero mais informacoes
          </a>
          <button
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline" style={{ fontSize: "0.82rem", padding: "11px 22px" }}>
            Ver servicos
            <i className="ri-arrow-down-line" />
          </button>
        </div>
      </div>

      <div className="fade-in-up d6" style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
        color: "rgba(255,255,255,0.2)", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        <span>scroll</span>
        <div style={{ width: 1, height: 24, background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
      </div>
    </section>
  );
}
