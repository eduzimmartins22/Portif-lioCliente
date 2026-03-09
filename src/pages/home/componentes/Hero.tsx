import heroBg from "../../../assets/hero-bg.png";

export function Hero() {
  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá!%20Quero%20mais%20informações%20sobre%20os%20serviços%20da%20Buzz%20Digital.";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 pb-8">
      {/* Background */}
      <div
        className="absolute inset-0 m-5 rounded-3xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Construímos posicionamento digital para marcas que querem crescer de verdade.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Estratégia, conteúdo e resultado — tudo em um só lugar.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
        >
          Quero mais informações
        </a>
      </div>
    </section>
  );
}