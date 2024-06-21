import styled from "styled-components";

export const Container = styled.div`
  margin-top: 120px;
  display: flex;
  margin-left: 50px;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    margin-left: 0;
    justify-content: center;
  }
  & > div {
    margin: 20px;
    padding: 20px;
    background-color: #333;
    max-width: 350px;
  }
  & div > p {
    margin-bottom: 5px;
  }
  & > div > button {
    padding: 3px;
    border: none;
    background-color: rgb(0, 130, 26);
    color: #fdfdfd;
    transition: 0.4s;
    width: 120px;
    &:hover {
      background-color: rgb(0, 100, 26);
    }
  }
`;
