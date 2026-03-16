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
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Quero mais informações sobre os serviços da Buzz Digital.")}`;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = `Olá, meu nome é ${form.name}.\nMeu e-mail é ${form.email}.\n\nMensagem:\n${form.message}`;
    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      setSending(false);
    }, 700);
  };

  const infoItems = [
    {
      icon: "ri-whatsapp-line",
      label: "WhatsApp",
      value: "+55 (27) 99668-7400",
      href: WA_URL,
    },
    {
      icon: "ri-instagram-line",
      label: "Instagram",
      value: "@obuzzdigital",
      href: "https://www.instagram.com/obuzzdigital/",
    },
    {
      icon: "ri-map-pin-line",
      label: "Localização",
      value: "Serra / ES — remoto & presencial",
      href: null,
    },
  ];

  const socials = [
    { icon: "ri-instagram-line", href: "https://www.instagram.com/obuzzdigital/" },
    { icon: "ri-youtube-line", href: "https://youtube.com/" },
    { icon: "ri-tiktok-line", href: "https://www.tiktok.com/@yhasminfagundes" },
    { icon: "ri-linkedin-box-line", href: "https://www.linkedin.com/in/yhasmin-fagundes-0b5b35211/" },
  ];

  return (
    <footer
      ref={ref}
      id="contato"
      style={{
        background: "#f3eee7",
        borderTop: "1px solid rgba(92,10,22,0.08)",
      }}
    >
      <div className="section-pad" style={{ padding: "80px 0" }}>
        <div className="section-inner">
          <div className="divider" style={{ marginBottom: 36 }} />

          <div className="two-col">
            {/* Coluna esquerda */}
            <div>
              <div className="reveal" style={{ marginBottom: 12 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "rgba(92,10,22,0.08)",
                    border: "1px solid rgba(92,10,22,0.2)",
                    borderRadius: 999,
                    padding: "5px 14px",
                    fontSize: "0.72rem",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "#5c0a16",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#5c0a16",
                      display: "inline-block",
                    }}
                  />
                  {"Contato"}
                </span>
              </div>

              <h2
                className="reveal"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.1,
                  color: "#5c0a16",
                  marginBottom: 12,
                }}
              >
                {"Vamos começar "}
                <span style={{ fontStyle: "normal", color: "#c2a689" }}>
                  {"uma conversa"}
                </span>
              </h2>

              <p
                className="reveal"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(92,10,22,0.55)",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  maxWidth: 300,
                  marginBottom: 32,
                }}
              >
                {"Estamos sempre abertos a novos projetos. Entre em contato e vamos construir algo extraordinário juntos."}
              </p>

              <div
                className="reveal contact-info"
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {infoItems.map(item => (
                  <div
                    key={item.label}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        flexShrink: 0,
                        background: "rgba(92,10,22,0.07)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className={item.icon}
                        style={{ fontSize: "1rem", color: "#5c0a16" }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.58rem",
                          color: "rgba(92,10,22,0.4)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        
                        <a  href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#5c0a16",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            fontFamily: "Inter, sans-serif",
                            marginTop: 2,
                            display: "block",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={e =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = "#c2a689")
                          }
                          onMouseLeave={e =>
                            ((e.currentTarget as HTMLAnchorElement).style.color = "#5c0a16")
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div
                          style={{
                            color: "#5c0a16",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            fontFamily: "Inter, sans-serif",
                            marginTop: 2,
                          }}
                        >
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <div className="reveal-right">
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  border: "1px solid rgba(92,10,22,0.1)",
                  padding: "32px 28px",
                  boxShadow: "0 8px 40px rgba(92,10,22,0.07)",
                }}
              >
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  {[
                    { key: "name", label: "Seu nome", type: "text", placeholder: "Como você se chama?" },
                    { key: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
                  ].map(field => (
                    <div key={field.key}>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.6rem",
                          color: "rgba(92,10,22,0.5)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontFamily: "Inter, sans-serif",
                          marginBottom: 7,
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        required
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: 10,
                          border: "1px solid rgba(92,10,22,0.15)",
                          background: "#faf8f5",
                          color: "#5c0a16",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.88rem",
                          outline: "none",
                          boxSizing: "border-box",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e =>
                          ((e.currentTarget as HTMLInputElement).style.borderColor = "#c2a689")
                        }
                        onBlur={e =>
                          ((e.currentTarget as HTMLInputElement).style.borderColor = "rgba(92,10,22,0.15)")
                        }
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.6rem",
                        color: "rgba(92,10,22,0.5)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: 7,
                      }}
                    >
                      {"Mensagem"}
                    </label>
                    <textarea
                      placeholder={"Conta sobre o seu negócio..."}
                      value={form.message}
                      required
                      rows={4}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: 10,
                        border: "1px solid rgba(92,10,22,0.15)",
                        background: "#faf8f5",
                        color: "#5c0a16",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.88rem",
                        outline: "none",
                        resize: "none",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e =>
                        ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "#c2a689")
                      }
                      onBlur={e =>
                        ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(92,10,22,0.15)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      width: "100%",
                      padding: "13px",
                      borderRadius: 999,
                      border: "none",
                      background: sending ? "#a8896e" : "#c2a689",
                      color: "#5c0a16",
                      fontWeight: 700,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.85rem",
                      cursor: sending ? "default" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "background 0.25s",
                      letterSpacing: "0.03em",
                    }}
                    onMouseEnter={e => {
                      if (!sending)
                        (e.currentTarget as HTMLButtonElement).style.background = "#b09070";
                    }}
                    onMouseLeave={e => {
                      if (!sending)
                        (e.currentTarget as HTMLButtonElement).style.background = "#c2a689";
                    }}
                  >
                    <i
                      className={sending ? "ri-loader-4-line" : "ri-whatsapp-line"}
                      style={{
                        fontSize: "1rem",
                        animation: sending ? "spin 1s linear infinite" : "none",
                      }}
                    />
                    {sending ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          borderTop: "1px solid rgba(92,10,22,0.1)",
          padding: "18px 0",
          background: "#5c0a16",
        }}
      >
        <div className="section-inner">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: "0.75rem",
                color: "rgba(243,238,231,0.4)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "#f3eee7",
                }}
              >
                {"Buzz"}
                <span style={{ color: "#c2a689", fontStyle: "normal" }}>
                  {" Digital"}
                </span>
              </span>
              <span>{"·"}</span>
              <span>{"2025 Todos os direitos reservados."}</span>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {socials.map(s => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(194,166,137,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(243,238,231,0.5)",
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#c2a689";
                    el.style.color = "#c2a689";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(194,166,137,0.25)";
                    el.style.color = "rgba(243,238,231,0.5)";
                  }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </footer>
  );
}