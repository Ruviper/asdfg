import React, { useState } from 'react';
import styled from 'styled-components';

import { emailValidation, passwordValidation } from '../../validations/validations';
 
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 641px) {
    width: 50%;
  }
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
    password: ''
  })

  const handleChangeLogin = e => (
    setLoginObject({
      ...loginObject,
      [e.target.name]: e.target.value
    })
  )


  const handleSubmitCreateUser = async(e) => {
    e.preventDefault()
  }

  const handleSubmitLoginUser = async(e) => {
    e.preventDefault()
  }

  const { email, password } = loginObject;
  
  return (

    <LoginContainer>
      <div>
        <PadlockImage src="../../assets/padlock.svg" />
      </div>
      <form
        onSubmit={handleSubmitCreateUser}
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
        >
          Login
        </LoginButton>
      </form>
    </LoginContainer>
  );
}
 
export default Login;
