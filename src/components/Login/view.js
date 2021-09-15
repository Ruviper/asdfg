import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

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
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    auth.createUserWithEmailAndPassword(email, password)
    history.push('/login')
  }
  
  const handleSubmitLoginUser = async(e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    return history.push('/accounter')
  }

  return (

    <LoginContainer>
      {auth ? (
        <div>
          <PadlockImage src="../../assets/candadoLogin.svg" />
        </div>
      ) : (
        <div>
          <PadlockImage src="../../assets/imagenregistro.svg" />
        </div>
      )}
      <Form
        onSubmit=""
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeLogin}
         //  onBlur={emailValidation({ email })}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChangeLogin}
          // onBlur={passwordValidation({ password })}
        />
        <LoginButton
          type="submit"
          onClick={handleSubmitLoginUser}
        >
          Login
        </LoginButton>
        {auth && (
          <LoginButton
            type="submit"
            onClick={handleSubmitCreateUser}
          >
            Register
          </LoginButton>
        )}
      </Form>
    </LoginContainer>
  );
}
 
export default Login;
