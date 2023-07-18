import React from "react";
import PropTypes from "prop-types";
import StyledFormField from "./FormField.styles.js";

const FormField = ({ label, name, id, type, value, checked, onChange }) => (
  <StyledFormField>
    <input
      name={name}
      id={id}
      type={type}
      max="30"
      min="0"
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor={id}>{label}</label>
  </StyledFormField>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: "number",
  checked: false,
  onChange: () => {},
};
export default FormField;
