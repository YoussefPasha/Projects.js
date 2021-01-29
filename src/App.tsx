import React, { Component, Fragment } from "react";
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
