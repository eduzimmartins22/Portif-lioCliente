import { useState, useEffect } from "react";
import { Hero } from "./componentes/Hero";
import { About } from "./componentes/About";
import Portfolio from "./componentes/Portifolio";
import Services from "./componentes/Services";
import Testimonials from "./componentes/Testimonials";
import { Contact } from "./componentes/Contato";
import { Navbar } from "./componentes/NavBar";





function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Voltar ao topo"
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 99,
        width: 48, height: 48, borderRadius: "50%",
        background: "#00e87a", border: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#000", fontSize: "1.2rem", cursor: "pointer",
        boxShadow: "0 4px 24px rgba(0,232,122,0.35)",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) translateY(0)" : "scale(0.7) translateY(12px)",
        transition: "all 0.3s cubic-bezier(.16,1,.3,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#00ff88"}
      onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "#00e87a"}
    >
      <i className="ri-arrow-up-line" />
    </button>
  );
}

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080808" }}>
      <Navbar />
      <Hero />
     
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <BackToTop />
    </div>
  );
}
