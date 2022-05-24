import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import style from './FlexWide.module.css';

// etat initial
const initialState = {};

// components
const FlexWide = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      return () => {};
    }, [props])
  return (
    <div className={style.FlexWide}>{props.children}</div>
  )
}

FlexWide.propTypes = {
  children:PropTypes.any.isRequired,
};

FlexWide.defaultProps = {};

export default FlexWide