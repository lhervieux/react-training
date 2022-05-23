import React from "react";
import style from './Buttons.module.css';

function Button(props) {
    return <button className={style.Button}
    onClick={(evt) => {
        props.onButtonClicked();
    }}
    style= {{
        backgroundColor:props.bgColor,
        color: props.color,
    }}
    >{props.text}</button>;
}

export default Button;