import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../header";

const Navigation = () => {
  let location = useLocation();
  let locationPath = location.pathname.split("/")[1].toUpperCase().split("_");
  return (
    <Header>
      <h1 style={{ color: "white" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "monospace",
            fontSize: 35,
            fontWeight: "bolder",
          }}
          to="/"
        >
          CWYP
        </Link>
      </h1>
      <h1
        style={{
          color: "white",
          fontFamily: "monospace",
          fontSize: 30,
          fontWeight: "normal",
        }}
      >
        {locationPath[0] + " " + locationPath[1]}
      </h1>
    </Header>
  );
};

export default Navigation;
