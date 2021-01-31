import React, { Fragment } from "react";
import MainContainer from "./components";

const Component = () => {
  return (
    <Fragment>
      <MainContainer>
        <MainContainer.MainPanel>
          <MainContainer.MainTitle>Password Generator</MainContainer.MainTitle>
          <MainContainer.ResultContainer>
            <MainContainer.ResultCode>Code</MainContainer.ResultCode>
            <MainContainer.ResultBtn>
              <i className="far fa-clipboard"></i>
            </MainContainer.ResultBtn>
          </MainContainer.ResultContainer>
          <div>
            <MainContainer.CustomizedSettings>
              <label>Password Length</label>
              <input type="number" id="length" min="4" max="20" value="20" />
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include uppercase letters</label>
              <input type="checkbox" id="uppercase" checked></input>
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include lowercase letters</label>
              <input type="checkbox" id="lowercase" checked></input>
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include numbers</label>
              <input type="checkbox" id="numbers" checked></input>
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include symbols</label>
              <input type="checkbox" id="symbols" checked></input>
            </MainContainer.CustomizedSettings>
          </div>
          <MainContainer.ButtonLarge>
            Generate Password
          </MainContainer.ButtonLarge>
        </MainContainer.MainPanel>
      </MainContainer>
    </Fragment>
  );
};

export default Component;
