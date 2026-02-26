const services = [
  {
    id: 1,
    icon: "ri-video-line",
    name: "Criação de Conteúdo",
    price: "A partir de R$ 5.000",
    description: "Produção completa de conteúdo para redes sociais",
    color: "bg-emerald-100",
    featured: false,
  },
  {
    id: 2,
    icon: "ri-lightbulb-line",
    name: "Consultoria Digital",
    price: "A partir de R$ 3.000",
    description: "Estratégias personalizadas para crescimento digital",
    color: "bg-gray-100",
    featured: false,
  },
  {
    id: 3,
    icon: "ri-megaphone-line",
    name: "Gestão de Campanhas",
    price: "A partir de R$ 8.000",
    description: "Planejamento e execução de campanhas completas",
    color: "bg-gray-100",
    featured: true,
  },
   {
    id: 3,
    icon: "ri-megaphone-line",
    name: "Gestão de Campanhas",
    price: "A partir de R$ 8.000",
    description: "Planejamento e execução de campanhas completas",
    color: "bg-gray-100",
    featured: true,
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-6xl font-extralight text-gray-900 mb-4">
            Serviços
          </h2>
          <p className="text-gray-600 text-base">
            Soluções estratégicas para impulsionar sua presença digital.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                service.featured
                  ? "bg-emerald-400 text-white shadow-xl scale-105"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              {/* Badge destaque */}
              {service.featured && (
                <span className="absolute top-6 right-6 text-xs uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  Mais Procurado
                </span>
              )}

              {/* Ícone */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 ${
                  service.featured
                    ? "bg-white/40"
                    : service.color
                }`}
              >
                <i
                  className={`${service.icon} text-2xl ${
                    service.featured ? "text-white" : "text-gray-900"
                  }`}
                ></i>
              </div>

              {/* Conteúdo */}
              <h3 className="text-2xl font-semibold mb-3">
                {service.name}
              </h3>

              <p
                className={`text-sm mb-6 ${
                  service.featured ? "text-white/90" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              <p className="text-lg font-medium mb-8">
                {service.price}
              </p>

              {/* Botão */}
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                  service.featured
                    ? "bg-white text-emerald-600 hover:bg-gray-200"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}