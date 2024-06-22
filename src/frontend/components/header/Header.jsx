import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "/deliveryLogo.jpg";

import * as S from "./headerStyle.js";

import UseUser from "../../../backend/hooks/UseUser.jsx";
import { CartContext } from "../../../context/CartContext.jsx";
import { PurchaseContext } from "../../../context/PurchaseContext.jsx";

const Header = () => {
  const { user, userInfo } = UseUser();
  const [cartItens, setCartItens, cartPrice, setCartPrice] =
    useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [
    purchaseName,
    setPurchaseName,
    purchaseAddress,
    setPurchaseAddress,
    purchasePhone,
    setPurchasePhone,
    purchaseProducts,
    setPurchaseProducts,
    purchasePrice,
    setPurchasePrice,
    submitPurchase,
  ] = useContext(PurchaseContext);
  const [purchased, setPurchased] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const cartClick = () => {
    if (cartItens == "") {
      if (!showCart) {
        alert("Não existe nenhum item no carrinho");
        return;
      }
    }
    setShowCart(!showCart);
  };

  const removeFromCart = (item) => {
    if (confirm("Tem certeza que quer remover esse item?")) {
      setCartItens(cartItens.filter((cartItem) => cartItem !== item));

      let price = parseFloat(item.price);
      let number = parseFloat(item.number);

      if (isNaN(price) || isNaN(number)) {
        console.log(
          "Erro: Um ou mais valores são indefinidos ou não são números."
        );
        console.log("item.price:", item.price);
        console.log("item.number:", item.number);
      } else {
        setCartPrice((prevCartPrice) => prevCartPrice - price * number);
      }
    }
  };

  const finalizePurchase = (item) => {
    if (cartItens == "") {
      alert("Não existe nenhum item no carrinho.");
      return;
    }
    if (confirm("Tem certeza que quer finalizar a compra?")) {
      setPurchaseName(userInfo.name);
      setPurchaseAddress(userInfo.address);
      setPurchasePhone(userInfo.phone);
      setPurchasePrice(cartPrice);
      setPurchaseProducts(cartItens);
      setPurchased(true);
      setCartPrice(0);
    }
  };

  useEffect(() => {
    if (purchased) {
      submitPurchase();

      setPurchased(false);
      setCartItens([]);
      setShowCart(false);
    }
  }, [purchased]);

  const purchasesClick = () => {
    navigate("/myPurchases");
  };

  return (
    <div>
      <S.Container>
        <S.Logo src={logo} />
        <div>
          <S.CartBtn
            style={{
              display: user ? "inline" : "none",
              backgroundColor: !showCart ? "transparent" : "#333",
            }}
            onClick={cartClick}
          >
            Carrinho
          </S.CartBtn>
          <S.PurchasesBtn
            style={{ display: user ? "inline" : "none" }}
            onClick={purchasesClick}
          >
            Pedidos
          </S.PurchasesBtn>
          <S.LoginBtn onClick={user ? goToProfile : goToLogin}>
            {user ? "Perfil" : "Login"}
          </S.LoginBtn>
          <S.CartItens
            style={
              showCart
                ? { transform: "translateX(0)" }
                : { transform: "translateX(100%)" }
            }
          >
            <h1>Carrinho</h1>
            {cartItens.map((item, index) => (
              <div key={index}>
                {item.name} ({item.number})
                <button onClick={() => removeFromCart(item)}>Remover</button>
              </div>
            ))}
            <h2 style={{ marginBottom: "10px" }}>R${cartPrice},00</h2>
            <button onClick={finalizePurchase}>Finalizar pedido</button>
          </S.CartItens>
        </div>
      </S.Container>
    </div>
  );
};

export default Header;
