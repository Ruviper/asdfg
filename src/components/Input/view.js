import React from 'react';

import { Input } from './styles';

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
