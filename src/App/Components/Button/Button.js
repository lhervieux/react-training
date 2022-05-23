import React from "react";

function Button(props) {
    console.trace(props);
    return <button>{props.text}</button>;
}

export default Button;