import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Cadastro.css'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [confirma, setConfirma] = useState("");

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
    <>
      <div className="CadastroBox">
        <div className="CadastroLogoBox">
          <img className="CadastroLogo" src="fundoV.jpg" alt="Logo" id="logo" />
        </div>
        <div className="caixaCadastro">
          <h1 className="up">Faça seu cadastro:</h1>
          <form>
            <input
              className="inputup"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className="inputup"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="inputup"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
            />
            <input
              className="inputup"
              type="password"
              placeholder="Digite a senha novamente"
              onChange={(e) => setConfirma(e.target.value)}
              value={confirma}
            />
          </form>
          <p
            className="CadastroEsquecer"
            onClick={() => navigate("/RecuperarSenha")}
          >
            Esqueci a Senha
          </p>
          <div className="botaoentrar">
            <button
              className="CadastroEntrar"
              type="submit"
              onClick={() => submitLogin()}
            >
              Entrar
            </button>
          </div>
          <p className="signinCadastro" onClick={() => navigate("/login")}>
            Já tem conta, faça Login!
          </p>
        </div>
      </div>
    </>
  );
}
