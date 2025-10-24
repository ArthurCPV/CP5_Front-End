import { useForm, type SubmitHandler } from "react-hook-form";

interface FormInputs {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Mensagem enviada:", data);
    reset();
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

      {isSubmitSuccessful ? (
        <p className="text-green-600 font-semibold text-center">
          ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Nome</label>
            <input
              {...register("nome", { required: "Digite seu nome" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              {...register("email", {
                required: "Digite seu e-mail",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea
              {...register("mensagem", { required: "Digite uma mensagem" })}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none resize-none"
            ></textarea>
            {errors.mensagem && (
              <p className="text-red-500 text-sm">{errors.mensagem.message}</p>
            )}
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
