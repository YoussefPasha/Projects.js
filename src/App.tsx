import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Cards } from "./container";
import { ExpandingCards } from "./components";

export default class componentName extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Cards} exact />
        <Route path="/expandingCards" component={ExpandingCards} exact />
      </BrowserRouter>
    );
  }
}
