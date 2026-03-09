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

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const phone = "5527996687400";
    const text = `Olá, meu nome é ${form.name}.\nMeu e-mail é ${form.email}.\n\nMensagem:\n${form.message}`;
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
      setSending(false);
    }, 700);
  };

  const infoItems = [
    { icon: "ri-whatsapp-line", label: "WhatsApp", value: "+55 (27) 99668-7400" },
    { icon: "ri-instagram-line", label: "Instagram", value: "@yhasmin" },
    { icon: "ri-map-pin-line", label: "Localização", value: "Brasil — remoto & presencial" },
  ];

  const socials = [
    { icon: "ri-instagram-line", href: "https://instagram.com/" },
    { icon: "ri-youtube-line", href: "https://youtube.com/" },
    { icon: "ri-tiktok-line", href: "https://tiktok.com/" },
    { icon: "ri-linkedin-box-line", href: "https://linkedin.com/" },
  ];

  return (
    <footer ref={ref} id="contato" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ padding: "96px 0" }}>
        <div className="section-inner">
          <div className="divider" style={{ marginBottom: 48 }} />

          <div className="two-col">
            {/* Left */}
            <div>
              <div className="reveal" style={{ marginBottom: 20 }}>
                <span className="tag-badge">
                  <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#00e87a", display: "inline-block" }} />
                  Contato
                </span>
              </div>
              <h2 className="reveal" style={{
                fontFamily: "Syne, sans-serif", fontWeight: 900,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: 1.08, letterSpacing: "-0.02em",
                color: "#fff", marginBottom: 20,
              }}>
                Vamos<br />
                <span style={{ color: "#333" }}>começar uma</span><br />
                conversa
              </h2>
              <p className="reveal" style={{
                color: "#555", fontSize: "0.9rem", lineHeight: 1.75,
                maxWidth: 340, marginBottom: 40,
              }}>
                Estou sempre aberta a novos projetos e parcerias. Entre em contato e vamos criar algo extraordinário juntos.
              </p>

              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {infoItems.map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                      background: "rgba(255,255,255,0.05)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <i className={item.icon} style={{ fontSize: "1.1rem", color: "#00e87a" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {item.label}
                      </div>
                      <div style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 500, marginTop: 2 }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal-right">
              <div style={{
                background: "#111", borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "36px 32px",
              }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.65rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                      Seu nome
                    </label>
                    <input
                      className="input-dark"
                      type="text" placeholder="Como você se chama?"
                      value={form.name} required
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.65rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
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
                    <label style={{ display: "block", fontSize: "0.65rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                      Mensagem
                    </label>
                    <textarea
                      className="input-dark"
                      placeholder="Me conte sobre seu projeto..."
                      value={form.message} required rows={5}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ resize: "none" }}
                    />
                  </div>
                  <button type="submit" disabled={sending} style={{
                    width: "100%", padding: "15px",
                    borderRadius: 14, border: "none",
                    background: sending ? "#00b85f" : "#00e87a",
                    color: "#000", fontWeight: 700, fontSize: "0.875rem",
                    cursor: sending ? "default" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    transition: "background 0.25s, transform 0.25s",
                    fontFamily: "inherit",
                  }}
                    onMouseEnter={e => { if (!sending) (e.currentTarget as HTMLButtonElement).style.background = "#00ff88"; }}
                    onMouseLeave={e => { if (!sending) (e.currentTarget as HTMLButtonElement).style.background = "#00e87a"; }}
                  >
                    <i className={sending ? "ri-loader-4-line" : "ri-whatsapp-line"} style={{ fontSize: "1.1rem", animation: sending ? "spin 1s linear infinite" : "none" }} />
                    {sending ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "24px 0" }}>
        <div className="section-inner">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#333" }}>
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, color: "#fff" }}>
                Yhasmin<span style={{ color: "#00e87a" }}>.</span>
              </span>
              <span>·</span>
              <span>© 2025 Todos os direitos reservados.</span>
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
