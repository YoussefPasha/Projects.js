import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #3b3b98;
  color: #fff;
  font-family: "Muli", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  padding: 10px;
  margin: 0;
`;

export const MainTitle = styled.h2`
  margin: 10px 0 20px;
  text-align: center;
  font-size: 2rem;
`;

export const MainPanel = styled.div`
  background-color: #23235b;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 350px;
  max-width: 100%;
`;

export const ResultContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 12px 10px;
  height: 50px;
  width: 100%;
`;

export const ResultCode = styled.span`
  word-wrap: break-word;
  max-width: calc(100% - 40px);
`;

export const ResultBtn = styled.button`
  position: absolute;
  background-color: #3b3b98;
  color: #fff;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

export const MainBtn = styled.button`
  border: none;
  background-color: #3b3b98;
  color: #fff;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
`;

export const ButtonLarge = styled(MainBtn)`
  display: block;
  width: 100%;
`;

export const CustomizedSettings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  font-size: 1.3rem;
`;
