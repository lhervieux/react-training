import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import style from './Header.module.css';

const initialState = {};

function Header(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {}, [props]);
  return (
    <div className={style.Header} data-testid="Header">
        Header
    </div>
  )
}

Header.propTypes = {}

Header.defaultProps = {};

export default Header
