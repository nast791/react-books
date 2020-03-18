import React from 'react';
import styled from 'styled-components';

const InputItem = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  border: none;
  border-radius: 5px;
  color: gray;
`;

const Input = props => {
  const inputType = props.type || 'text';

  return (
    <InputItem type={inputType} value={props.value} placeholder={props.placeholder} name={props.name} onChange={props.onChange}/>
  );
};

export default Input;