import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 90vw;
  box-sizing: border-box;
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

export const MainPanel = styled.div<{ active: boolean; img: string }>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  flex: ${({ active }) => (active === true ? 5 : 0.5)};
  margin: 10px;
  position: relative;
  transition: all;
  background-image: ${({ img }) => `url(${img})`};
  -webkit-transition: all 700ms ease-in;
  @media (max-width: 480px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
    }
  }
`;

export const MainText = styled.h3<{ active: boolean }>`
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: ${({ active }) => (active === true ? 1 : 0)};
  transition: ${({ active }) =>
    active
      ? css`
   opacity 0.3s ease-in 0.4s`
      : null};
`;
