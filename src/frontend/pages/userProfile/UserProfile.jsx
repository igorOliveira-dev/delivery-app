import React from "react";
import ReturnArrow from "../../components/returnArrow/ReturnArrow";

import { signOut } from "firebase/auth";
import { auth } from "../../../backend/firebaseConfig.js";

import * as S from "./userProfileStyle.js";

import UseUser from "../../../backend/hooks/UseUser";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, userInfo } = UseUser();

  const navigate = useNavigate();
  const goToInit = () => {
    navigate("/");
  };

  const goToDelivery = () => {
    navigate("/delivery");
  };

  const goToProductAdministration = () => {
    navigate("/productAdministration");
  };

  const handleSignOut = () => {
    if (confirm("Tem certeza que deseja sair da sua conta?")) {
      signOut(auth)
        .then(() => {
          alert("Usuário desconectado com sucesso");
          goToInit();
        })
        .catch((error) => {
          alert("Erro ao desconectar o usuário:", error);
        });
    }
  };

  return (
    <div>
      <ReturnArrow />
      <S.Container>
        {user ? (
          <S.ProfileBox>
            {userInfo ? (
              <>
                <p>{userInfo.name}</p>
                <p>{user.email}</p>
                <p>Telefone: {userInfo.phone}</p>
                <p>Endereço: {userInfo.address}</p>
                <S.ProfileButtons>
                  <S.LogOutButton onClick={handleSignOut}>
                    Desconectar
                  </S.LogOutButton>
                  {userInfo.post === "delivery" ||
                  userInfo.post === "master" ? (
                    <S.DeliveryButton onClick={goToDelivery}>
                      Delivery
                    </S.DeliveryButton>
                  ) : (
                    ""
                  )}
                  {userInfo.post === "master" ? (
                    <S.MasterButton onClick={goToProductAdministration}>
                      Administrar produtos
                    </S.MasterButton>
                  ) : (
                    ""
                  )}
                </S.ProfileButtons>
              </>
            ) : (
              <p>Carregando informações do usuário...</p>
            )}
          </S.ProfileBox>
        ) : (
          <p>Nenhum usuário logado.</p>
        )}
      </S.Container>
    </div>
  );
};

export default UserProfile;
