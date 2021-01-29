import React, { useState } from "react";
import MainCardContainer from "./components";

const Component = () => {
  const [active0, setActive0] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  return (
    <MainCardContainer>
      <MainCardContainer.Panel
        onClick={() => {
          setActive0(!active0);
          setActive1(false);
          setActive2(false);
          setActive3(false);
          setActive4(false);
        }}
        active={active0}
        img={
          "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      >
        <MainCardContainer.Text>Explore The World</MainCardContainer.Text>
      </MainCardContainer.Panel>
      <MainCardContainer.Panel
        onClick={() => {
          setActive0(false);
          setActive1(!active1);
          setActive2(false);
          setActive3(false);
          setActive4(false);
        }}
        active={active1}
        img={
          "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      >
        <MainCardContainer.Text>Wild Forest</MainCardContainer.Text>
      </MainCardContainer.Panel>
      <MainCardContainer.Panel
        onClick={() => {
          setActive0(false);
          setActive1(false);
          setActive2(!active2);
          setActive3(false);
          setActive4(false);
        }}
        active={active2}
        img={
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        }
      >
        <MainCardContainer.Text>Sunny Beach</MainCardContainer.Text>
      </MainCardContainer.Panel>
      <MainCardContainer.Panel
        onClick={() => {
          setActive0(false);
          setActive1(false);
          setActive2(false);
          setActive3(!active3);
          setActive4(false);
        }}
        active={active3}
        img={
          "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        }
      >
        <MainCardContainer.Text>City on Winter</MainCardContainer.Text>
      </MainCardContainer.Panel>
      <MainCardContainer.Panel
        onClick={() => {
          setActive0(false);
          setActive1(false);
          setActive2(false);
          setActive3(false);
          setActive4(!active4);
        }}
        active={active4}
        img={
          "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      >
        <MainCardContainer.Text>Mountains - Clouds</MainCardContainer.Text>
      </MainCardContainer.Panel>
    </MainCardContainer>
  );
};

export default Component;
