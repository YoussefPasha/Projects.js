import React from "react";
import { MainContainer, FillBox, EmptyBox, Hold, Hovered } from "./style";

export default function Container({ children, ...restProps }: any) {
  return <MainContainer {...restProps}>{children}</MainContainer>;
}

Container.FillBox = function FilledBox({ children, ...restProps }: any) {
  return <FillBox {...restProps}>{children}</FillBox>;
};

Container.EmptyBox = function emptyBox({ children, ...restProps }: any) {
  return <EmptyBox {...restProps}>{children}</EmptyBox>;
};

Container.Hold = function hold({ children, ...restProps }: any) {
  return <Hold {...restProps}>{children}</Hold>;
};

Container.Hovered = function hovered({ children, ...restProps }: any) {
  return <Hovered {...restProps}>{children}</Hovered>;
};
