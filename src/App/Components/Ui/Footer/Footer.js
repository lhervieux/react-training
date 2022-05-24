import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import style from './Footer.module.css';

const initialState = {};

function Footer(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {}, [props]);
  return (
    <div className={style.Footer} data-testid="Footer">
        {props.children}
    </div>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {};

export default Footer
