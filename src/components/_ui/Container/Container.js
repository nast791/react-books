import React from 'react';
import cls from './Container.scss';

const Container = props => {
  return (
    <div className={cls.container}>
      {props.children}
    </div>
  );
};

export default Container;