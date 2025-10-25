import { useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  senha: string;
}

export default function AcessarConta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    alert(`Login simulado com sucesso!\nE-mail: ${data.email}`);
    reset();
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Acessar sua Conta
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Faça login para salvar suas receitas favoritas e compartilhar as suas!
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo E-mail */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            {...register("email", {
              required: "O campo e-mail é obrigatório.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um e-mail válido.",
              },
            })}
            className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-600"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Campo Senha */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("senha", {
              required: "A senha é obrigatória.",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres.",
              },
            })}
            className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
              errors.senha
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-600"
            }`}
          />
          {errors.senha && (
            <p className="text-red-600 text-sm mt-1">
              {errors.senha.message}
            </p>
          )}
        </div>

        {/* Botão */}
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
