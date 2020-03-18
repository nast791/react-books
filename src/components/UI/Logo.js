import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const LogoLink = styled(Link)`
  display: ${props => props.footer ? 'inline-block' : 'inline'};
  margin-bottom: ${props => props.footer ? '15px' : '0'};
`;

const LogoText = styled.span`
  color: #31BDD7;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 4px;
  
  &:hover {
    color: #31BDD7;
  }
`;

const Logo = props => {
  const scrollTop = () => window.scrollTo({top:0, behavior: "smooth"});

  return (
    <LogoLink to="/" onClick={scrollTop} footer={!!props.footer}>
      <LogoText>Books Area</LogoText>
    </LogoLink>
  );
};

export default Logo;