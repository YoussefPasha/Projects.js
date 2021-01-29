import React from "react";
import { text, Container, MainPanel } from "./styles";

export default function MainCardContainer({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>;
}

MainCardContainer.Panel = function Panel({
  children,
  active,
  ...restProps
}: any) {
  return (
    <MainPanel {...restProps} active={active}>
      {children}
    </MainPanel>
  );
};
MainCardContainer.Text = function Text({
  children,
  active,
  ...restProps
}: any) {
  return (
    <text {...restProps} active={active}>
      {children}
    </text>
  );
};
