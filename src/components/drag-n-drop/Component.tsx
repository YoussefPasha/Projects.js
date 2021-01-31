import React, { Fragment } from "react";
import MainContainer from "./components";

const hold = { border: "solid 5px #ccc" };
const hovered = {
  backgroundColor: "#333",
  borderColor: "white",
  borderStyle: "dashed",
};

const Component = () => {
  return (
    <Fragment>
      <MainContainer>
        <MainContainer.FillBox></MainContainer.FillBox>
        <MainContainer.EmptyBox></MainContainer.EmptyBox>
        <MainContainer.EmptyBox></MainContainer.EmptyBox>
        <MainContainer.EmptyBox></MainContainer.EmptyBox>
        <MainContainer.EmptyBox></MainContainer.EmptyBox>
      </MainContainer>
    </Fragment>
  );
};

export default Component;
