import React from "react";
import ReactDOM from "react-dom";
// import pi, {doublePi, triplePi} from "./math"; 
import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
