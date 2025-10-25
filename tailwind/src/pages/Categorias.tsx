import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Categoria {
  nome: string;
  imagem: string;
  descricao: string;
  tipo: "classicas" | "rapidas" | "tematicas"; // relação direta com Home
}

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCategorias([
      {
        nome: "Clássicas",
        imagem: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80",
        descricao: "Receitas tradicionais que nunca saem de moda.",
        tipo: "classicas",
      },
      {
        nome: "Preparo Rápido",
        imagem: "https://images.unsplash.com/photo-1612197527762-8b0bde91b9c5?w=800&q=80",
        descricao: "Praticidade e sabor em minutos.",
        tipo: "rapidas",
      },
      {
        nome: "Temáticas",
        imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        descricao: "Receitas especiais para ocasiões únicas.",
        tipo: "tematicas",
      },
      {
        nome: "Todas as Receitas",
        imagem: "https://images.unsplash.com/photo-1605478500123-e47b0b06a8e1?w=800&q=80",
        descricao: "Explore todas as nossas deliciosas receitas.",
        tipo: "classicas",
      },
    ]);
  }, []);

  const handleClick = (tipo: "classicas" | "rapidas" | "tematicas") => {
    navigate("/", { state: { categoriaSelecionada: tipo } });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Categorias de Receitas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categorias.map((cat) => (
          <div
            key={cat.nome}
            onClick={() => handleClick(cat.tipo)}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group cursor-pointer"
          >
            <img
              src={cat.imagem}
              alt={cat.nome}
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg text-gray-900 mb-2">
                {cat.nome}
              </h2>
              <p className="text-gray-600 text-sm">{cat.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
