import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #121212;
  color: #ffffff;
  border: 0;
  border-radius: 0;

  padding-block: 11px;

  letter-spacing: 1px;
  font-size: 25px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
