import { Link } from "react-router-dom";
import { useState } from "react";

export default function RecipeCard({ nome, tempo, imagem, id }: any) {
  const [imgSrc, setImgSrc] = useState(imagem);

  const fallbackImage = "/assets/bandeja-de-comida.png"; // imagem de fallback

  return (
    <Link
      to={`/receita/${id}`}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
    >
      {/* Imagem */}
      <div className="relative">
        <img
          src={imgSrc || fallbackImage}
          alt={nome}
          onError={() => setImgSrc(fallbackImage)}
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-3 right-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
          ⏱️ {tempo}
        </div>
      </div>

      {/* Informações */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="font-bold text-lg text-gray-900 mb-3">{nome}</h3>
        <p className="mt-auto bg-orange-500 text-white py-2.5 rounded-xl text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ver Receita →
        </p>
      </div>
    </Link>
  );
}
