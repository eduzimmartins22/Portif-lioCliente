export function About() {
  return (
    <section id="sobre" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=professional confident content creator in modern studio setting with warm lighting wearing casual elegant attire against soft pastel emerald green background with minimalist aesthetic and contemporary style showcasing authentic personality and creative energy perfect for digital influencer portrait&width=600&height=750&seq=about-img-001&orientation=portrait"
                alt="Sobre Mim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
          <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">(Quem sou eu)</p>
          <br />
          <h2 className="text-5xl font-semibold mb-4">
              <span className="text-gray-900">Criando Impacto</span><br />
              <span className="text-gray-400">No Mundo Digital</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-12">
              <p>
                Sou um <strong>criador de conteúdo apaixonado</strong> por conectar marcas com suas audiências de forma autêntica e impactante. Com anos de experiência no universo digital, transformo ideias em campanhas que geram resultados reais.
              </p>
              <p>
                Minha jornada começou com a paixão por contar histórias e evoluiu para uma carreira dedicada a ajudar empresas a alcançarem seu potencial máximo nas redes sociais. Cada projeto é uma oportunidade de criar algo único e memorável.
              </p>
              <p>
                Trabalho com as principais plataformas digitais, sempre buscando inovação e autenticidade em cada conteúdo produzido. Meu objetivo é criar conexões verdadeiras que transcendem a tela.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-5xl font-bold text-emerald-500 mb-2">500K+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Seguidores</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-emerald-500 mb-2">50M+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Visualizações</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-emerald-500 mb-2">200+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Marcas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}