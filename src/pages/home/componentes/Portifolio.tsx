import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Campanha Verão 2024",
    description: "Campanha completa para marca de moda com 5M+ de alcance",
    category: "Moda & Lifestyle",
    image:
      "https://readdy.ai/api/search-image?query=vibrant summer fashion campaign photoshoot with bright colorful clothing against minimalist clean white background featuring modern trendy outfits and accessories with professional studio lighting and contemporary aesthetic perfect for social media content and digital marketing materials&width=800&height=1000&seq=portfolio-01&orientation=portrait",
  },
  {
    id: 2,
    title: "Série Tech Reviews",
    description: "Conteúdo viral sobre tecnologia com 10M+ visualizações",
    category: "Tecnologia",
    image:
      "https://readdy.ai/api/search-image?query=modern technology gadgets and devices arranged artistically on clean minimalist desk with soft lighting featuring smartphones tablets and tech accessories against simple neutral background perfect for tech review content and digital product showcase with contemporary professional aesthetic&width=800&height=1000&seq=portfolio-02&orientation=portrait",
  },
  {
    id: 3,
    title: "Collab Fitness Brand",
    description:
      "Parceria estratégica com marca fitness líder de mercado",
    category: "Fitness & Wellness",
    image:
      "https://readdy.ai/api/search-image?query=dynamic fitness lifestyle photography featuring athletic wear and wellness products in bright modern gym environment with clean minimalist aesthetic and natural lighting showcasing healthy active lifestyle perfect for fitness brand collaboration and social media content&width=800&height=1000&seq=portfolio-03&orientation=portrait",
  },
  {
    id: 4,
    title: "Campanha Sustentável",
    description:
      "Projeto de conscientização ambiental com impacto social",
    category: "Sustentabilidade",
    image:
      "https://readdy.ai/api/search-image?query=eco-friendly sustainable lifestyle products and natural elements arranged beautifully on clean white surface with soft natural lighting featuring green plants organic materials and earth-friendly items perfect for environmental awareness campaign and conscious living content&width=800&height=1000&seq=portfolio-04&orientation=portrait",
  },
  {
    id: 5,
    title: "Food Content Series",
    description: "Série gastronômica com restaurantes premium",
    category: "Gastronomia",
    image:
      "https://readdy.ai/api/search-image?query=elegant gourmet food photography featuring beautifully plated dishes on minimalist white background with professional lighting and artistic presentation showcasing premium restaurant cuisine perfect for culinary content and food influencer social media posts&width=800&height=1000&seq=portfolio-05&orientation=portrait",
  },
  {
    id: 6,
    title: "Travel Diaries",
    description: "Documentário de viagens por destinos exclusivos",
    category: "Viagens",
    image:
      "https://readdy.ai/api/search-image?query=stunning travel destination landscape with pristine beaches turquoise waters and tropical paradise scenery featuring luxury resort elements and exotic locations perfect for travel content and wanderlust inspiring social media posts with bright vibrant colors&width=800&height=1000&seq=portfolio-06&orientation=portrait",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-16">
          <h2 className="text-6xl font-extralight text-gray-900 mb-4 max-w-md">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600 text-base">
            Alguns dos trabalhos que mais me orgulho
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105"
              style={{ aspectRatio: "3/4" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Imagem */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Conteúdo */}
              <div
                className={`absolute inset-0 p-8 flex flex-col justify-between transition-all duration-300 ${
                  hoveredId === project.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div>
                  <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90 font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}