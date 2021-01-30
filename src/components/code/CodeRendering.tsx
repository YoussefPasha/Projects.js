import React from "react";
import "./code.css";

const CodeRendering = (props: any) => {
  return (
    <div id="wrapper">
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
