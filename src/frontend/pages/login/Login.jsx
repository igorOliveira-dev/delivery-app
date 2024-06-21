import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as S from "./loginStyle.js";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../backend/firebaseConfig.js";
import ReturnArrow from "../../components/returnArrow/ReturnArrow.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const goToInit = () => {
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const useCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Usuário logado com sucesso");
      goToInit();
    } catch (error) {
      console.error("Erro ao fazer login: ", error.message);
      alert("Email e/ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ReturnArrow />
      <S.Container>
        <S.LoginBox onSubmit={handleLogin}>
          <S.Title>Login</S.Title>
          <S.Line />

          <S.Input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <S.Input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <S.InputSubmit
            type="submit"
            value={loading ? "Carregando..." : "Enviar"}
          />

          <S.HaveAccount>
            Ainda não tem uma conta?{" "}
            <Link to="/register" style={{ color: "cornflowerblue" }}>
              Registre-se
            </Link>
          </S.HaveAccount>
        </S.LoginBox>
      </S.Container>
    </div>
  );
};

export default Login;
