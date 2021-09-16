import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { collection } from "firebase/firestore";
import { DateTime } from 'luxon'

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
  const [firebaseEmail, setFirebaseEmail] = useState(null);
  const [diffDate, setDiffDate] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  })

  const { days, hours, minutes, seconds } = diffDate;

  useEffect(() => {
    // const getCurrentEmail = async() => {
    //   const email = await auth._delegate.currentUser.email
    //   console.log('email', email)
    //   console.log('firebaseEmail', firebaseEmail)
    //   setFirebaseEmail(email)
    // }
    // getCurrentEmail()
    const getDiffTime = async() => {
      const logoutTime = await getLogoutTime();
      const actualDateLuxon = DateTime.fromMillis(getCurrentTime());
      const diff = logoutTime !== undefined ? actualDateLuxon.diff(logoutTime, ['days', 'hours', 'minutes', 'seconds']) : DateTime.now().toObject();
      const values = diff.values;

      setDiffDate({
        days: values.days,
        hours: values.hours,
        minutes: values.minutes,
        seconds: values.seconds.toFixed()
      })
     
    }
    
    let getDiffTimeInverval = () => setInterval(() => {
      console.log('setInterval!!!')
      getDiffTime()
    }, 1000)
    getDiffTimeInverval();
    getDiffTime()
    return clearInterval(getDiffTimeInverval)
  }, [])

  let history = useHistory();

  const getCurrentTime = () => (
    new Date().getTime()
  )

  const getLogoutTime = async() => {
    const docRef = doc(db, "logoutDate", "ruben@hotmail.com");
    const docSnap = await getDoc(docRef);
    const logoutDateTimestamp = docSnap.data().logoutDate;
    return logoutDateTimestamp !== undefined ? DateTime.fromMillis(logoutDateTimestamp) : undefined;
  }

  const logout = async() => {
    const date = new Date();
    const timestamp = date.getTime();
    await saveLogoutDate({ date: timestamp, email: "ruben@hotmail.com" })
    await auth.signOut()
    return history.push('/login-register')
  }

  const saveLogoutDate = async ({ date, email }) => {
    try {
      const logoutDateRef = collection(db, "logoutDate");

      await setDoc(doc(logoutDateRef, email), {
        logoutDate: date,
        email: email
      })
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
          <TimeNumber>{days}</TimeNumber>
          <TimeText>days</TimeText>
        </TimeColumn>
        <TimeColumn>
          <TimeNumber>{hours}</TimeNumber>
          <TimeText>hours</TimeText>
        </TimeColumn>
        <TimeColumn>
          <TimeNumber>{minutes}</TimeNumber>
          <TimeText>minutes</TimeText>
        </TimeColumn>
        <TimeColumn>
          <TimeNumber>{seconds}</TimeNumber>
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
