import React from 'react';
import styled from 'styled-components';
import ImageBooks from '../img/books3.jpg';
import ImageArrow from '../img/arrow.svg';
import Logo from "./UI/Logo";
import Container from "./UI/Container";

const FooterSection = styled.section`
  position: relative;
  min-height: 250px;
  color: #FFFFFF;
  background-color: #000000;
  background-image: url(${ImageBooks});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 50% 50%;
  
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  * {
    position: relative;
    z-index: 1;
  }
  
  p {
    margin-top: 5px;
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding-top: 80px;
    
  &::before, &::after {
    position: absolute;
    content: "";
    top: -0.2px;
    width: 50%;
    height: 25px;
    background-color: #FFFFFF;
    z-index: 2;
  }
  
  &::before {
    left: 0;
    clip-path: polygon(0 100%, 0 0, 100% 0, 97% 100%);
  }
  
  &::after {
    right: 0;
    clip-path: polygon(3% 100%, 0 0, 100% 0, 100% 100%);
  }
  
  @media (max-width: 1600px) {
    &::before {
      clip-path: polygon(0 100%, 0 0, 100% 0, 95% 100%);
    }
    
    &::after {
      clip-path: polygon(5% 100%, 0 0, 100% 0, 100% 100%);
    }
  }
  
  @media (max-width: 900px) {
    &::before {
      clip-path: polygon(0 100%, 0 0, 100% 0, 92% 100%);
    }
    
    &::after {
      clip-path: polygon(8% 100%, 0 0, 100% 0, 100% 100%);
    }
  }
  
  @media (max-width: 700px) {
    &::before {
      clip-path: polygon(0 100%, 0 0, 100% 0, 87% 100%);
    }
    
    &::after {
      clip-path: polygon(13% 100%, 0 0, 100% 0, 100% 100%);
    }
  }
`;

const Button = styled.button`
  position: absolute;
  content: "";
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 25px;
  background-color: transparent;
  background-image: url(${ImageArrow});
  background-repeat: no-repeat;
  background-size: 25px auto;
  background-position: 50% 100%;
`;

const Footer = () => {
  const scrollTop = () => window.scrollTo({top:0, behavior: "smooth"});

  return (
    <FooterSection>
      <Wrapper>
        <Container>
          <Button onClick={scrollTop}/>
          <Logo footer/>
          <p>Copyright (c) 2020</p>
          <p>Все права защищены.</p>
        </Container>
      </Wrapper>
    </FooterSection>
  );
};

export default Footer;