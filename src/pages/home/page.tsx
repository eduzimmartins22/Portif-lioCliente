import {Hero} from "./componentes/Hero";
import {About} from "./componentes/About";
import Portfolio from "./componentes/Portifolio";
import Services from "./componentes/Services";
import Testimonials from "./componentes/Testimonials";
import {CTA} from "./componentes/CTA";
import {Contact} from "./componentes/Contato";
import {Navbar} from "./componentes/NavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}