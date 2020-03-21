import React from 'react';
import cls from './Menu.scss';
import {NavLink} from "react-router-dom";
import Overlay from "../_ui/Overlay/Overlay";

const Menu = props => {
  const classes = [cls.menu];
  if (!props.isOpen) {
    classes.push(cls.menuClose);
  }

  return (
    <React.Fragment>
      <nav className={classes.join(' ')}>
        <ul>
          <li><NavLink to="/" exact activeClassName={cls.menuActiveLink} onClick={event => props.onClose(event)}>Главная</NavLink></li>
          <li><NavLink to="/genres" exact activeClassName={cls.menuActiveLink} onClick={event => props.onClose(event)}>Жанры</NavLink></li>
          <li><NavLink to="/authors" exact activeClassName={cls.menuActiveLink} onClick={event => props.onClose(event)}>Авторы</NavLink></li>
        </ul>
      </nav>
      { props.isOpen ? <Overlay onClick={event => props.onClose(event)} /> : null }
    </React.Fragment>
  );
};

export default Menu;