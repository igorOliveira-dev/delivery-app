import React, { useState, useContext } from "react";
import * as S from "./productsStyle.js";

import UseProducts from "../../../../backend/hooks/UseProducts.jsx";
import UseUser from "../../../../backend/hooks/UseUser.jsx";
import Loading from "../../../components/loading/Loading.jsx";
import { CartContext } from "../../../../context/CartContext.jsx";

import { useNavigate } from "react-router-dom";

const Products = () => {
  const { products, loading } = UseProducts();
  const { user } = UseUser();
  const navigate = useNavigate();
  const [cartItens, setCartItens, cartPrice, setCartPrice] =
    useContext(CartContext);
  const [productNumber, setProductNumber] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  if (loading) {
    return <Loading />;
  }

  const changeProductNumber = (e) => {
    setProductNumber(parseInt(e.target.value));
  };

  if (productNumber < 0) {
    setProductNumber(0);
  }

  const addToCart = (product) => {
    if (productNumber == 0) {
      return;
    }
    if (!user) {
      alert("É necessário fazer login pra adicionar itens ao carrinho.");
      navigate("/login");
    } else {
      setCartItens([
        ...cartItens,
        { name: product.name, number: productNumber, price: product.price },
      ]);
      setCartPrice(cartPrice + product.price * productNumber);
      setCartAdded(true);
      setPopupProduct(false);
    }
  };

  if (cartAdded) {
    setCartAdded(false);
    setProductNumber(1);
  }

  return (
    <div>
      <S.Container>
        {products.map((product) => (
          <S.Product key={product.id}>
            <S.ProductImage src={product.imageURL} />
            <p style={{ color: "#fdfdfd", fontWeight: "bolder" }}>
              {product.name}
            </p>
            <p style={{ color: "#fdfdfd" }}>{product.description}</p>
            <S.ProductPrice style={{ color: "#fdfdfd" }}>
              R${product.price},00
            </S.ProductPrice>
            <S.AddCartBtn onClick={() => setPopupProduct(product)}>
              Adicionar ao carrinho
            </S.AddCartBtn>
            <S.AddCartPopUp
              style={{ display: popupProduct === product ? "flex" : "none" }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
              >
                <button
                  className="closeBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    setPopupProduct(false);
                  }}
                >
                  x
                </button>
                <h2>{product.name}</h2>
                <label htmlFor="productNumber">Quantidade:</label>
                <input
                  type="number"
                  required
                  name="productNumber"
                  className="productNumber"
                  value={productNumber}
                  onChange={(e) => changeProductNumber(e)}
                />{" "}
                <br />
                <input
                  type="submit"
                  className="submitInput"
                  value={"Adicionar"}
                />
              </form>
            </S.AddCartPopUp>
          </S.Product>
        ))}
      </S.Container>
    </div>
  );
};

export default Products;
