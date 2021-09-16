import React  from 'react';

import { Button } from './styles';

const ButtonComponent = ({ title, onClick, type }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
    >
      {title}
    </Button>
  );
}
 
export default ButtonComponent;
