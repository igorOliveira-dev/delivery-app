import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ProductAddBox = styled.form`
  padding: 20px;
  max-width: 400px;
  border: 1px solid #fdfdfd;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  color: #fdfdfd;
  background-color: transparent;
  border: 1px solid #fdfdfd;
`;

export const Textarea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
  height: 100px;
  border: 1px solid #fdfdfd;
  color: #fdfdfd;
  background-color: transparent;
`;

export const AddFileButton = styled.button`
  padding: 5px;
  border: 1px solid #fdfdfd;
  background-color: transparent;
  color: #fdfdfd;
  margin-bottom: 10px;
  transition: 0.4s;
  &:hover {
    background-color: #222;
  }
`;

export const AddProductButton = styled.button`
  padding: 5px;
  background-color: rgba(0, 128, 0, 0.1);
  border: 1px solid #fdfdfd;
  color: #fdfdfd;
  margin-bottom: 10px;
  transition: 0.4s;
  &:hover {
    background-color: rgba(0, 128, 0, 0.3);
  }
`;

export const ProductsBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductBox = styled.div`
  background-color: #333;
  padding: 10px;
  margin: 20px;
  width: 260px;
  & > p {
    margin-bottom: 5px;
  }

  & > button {
    padding: 5px;
    background-color: rgba(255, 0, 0, 0.3);
    color: #fdfdfd;
    border: none;
    &:hover {
      background-color: rgba(255, 0, 0, 0.5);
    }
  }

  & > img {
    width: 150px;
    height: auto;
    object-fit: contain;
    margin-bottom: 10px;
  }
`;
