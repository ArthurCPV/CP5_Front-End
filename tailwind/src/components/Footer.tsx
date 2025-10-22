function Footer() {
  return (
  <footer className="mt-20">
    {/* Faixa superior */}
    <div className="bg-orange-600 text-white flex flex-col md:flex-row justify-around items-center py-4 text-sm gap-4">
      <div className="flex items-center gap-2">
        <span>🍴</span>
        <p>Receitas testadas e deliciosas</p>
      </div>
      <div className="flex items-center gap-2">
        <span>👨‍💻</span>
        <p>Projeto acadêmico desenvolvido na FIAP</p>
      </div>
      <div className="flex items-center gap-2">
        <span>📚</span>
        <p>Checkpoint 5 — Front-End Design Engineering</p>
      </div>
    </div>

    {/* Corpo principal */}
    <div className="bg-white text-gray-700 px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Logo e descrição */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Sabores do Front</h2>
        <p className="mb-4">
          Unindo tecnologia e gastronomia, este projeto busca entregar
          uma experiência digital moderna, responsiva e saborosa.
        </p>
        <div className="flex gap-3 text-xl">
          <a href="#" aria-label="Instagram" className="hover:text-orange-600">📸</a>
          <a href="#" aria-label="Facebook" className="hover:text-orange-600">👍</a>
          <a href="#" aria-label="Twitter" className="hover:text-orange-600">🐦</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-600">💼</a>
        </div>
      </div>

      {/* Sobre o Projeto */}
      <div>
        <h3 className="font-semibold mb-3 text-orange-600">Sobre o Projeto</h3>
        <ul className="space-y-2">
          <li><span className="font-medium">Curso:</span> Front-End Design Engineering</li>
          <li><span className="font-medium">Instituição:</span> FIAP</li>
          <li><span className="font-medium">Turma:</span> 1TDSA</li>
          <li><span className="font-medium">Ano:</span> 2025</li>
        </ul>
      </div>

      {/* Integrantes */}
      <div>
        <h3 className="font-semibold mb-3 text-orange-600">Integrantes</h3>
        <ul className="space-y-2">
          <li>👨‍💻 <strong>Arthur dos Santos Cabral</strong> — RM: 566515</li>
          <li>👨‍💻 <strong>Vitor Fria Dalmagro</strong> — RM: 566052</li>
          <li>👨‍💻 <strong>Gabriel Borges Cedraz de Santana</strong> — RM: 565911</li>
        </ul>
      </div>
    </div>

    {/* Rodapé final */}
    <div className="text-center py-4 border-t text-sm text-gray-500 bg-orange-50">
      © 2025 Sabores do Front — Projeto acadêmico FIAP | Checkpoint 5.
    </div>
  </footer>

  );
}

export default Footer;
