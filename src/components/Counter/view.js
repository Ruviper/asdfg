import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import { DateTime } from 'luxon';

import { auth, db } from '../../firebase';
import ButtonComponent from '../Button';
import {
  CounterContainer,
  Title,
  Subtitle,
  TimeContainer,
  TimeColumn,
  TimeNumber,
  TimeText,
} from './styles';

const Accounter = () => {
  const [diffDate, setDiffDate] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  });

  const { days, hours, minutes, seconds } = diffDate;

  useEffect(() => {
    const getDiffTime = async() => {
      const logoutTime = await getLogoutTime();
      console.log('logoutTime', logoutTime)
      const actualDateLuxon = DateTime.fromMillis(getCurrentTime());
      const diff = actualDateLuxon.diff(logoutTime, ['days', 'hours', 'minutes', 'seconds']);
      console.log('diff!!!!', diff)
      const values = diff.values;

      setDiffDate({
        days: values.days,
        hours: values.hours,
        minutes: values.minutes,
        seconds: values.seconds.toFixed(),
      }) 
    }
    
    let getDiffTimeInverval = setInterval(() => {
      console.log('setInterval!!!')
      getDiffTime();
    }, 1000);
    getDiffTime();
    return () => clearInterval(getDiffTimeInverval);
  }, []);

  let history = useHistory();

  const getCurrentTime = () => new Date().getTime();

  const getLogoutTime = async() => {
    const docRefLogoutDate = doc(db,'"logoutDate', `${auth?._delegate?.currentUser?.email}`);
    const docSnapLogoutDate = await getDoc(docRefLogoutDate);
    console.log('docSnapLogoutDate', docSnapLogoutDate)
    const docRefLogintDate = doc(db, 'loginDate', `${auth?._delegate?.currentUser?.email}`);
    // console.log('docRefLogintDate', docRefLogintDate)
    const docSnapLoginDate = await getDoc(docRefLogintDate);
    // console.log('docSnapLoginDate', docSnapLoginDate)
    const loginDateTimestamp = docSnapLoginDate.data()?.loginDate;
    // console.log('loginDateTimestamp', loginDateTimestamp)
    const logoutDateTimestamp = docSnapLogoutDate.data()?.logoutDate;
    console.log('logoutDateTimestamp', logoutDateTimestamp)
    return logoutDateTimestamp !== undefined ? DateTime.fromMillis(logoutDateTimestamp) : DateTime.fromMillis(loginDateTimestamp);
  };

  const logout = async() => {
    const date = new Date();
    const timestamp = date.getTime();
    await saveLogoutDate({ date: timestamp, email: `${auth?._delegate?.currentUser?.email}` });
    await auth.signOut();
    return history.push('/');
  };

  const saveLogoutDate = async ({ date, email }) => {
    try {
      const logoutDateRef = collection(db, 'logoutDate');

      await setDoc(doc(logoutDateRef, email), {
        logoutDate: date,
        email: email,
      })
      console.log('saveLogoutDate', date, email)
    } catch (e) {
      console.error('Error adding document: ', e);
    };
  };

  return (
    <CounterContainer>
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
        title='Logout'
        type='submit'
      />
    </CounterContainer>
  );
};
 
export default Accounter;
