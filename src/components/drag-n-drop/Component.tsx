import React, { Fragment } from "react";
import MainContainer from "./components";

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
