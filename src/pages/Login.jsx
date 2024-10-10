import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
    setPasswordUser(localStorage.getItem("senha"));
  }, []);

  const submitLogin = () => {
    if (email == emailUser && senha == passwordUser) {
      sessionStorage.setItem("isLoggedOn", "true");
      navigate("/");
      console.log("funcionou");
    } else window.alert("Senha ou Email incorretos");
  };
  return (
      <div className="login">
        <div className="titulo">
          <h1 className="stc">STC</h1>
          <p className="subtitle">Soccer Teammates Clubs</p>
        </div>

        <div className="boxlogin">
          <form>
            <p className="t1">Email:</p>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p className="t1">Senha:</p>
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
            />
          
          <p
            className="esqueci"
            onClick={() => navigate("/RecuperarSenha")}
          >
            Esqueci a Senha
          </p>
          </form>

          <button
            className="buttonentrar"
            type="submit"
            onClick={() => submitLogin()}
          >
            Entrar
          </button>
          <p className="cadastro" 
          onClick={() => navigate("/Cadastro")

          }>
            Não tem conta? Cadastre-se
          </p>
        </div>
      </div>
  );
}
