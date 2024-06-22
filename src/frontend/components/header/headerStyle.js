import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  height: 100px;
  border-bottom: 1px solid #fdfdfd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(30px);
  box-sizing: border-box;
`;

export const Logo = styled.img`
  height: 70px;
  width: 70px;
  @media (width < 340px) {
    width: 55px;
    height: 55px;
  }
`;

export const LoginBtn = styled.button`
  width: 100px;
  padding: 5px;
  border: 1px solid #fdfdfd;
  background-color: transparent;
  color: #fdfdfd;
  transition: 0.4s;
  &:hover {
    background-color: #33333350;
  }
  @media (width < 340px) {
    padding: 3px;
    width: 80px;
  }
`;

export const CartBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fdfdfd;
  padding: 7px;
  margin-right: 10px;
  transition: 0.4s;
  &:hover {
    background-color: #33333350;
  }
  @media (width < 340px) {
    padding: 3px;
    width: 80px;
    margin-right: 5px;
  }
`;

export const PurchasesBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fdfdfd;
  padding: 7px;
  margin-right: 10px;
  transition: 0.4s;
  &:hover {
    background-color: #33333350;
  }
  @media (width < 340px) {
    padding: 3px;
    width: 80px;
    margin-right: 5px;
  }
`;

export const CartItens = styled.div`
  height: calc(100vh - 100px);
  position: fixed;
  right: 0;
  top: 100px;
  width: 60vw;
  max-width: 400px;
  background-color: #222;
  transition: 0.4s;
  color: #fdfdfd;
  overflow-y: scroll;
  font-size: 16px;
  padding: 10px;
  & > h1 {
    margin-bottom: 10px;
  }
  & > div {
    margin-bottom: 10px;
  }
  & > div > button {
    padding: 2px;
    padding-inline: 10px;
    color: #fdfdfd;
    background-color: rgba(255, 0, 0, 0.3);
    border: none;
    margin-left: 10px;
    transition: 0.4s;
    &:hover {
      background-color: rgba(255, 0, 0, 0.6);
    }
  }
  & > button {
    padding: 5px;
    width: 150px;
    background-color: rgba(0, 0, 255, 0.3);
    border: none;
    color: #fdfdfd;
    transition: 0.4s;
    &:hover {
      background-color: rgba(0, 0, 255, 0.5);
    }
  }
`;
