import React, { useState } from "react";

import * as S from "./registerStyle.js";

import { auth, db } from "../../../backend/firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import ReturnArrow from "../../components/returnArrow/ReturnArrow.jsx";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const goToInit = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: name,
        phone: phone,
        address: address,
        post: "user",
      });

      console.log("Conta criada com sucesso: ", userCredential.user);
      goToInit();
    } catch (error) {
      console.error("Erro ao criar conta: ", error.message);
      alert(
        "Algum erro aconteceu ao criar a conta, se o problema persistir entre em contato com o suporte."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e) => {
    const valorOriginal = e.target.value;
    const valorNumerico = valorOriginal.replace(/\D/g, "");

    const valorFormatado = valorNumerico
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");

    setPhone(valorFormatado);
  };

  return (
    <div>
      <ReturnArrow />
      <S.Container>
        <S.RegisterBox onSubmit={handleSubmit}>
          <S.Title>Registro</S.Title>
          <S.Line />
          <S.Input
            type="text"
            placeholder="Nome completo"
            required
            onChange={(e) => setName(e.target.value)}
          />

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

          <S.Input
            type="tel"
            placeholder="Telefone"
            required
            onChange={handlePhoneChange}
            value={phone}
          />

          <S.InputAddress
            type="text"
            placeholder="Endereço"
            required
            onChange={(e) => setAddress(e.target.value)}
          />

          <S.InputSubmit
            type="submit"
            value={loading ? "Carregando..." : "Enviar"}
          />

          <S.HaveAccount>
            Já tem uma conta?{" "}
            <Link to="/login" style={{ color: "cornflowerblue" }}>
              Entrar
            </Link>
          </S.HaveAccount>
        </S.RegisterBox>
      </S.Container>
    </div>
  );
};

export default Register;
