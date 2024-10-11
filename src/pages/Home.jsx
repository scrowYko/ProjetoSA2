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
    LOGO1={brasileirao}
    LOGO2={laliga}
    LOGO3={premier}
    LOGO4={franca}
    LOGO5={eredivisie}
    LOGO6={UEFA}
    TIPO1={'Pontos corridos'}
    TIPO2={'Eliminatorias'}
    TITULO1={'Brasileirão'}
    TITULO2={'La Liga'}
    TITULO3={'Premier League'}
    TITULO4={'LIGUE 1'}
    TITULO5={'Campeonato Holandes Eredivisie:'}
    TITULO6={'PAULISTA'}
    CONTAGEM={'1/10'}
    SITUC={'Aberto'}
    />
    
    </>
  );
}