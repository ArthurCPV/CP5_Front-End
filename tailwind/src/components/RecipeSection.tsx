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
  const [index, setIndex] = useState(0); // index do primeiro card visível
  const [animacao, setAnimacao] = useState<"left" | "right" | null>(null);

  const receitasFiltradas = receitas.filter((r) =>
    r.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const total = receitasFiltradas.length;
  const visiveis = 4;

  if (total === 0) return null;

  // Gera um array circular e garante que sempre teremos "visiveis" elementos (repetindo se necessário)
  const circularAt = (pos: number) => ((pos % total) + total) % total;
  const getVisiveis = () => {
    const list: Receita[] = [];
    for (let i = 0; i < visiveis; i++) {
      list.push(receitasFiltradas[circularAt(index + i)]);
    }
    return list;
  };

  // CLIQUE EM '▶' -> quer mostrar próxima receita: visualmente os cards deslizam para a esquerda
  const proximo = () => {
    if (animacao) return; // evita cliques enquanto anima
    setAnimacao("left"); // visualmente move para a esquerda
    setTimeout(() => {
      setIndex((prev) => circularAt(prev + 1));
      setAnimacao(null);
    }, 350); // combine com duration abaixo
  };

  // CLIQUE EM '◀' -> visualmente move para a direita
  const anterior = () => {
    if (animacao) return;
    setAnimacao("right");
    setTimeout(() => {
      setIndex((prev) => circularAt(prev - 1));
      setAnimacao(null);
    }, 350);
  };

  const receitasVisiveis = getVisiveis();

  // Determine transform em pixels percentuais: 1 passo = largura de 1 card (~25%)
  const transformStyle =
    animacao === "left" ? "translateX(-25%)" : animacao === "right" ? "translateX(25%)" : "translateX(0)";

  return (
    <section className="relative px-6 mb-20 overflow-visible z-0">
      <h2 className="text-2xl font-bold mb-6">{titulo}</h2>

      {/* Botões de navegação */}
      <button
        onClick={proximo}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100 z-20"
      >
        ◀
      </button>
      <button
        onClick={anterior}
        aria-label="Próximo"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100 z-20"
      >
        ▶
      </button>

      {/* Container dos cards */}
      <div
        style={{
          transform: transformStyle,
          transition: animacao ? "transform 350ms ease" : "none",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {receitasVisiveis.map((r, i) => (
          <RecipeCard key={`${r.nome}-${i}`} {...r} />
        ))}
      </div>
    </section>

  );
}
