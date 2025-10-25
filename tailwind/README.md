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
cd ArthurCPV/CP5_Front-End

# Instalar as dependências
npm install

# Rodar o projeto em ambiente de desenvolvimento
npm run dev


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
