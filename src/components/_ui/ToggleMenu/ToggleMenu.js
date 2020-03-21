import React from 'react';
import cls from './ToggleMenu.scss';
import ImageBurger from '../../../img/burger.svg';

const ToggleMenu = props => {
  return(
    <button className={cls.toggleMenu} type="button" style={{'backgroundImage': `url(${ImageBurger})`}} onClick={props.openMenu}/>
  );
};

export default ToggleMenu;