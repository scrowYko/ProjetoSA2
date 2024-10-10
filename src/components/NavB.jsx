import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavB({}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="Nav">
      <div className="Box">
        <div className="user">
          <p className="stclogo"> STC </p>
        </div>

        <input
          type="search"
          className="search"
          id="1"
          placeholder="Pesquise aqui..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <ul className="outros">
          <li onClick={() => navigate("/")}>Ranking</li>
          <li onClick={() => navigate("/Perfil")}>Recomendações</li>
          <li onClick={() => navigate("/Config")}>Novo campeonato</li>
          <li onClick={() => navigate("/Favoritos")}>Meus campeonatos</li>
          <li onClick={() => navigate("/Sobre")}>Sobre Nos</li>

        </ul>
      </div>
    </div>
  );
}