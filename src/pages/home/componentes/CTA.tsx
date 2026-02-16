export function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-32 px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Pronto Para Criar<br />Algo Incrível Juntos?
        </h2>
        <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
          Vamos transformar sua visão em realidade e criar conteúdo que realmente conecta
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
        >
          Iniciar Projeto
          <i className="ri-arrow-right-line text-xl"></i>
        </button>
        <div className="flex items-center justify-center gap-8 mt-20">
          <div className="w-16 h-16 flex items-center justify-center">
            <i className="ri-instagram-line text-4xl text-gray-400"></i>
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <i className="ri-youtube-line text-4xl text-gray-400"></i>
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <i className="ri-tiktok-line text-4xl text-gray-400"></i>
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <i className="ri-linkedin-box-line text-4xl text-gray-400"></i>
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <i className="ri-twitter-x-line text-4xl text-gray-400"></i>
          </div>
        </div>
      </div>
    </section>
  );
}