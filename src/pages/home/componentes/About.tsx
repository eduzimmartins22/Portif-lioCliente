import { useEffect, useRef } from "react";

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

export function About() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} id="sobre" className="section-pad" style={{ padding: "64px 0", background: "#0d0d0d" }}>
      <div className="section-inner">
        <div className="divider" style={{ marginBottom: 36 }} />

        <div className="reveal" style={{ marginBottom: 14 }}>
          <span className="tag-badge">
            <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
            Quem somos
          </span>
        </div>

        <div className="two-col">
          <div className="reveal-left" style={{ position: "relative" }}>
            <div style={{ borderRadius: 14, overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Buzz Digital Team"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 60%)" }} />
            </div>
            <div style={{
              position: "absolute", bottom: 16, left: 16,
              background: "rgba(8,8,8,0.88)", backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 11, padding: "10px 14px",
            }}>
              <div style={{ color: "#00e87a", fontSize: "0.58rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Resultados reais</div>
              <div style={{ color: "#fff", fontSize: "1rem", fontWeight: 900, fontFamily: "Syne, sans-serif", marginTop: 2 }}>Milhoes de views</div>
            </div>
          </div>

          <div>
            <h2 className="reveal" style={{
              fontFamily: "Syne, sans-serif", fontWeight: 900,
              fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: 18,
            }}>
              Posicionamento digital<br />
              <span style={{ color: "#333" }}>para marcas que crescem</span>
            </h2>

            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ color: "#777", fontSize: "0.83rem", lineHeight: 1.8 }}>
                A <strong style={{ color: "#ccc" }}>Buzz Digital</strong> e especializada em posicionamento e estrategia de conteudo para marcas que desejam crescer no digital de forma consistente.
              </p>
              <p style={{ color: "#777", fontSize: "0.83rem", lineHeight: 1.8 }}>
                Nosso trabalho vai muito alem de publicar nas redes sociais. Acreditamos que um perfil bem posicionado precisa de estrategia, clareza de comunicacao e conteudo pensado para gerar resultado.
              </p>
              <p style={{ color: "#777", fontSize: "0.83rem", lineHeight: 1.8 }}>
                Ao longo dos ultimos anos, a Buzz participou da construcao de diversos perfis, desenvolvendo estrategias que alcancaram milhoes de visualizacoes.
              </p>
            </div>

            <div className="reveal stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 24 }}>
              {[
                { value: "3Mi+", label: "Visualizacoes" },
                { value: "200+", label: "Marcas" },
                { value: "100%", label: "In house" },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10, padding: "12px 10px",
                }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 900, fontSize: "1.3rem", color: "#00e87a", marginBottom: 3 }}>{stat.value}</div>
                  <div style={{ color: "#444", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
