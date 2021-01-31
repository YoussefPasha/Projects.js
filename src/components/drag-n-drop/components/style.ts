import styled from "styled-components/macro";

export const MainContainer = styled.div`
  background-color: #4682b4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const EmptyBox = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  border: solid 3px black;
  background: white;
`;

export const FillBox = styled.div`
  background-image: url("https://source.unsplash.com/random/150x150");
  height: 145px;
  width: 145px;
  cursor: pointer;
`;