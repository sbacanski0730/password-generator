import React from "react";
import PropTypes from "prop-types";
import StyledFormField from "./FormField.styles.js";

const FormField = ({ label, name, id, type = "number" }) => {
  return (
    <StyledFormField>
      <input
        name={name}
        id={id}
        type={type}
        max="30"
        min="0"
        maxLength="2"
        placeholder=""
      />
      <label htmlFor={id}>{label}</label>
    </StyledFormField>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: "number",
};
export default FormField;
