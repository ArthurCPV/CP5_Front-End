import { useState } from "react";
import RecipeCard from "./RecipeCard";

interface Receita {
  nome: string;
  tempo: string;
  imagem: string;
}

interface RecipeSectionProps {
  titulo: string;
  receitas: Receita[];
  filtro?: string;
}

export default function RecipeSection({ titulo, receitas, filtro = "" }: RecipeSectionProps) {
  const [index, setIndex] = useState(0);
  const [animacao, setAnimacao] = useState<"left" | "right" | null>(null);

  const receitasFiltradas = receitas.filter((r) =>
    r.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const total = receitasFiltradas.length;
  const visiveis = 4;

  if (total === 0) return null;

  // 🔁 Retorna os 4 cards visíveis no estado atual, com looping infinito
  const getVisiveis = () => {
    const lista: Receita[] = [];
    for (let i = 0; i < visiveis; i++) {
      const pos = (index + i) % total;
      lista.push(receitasFiltradas[pos]);
    }
    return lista;
  };

  const proximo = () => {
    setAnimacao("right");
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setAnimacao(null);
    }, 300); // duração da animação
  };

  const anterior = () => {
    setAnimacao("left");
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setAnimacao(null);
    }, 300);
  };

  const receitasVisiveis = getVisiveis();

  return (
    <section className="relative px-6 mb-10 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">{titulo}</h2>

      {/* Botões de navegação */}
      <button
        onClick={anterior}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100 z-10"
      >
        ◀
      </button>
      <button
        onClick={proximo}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100 z-10"
      >
        ▶
      </button>

      {/* Carrossel com transição animada */}
      <div
        className={`
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
        `}
        >

        {receitasVisiveis.map((r, i) => (
          <RecipeCard key={`${r.nome}-${i}`} {...r} />
        ))}
      </div>
    </section>
  );
}
