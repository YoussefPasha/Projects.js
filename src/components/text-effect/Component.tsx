import React, { Fragment, useEffect, useState } from "react";
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
    </Fragment>
  );
};

export default Component;
