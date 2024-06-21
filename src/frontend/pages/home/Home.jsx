import React from "react";
import Header from "../../components/header/Header.jsx";
import * as S from "./homeStyle.js";
import Products from "./products/Products.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <S.Container>
        <Products />
      </S.Container>
    </div>
  );
};

export default Home;
