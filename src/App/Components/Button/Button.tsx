import React, {useEffect, useState} from "react";
import style from './Buttons.module.css';
import PropTypes from 'prop-types';
import { IButtonProps } from "./Button.interface";

const Button:React.FC<IButtonProps> = (props) => {

    const [isClicked, setisClicked] = useState(false)
    useEffect(() => {
        if (true === isClicked) {
            setTimeout(() => setisClicked(false), 300);
        }
    }, [props, isClicked])

    return <button className={style.Button + (isClicked ? style.clicked : '')}
        onClick={(evt) => {
            setisClicked(true);
            if (undefined !== props.onButtonClicked && 'function' === typeof props.onButtonClicked) {
                props.onButtonClicked();
            }
        }}
        style= {{
            ...props.buttonStyle,
            backgroundColor:props.bgColor,
            color: props.color,
        }}
        type={props.type}
        >
            {props.children}
    </button>;
}

/*Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    buttonStyle: PropTypes.object,
    color: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func,
    type: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}

Button.defaultProps = {
    bgColor: 'tomato',
    color: 'gold',
    type: 'button',
}*/

export default Button;