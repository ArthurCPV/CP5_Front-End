import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
// import Receitas from "./pages/Receitas";
// import DetalheReceita from "./pages/DetalheReceita";
import Contato from "./pages/Contato";
import AcessarConta from "./pages/AcessarConta";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          {/* <Route path="/categorias/:categoria" element={<Receitas />} /> */}
          {/* <Route path="/receita/:id" element={<DetalheReceita />} /> */}
          <Route path="/login" element={<AcessarConta />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
