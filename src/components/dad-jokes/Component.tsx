import React, { Fragment, useState } from "react";
import MainComponent from "./components";
import ReactLoading from "react-loading";
import { Code } from "../code";

const Component = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    setJoke("load");
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    setJoke(data.joke);
  };
  if (joke === "") {
    fetchJoke();
  }
  return (
    <Fragment>
      <MainComponent>
        <MainComponent.Container>
          <MainComponent.Txt>Don't Laugh Challenge</MainComponent.Txt>
          {joke === "load" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "2rem",
              }}
            >
              <ReactLoading
                type="spokes"
                height={50}
                width={50}
                color="#9f68e0"
              />
            </div>
          ) : (
            <MainComponent.Joke>{joke}</MainComponent.Joke>
          )}
          <MainComponent.Btn onClick={fetchJoke}>
            Get another Joke
          </MainComponent.Btn>
        </MainComponent.Container>
      </MainComponent>
      <Code
        html={`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Dad Jokes</title>
  </head>
  <body>
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">// Joke goes here</div>
      <button id="jokeBtn" class="btn">Get Another Joke</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
        `}
        designCss={`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #686de0;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 20px;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;
}

h3 {
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
}

.joke {
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
}

.btn {
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}
        `}
        js={`
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}
        `}
      />
    </Fragment>
  );
};

export default Component;
