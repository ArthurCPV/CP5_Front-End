import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && email && mensagem) {
      setEnviado(true);
      setNome("");
      setEmail("");
      setMensagem("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Entre em Contato
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Tem alguma dúvida, sugestão ou quer compartilhar sua receita favorita?
        Envie uma mensagem pra gente!
      </p>

      {enviado ? (
        <p className="text-green-600 font-semibold text-center">
          ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
