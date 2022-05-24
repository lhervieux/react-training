import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.css';

const initialState = {};

const TemplateName = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {}, [props]);
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
        TemplateName
    </div>
  )
}

TemplateName.propTypes = {}

TemplateName.defaultProps = {};

export default TemplateName
