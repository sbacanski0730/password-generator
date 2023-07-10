import React from "react";
import StyledMainComponent from "./StyledMainComponent.js";
import FormField from "../FormField/FormField.jsx";
import Button from "../Button/Button.jsx";
import Title from "../Title/Title.jsx";
import PasswordContainer from "../PasswordContainer/PasswordContainer.jsx";

const MainComponent = () => {
  return (
    <StyledMainComponent>
      <Title>Password Generator</Title>
      <PasswordContainer />
      <FormField
        label="Password length"
        name="password-length"
        id="password-length"
      />
      <FormField
        label="Include uppercase letters"
        name="uppercase-letters"
        id="uppercase-letters"
        type="checkbox"
      />
      <FormField
        label="Include numbers"
        name="numbers"
        id="numbers"
        type="checkbox"
      />
      <FormField
        label="Include symbols"
        name="symbols"
        id="symbols"
        type="checkbox"
      />
      <Button label="Generate Password" />
    </StyledMainComponent>
  );
};

export default MainComponent;
