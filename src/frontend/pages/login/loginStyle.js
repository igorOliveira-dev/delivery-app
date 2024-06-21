import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginBox = styled.form`
  height: 320px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #ddd;
  font-size: 20px;
`;

export const Line = styled.hr`
  width: 200px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 200px;
  border: 1px solid #fdfdfd;
  background-color: transparent;
  color: #fdfdfd;
  padding: 5px;
  margin-bottom: 20px;
  &::placeholder {
    color: #bbb;
  }
`;

export const InputAddress = styled.textarea`
  width: 200px;
  height: 50px;
  max-width: 200px;
  max-height: 50px;
  border: 1px solid #fdfdfd;
  background-color: transparent;
  color: #fdfdfd;
  padding: 5px;
  margin-bottom: 10px;
  &::placeholder {
    color: #bbb;
  }
`;

export const InputSubmit = styled.input`
  width: 210px;
  border: 1px solid #fdfdfd;
  background-color: transparent;
  color: #fdfdfd;
  padding: 5px;
  transition: 0.4s;
  &:hover {
    background-color: #222;
  }
`;

export const HaveAccount = styled.p`
  color: #fdfdfd;
  font-size: 14px;
  margin-top: 15px;
`;
