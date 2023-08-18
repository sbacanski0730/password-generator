import React, { useReducer, useState, useEffect, useCallback } from "react";
import generatePassword from "../../utils/generatePassword.js";
import reducerMainComponent from "../../utils/reducerMainComponent.js";
import StyledMainComponent from "./MainComponent.styles.js";
import FormField from "../FormField/FormField.jsx";
import Button from "../Button/Button.jsx";
import Title from "../Title/Title.jsx";
import PasswordContainer from "../PasswordContainer/PasswordContainer.jsx";

const fieldsNames = {
  passwordLength: "passwordLength",
  uppercaseLetters: "uppercaseLetters",
  numbers: "numbers",
  symbols: "symbols",
};

const initialFields = {
  [fieldsNames.passwordLength]: "10",
  [fieldsNames.uppercaseLetters]: false,
  [fieldsNames.numbers]: false,
  [fieldsNames.symbols]: false,
};

const MainComponent = () => {
  const [password, setPassword] = useState("");
  const [formValues, dispatch] = useReducer(
    reducerMainComponent,
    initialFields
  );

  const handleGenerate = () => {
    setPassword(
      generatePassword(
        formValues[fieldsNames.passwordLength],
        formValues[fieldsNames.uppercaseLetters],
        formValues[fieldsNames.numbers],
        formValues[fieldsNames.symbols]
      )
    );
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  const handleEnterClickByCallback = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleGenerate();
      }
    },
    [
      formValues.passwordLength,
      formValues.uppercase,
      formValues.numbers,
      formValues.symbols,
    ]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEnterClickByCallback);

    return () =>
      document.removeEventListener("keydown", handleEnterClickByCallback);
  }, [handleEnterClickByCallback]);

  return (
    <StyledMainComponent>
      <Title>Password Generator</Title>
      <PasswordContainer password={password} />
      <FormField
        label="Password length"
        name="passwordLength"
        id="password-length"
        value={formValues.passwordLength}
        onChange={(e) => {
          dispatch({
            type: "PASSWORD_LENGTH",
            value: e.target.value,
          });
        }}
      />
      <FormField
        label="Include uppercase letters"
        name="uppercaseLetters"
        id="uppercase-letters"
        type="checkbox"
        checked={formValues.uppercaseLetters}
        value={formValues.uppercaseLetters}
        onChange={() => {
          dispatch({ type: "UPPERCASE_LETTERS" });
        }}
      />
      <FormField
        label="Include numbers"
        name="numbers"
        id="numbers"
        type="checkbox"
        checked={formValues.numbers}
        value={formValues.numbers}
        onChange={() => {
          dispatch({ type: "NUMBERS" });
        }}
      />
      <FormField
        label="Include symbols"
        name="symbols"
        id="symbols"
        type="checkbox"
        value={formValues.symbols}
        checked={formValues.symbols}
        onChange={() => {
          dispatch({ type: "SYMBOLS" });
        }}
      />
      <Button label="Generate Password" onClick={handleGenerate} />
    </StyledMainComponent>
  );
};

export default MainComponent;
