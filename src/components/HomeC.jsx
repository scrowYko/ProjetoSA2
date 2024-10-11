import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeC({ TITULO1, TITULO2, TITULO3, TITULO4, TITULO5, TITULO6, TIPO1, TIPO2, SITUC, LOGO1, LOGO2, LOGO3, LOGO4, LOGO5, LOGO6 }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="fundo">

      <div className="boxTd">
        <div>
          <h1 className="cTitulos">Diponíveis:</h1>
          </div>
        <div className="boxC">
          <img className="logoH"src={LOGO1}/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO1}</h2>
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
        <img className="logoH" src={LOGO2}/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO2}</h2>
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
        <img className="logoH" src={LOGO3}/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO3}</h2>
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
        <img className="logoH" src={LOGO4}/>
          <div className="boxET">
            <h2 className="nomeT">{TITULO4}</h2>
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
  <img className="logoH" src={LOGO5}/>
    <div className="boxT">
      <h2 className="nomeT">{TITULO5}</h2>
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
  <img className="logoH" src={LOGO6}/>
    <div className="boxT">
      <h2 className="nomeT">Champions League</h2>
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
  <img src="./trofeu.png"/>
    <div className="boxET">
      <h2 className="nomeT">{TITULO6}</h2>
      <div className="txt">
        <p>Tipo: {TIPO2}</p>
        <p>Situação: <p>{SITUC}</p></p>
      </div>
    </div>

    <div className="boxBC">
      <button className="btn"> Participe </button>
    </div>

  </div>
  </div>
  </div>
    </div>
  );
}