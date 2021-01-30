import React, { Fragment } from "react";
import MainComponent from "./components";

const Component = () => {
  return (
    <Fragment>
      <MainComponent>
        <MainComponent.Container>
          <MainComponent.Txt>Don't Laugh Challenge</MainComponent.Txt>
          <MainComponent.Joke>Joke</MainComponent.Joke>
          <MainComponent.Btn>Get another Joke</MainComponent.Btn>
        </MainComponent.Container>
      </MainComponent>
    </Fragment>
  );
};

export default Component;
