const WA_URL =
  "https://wa.me/5527996687400?text=Ola!%20Quero%20mais%20informacoes%20sobre%20os%20servicos%20da%20Buzz%20Digital.";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px 20px",
        background: "linear-gradient(135deg, #5c0a16 0%, #7a1020 40%, #3d0610 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(194,166,137,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          border: "1px solid rgba(194,166,137,0.15)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          border: "1px solid rgba(194,166,137,0.1)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 580,
          width: "100%",
          paddingTop: 90,
        }}
      >
        {/* Badge */}
        <div className="fade-in-up d1" style={{ marginBottom: 20 }}>
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
            {"Agência de marketing digital"}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fade-in-up d2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 6vw, 3.4rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
            color: "#f3eee7",
            marginBottom: 18,
          }}
        >
          {"Construímos posicionamento digital "}
          <span style={{ fontStyle: "normal", color: "#c2a689" }}>
            {"para marcas que querem crescer de verdade."}
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="fade-in-up d3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.82rem, 2.5vw, 0.9rem)",
            color: "rgba(243,238,231,0.55)",
            lineHeight: 1.7,
            maxWidth: 380,
            margin: "0 auto 10px",
          }}
        >
          {"Estratégia, conteúdo e resultado — tudo em um só lugar."}
        </p>

        {/* Credibilidade */}
        <p
          className="fade-in-up d3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.78rem, 2vw, 0.85rem)",
            color: "#c2a689",
            letterSpacing: "0.06em",
            marginBottom: 36,
          }}
        >
          {"✦  Há mais de 5 anos posicionando marcas no digital  ✦"}
        </p>

        {/* CTAs */}
        <div
          className="fade-in-up d4 hero-btns"
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          
          <a  href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#c2a689",
              color: "#5c0a16",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              padding: "14px 28px",
              borderRadius: 999,
              textDecoration: "none",
              letterSpacing: "0.03em",
              boxShadow: "0 8px 32px rgba(194,166,137,0.35)",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#d4b99a";
              el.style.boxShadow = "0 12px 40px rgba(194,166,137,0.5)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#c2a689";
              el.style.boxShadow = "0 8px 32px rgba(194,166,137,0.35)";
              el.style.transform = "translateY(0)";
            }}
          >
            <i className="ri-whatsapp-line" style={{ fontSize: "1rem" }} />
            {"Fale conosco"}
          </a>

          <button
            onClick={() =>
              document
                .getElementById("servicos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "transparent",
              color: "#f3eee7",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "0.88rem",
              padding: "14px 28px",
              borderRadius: 999,
              border: "1px solid rgba(243,238,231,0.2)",
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(243,238,231,0.5)";
              el.style.background = "rgba(243,238,231,0.05)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "rgba(243,238,231,0.2)";
              el.style.background = "transparent";
            }}
          >
            {"Ver serviços"}
            <i className="ri-arrow-down-line" />
          </button>
        </div>
      </div>
    </section>
  );
}