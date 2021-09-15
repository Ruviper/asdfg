import React from 'react';
import styled from 'styled-components';
 
const AccounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 640px) {
    width: 50%;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #000;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 0.7em;
  font-weight: 300;
  color: gray;
  margin-bottom: 0;
`;

const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
`;

const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeNumber = styled.p`
  font-size: 2.5em;
  color: gray;
  margin: 0;
  font-weight: 600;
`;

const TimeText = styled.p`
  font-size: 1em;
  color: gray;
  margin: 0;

  font-weight: 400;
`;

const LogoutButton = styled.button`
  width: calc(100% - 100px);
  background-color: #1973b8;
  color: #fff;
  padding: 8px 16px;
  margin-top: 60px;
`

const Accounter = () => {

  const logout = async() => (
    console.log('logout')
  )

  return (
    <AccounterContainer>
      <Title>
        Welcome!
      </Title>
      <Subtitle>
        The last time you accessed was
      </Subtitle>
      <TimeContainer>
        <TimeColumn>
          <TimeNumber>00</TimeNumber>
          <TimeText>days</TimeText>
        </TimeColumn>
        <TimeColumn>
          <TimeNumber>00</TimeNumber>
          <TimeText>hours</TimeText>
        </TimeColumn>
        <TimeColumn>
          <TimeNumber>00</TimeNumber>
          <TimeText>minutes</TimeText>
        </TimeColumn>
        <TimeColumn>
          <TimeNumber>00</TimeNumber>
          <TimeText>seconds</TimeText>
        </TimeColumn>
      </TimeContainer>
      <LogoutButton
        onClick={logout}
      >
          Logout
      </LogoutButton>
    </AccounterContainer>
  );
}
 
export default Accounter;
