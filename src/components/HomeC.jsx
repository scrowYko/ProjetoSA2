import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeC({ brasileiraoN, laligaN, premierN, francaN, eredivisieN, UEFAN, europaN, TIPO1, TIPO2, SITUC, brasileiraoL, laligaL, premierL, francaL, eredivisieL, UEFAL, europaL }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="fundo">

      <div className="boxTd">
        <div>
          <h1 className="cTitulos">Diponíveis:</h1>
          </div>
        <div className="boxC">
          <img className="logoH"src={brasileiraoL}/>
          <div className="boxET">
            <h2 className="nomeT">{brasileiraoN}</h2>
            <div className="txt">
              <p>Tipo: {TIPO2}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">12/20</p>
          </div>

        </div>
        <div className="boxC">
        <img className="logoH" src={laligaL}/>
          <div className="boxET">
            <h2 className="nomeT">{laligaN}</h2>
            <div className="txt">
              <p>Tipo: {TIPO1}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">10/20</p>
          </div>

        </div>
        <div className="boxC">
        <img className="logoH" src={premierL}/>
          <div className="boxET">
            <h2 className="nomeT">{premierN}</h2>
            <div className="txt">
              <p>Tipo: {TIPO1}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">19/20</p>
          </div>

        </div>
        <div className="boxC">
        <img className="logoH" src={francaL}/>
          <div className="boxET">
            <h2 className="nomeT">{francaN}</h2>
            <div className="txt">
              <p>Tipo: {TIPO1}</p>
              <p>Situação: {SITUC}</p>
            </div>
          </div>

          <div className="boxBC">
            <button className="btn"> Participe </button>
            <p className="ctgm">9/18</p>
          </div>

        </div>
</div>

<div className="boxTD2">
<div className="boxTd">
  <div>
    <h1 className="cTitulos">Campeonatos Ativos:</h1>
    </div>
  <div className="boxC">
  <img className="logoH" src={eredivisieL}/>
    <div className="boxT">
      <h2 className="nomeT">{eredivisieN}</h2>
      <div className="txt">
        <p>Tipo: Pontos corrido</p>
        <p>Situação: Em andamento</p>
      </div>
    </div>

    <div className="boxBC">
      <p className="btn2"> Fechado </p>
      <p className="ctgm">18/18</p>
    </div>
    

  </div>
  <div className="boxC">
  <img className="logoH" src={UEFAL}/>
    <div className="boxT">
      <h2 className="nomeT">{UEFAN}</h2>
      <div className="txt">
        <p>Tipo: {TIPO2}</p>
        <p>Situação: Em andamento</p>
      </div>
    </div>

    <div className="boxBC">
      <p className="btn2"> Fechado </p>
      <p className="ctgm">32/32</p>
    </div>
    

  </div>
  
  </div>



  <div className="boxTd">
  <div>
    <h1 className="cTitulos">Resultados Recentes:</h1>
    </div>
  <div className="boxC">
  <img className="logoH" src={europaL}/>
    <div className="boxET">
      <h2 className="nomeT">{europaN}</h2>
      <div className="txtR">
        <p>Tipo: {TIPO2}</p>
        <p className="pResult">Situação: <p>{SITUC}</p></p>
      </div>
    </div>

    <div className="boxBC">
      <button className="btnR"> Resultado </button>
    </div>

  </div>
  </div>
  </div>
    </div>
  );
}