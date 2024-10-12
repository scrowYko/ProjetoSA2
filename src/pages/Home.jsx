import HomeC from "../components/homeC";
import NavB from "../components/NavB";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import brasileirao from "../../public/brasileirao.png"
import laliga from "../../public/laliga.png"
import premier from "../../public/premier.png"
import UEFA from "../../public/UEFA.png"
import eredivisie from "../../public/eredivisie.png"
import franca from "../../public/franca.png"
import europa from "../../public/europa.png"

export default function Home() {
  const navigate = useNavigate()
  const [isLoggedOn, setIsLoggedOn] = useState("default");

  useEffect(() => {
    setIsLoggedOn(sessionStorage.getItem("isLoggedOn"));
  }, []);

  useEffect(() => {
    if (isLoggedOn == "true") {
      return console.log("logado");
    } else if (isLoggedOn == "default") {
      console.log('await')
    } else (redirect())
  }, [isLoggedOn]);

  const redirect = () => {
    navigate('./')
  }
  return (
    <>
    
    <NavB User="@Garsa" />
    <HomeC 
    brasileiraoL={brasileirao}
    laligaL={laliga}
    premierL={premier}
    francaL={franca}
    eredivisieL={eredivisie}
    UEFAL={UEFA}
    europaL={europa}
    TIPO1={'Pontos corridos'}
    TIPO2={'Eliminatorias'}
    brasileiraoN={'Brasileirão'}
    laligaN={'La Liga'}
    premierN={'Premier League'}
    francaN={'LIGUE 1'}
    eredivisieN={'Campeonato Holandes Eredivisie:'}
    UEFAN={'Champions League'}
    europaN={'Europa League'}
    CONTAGEM={'1/10'}
    SITUC={'Aberto'}
    />
    
    </>
  );
}