import React, { Fragment, useState } from "react";
import MainComponent from "./components";
import ReactLoading from "react-loading";

const Component = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    setJoke("loading...");
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
          {joke === "loading..." ? (
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
    </Fragment>
  );
};

export default Component;
