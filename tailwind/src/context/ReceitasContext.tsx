import { createContext, useState, useEffect, ReactNode } from "react";

interface Receita {
  id: number;
  categoria: string;
  nome: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
  imagem: string;
}

interface ContextProps {
  receitas: Receita[];
  categorias: string[];
}

export const ReceitasContext = createContext<ContextProps>({ receitas: [], categorias: [] });

export function ReceitasProvider({ children }: { children: ReactNode }) {
  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {
    fetch("../data/receitas.json")
      .then((res) => res.json())
      .then((data) => setReceitas(data));
  }, []);

  const categorias = [...new Set(receitas.map((r) => r.categoria))];

  return (
    <ReceitasContext.Provider value={{ receitas, categorias }}>
      {children}
    </ReceitasContext.Provider>
  );
}
