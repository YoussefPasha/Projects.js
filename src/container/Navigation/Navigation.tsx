import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../header";

const Navigation = () => {
  let location = useLocation();
  console.log("====================================");
  console.log(location);
  console.log("====================================");
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
      {location.pathname.length > 1 ? (
        <h1
          style={{
            color: "white",
            fontFamily: "monospace",
            fontSize: 30,
            fontWeight: "normal",
          }}
        >
          {locationPath.map((child) => child + " ")}
        </h1>
      ) : (
        <h1
          style={{
            color: "white",
            fontFamily: "monospace",
            fontSize: 30,
            fontWeight: "normal",
          }}
        >
          build with 💕 by YP with React
        </h1>
      )}
    </Header>
  );
};

export default Navigation;
