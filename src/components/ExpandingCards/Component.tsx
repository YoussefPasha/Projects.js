import React, { useState } from "react";
import MainCardContainer from "./components";

const Component = () => {
  const [active, setActive] = useState(false);
  return (
    <MainCardContainer>
      <MainCardContainer.Panel
        onClick={() => {
          setActive(!active);
        }}
        active={active}
        img={
          "'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      >
        <MainCardContainer.Text>Explore The World</MainCardContainer.Text>
      </MainCardContainer.Panel>
    </MainCardContainer>
  );
};

export default Component;
