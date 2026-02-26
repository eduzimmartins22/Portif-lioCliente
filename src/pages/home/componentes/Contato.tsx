import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = "5527996687400";

    const text = `Olá, meu nome é ${formData.name}.
Meu e-mail é ${formData.email}.

Mensagem:
${formData.message}`;

    const encodedText = encodeURIComponent(text);

    window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
  };

  return (
    <footer id="contato" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Vamos Começar
              <br />
              Uma Conversa
            </h2>

            <p className="text-base text-gray-600 mb-12 leading-relaxed">
              Estou sempre aberto a novos projetos e parcerias. Entre em contato
              e vamos criar algo extraordinário juntos.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-3 font-medium">
                  Seu nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-transparent border-b-2 border-gray-300 py-4 text-base text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-3 font-medium">
                  Seu melhor e-mail
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-transparent border-b-2 border-gray-300 py-4 text-base text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm text-gray-700 mb-3 font-medium">
                  Sua mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full bg-transparent border-2 border-gray-300 py-4 px-4 text-base text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors rounded-lg"
                  placeholder="Digite sua mensagem"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all hover:scale-105"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}