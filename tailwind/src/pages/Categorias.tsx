import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Categoria {
  nome: string;
  imagem: string;
  descricao: string;
}

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    // exemplo estático — você pode conectar ao receitas.json depois
    setCategorias([
      {
        nome: "Sobremesas",
        imagem: "https://images.unsplash.com/photo-1612197527762-8b0bde91b9c5?w=800&q=80",
        descricao: "Delícias doces para qualquer momento.",
      },
      {
        nome: "Lanches e Sanduíches",
        imagem: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80",
        descricao: "Rápidos, práticos e cheios de sabor.",
      },
      {
        nome: "Pratos Principais",
        imagem: "https://images.unsplash.com/photo-1605478500123-e47b0b06a8e1?w=800&q=80",
        descricao: "Receitas completas para suas refeições.",
      },
      {
        nome: "Bebidas",
        imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        descricao: "Bebidas refrescantes e criativas.",
      },
    ]);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 mt-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Categorias de Receitas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categorias.map((cat) => (
          <Link
            key={cat.nome}
            to={`/categorias/${cat.nome.toLowerCase()}`}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
