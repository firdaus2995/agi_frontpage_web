export const upperCase = /[A-Z]/;
export const lowerCase = /[a-z]/;
export const space = /[ ]/;
export const number = /[0-9]/;
export const specialChar = /[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#"']/;
export const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (email: string) => {
  return regex.test(email);
};

export const isAlphabet = (value: string): boolean => {
  return upperCase.test(value) || lowerCase.test(value);
};

export const isNumber = (value: string): boolean => {
  return (
    number.test(value) &&
    !upperCase.test(value) &&
    !lowerCase.test(value) &&
    !specialChar.test(value) &&
    !space.test(value)
  );
};
