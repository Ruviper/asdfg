import React  from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: calc(100% - 100px);
  background-color: #1973b8;
  color: #fff;
  padding: 8px 16px;
  margin-top: 16px;
`

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
