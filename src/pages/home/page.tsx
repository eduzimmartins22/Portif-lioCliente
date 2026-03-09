import { Hero } from "./componentes/Hero";
import { About } from "./componentes/About";
import Portfolio from "./componentes/Portifolio";
import Services from "./componentes/Services";
import Testimonials from "./componentes/Testimonials";
import { CTA } from "./componentes/CTA";
import { Contact } from "./componentes/Contato";
import { Navbar } from "./componentes/NavBar";

const clients = [
  "Fashion Brand", "Tech Startup", "Wellness Co.", "Fitness Lab",
  "Studio XYZ", "Marca Premium", "Empresa Digital", "Brand Creative",
  "Fashion Brand", "Tech Startup", "Wellness Co.", "Fitness Lab",
  "Studio XYZ", "Marca Premium", "Empresa Digital", "Brand Creative",
];

function Clients() {
  return (
    <div style={{ overflow: "hidden", background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "16px 0" }}>
      <div className="marquee-track">
        {clients.map((c, i) => (
          <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24, padding: "0 24px", flexShrink: 0 }}>
            <span style={{
              fontFamily: "Syne, sans-serif", fontWeight: 700,
              fontSize: "0.75rem", color: "#2a2a2a",
              textTransform: "uppercase", letterSpacing: "0.12em",
              whiteSpace: "nowrap",
              transition: "color 0.25s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLSpanElement).style.color = "#00e87a"}
              onMouseLeave={e => (e.currentTarget as HTMLSpanElement).style.color = "#2a2a2a"}
            >{c}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#1a1a1a", flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080808" }}>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}
