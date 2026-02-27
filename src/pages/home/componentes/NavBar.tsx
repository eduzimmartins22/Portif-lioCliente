import Ela from "../../../assets/ela.png";
import { useState, useEffect } from "react";

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
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.4s",
      background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
    }}>
      <div className="section-inner" style={{ paddingTop: 16, paddingBottom: 16 }}>
        <div className="flex-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative" }}>
              <img src={Ela} alt="Yhasmin" style={{
                width: 40, height: 40, borderRadius: "50%", objectFit: "cover",
                border: "2px solid rgba(0,232,122,0.4)"
              }} />
              <span className="dot-pulse" style={{
                position: "absolute", bottom: -2, right: -2,
                width: 10, height: 10, borderRadius: "50%",
                background: "#00e87a", border: "2px solid #080808"
              }} />
            </div>
            <span style={{
              fontFamily: "Syne, sans-serif", fontWeight: 800,
              fontSize: "1.1rem", color: "#fff", letterSpacing: "-0.01em"
            }}>
              Yhasmin<span style={{ color: "#00e87a" }}>.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}
            className="hide-mobile">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                fontSize: "0.85rem", fontWeight: 500,
                color: "#888", transition: "color 0.25s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}
              >{l.label}</button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button onClick={() => go("contato")} className="btn-primary hide-mobile"
            style={{ padding: "10px 22px", fontSize: "0.82rem" }}>
            <i className="ri-whatsapp-line" style={{ fontSize: "1rem" }} />
            Fale comigo
          </button>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="show-mobile"
            style={{
              width: 40, height: 40, borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 5,
            }}>
            <span style={{
              width: 18, height: 1.5, background: "#fff", borderRadius: 2,
              transition: "all 0.3s",
              transform: open ? "rotate(45deg) translateY(6.5px)" : "none",
            }} />
            <span style={{
              width: 18, height: 1.5, background: "#fff", borderRadius: 2,
              transition: "all 0.3s",
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              width: 18, height: 1.5, background: "#fff", borderRadius: 2,
              transition: "all 0.3s",
              transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none",
            }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="menu-slide show-mobile" style={{
          background: "#0f0f0f",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "24px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                textAlign: "left", padding: "16px 0",
                fontFamily: "Syne, sans-serif", fontWeight: 700,
                fontSize: "1.2rem", color: "#ccc",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
              >{l.label}</button>
            ))}
            <button onClick={() => go("contato")} className="btn-primary"
              style={{ marginTop: 20, justifyContent: "center" }}>
              <i className="ri-whatsapp-line" />
              Fale comigo
            </button>
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
