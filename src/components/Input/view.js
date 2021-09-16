import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: calc(100% - 100px);
  border: none;
  border-bottom: 2px solid black;
  padding-left: 12px;
  margin-bottom: 16px;
`;

const InputComponent = ({ type, name, placeholder, value, onChange, onFocus, onBlur }) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
 
export default InputComponent;
