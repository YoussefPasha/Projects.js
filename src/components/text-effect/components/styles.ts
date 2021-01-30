import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: darksalmon;
  font-family: "Muli", sans-serif;
  font-weight: "bold";
  font-size: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  overflow: hidden;
  margin-left: 6rem;
  margin-right: 6rem;
`;

export const MainPanel = styled.div`
  position: absolute;
  bottom: 100px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  font-size: 18px;
`;

export const NInput = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 18px;
  background-color: darksalmon;
  border: none;
  text-align: center;

  &:focus {
    outline: none;
  }
`;
