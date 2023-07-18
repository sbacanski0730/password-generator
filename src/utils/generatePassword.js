const generatePassword = (length, uppercaseLetters, numbers, symbols) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let generatedPassword = "";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersSet = "012345679";
  const symbolsSet = "!@#$&*+/|.?-_=";

  if (uppercaseLetters) alphabet += upperCaseLetters;
  if (numbers) alphabet += numbersSet;
  if (symbols) alphabet += symbolsSet;

  for (let i = 0; i < +length; i++) {
    const placeInAlphabet = Math.floor(Math.random() * alphabet.length);
    generatedPassword += alphabet[placeInAlphabet];
  }
  return generatedPassword;
};

export default generatePassword;
