import React from 'react';
import cls from './Logo.scss';
import {NavLink} from 'react-router-dom';


const Logo = () => {
  const cancelActiveAndScroll = (event) => {
    if (event.target.closest(`.${cls.logoActiveLink}`)) {
      event.preventDefault();
    }
    window.scrollTo({top:0, behavior: "smooth"});
  };

  return (
    <NavLink to="/" exact onClick={cancelActiveAndScroll} activeClassName={cls.logoActiveLink}>
      <span className={cls.logoText}>Books Area</span>
    </NavLink>
  );
};

export default Logo;