import React from 'react';
import cls from './Input.scss';

const Input = props => {
  const inputType = props.type || 'text';

  return (
    <input className={cls.input} style={props.style} type={inputType} value={props.value} placeholder={props.placeholder} name={props.name} autoComplete={props.autocomplete} onChange={props.onChange}/>
  );
};

export default Input;