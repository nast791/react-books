import React from 'react';
import cls from './Footer.scss';
import ImageBooks from '../../img/books3.jpg';
import ImageArrow from '../../img/arrow.svg';
import Logo from "../_ui/Logo/Logo";
import Container from "../_ui/Container/Container";


const Footer = () => {
  const scrollTop = () => window.scrollTo({top:0, behavior: "smooth"});

  return (
    <section className={cls.footer} style={{'backgroundImage': `url(${ImageBooks})`}}>
      <div className={cls.footerWrapper}>
        <Container>
          <button className={cls.footerButton} onClick={scrollTop} style={{'backgroundImage': `url(${ImageArrow})`}} type="button"/>
          <Logo/>
          <p className={cls.footerCopyright}>Copyright (c) 2020</p>
          <p>Все права защищены.</p>
        </Container>
      </div>
    </section>
  );
};

export default Footer;