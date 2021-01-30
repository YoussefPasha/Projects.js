import React from "react";
import { Container, MainPanel, NInput } from "./styles";

export default function MainContainer({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>;
}

MainContainer.SpeedPanel = function Panel({ children, ...restProps }: any) {
  return <MainPanel {...restProps}>{children}</MainPanel>;
};

MainContainer.SpeedInput = function Input({ children, ...restProps }: any) {
  return <NInput {...restProps}>{children}</NInput>;
};
