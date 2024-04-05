import React from "react";
import ReactDOM from "react-dom";

const fname = "Avani";
const lname = "Agarwal";
const num = "1";

ReactDOM.render(
    <div>
        <h1>Hello {fname} {lname}!</h1>
        <h1>Hello {fname+" "+lname}!</h1>
        <h1>Hello {`${fname} ${lname}`}!</h1>
        <p>My lucky number is {num} </p>
        <p>My lucky number is {3+4} </p>
    </div>,
     document.getElementById("root")
);
