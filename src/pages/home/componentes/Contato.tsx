import { useState } from 'react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);
      const response = await fetch('https://readdy.ai/api/form/d697386a728k8ctu2jlg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer id="contato" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Vamos Começar<br />Uma Conversa
            </h2>
            <p className="text-base text-gray-600 mb-12 leading-relaxed">
              Estou sempre aberto a novos projetos e parcerias. Entre em contato e vamos criar algo extraordinário juntos.
            </p>
            <form onSubmit={handleSubmit} data-readdy-form id="contact-form">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm text-gray-700 mb-3 font-medium">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-300 py-4 text-base text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm text-gray-700 mb-3 font-medium">
                  Seu melhor e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-300 py-4 text-base text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-700 mb-3 font-medium">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-transparent border-2 border-gray-300 py-4 text-base text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Digite sua mensagem"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
              {submitStatus === 'success' && <p className="mt-4 text-sm text-green-500">Mensagem enviada com sucesso!</p>}
              {submitStatus === 'error' && <p className="mt-4 text-sm text-red-500">Erro ao enviar mensagem. Tente novamente.</p>}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}