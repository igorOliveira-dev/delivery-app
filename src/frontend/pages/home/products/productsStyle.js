import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 540px) {
    justify-content: center;
  }
`;

export const Product = styled.div`
  padding: 10px;
  margin: 20px;
  background-color: #333;
  width: 200px;
  & > p {
    margin-bottom: 10px;
  }
  @media (width < 520px) {
    width: 170px;
    margin: 5px;
    font-size: 14px;
  }
  @media (width < 400px) {
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bolder;
`;

export const ProductImage = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
  @media (width < 520px) {
    width: 170px;
    height: 170px;
  }
`;

export const AddCartBtn = styled.button`
  padding: 5px;
  padding-inline: 15px;
  background-color: rgb(0, 130, 26);
  color: #fdfdfd;
  border: none;
  transition: 0.4s;
  &:hover {
    background-color: rgb(0, 100, 26);
  }
`;

export const AddCartPopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: #33333330;
  padding: 10px;
  border-radius: 20px;
  backdrop-filter: blur(30px);
  & > form > h2 {
    color: #fdfdfd;
    font-size: 28px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  & > form > label {
    color: #fdfdfd;
  }
  & > form > input.productNumber {
    width: 48px;
    padding: 2px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 3px;
    background-color: transparent;
    border: 1px solid #fdfdfd;
    color: #fdfdfd;
    outline: none;
  }

  & > form > input.submitInput {
    background-color: rgb(0, 130, 26);
    padding: 5px;
    width: 100px;
    border: none;
    color: #fdfdfd;
    transition: 0.4s;
    &:hover {
      background-color: rgb(0, 100, 26);
    }
  }

  & > form > button.closeBtn {
    height: 30px;
    width: 30px;
    font-size: 24px;
    font-weight: bolder;
    border-radius: 50%;
    border: none;
    color: #fdfdfd;
    background-color: transparent;
    transition: 0.4s;
    margin-bottom: 10px;
    &:hover {
      background-color: #444;
    }
  }
`;
