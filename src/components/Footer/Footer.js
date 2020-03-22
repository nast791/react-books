import React from 'react';
import cls from './Footer.scss';
import ImageBooks from '../../img/books3.jpg';
import Logo from "../_ui/Logo/Logo";
import Container from "../_ui/Container/Container";

const Footer = () => {
  return (
    <section className={cls.footer} style={{'backgroundImage': `url(${ImageBooks})`}}>
      <Container>
        <Logo/>
        <p className={cls.footerCopyright}>Copyright (c) 2020</p>
        <p>Все права защищены.</p>
      </Container>
    </section>
  );
};

export default Footer;