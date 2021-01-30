import React, { Fragment } from "react";
import MainContainer from "./components";
const Component = () => {
  return (
    <Fragment>
      <MainContainer>
        <h1>We Love Programming</h1>
        <MainContainer.SpeedPanel>
          <label>Speed:</label>
          <MainContainer.SpeedInput type="number" value="1" min="1" max="10" />
        </MainContainer.SpeedPanel>
      </MainContainer>
    </Fragment>
  );
};

export default Component;
