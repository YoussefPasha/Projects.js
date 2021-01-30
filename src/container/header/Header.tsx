import React from "react";
import "./header.css";

const Header = (props: any) => {
  return <header className="main-header">{props.children}</header>;
};

export default Header;
