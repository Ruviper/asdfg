import styled from 'styled-components';

export const LoginContainer = styled.div` 
  @media (max-width: 640px) {
    width: 90%;
    height: 100%;
  };

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 48px;
`;
