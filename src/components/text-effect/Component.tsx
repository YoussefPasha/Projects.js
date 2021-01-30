import React, { Fragment, useEffect, useState } from "react";
import { Code } from "../code";
import MainContainer from "./components";

const defaultT = "We Love Programming!";

const Component = () => {
  const [speed, setSpeed] = useState("1");
  const [fontSpeed, setFontSpeed] = useState(300);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (speed !== "") {
      setFontSpeed(300 / +speed);
    }
  }, [speed]);

  useEffect(() => {
    let timer: any;
    let idx = 1;
    const writeText = () => {
      setTitle(defaultT.slice(0, idx));
      idx++;
      if (idx > defaultT.length) {
        idx = 1;
      }
      timer = setTimeout(writeText, fontSpeed);
    };
    writeText();
    return () => clearTimeout(timer);
  }, [fontSpeed]);

  return (
    <Fragment>
      <MainContainer>
        <h1 style={{ fontSize: "3rem" }}>{title}</h1>
        <MainContainer.SpeedPanel>
          <label>Speed: </label>
          <MainContainer.SpeedInput
            type="number"
            value={speed}
            min="1"
            max="10"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSpeed(e.target.value);
            }}
          />
        </MainContainer.SpeedPanel>
      </MainContainer>
      <Code
        html={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Auto Text Effect</title>
  </head>
  <body>
    <h1 id="text">Starting...</h1>

    <div>
      <label for="speed">Speed:</label>
      <input type="number" name="speed" id="speed" value="1" min="1" max="10" step="1">
    </div>

    <script src="script.js"></script>
  </body>
</html>`}
        designCss={`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: darksalmon;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

div {
  position: absolute;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  font-size: 18px;
}

input {
  width: 50px;
  padding: 5px;
  font-size: 18px;
  background-color: darksalmon;
  border: none;
  text-align: center;
}

input:focus {
  outline: none;
}`}
        js={`const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)`}
      />
    </Fragment>
  );
};

export default Component;
