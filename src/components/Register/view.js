import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import { auth } from '../../firebase';

// import { emailValidation, passwordValidation } from '../../validations/validations';
 
const RegisterContainer = styled.div`
  @media (max-width: 640px) {
    width: 50%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: calc(100% - 100px);
  border: none;
  border-bottom: 2px solid black;
  padding-left: 12px;
  margin-bottom: 16px;
`;

const registerImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
`

const RegisterButton = styled.button`
  width: calc(100% - 100px);
  background-color: #1973b8;
  color: #fff;
  padding: 8px 16px;
  margin-top: 16px;
`

const Register = () => {
  const [registerObject, setRegisterObject ] = useState({
    email: '',
    password: ''
  });

  const { email, password } = registerObject;

  let history = useHistory();

  const handleChangeRegister = e => (
    setRegisterObject({
      ...registerObject,
      [e.target.name]: e.target.value
    })
  )

  const handleSubmitCreateUser = async(e) => {
    console.log(auth._delegate.currentUser)
    debugger
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
    history.push('/login')
  }

  console.log(auth)
  return (

    <RegisterContainer>
      <div>
        <registerImage src="" />
      </div>
      <form
        onSubmit={handleSubmitCreateUser}
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeRegister}
         //  onBlur={emailValidation({ email })}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChangeRegister}
          // onBlur={passwordValidation({ password })}
        />
        <RegisterButton
          type="submit"
        >
          Register
        </RegisterButton>
      </form>
    </RegisterContainer>
  );
}
 
export default Register;
