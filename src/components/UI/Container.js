import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px; // изменяемая величина
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

const Container = props => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default Container;