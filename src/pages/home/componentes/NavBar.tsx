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
    { label: "Servicos", id: "servicos" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Depoimentos", id: "depoimentos" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.4s",
      background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
    }}>
      <div className="section-inner" style={{ paddingTop: 14, paddingBottom: 14 }}>
        <div className="flex-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 9,
              background: "linear-gradient(135deg, #00e87a, #00d4ff)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <i className="ri-flashlight-fill" style={{ color: "#000", fontSize: "0.9rem" }} />
            </div>
            <span style={{
              fontFamily: "Syne, sans-serif", fontWeight: 800,
              fontSize: "1rem", color: "#fff", letterSpacing: "-0.01em"
            }}>
              Buzz<span style={{ color: "#00e87a" }}>.</span>Digital
            </span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                fontSize: "0.82rem", fontWeight: 500,
                color: "#666", transition: "color 0.25s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}
              >{l.label}</button>
            ))}
          </div>

          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary hide-mobile"
            style={{ padding: "9px 20px", fontSize: "0.78rem" }}>
            <i className="ri-whatsapp-line" style={{ fontSize: "0.9rem" }} />
            Fale conosco
          </a>

          <button onClick={() => setOpen(!open)} className="show-mobile"
            style={{
              width: 38, height: 38, borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 4,
            }}>
            <span style={{ width: 16, height: 1.5, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translateY(5.5px)" : "none" }} />
            <span style={{ width: 16, height: 1.5, background: "#fff", borderRadius: 2, transition: "all 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ width: 16, height: 1.5, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg) translateY(-5.5px)" : "none" }} />
          </button>
        </div>
      </div>

      {open && (
        <div className="menu-slide show-mobile" style={{
          background: "#0f0f0f",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "20px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                textAlign: "left", padding: "14px 0",
                fontFamily: "Syne, sans-serif", fontWeight: 700,
                fontSize: "1.1rem", color: "#ccc",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
              >{l.label}</button>
            ))}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ marginTop: 16, justifyContent: "center" }}>
              <i className="ri-whatsapp-line" />
              Fale conosco
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
