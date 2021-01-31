import React, { Fragment } from "react";
import MainContainer from "./components";

const hold = { border: "solid 5px #ccc" };
const hovered = {
  backgroundColor: "#333",
  borderColor: "white",
  borderStyle: "dashed",
};

const Component = () => {
  const FillBox = () => {
    return <MainContainer.FillBox />;
  };
  const EmptyBox = () => {
    return <MainContainer.EmptyBox />;
  };

  return (
    <Fragment>
      <MainContainer>
        <FillBox></FillBox>
        <EmptyBox></EmptyBox>
        <EmptyBox></EmptyBox>
        <EmptyBox></EmptyBox>
        <EmptyBox></EmptyBox>
      </MainContainer>
    </Fragment>
  );
};

export default Component;
