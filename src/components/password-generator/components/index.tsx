import React from "react";
import {
  ButtonLarge,
  CustomizedSettings,
  MainBtn,
  MainContainer,
  MainPanel,
  MainTitle,
  ResultBtn,
  ResultCode,
  ResultContainer,
} from "./style";

export default function Container({ children, ...restProps }: any) {
  return <MainContainer {...restProps}>{children}</MainContainer>;
}

Container.MainBtn = function Btn({ children, ...restProps }: any) {
  return <MainBtn {...restProps}>{children}</MainBtn>;
};

Container.MainPanel = function Panel({ children, ...restProps }: any) {
  return <MainPanel {...restProps}>{children}</MainPanel>;
};

Container.CustomizedSettings = function Settings({
  children,
  ...restProps
}: any) {
  return <CustomizedSettings {...restProps}>{children}</CustomizedSettings>;
};

Container.ButtonLarge = function BtnLarge({ children, ...restProps }: any) {
  return <ButtonLarge {...restProps}>{children}</ButtonLarge>;
};

Container.MainTitle = function Title({ children, ...restProps }: any) {
  return <MainTitle {...restProps}>{children}</MainTitle>;
};

Container.ResultBtn = function ResultButton({ children, ...restProps }: any) {
  return <ResultBtn {...restProps}>{children}</ResultBtn>;
};

Container.ResultCode = function Code({ children, ...restProps }: any) {
  return <ResultCode {...restProps}>{children}</ResultCode>;
};

Container.ResultContainer = function Result({ children, ...restProps }: any) {
  return <ResultContainer {...restProps}>{children}</ResultContainer>;
};
