import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Receita {
  id: number;
  nome: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
  imagem: string;
}

export default function DetalheReceita() {
  const { id } = useParams<{ id: string }>();
  const [receita, setReceita] = useState<Receita | null>(null);

  useEffect(() => {
  fetch("/data/receitas.json")
    .then((res) => res.json())
    .then((data) => {
      // 🔁 junta TODAS as receitas de todas as categorias e subcategorias
      const todasReceitas = Object.values(data)
        .flatMap((categoria: any) => Object.values(categoria))
        .flatMap((subcat: any) => subcat);

      const encontrada = todasReceitas.find(
        (r: any) => String(r.id) === id
      );
      setReceita(encontrada || null);
    });
}, [id]);

  if (!receita)
    return (
      <p className="text-center mt-10 text-gray-600">Receita não encontrada 😢</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={receita.imagem}
          alt={receita.nome}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {receita.nome}
          </h1>
          <p className="text-green-600 font-medium mb-4">
            ⏱️ {receita.tempo} | 🍽️ {receita.categoria}
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Ingredientes:
          </h2>
          <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-1">
            {receita.ingredientes.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Modo de Preparo:
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {receita.modoPreparo}
          </p>
        </div>
      </div>
    </div>
  );
}
