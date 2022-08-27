import React from "react";
import ReactDOM from "react-dom";
import { Add, Substract, Multiply, Devide } from "./calculator.jsx";

ReactDOM.render(
  <div>
    <ul>
      <li>{Add(8, 4)}</li>
      <li>{Substract(8, 4)}</li>
      <li>{Multiply(8, 4)}</li>
      <li>{Devide(7, 4)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
