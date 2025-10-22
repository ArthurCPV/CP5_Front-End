interface Receita {
  nome: string;
  tempo: string;
  imagem: string;
}

export default function RecipeCard({ nome, tempo, imagem }: Receita) {
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-72 object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
          ⏱️ {tempo}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="font-bold text-lg text-gray-900 mb-3">{nome}</h3>
        <button className="mt-auto bg-orange-500 text-white py-2.5 rounded-xl hover:bg-orange-600 transition font-medium">
          Ver Receita
        </button>
      </div>
    </div>

  );
}
