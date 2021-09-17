import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { doc, setDoc, collection } from 'firebase/firestore';
import { ReactComponent as PadlockSvg } from '../../assets/padlock.svg';

import { auth, db } from '../../firebase';
import { LoginContainer, Form } from './styles';
import { emailValidation, passwordValidation } from '../../validations/validations';
import ButtonComponent from '../Button';
import InputComponent from '../Input';
 
const Login = () => {
  const [loginObject, setLoginObject ] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { email, password } = loginObject;

  let history = useHistory();

  const saveLoginDate = async ({ date, email }) => {
    try {
      const loginDateRef = collection(db, 'loginDate');

      await setDoc(doc(loginDateRef, email), {
        loginDate: date,
        email: email
      })
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleChangeLogin = e => (
    setLoginObject({
      ...loginObject,
      [e.target.name]: e.target.value
    })
  )

  const handleSubmitCreateUser = async(e) => {
    e.preventDefault()
    
    try {
      setError('')
      
      await auth.createUserWithEmailAndPassword(email, password)
      setLoginObject({
        email: '',
        password: '',
      })
      const date = new Date();
      const timestamp = date.getTime();
      await saveLoginDate({ date: timestamp, email: email });
      return history.push('/counter');
    } catch {
      setError('Check your registration data');
    }
  }
  
  const handleSubmitLoginUser = async(e) => {
    e.preventDefault();

    try {
      setError('');
      await auth.signInWithEmailAndPassword(email, password);

      const date = new Date();
      const timestamp = date.getTime();
      await saveLoginDate({ date: timestamp, email: email });

      history.push('/counter');
    } catch {
      setError('Check your access data');
    }
  }
  
  return (
    <LoginContainer>
      <div>
        <PadlockSvg src='../../assets/padlock.svg' />
      </div>
      <Form>
        <InputComponent
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleChangeLogin}
          onFocus={() => setError('')}
          onBlur={() => !emailValidation({ email }) && setError('Invalid email format')}
        />
        <InputComponent
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleChangeLogin}
          onFocus={() => setError('')}
          onBlur={() => !passwordValidation({ password }) && setError('Min 8 letter password, with at least a symbol, upper and lower case letters and a number')}
        />
        {error && <Alert variant='danger'>{error}</Alert>}
        <ButtonComponent
          type='submit'
          onClick={handleSubmitLoginUser}
          title='Login'
        />
        <ButtonComponent
          type='submit'
          onClick={handleSubmitCreateUser}
          title='Register'
        />
      </Form>
    </LoginContainer>
  );
};
 
export default Login;
