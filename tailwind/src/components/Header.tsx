import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-sm bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Logo Sabores do Front"
          className="h-8 w-auto"
        />
      </div>

      {/* Navegação */}
      <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "hover:text-black"
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/categorias"
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "hover:text-black"
          }
        >
          Categorias
        </NavLink>
        <NavLink
          to="/contato"
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "hover:text-black"
          }
        >
          Contato
        </NavLink>

        {/* Link de destaque (como “Access your apps”) */}
        <NavLink
          to="/login"
          className="text-green-600 hover:text-green-700 font-semibold"
        >
          Acessar sua conta
        </NavLink>

        {/* Ícone de busca */}
        <button className="hover:text-black transition">
          <Search size={20} />
        </button>
      </nav>

      {/* Menu responsivo (opcional futuro) */}
      <div className="md:hidden">
        {/* Aqui pode ir um botão hamburguer para mobile */}
      </div>
    </header>
  );
}

export default Header;
