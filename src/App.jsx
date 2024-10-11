import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/RecuperacaoSenha";
import Login from "./pages/Login";
import CriacaoCampeonato from "./pages/CriarC";
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/RecuperarSenha" element={<EsqueciSenha />} />
          <Route path="/CriarC" element={<CriacaoCampeonato />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
