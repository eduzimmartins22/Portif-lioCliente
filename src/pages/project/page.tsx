import { useParams, useNavigate } from "react-router-dom";
import Ela from "../../assets/ela.png";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();


  
  const images = [
    Ela,
    Ela,
    Ela,
    Ela,
    Ela,
    Ela,
    Ela,
    Ela,
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Botão voltar */}
      <div className="max-w-7xl mx-auto px-8 pt-10">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-gray-900 transition"
        >
          ← Voltar
        </button>
      </div>

      {/* Título */}
      <div className="max-w-7xl mx-auto px-8 mt-10 mb-16">
        <h1 className="text-5xl font-light text-gray-900 tracking-wide">
          CASAMENTO
        </h1>
        <div className="w-24 h-[2px] bg-gray-300 mt-4"></div>
      </div>

      {/* Galeria */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={img}
                alt={`Projeto ${id} - imagem ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}