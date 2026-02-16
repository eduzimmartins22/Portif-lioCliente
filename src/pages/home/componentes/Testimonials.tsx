import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Trabalhar com este influenciador foi transformador para nossa marca. O conteúdo criado superou todas as expectativas e gerou um engajamento incrível com nosso público. Profissionalismo e criatividade em cada detalhe.",
    author: "Maria Silva",
    role: "Diretora de Marketing, Fashion Brand",
    image:
      "https://readdy.ai/api/search-image?query=professional business woman executive in elegant corporate attire smiling confidently against soft pastel emerald background in modern office setting with natural lighting showcasing leadership and success perfect for testimonial portrait with warm friendly expression&width=600&height=750&seq=testimonial-01&orientation=portrait",
  },
  {
    id: 2,
    quote:
      "A consultoria digital que recebemos foi excepcional. As estratégias implementadas aumentaram nossa presença online em 300% em apenas três meses. Recomendo fortemente para qualquer empresa que busca crescimento real.",
    author: "Carlos Mendes",
    role: "CEO, Tech Startup",
    image:
      "https://readdy.ai/api/search-image?query=confident male business executive in modern casual professional attire smiling warmly against soft pastel emerald background in contemporary office environment with natural lighting perfect for client testimonial portrait showcasing trust and satisfaction&width=600&height=750&seq=testimonial-02&orientation=portrait",
  },
  {
    id: 3,
    quote:
      "Parceria incrível! O conteúdo produzido foi autêntico e alinhado perfeitamente com os valores da nossa marca. Os resultados foram além do esperado, com milhões de visualizações e um ROI impressionante.",
    author: "Ana Costa",
    role: "Gerente de Comunicação, Wellness Co.",
    image:
      "https://readdy.ai/api/search-image?query=professional businesswoman with friendly smile wearing contemporary business casual outfit against soft pastel emerald background in bright modern office space with natural lighting perfect for positive client testimonial portrait&width=600&height=750&seq=testimonial-03&orientation=portrait",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-32 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full" style={{ aspectRatio: "4/5" }}>
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">
              (Depoimentos)
            </p>

            <h2 className="text-5xl font-semibold mb-16">
              <span className="text-gray-900">O Que Dizem</span>
              <br />
              <span className="text-gray-400">Sobre Meu Trabalho</span>
            </h2>

            <div className="mb-12">
              <div className="text-6xl text-emerald-500 mb-6">"</div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {current.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-emerald-500"></div>
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {current.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {current.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
              >
                <i className="ri-arrow-left-line text-xl text-gray-900"></i>
              </button>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <i className="ri-arrow-right-line text-xl text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}