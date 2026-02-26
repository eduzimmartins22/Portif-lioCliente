import heroBg from "../../../assets/hero-bg.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pb-8">
      
      <div
        className="absolute inset-0 m-5 rounded-3xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Transformando Ideias em <br/> Conteúdo Viral
        </h1>
        <h1 className="text-1xl md:text-2xl text-gray-200 mb-15 leading-tight">
          Estratégias de conteúdo que impulsionam seu negócio
        </h1>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-emerald-500 text-white font-semibold text-lg hover:bg-emerald-600 transition-all hover:scale-105"
        >
          Vamos Conversar
        </button>
      </div>
    </section>
  );
}