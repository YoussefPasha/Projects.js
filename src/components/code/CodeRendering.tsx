import React from "react";
import "./code.css";

const CodeRendering = (props: any) => {
  return (
    <div id="wrapper">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "6rem",
          fontFamily: "monospace",
        }}
      >
        Code⚡
      </h1>
      <pre className="code code-html">
        <label>HTML</label>
        <code>{props.html}</code>
      </pre>

      <pre className="code code-css">
        <label>CSS</label>
        <code>{props.designCss}</code>
      </pre>

      <pre className="code code-javascript">
        <label>JS</label>
        <code>{props.js}</code>
      </pre>
    </div>
  );
};

export default CodeRendering;
