import React from 'react';
import styled from 'styled-components';
import { doc, setDoc } from "firebase/firestore";
import { ref, set } from 'firebase/database';
import { useHistory } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

import { auth, db } from '../../firebase';
import ButtonComponent from '../Button'
 
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
  margin: 32px 0;
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

console.log('auth email!!!!', auth._delegate.currentUser !== null ? auth._delegate.currentUser.email : 'es null' )
console.log(auth)

const Accounter = () => {
  let history = useHistory();

  const logout = async() => {
    const fecha = new Date();
    const timestamp = fecha.getTime();
    await saveLogoutDate({ date: timestamp, email: auth._delegate.currentUser.email })
    // await auth.signOut()
    return
    // return history.push('/')
  }

  const saveLogoutDate = async ({ date, email }) => {
    console.log('entro en saveLogoutDate fuction')
    console.log(date, email)

    try {
      const docRef = await addDoc(collection(db, "users"), {
        date: date,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
      <ButtonComponent
        onClick={logout}
        title="Logout"
        type="submit"
      />
    </AccounterContainer>
  );
}
 
export default Accounter;
