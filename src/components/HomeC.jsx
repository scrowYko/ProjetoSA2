import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeC({ TITULO, CONTAGEM, TIPOC, SITUC }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="fundo">

      <div className="boxTd">
        <div>
          <h1 className="cTitulos">Diponíveis:</h1>
          </div>
        <div className="boxC">
          
          <div className="boxET">
            <h2 className="nomeT">{TITULO}</h2>
            <div className="txt">
              <p>Tipo: {TIPOC}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button> Participe </button>
            <p>{CONTAGEM}</p>
          </div>

        </div>
</div>


      <div>
        <div className="box2">

          <div className="boxET">
            <h2 className="nomeT">TITULO DO TIME</h2>
            <div className="txt">
              <p></p>
              <p></p>
            </div>
          </div>

          <div>
            <p> Finalizado </p>
            <p>Contagem participantes</p>
          </div>

        </div>


        <div className="box2">

          <h1 className="cTitulos"> Campeonatos Ativos</h1>

          <div className="boxET">
            <h2 className="nomeT">TITULO DO TIME</h2>
            <div className="txt">
              <p></p>
              <p></p>
            </div>
          </div>

          <div>
            <p> Finalizado </p>
            <p>Contagem participantes</p>
          </div>

        </div>



      </div>
    </div>
  );
}