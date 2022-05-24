import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import style from './Navbar.module.css';

const initialState = {};

function Navbar(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {}, [props]);
  return (
    <div className={style.Navbar} data-testid="Navbar">
        Navbar
    </div>
  )
}

Navbar.propTypes = {}

Navbar.defaultProps = {};

export default Navbar
