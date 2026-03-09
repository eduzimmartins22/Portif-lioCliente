const services = [
  {
    id: 1,
    icon: "ri-edit-2-line",
    name: "Conteúdo",
    subtitle: "Criação de conteúdo e gestão de redes sociais",
    description:
      "Criamos e publicamos o conteúdo da sua marca com consistência e estratégia. Do briefing à legenda, nosso time cuida de tudo — sem que você precise se preocupar com nada.",
  },
  {
    id: 2,
    icon: "ri-video-line",
    name: "Audiovisual",
    subtitle: "Captação e produção audiovisual",
    description:
      "Seu conteúdo com qualidade de cinema. Roteirizamos, gravamos, editamos e entregamos vídeos e fotos que posicionam sua marca em outro nível — tudo com equipe in house.",
  },
  {
    id: 3,
    icon: "ri-bar-chart-2-line",
    name: "Performance",
    subtitle: "Gestão de anúncios online em Meta e Google",
    description:
      "Gerenciamos a sua compra de mídia. Criamos, validamos e otimizamos campanhas em Meta e Google com foco total em performance — acompanhado de relatórios claros e objetivos.",
  },
  {
    id: 4,
    icon: "ri-smartphone-line",
    name: "Cobertura em Tempo Real",
    subtitle: "Cobertura estratégica de stories para empresas",
    description:
      "Realizamos a cobertura dos bastidores do seu negócio diretamente no seu espaço, registrando atendimentos, rotina e momentos reais da marca — stories que mostram a autenticidade do seu negócio.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Olá!%20Quero%20mais%20informações%20sobre%20os%20serviços%20da%20Buzz%20Digital.";

export default function Services() {
  return (
    <section id="servicos" className="py-32 px-8 bg-[#0f0f13]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">O que oferecemos</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            A Buzz Digital estrutura o marketing da sua empresa com soluções feitas sob medida.
          </h2>
          <p className="text-gray-400 text-base max-w-xl">
            Conheça todos os serviços que oferecemos para que sua empresa tenha mais resultados.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-white/10 bg-[#16161d] px-8 py-8 transition-all duration-300 hover:border-white/20 hover:bg-[#1c1c25]"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Left: icon + title + subtitle */}
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-5">
                    <i className={`${service.icon} text-2xl text-indigo-400`}></i>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-snug">{service.subtitle}</p>
                </div>

                {/* Right: description */}
                <div className="md:w-3/5 flex items-center">
                  <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below services */}
        <div className="mt-10 flex justify-start">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-gray-900 font-semibold text-base hover:bg-gray-100 transition-all hover:scale-105"
          >
            Quero mais informações
          </a>
        </div>
      </div>
    </section>
  );
}