# DOCUMENTAÇÃO TÉCNICA
## Chekpoint 05 da disciplina de Front-end
---
Integrantes:

ARTHUR DO SANTOS CABRAL, 566515, 1TDSA

VITOR FRIA DALMAGRO, 566052, 1TDSA

GABRIEL BORGES CEDRAZ DE SANTANA, 565911, 1TDSA

---

## Objetivo do Projeto

O projeto consiste no desenvolvimento de um website de receitas gastronômicas, permitindo que pessoas curiosas e apaixonadas pela culinária encontrem inspirações e aprendam novas técnicas da alta cozinha. O sistema facilita o acesso às receitas de forma prática, apresentando:

• Organização por categorias como entradas, pratos principais e sobremesas
• Detalhamento completo de cada receita (ingredientes, modo de preparo etc.)
• Navegação intuitiva entre páginas através de rotas
• Conteúdo carregado dinamicamente a partir de arquivos JSON (somente leitura)

A proposta é proporcionar uma experiência agradável de descoberta culinária, ajudando usuários a explorarem diferentes sabores com facilidade.

Estrututura de pastas do projeto.


### Tecnologias Utilizadas

| Tecnologia | Finalidade |
|----------|------------|
| **Vite.js** | Build tool para ambiente rápido e otimizado |
| **React + TypeScript** | Criação de interfaces com tipagem segura |
| **Tailwind CSS** | Estilização responsiva e prática |
| **HTML Semântico** | Melhor estrutura e acessibilidade do conteúdo |
| **JSON** | Armazenamento e leitura dos dados das receitas |

```md

├── tailwind
└──
  ├── public
  │   ├── assets
  │   └── data
  │
  ├── src
  │   ├── components
  │   │   ├── Carousel.tsx
  │   │   ├── Footer.tsx
  │   │   ├── Header.tsx
  │   │   ├── RecipeCard.tsx
  │   │   └── RecipeSection.tsx
  │   │
  │   ├── context
  │   │   └── ReceitasContext.tsx
  │   │
  │   ├── pages
  │   │   ├── AcessarConta.tsx
  │   │   ├── Categorias.tsx
  │   │   ├── Contato.tsx
  │   │   ├── DetalheReceita.tsx
  │   │   └── Home.tsx
  │   │
  │   ├── App.tsx
  │   ├── index.css
  │   └── main.tsx
  │
  ├── .gitignore
  ├── README.md
  ├── eslint.config.js
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── tailwind.config.js
  ├── tsconfig.app.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  └── vite.config.ts
```

## Instalação & Execução

# Clonar o repositório
git clone https://github.com/ArthurCPV/CP5_Front-End/

# Acessar a pasta do projeto
cd CP5_Front-End

# Instalar as dependências
npm install

# Rodar o projeto em ambiente de desenvolvimento
npm run dev



