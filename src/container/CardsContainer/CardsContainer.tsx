import React from "react";
import { Card } from "../card";

const CardsContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "4rem",
      }}
    >
      <Card
        cmpName="Expanding Cards"
        features={[
          "Advanced TS and Styled-Components",
          "JS Frameworks",
          "Advanced Animations",
        ]}
        cmpLink={"expanding_Cards"}
      />
      <Card
        cmpName="Auto Text Effect"
        features={[
          "Advanced TS and Styled-Components",
          "JS Frameworks",
          "Advanced Animations",
        ]}
        cmpLink={"auto_text_effect"}
      />
      <Card
        cmpName="Dad Jokes"
        features={[
          "Advanced TS and Styled-Components",
          "JS Frameworks",
          "Advanced Animations",
        ]}
        cmpLink={"dad_jokes"}
      />
      <Card
        cmpName="Password Generator"
        features={[
          "Advanced TS and Styled-Components",
          "JS Frameworks",
          "Advanced Animations",
        ]}
        cmpLink={"password_generator"}
      />
    </div>
  );
};

export default CardsContainer;
