import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();
const styling = {
    color:"red"
}

let greet;

if (time<12) {
    greet = "Good Morning";
    styling.color="red";
}else if (time<18) {
    greet = "Good Afternoon";
    styling.color="green";
} else {
    greet = "Good Night";
    styling.color="blue";
}

ReactDOM.render(
    <h1 className="heading" style={styling} >{greet}</h1>,
    document.getElementById('root')
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
