import React, { Component } from "react";
import { Card } from "./container";
import { ExpandingCards } from "./components";

export default class componentName extends Component {
  render() {
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
        />
      </div>
    );
  }
}
