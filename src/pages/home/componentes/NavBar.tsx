import { useState, useEffect } from "react";

const WA_URL = "https://wa.me/5527996687400?text=Ola!%20Quero%20mais%20informacoes%20sobre%20os%20servicos%20da%20Buzz%20Digital.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = [
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Depoimentos", id: "depoimentos" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s",
        background: scrolled ? "rgba(92,10,22,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(194,166,137,0.12)" : "none",
      }}
    >
      <div
        className="section-inner"
        style={{ paddingTop: 14, paddingBottom: 14 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
{/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(194,166,137,0.12)",
                border: "1px solid rgba(194,166,137,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#f3eee7",
                  lineHeight: 1,
                }}
              >
                {"B"}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "#f3eee7",
                letterSpacing: "-0.01em",
              }}
            >
              {"Buzz"}
            </span>
          </button>

          {/* Links desktop */}
          <div
            className="hide-mobile"
            style={{ display: "flex", alignItems: "center", gap: 32 }}
          >
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  fontFamily: "Inter, sans-serif",
                  color: "rgba(243,238,231,0.55)",
                  transition: "color 0.25s",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = "#f3eee7")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = "rgba(243,238,231,0.55)")
                }
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA desktop — canto direito */}
          
          <a  href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hide-mobile"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#c2a689",
              color: "#5c0a16",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              padding: "9px 18px",
              borderRadius: 999,
              textDecoration: "none",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.25s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#d4b99a";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#c2a689";
              el.style.transform = "translateY(0)";
            }}
          >
            <i className="ri-whatsapp-line" style={{ fontSize: "0.9rem" }} />
            {"Fale conosco"}
          </a>

          {/* Hamburguer mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1px solid rgba(194,166,137,0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <span style={{ width: 16, height: 1.5, background: "#f3eee7", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translateY(5.5px)" : "none" }} />
            <span style={{ width: 16, height: 1.5, background: "#f3eee7", borderRadius: 2, transition: "all 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ width: 16, height: 1.5, background: "#f3eee7", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg) translateY(-5.5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          className="menu-slide show-mobile"
          style={{
            background: "#3d0610",
            borderTop: "1px solid rgba(194,166,137,0.12)",
            padding: "20px 24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                style={{
                  textAlign: "left",
                  padding: "14px 0",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                  color: "rgba(243,238,231,0.7)",
                  borderBottom: "1px solid rgba(194,166,137,0.1)",
                  transition: "color 0.2s",
                  background: "transparent",
                  border: "none",
                  borderBottomWidth: 1,
                  borderBottomStyle: "solid",
                  borderBottomColor: "rgba(194,166,137,0.1)",
                  cursor: "pointer",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = "#f3eee7")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = "rgba(243,238,231,0.7)")
                }
              >
                {l.label}
              </button>
            ))}
            
            <a  href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 20,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
                background: "#c2a689",
                color: "#5c0a16",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "0.88rem",
                padding: "12px 24px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              <i className="ri-whatsapp-line" />
              {"Fale conosco"}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hide-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}