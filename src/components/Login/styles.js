import styled from 'styled-components';

export const LoginContainer = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;
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
`;

export const PadlockImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
`;
