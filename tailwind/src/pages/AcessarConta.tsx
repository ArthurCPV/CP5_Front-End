import { useState } from "react";

export default function AcessarConta() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || senha === "") {
      setErro("Preencha todos os campos.");
    } else {
      setErro("");
      alert("Login simulado com sucesso!");
      // futura integração com backend (API)
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Acessar sua Conta
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Faça login para salvar suas receitas favoritas e compartilhar as suas!
      </p>

      {erro && (
        <p className="text-red-600 font-medium text-center mb-4">{erro}</p>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Entrar
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Ainda não tem uma conta?{" "}
        <a href="#" className="text-green-600 hover:underline">
          Cadastre-se
        </a>
      </p>
    </div>
  );
}
