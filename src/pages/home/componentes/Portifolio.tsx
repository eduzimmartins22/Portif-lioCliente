import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ela from "../../../assets/ela.png";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Breno & Yhasmin - Casamento",
    description:
      "Fiz um Casamento, gravando e deixando as melhores postagens para nunca esquecer em seu instagram e demais redes sociais",
    category: "Casamento",
    image: Ela,
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
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

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
              onClick={() => navigate(`/projeto/${project.id}`)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Imagem */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
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