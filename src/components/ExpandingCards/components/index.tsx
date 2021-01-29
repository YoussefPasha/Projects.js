import React from "react";
import { MainText, Container, MainPanel } from "./styles";

export default function MainCardContainer({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>;
}

MainCardContainer.Panel = function Panel({
  children,
  active,
  img,
  ...restProps
}: any) {
  return (
    <MainPanel {...restProps} active={active} img={img}>
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
    <MainText {...restProps} active={active}>
      {children}
    </MainText>
  );
};
