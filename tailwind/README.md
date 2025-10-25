# DOCUMENTAÇÃO TÉCNICA
## Chekpoint 05 da disciplina de Front-end
---
Integrantes:

ARTHUR DO SANTOS CABRAL, 566515, 1TDSA

VITOR FRIA DALMAGRO, 566052, 1TDSA

GABRIEL BORGES CEDRAZ DE SANTANA, 565911, 1TDSA

---

Estrututura de pastas do projeto.

```md

├── 📂 tailwind
└──
  ├── 📂 public
  │   ├── 📂 assets
  │   └── 📂 data
  │
  ├── 📂 src
  │   ├── 📂 components
  │   │   ├── Carousel.tsx
  │   │   ├── Footer.tsx
  │   │   ├── Header.tsx
  │   │   ├── RecipeCard.tsx
  │   │   └── RecipeSection.tsx
  │   │
  │   ├── 📂 context
  │   │   └── ReceitasContext.tsx
  │   │
  │   ├── 📂 pages
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
