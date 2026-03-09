import { useState, useEffect, useRef } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.querySelectorAll(".reveal,.reveal-left,.reveal-right")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 100));
      });
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

const WA_NUMBER = "5527996687400";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = `Ola, meu nome e ${form.name}.\nMeu e-mail e ${form.email}.\n\nMensagem:\n${form.message}`;
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      setSending(false);
    }, 700);
  };

  const infoItems = [
    { icon: "ri-whatsapp-line", label: "WhatsApp", value: "+55 (27) 99668-7400", href: `https://wa.me/${WA_NUMBER}` },
    { icon: "ri-instagram-line", label: "Instagram", value: "@buzzdigital", href: "https://instagram.com/" },
    { icon: "ri-map-pin-line", label: "Localizacao", value: "Brasil — remoto & presencial", href: null },
  ];

  const socials = [
    { icon: "ri-instagram-line", href: "https://instagram.com/" },
    { icon: "ri-youtube-line", href: "https://youtube.com/" },
    { icon: "ri-tiktok-line", href: "https://tiktok.com/" },
    { icon: "ri-linkedin-box-line", href: "https://linkedin.com/" },
  ];

  return (
    <footer ref={ref} id="contato" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ padding: "72px 0" }}>
        <div className="section-inner">
          <div className="divider" style={{ marginBottom: 40 }} />

          <div className="two-col">
            <div>
              <div className="reveal" style={{ marginBottom: 14 }}>
                <span className="tag-badge">
                  <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
                  Contato
                </span>
              </div>
              <h2 className="reveal" style={{
                fontFamily: "Syne, sans-serif", fontWeight: 900,
                fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                lineHeight: 1.1, letterSpacing: "-0.02em",
                color: "#fff", marginBottom: 14,
              }}>
                Vamos comecar<br />
                <span style={{ color: "#333" }}>uma conversa</span>
              </h2>
              <p className="reveal" style={{
                color: "#555", fontSize: "0.85rem", lineHeight: 1.75,
                maxWidth: 320, marginBottom: 32,
              }}>
                Estamos sempre abertos a novos projetos e parcerias. Entre em contato e vamos construir algo extraordinario juntos.
              </p>

              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {infoItems.map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: "rgba(255,255,255,0.04)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <i className={item.icon} style={{ fontSize: "1rem", color: "#00e87a" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6rem", color: "#3a3a3a", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                          color: "#bbb", fontSize: "0.82rem", fontWeight: 500, marginTop: 1,
                          display: "block", textDecoration: "none", transition: "color 0.2s",
                        }}
                          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#00e87a"}
                          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#bbb"}
                        >{item.value}</a>
                      ) : (
                        <div style={{ color: "#bbb", fontSize: "0.82rem", fontWeight: 500, marginTop: 1 }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div style={{
                background: "#111", borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "28px 26px",
              }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.6rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}>
                      Seu nome
                    </label>
                    <input
                      className="input-dark"
                      type="text" placeholder="Como voce se chama?"
                      value={form.name} required
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.6rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}>
                      E-mail
                    </label>
                    <input
                      className="input-dark"
                      type="email" placeholder="seu@email.com"
                      value={form.email} required
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.6rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 7 }}>
                      Mensagem
                    </label>
                    <textarea
                      className="input-dark"
                      placeholder="Conta sobre o seu negocio..."
                      value={form.message} required rows={4}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ resize: "none" }}
                    />
                  </div>
                  <button type="submit" disabled={sending} style={{
                    width: "100%", padding: "13px",
                    borderRadius: 12, border: "none",
                    background: sending ? "#00b85f" : "#00e87a",
                    color: "#000", fontWeight: 700, fontSize: "0.82rem",
                    cursor: sending ? "default" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    transition: "background 0.25s",
                    fontFamily: "inherit",
                  }}
                    onMouseEnter={e => { if (!sending) (e.currentTarget as HTMLButtonElement).style.background = "#00ff88"; }}
                    onMouseLeave={e => { if (!sending) (e.currentTarget as HTMLButtonElement).style.background = "#00e87a"; }}
                  >
                    <i className={sending ? "ri-loader-4-line" : "ri-whatsapp-line"} style={{ fontSize: "1rem", animation: sending ? "spin 1s linear infinite" : "none" }} />
                    {sending ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px 0" }}>
        <div className="section-inner">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.78rem", color: "#2a2a2a" }}>
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, color: "#fff" }}>
                Buzz<span style={{ color: "#00e87a" }}>.</span>Digital
              </span>
              <span>·</span>
              <span>2025 Todos os direitos reservados.</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {socials.map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
