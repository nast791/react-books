import React from 'react';
import styled from 'styled-components';
import ImageBooks from '../img/books.jpg';
import Logo from "./UI/Logo";
import Container from "./UI/Container";
import Search from "./Search";


const HeaderSection = styled.section`
  padding-top: 78px;
  background-color: #000000;
`;

const TopPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  background-color: #000000;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 5;
  
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BottomPanel = styled.div`
  position: relative;
  display: flex;
  min-height: 350px;
  color: #FFFFFF;
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
    text-align: center;
    z-index: 1;
  }
  
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
  
  h1 {
    font-size: 36px;
    font-weight: 700;
    text-transform:uppercase;
    letter-spacing: 2px;
  }
  
  p {
    margin: 30px 0;
    font-size: 24px;
  }
`;

const Header = props => {
  return (
    <HeaderSection>
      <TopPanel>
        <Container>
          <Logo/>
          <Search/>
        </Container>
      </TopPanel>
      <BottomPanel>
        <Container>
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </Container>
      </BottomPanel>
    </HeaderSection>
  );
};

export default Header;