import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Alert } from 'react-bootstrap';

import { auth } from '../../firebase';

import { emailValidation, passwordValidation } from '../../validations/validations';
 
const LoginContainer = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: calc(100% - 100px);
  border: none;
  border-bottom: 2px solid black;
  padding-left: 12px;
  margin-bottom: 16px;
`;

const PadlockImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
`

const LoginButton = styled.button`
  width: calc(100% - 100px);
  background-color: #1973b8;
  color: #fff;
  padding: 8px 16px;
  margin-top: 16px;
`

const Login = () => {
  const [loginObject, setLoginObject ] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { email, password } = loginObject;

  let history = useHistory();

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
        password: ''
      })
    } catch {
      setError('Revisa los datos para la creación del usuario')
    }
  }
  
  const handleSubmitLoginUser = async(e) => {
    e.preventDefault()

    try {
      setError('')
      await auth.signInWithEmailAndPassword(email, password)
      return history.push('/accounter')
    } catch {
      setError('Revisa tus datos de acceso')
    }
  }
  console.log('ERROR', error)
  
  return (

    <LoginContainer>
      <div>
        <PadlockImage src="../../assets/padlock.svg" />
      </div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form
        onSubmit=""
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeLogin}
          onFocus={() => setError('')}
          onBlur={() => {
            setError('')
            emailValidation({ email })
            return !emailValidation && setError('Email inválido')
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChangeLogin}
          onFocus={() => setError('')}
          onBlur={() => {
            passwordValidation({ password })
            !passwordValidation && setError('min 8 letter password, with at least a symbol, upper and lower case letters and a numberPassword inválido')
            return
          }}
        />
        <LoginButton
          type="submit"
          onClick={handleSubmitLoginUser}
        >
          Login
        </LoginButton>
        <LoginButton
          type="submit"
          onClick={handleSubmitCreateUser}
        >
          Register
        </LoginButton>
      </Form>
    </LoginContainer>
  );
}
 
export default Login;
