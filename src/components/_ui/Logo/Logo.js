import React from 'react';
import cls from './Logo.scss';
import {Link} from 'react-router-dom';


const Logo = () => {
  const scrollTop = () => window.scrollTo({top:0, behavior: "smooth"});

  return (
    <Link to="/" onClick={scrollTop}>
      <span className={cls.logoText}>Books Area</span>
    </Link>
  );
};

export default Logo;