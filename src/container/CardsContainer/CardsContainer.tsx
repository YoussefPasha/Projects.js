import React from "react";
import { Card } from "../card";

const CardsContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card
        cmpName="Expanding Cards"
        features={[
          "Advanced TS and Styled-Components",
          "JS Frameworks",
          "Advanced Animations",
        ]}
        cmpLink={"expandingCards"}
      />
    </div>
  );
};

export default CardsContainer;
