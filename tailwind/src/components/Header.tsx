import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white sticky top-0 z-50 border-b border-orange-100">
  {/* Logo */}
  <div className="flex items-center space-x-2">
    <img
      src="\assets\Captura de tela 2025-10-22 115144.png"
      alt="Logo Sabores do Front"
      className="h-10 w-auto"
    />
    <h1 className="text-xl font-bold text-orange-600 tracking-tight">Sabores do Front</h1>
  </div>

  {/* Navegação */}
  <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
    <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"}>Início</NavLink>
    <NavLink to="/categorias" className={({ isActive }) => isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"}>Categorias</NavLink>
    <NavLink to="/contato" className={({ isActive }) => isActive ? "text-orange-600 font-semibold" : "hover:text-orange-500"}>Contato</NavLink>
    
    <NavLink to="/login" className="text-orange-600 hover:text-orange-700 font-semibold">
      Acessar sua conta
    </NavLink>
  </nav>
</header>

  );
}

export default Header;