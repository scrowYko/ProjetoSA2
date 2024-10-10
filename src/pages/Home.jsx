import HomeC from "../components/homeC";
import NavB from "../components/NavB";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

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
    TITULO={'PAULISTA'}
    CONTAGEM={'1/10'}
    TIPOC={'Eliminatorias'}
    SITUC={'Aberto'}
    />
    
    </>
  );
}