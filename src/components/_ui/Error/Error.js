import React from 'react';
import cls from './Error.scss';
import ImageError from '../../../img/error.png';

const Error = props => (
  <div className={cls.error}>
    <img src={ImageError} alt=""/>
    <p>{props.error}</p>
  </div>
);

export default Error;