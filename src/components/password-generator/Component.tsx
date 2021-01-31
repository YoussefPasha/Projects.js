import React, { Fragment, useState } from "react";
import MainContainer from "./components";

const Component = () => {
  const [length, setLength] = useState("20");
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [withNumbers, setWithNumbers] = useState(true);
  const [withSymbols, setWithSymbols] = useState(true);
  const [password, setPassword] = useState("Password Generation");

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  const GeneratePassword = () => {
    const types = [length, upperCase, lowerCase, withNumbers, withSymbols];
    if (types[0] === "0") {
      setPassword("invalid");
    } else if (
      !types[1] &&
      !types[1] &&
      !types[1] &&
      !types[1] &&
      +types[0] > 0
    ) {
      setPassword("invalid");
    } else {
      setPassword("");
      for (var _i = 0; _i < +length; _i++) {
        if (types[1]) {
          setPassword((password) => password + getRandomUpper());
        }
        if (types[2]) {
          setPassword((password) => password + getRandomLower());
        }
        if (types[3]) {
          setPassword((password) => password + getRandomNumber());
        }
        if (types[4]) {
          setPassword((password) => password + getRandomSymbol());
        }
      }
      setPassword((password) => password.slice(0, +length));
      console.log(password);
    }
  };

  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    if (password.length < 1) {
      return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    setPassword("copied done ✔✔");

    function cleanPasswordArea() {
      setPassword("");
    }

    setTimeout(cleanPasswordArea, 500);
  };

  return (
    <Fragment>
      <MainContainer>
        <MainContainer.MainPanel>
          <MainContainer.MainTitle>Password Generator</MainContainer.MainTitle>
          <MainContainer.ResultContainer>
            <MainContainer.ResultCode>{password}</MainContainer.ResultCode>
            <MainContainer.ResultBtn onClick={copyToClipboard}>
              <i className="far fa-clipboard"></i>
            </MainContainer.ResultBtn>
          </MainContainer.ResultContainer>
          <div>
            <MainContainer.CustomizedSettings>
              <label>Password Length</label>
              <input
                type="number"
                min="4"
                max="20"
                value={length}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (+e.target.value > 20) {
                    setPassword("length 0-20");
                    return;
                  }
                  setLength(e.target.value);
                }}
              />
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include uppercase letters</label>
              <input
                type="checkbox"
                checked={upperCase}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUpperCase(!upperCase);
                }}
              ></input>
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include lowercase letters</label>
              <input
                type="checkbox"
                checked={lowerCase}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLowerCase(!lowerCase);
                }}
              ></input>
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include numbers</label>
              <input
                type="checkbox"
                checked={withNumbers}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setWithNumbers(!withNumbers);
                }}
              ></input>
            </MainContainer.CustomizedSettings>
            <MainContainer.CustomizedSettings>
              <label>Include symbols</label>
              <input
                type="checkbox"
                checked={withSymbols}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setWithSymbols(!withSymbols);
                }}
              ></input>
            </MainContainer.CustomizedSettings>
          </div>
          <MainContainer.ButtonLarge onClick={GeneratePassword}>
            Generate Password
          </MainContainer.ButtonLarge>
        </MainContainer.MainPanel>
      </MainContainer>
    </Fragment>
  );
};

export default Component;
