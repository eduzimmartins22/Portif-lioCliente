import { useState, useEffect } from 'react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="https://public.readdy.ai/ai/img_res/92f57595-e814-4a98-a559-11a6aaece479.png" alt="Logo" className="h-12 w-auto" />
          </a>
        <br />
          <div className="flex items-center gap-12">
            <button onClick={() => scrollToSection('sobre')} className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Sobre</button>
            <button onClick={() => scrollToSection('portfolio')} className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Portfólio</button>
            <button onClick={() => scrollToSection('servicos')} className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Serviços</button>
            <button onClick={() => scrollToSection('depoimentos')} className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Depoimentos</button>
            <button onClick={() => scrollToSection('contato')} className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Contato</button>
          </div>
          <button onClick={() => scrollToSection('contato')} className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors">
            <i className="ri-message-3-line text-lg"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}