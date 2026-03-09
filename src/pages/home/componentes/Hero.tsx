import heroBg from "../../../assets/hero-bg.png";

const WA_URL = "https://wa.me/5527996687400?text=Ola!%20Quero%20mais%20informacoes%20sobre%20os%20servicos%20da%20Buzz%20Digital.";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pb-8">
      <div
        className="absolute inset-0 m-5 rounded-3xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto w-full" style={{ paddingTop: 80 }}>
        <div className="fade-in-up d1" style={{ marginBottom: 14 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            Agencia de marketing digital
          </span>
        </div>

        <h2 className="fade-in-up d2" style={{
          fontFamily: "Syne, sans-serif", fontWeight: 900,
          fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)",
          lineHeight: 1.15, letterSpacing: "-0.02em",
          color: "#fff", marginBottom: 16,
        }}>
          Construimos posicionamento digital para marcas que querem{" "}
          <span className="gradient-text">crescer de verdade.</span>
        </h2>

        <p className="fade-in-up d3" style={{
          fontSize: "0.9rem",
          color: "rgba(255,255,255,0.5)",
          marginBottom: 32, lineHeight: 1.7,
          maxWidth: 380, margin: "0 auto 32px",
        }}>
          Estrategia, conteudo e resultado — tudo em um so lugar.
        </p>

        <div className="fade-in-up d4" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.82rem", padding: "11px 24px" }}
          >
            <i className="ri-whatsapp-line" style={{ fontSize: "0.95rem" }} />
            Quero mais informacoes
          </a>
          <button
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
            style={{ fontSize: "0.82rem", padding: "11px 24px" }}
          >
            Ver servicos
            <i className="ri-arrow-down-line" />
          </button>
        </div>
      </div>

      <div className="fade-in-up d6" style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: "rgba(255,255,255,0.2)", fontSize: "0.6rem", letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}>
        <span>scroll</span>
        <div style={{ width: 1, height: 28, background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
      </div>
    </section>
  );
}
