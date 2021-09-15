import React from 'react';
import styled from 'styled-components';
import { doc, setDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";

import { auth, db } from '../../firebase';
 
const AccounterContainer = styled.div`
  @media (max-width: 640px) {
    width: 90%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;

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
console.log(auth)
const Accounter = () => {
  let history = useHistory();

  const logout = async() => {
    auth.signOut()
    saveLogoutDate({ date: new Date, email: 'test1@hotmail.com'})
    return history.push('/')
  }

  const saveLogoutDate = async ({ date, email }) => {
    console.log('entro en saveLogoutDate fuction')
    console.log(date, email)

    await setDoc(doc(db, "logoutDate", "date"), {
      date: date,
      email: email
    })
  };

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
