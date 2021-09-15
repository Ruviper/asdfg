export const emailValidation = ({ email }) => {
  console.log(email)
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  console.log(re.test(String(email).toLowerCase()))
  return re.test(String(email).toLowerCase());
}

export const passwordValidation = ({ password }) => {
  console.log(password)
  // min 8 letter password, with at least a symbol, upper and lower case letters and a number
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  console.log(re.test(password))
  return re.test(password);
}