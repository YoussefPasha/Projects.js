import React from "react";
import { MainContainer, FillBox, EmptyBox } from "./style";

export default function Container({ children, ...restProps }: any) {
  return <MainContainer {...restProps}>{children}</MainContainer>;
}

Container.FillBox = function FilledBox({ children, ...restProps }: any) {
  return <FillBox {...restProps}>{children}</FillBox>;
};

Container.EmptyBox = function emptyBox({ children, ...restProps }: any) {
  return <EmptyBox {...restProps}>{children}</EmptyBox>;
};
