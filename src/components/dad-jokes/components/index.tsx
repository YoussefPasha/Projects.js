import React from "react";
import { Component, MainContainer, MainTxt, MainBtn, MainJoke } from "./style";

export default function MainComponent({ children, ...restProps }: any) {
  return <Component {...restProps}>{children}</Component>;
}

MainComponent.Container = function Container({ children, ...restProps }: any) {
  return <MainContainer {...restProps}>{children}</MainContainer>;
};

MainComponent.Joke = function Joke({ children, ...restProps }: any) {
  return <MainJoke {...restProps}>{children}</MainJoke>;
};

MainComponent.Txt = function Txt({ children, ...restProps }: any) {
  return <MainTxt {...restProps}>{children}</MainTxt>;
};

MainComponent.Btn = function Txt({ children, ...restProps }: any) {
  return <MainBtn {...restProps}>{children}</MainBtn>;
};
