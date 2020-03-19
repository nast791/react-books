import React from 'react';
import cls from './Header.scss';
import ImageBooks from '../../img/books.jpg';
import Logo from "../_ui/Logo/Logo";
import Container from "../_ui/Container/Container";
import Search from "../Search/Search";

const Header = props => {
  return (
    <section className={cls.header}>
      <div className={cls.headerTop}>
        <Container>
          <Logo/>
          <Search/>
        </Container>
      </div>
      <div className={cls.headerBottom} style={{'backgroundImage': `url(${ImageBooks})`}}>
        <Container>
          <h1 className={cls.headerTitle}>{props.title}</h1>
          <p className={cls.headerDesc}>{props.subtitle}</p>
        </Container>
      </div>
    </section>
  );
};

export default Header;