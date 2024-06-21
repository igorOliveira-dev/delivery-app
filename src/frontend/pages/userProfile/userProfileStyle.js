import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ProfileBox = styled.div`
  background-color: #22222230;
  border: 1px solid #fdfdfd;
  padding: 30px;
  height: 300px;
  width: 350px;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  & > p {
    color: #fdfdfd;
  }
  & > p:nth-child(1) {
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 2px;
  }
  & > p:nth-child(2) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const ProfileButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LogOutButton = styled.button`
  background-color: rgba(255, 0, 0, 0.15);
  border: 1px solid #fdfdfd;
  padding: 5px;
  width: 150px;
  color: #fdfdfd;
  transition: 0.4s;
  position: relative;
  margin-top: 30px;
  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
`;

export const DeliveryButton = styled.button`
  background-color: #111;
  border: 1px solid #fdfdfd;
  padding: 5px;
  width: 150px;
  color: #fdfdfd;
  transition: 0.4s;
  position: relative;
  margin-top: 30px;
  margin-left: 10px;
  &:hover {
    background-color: #222;
  }
`;

export const MasterButton = styled.button`
  background-color: #111;
  border: 1px solid #fdfdfd;
  padding: 5px;
  width: 150px;
  color: #fdfdfd;
  transition: 0.4s;
  position: relative;
  margin-top: 30px;
  &:hover {
    background-color: #222;
  }
`;
