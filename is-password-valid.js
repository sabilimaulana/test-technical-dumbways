const isPasswordValid = (password) => {
  let regexKecil = /[a-z]/;
  let regexBesar = /[A-Z]/;
  let regexNumber = /[0-9]/;
  let regexSymbol = /[^a-zA-Z0-9\s]/;
  password = password.toString();


  if (password.length >= 8 && regexKecil.test(password) && regexBesar.test(password) && regexNumber.test(password) && regexSymbol.test(password)) {
    return true;
  } else {
    return false;
  }
}