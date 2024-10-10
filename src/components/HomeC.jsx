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
          <img src="./trofeu.png"/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO}</h2>
            <div className="txt">
              <p>Tipo: {TIPOC}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">{CONTAGEM}</p>
          </div>

        </div>
        <div className="boxC">
        <img src="./trofeu.png"/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO}</h2>
            <div className="txt">
              <p>Tipo: {TIPOC}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">{CONTAGEM}</p>
          </div>

        </div>
        <div className="boxC">
        <img src="./trofeu.png"/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO}</h2>
            <div className="txt">
              <p>Tipo: {TIPOC}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">{CONTAGEM}</p>
          </div>

        </div>
        <div className="boxC">
        <img src="./trofeu.png"/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO}</h2>
            <div className="txt">
              <p>Tipo: {TIPOC}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">{CONTAGEM}</p>
          </div>

        </div>
</div>

<div className="boxTD2">
<div className="boxTd">
  <div>
    <h1 className="cTitulos">Campeonatos Ativos:</h1>
    </div>
  <div className="boxC">
  <img src="./trofeu.png"/>
    <div className="boxT">
      <h2 className="nomeT">Campeonato Holandes Eredivisie:</h2>
      <div className="txt">
        <p>Tipo: Pontos corrido</p>
        <p>Situação: Encerrado</p>
      </div>
    </div>

    <div className="boxBC">
      <p className="btn2"> Finalizado </p>
      <p className="ctgm">10/10</p>
    </div>
    

  </div>
  <div className="boxC">
  <img src="./trofeu.png"/>
    <div className="boxT">
      <h2 className="nomeT">Champions League</h2>
      <div className="txt">
        <p>Tipo: {TIPOC}</p>
        <p>Situação: Encerrado</p>
      </div>
    </div>

    <div className="boxBC">
      <p className="btn2"> Finalizado </p>
      <p className="ctgm">10/10</p>
    </div>
    

  </div>
  
  </div>



  <div className="boxTd">
  <div>
    <h1 className="cTitulos">Resultados Recentes:</h1>
    </div>
  <div className="boxC">
  <img src="./trofeu.png"/>
    <div className="boxET">
      <h2 className="nomeT">{TITULO}</h2>
      <div className="txt">
        <p>Tipo: {TIPOC}</p>
        <p>Situação: <p>{SITUC}</p></p>
      </div>
    </div>

    <div className="boxBC">
      <button className="btn"> Participe </button>
      <p className="ctgm">{CONTAGEM}</p>
    </div>

  </div>
  </div>
  </div>
    </div>
  );
}