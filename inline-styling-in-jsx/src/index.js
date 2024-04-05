import React from "react";
import ReactDOM from "react-dom";

const styling = {
    color: "Blue",
    fontSize: "20px",
    border: "1px solid black"
}

styling.color = "brown";

ReactDOM.render(
    <div>
        <h1 style={{color:"red"}} >Hello World!</h1>
        <h1 style={styling} >Hello Avani!</h1>
    </div>,
    document.getElementById("root")
);
