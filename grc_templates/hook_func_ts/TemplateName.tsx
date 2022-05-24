import React, { useEffect, useState } from 'react'
import style from './TemplateName.module.css';

// types
interface ITemplateNameProps{};
interface ITemplateNameState{};

// etat initial
const initialState: ITemplateNameState = {};

// components
const TemplateName : React.FC<ITemplateNameProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      return () => {};
    }, [props])
  return (
    <div className={style.TemplateName}>TemplateName</div>
  )
}
TemplateName.propTypes = {};
TemplateName.defaultProps = {};

export default TemplateName