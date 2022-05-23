import React from "react";
import style from './Buttons.module.css';
import PropTypes from 'prop-types';

function Button(props) {
    return <button className={style.Button}
    onClick={(evt) => {
        if (undefined !== props.onButtonClicked && 'function' === typeof props.onButtonClicked) {
            props.onButtonClicked();
        }
    }}
    style= {{
        backgroundColor:props.bgColor,
        color: props.color,
    }}
    type={props.type}
    >{props.text}</button>;
}

Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func,
    type: PropTypes.string.isRequired,
}

Button.defaultProps = {
    bgColor: 'tomato',
    color: 'gold',
    type: 'button',
}

export default Button;