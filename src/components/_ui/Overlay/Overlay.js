import React from 'react';
import cls from './Overlay.scss';

const Overlay = props => {
  return(
    <div className={cls.overlay} onClick={props.onClick} />
  );
};

export default Overlay;