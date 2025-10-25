import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import RecipeSection from "../components/RecipeSection";

interface Receita {
  nome: string;
  tempo: string;
  imagem: string;
}

interface Categoria {
  [subcategoria: string]: Receita[];
}

type CategoriaKey = "classicas" | "rapidas" | "tematicas";
type ReceitasData = Record<CategoriaKey, Categoria>;

export default function Home() {
  const [dados, setDados] = useState<ReceitasData | null>(null);
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<CategoriaKey>("classicas");
  const [busca, setBusca] = useState("");

  const location = useLocation();

  // Quando vier da página Categorias, definir a categoria enviada
  useEffect(() => {
    const state = location.state as { categoriaSelecionada?: CategoriaKey };
    if (state?.categoriaSelecionada) {
      setCategoriaSelecionada(state.categoriaSelecionada);
    }
  }, [location.state]);

  // Carregar JSON
  useEffect(() => {
    fetch("/data/receitas.json")
      .then((res) => res.json() as Promise<ReceitasData>)
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  const slides = [
    "/assets/image.png",
    "/assets/1757683513143.jpg",
    "/assets/slider-fastfuel.jpg",
    "/assets/ready_meal_banner.png",
  ];

  if (!dados) return <p className="text-center mt-10">Carregando receitas...</p>;

  const categorias = dados[categoriaSelecionada] ?? {};

  return (
    <div className="flex flex-col gap-12 mt-8">
      {/* Carrossel de imagens */}
      <Carousel images={slides} />

      {/* Barra de busca + botões */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-4 px-8">
        <input
          type="text"
          placeholder="Buscar receitas..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="flex-1 border border-gray-200 bg-white rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder:text-gray-400"
          aria-label="Buscar receitas"
        />

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCategoriaSelecionada("classicas")}
            aria-pressed={categoriaSelecionada === "classicas"}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
              categoriaSelecionada === "classicas"
                ? "bg-orange-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            <span className={categoriaSelecionada === "classicas" ? "opacity-100" : "opacity-70"}>🍽️</span>
            <span>Clássicas</span>
          </button>

          <button
            onClick={() => setCategoriaSelecionada("rapidas")}
            aria-pressed={categoriaSelecionada === "rapidas"}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
              categoriaSelecionada === "rapidas"
                ? "bg-orange-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            <span className={categoriaSelecionada === "rapidas" ? "opacity-100" : "opacity-70"}>⚡</span>
            <span>Preparo Rápido</span>
          </button>

          <button
            onClick={() => setCategoriaSelecionada("tematicas")}
            aria-pressed={categoriaSelecionada === "tematicas"}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
              categoriaSelecionada === "tematicas"
                ? "bg-orange-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            <span className={categoriaSelecionada === "tematicas" ? "opacity-100" : "opacity-70"}>🎉</span>
            <span>Temáticas</span>
          </button>
        </div>
      </section>

      {/* Sessões de receitas */}
      {Object.entries(categorias).map(([titulo, receitas]) => (
        <RecipeSection
          key={titulo}
          titulo={titulo}
          receitas={receitas}
          filtro={busca}
        />
      ))}
    </div>
  );
}
