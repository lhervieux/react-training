import React, { useEffect, useState } from 'react'
import style from './MemeForm.module.css';

// types
interface IMemeFormProps{};
interface IMemeFormState{};

// etat initial
const initialState: IMemeFormState = {};

// components
const MemeForm : React.FC<IMemeFormProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
      return () => {};
    }, [props])
  return (
    <div className={style.MemeForm}>MemeForm</div>
  )
}
MemeForm.propTypes = {};
MemeForm.defaultProps = {};

export default MemeForm