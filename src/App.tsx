import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Cards, Navigation } from "./container";
import { ExpandingCards, TextEffect } from "./components";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" component={Cards} exact />
        <Route path="/expanding_Cards" component={ExpandingCards} exact />
        <Route path="/auto_text_effect" component={TextEffect} exact />
      </BrowserRouter>
    );
  }
}
