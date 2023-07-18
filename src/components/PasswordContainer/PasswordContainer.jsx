import React from "react";
import PropTypes from "prop-types";
import { FaCopy as CopyIcon } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  background: #121212;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 0;

  h2 {
    flex: 8;

    font-size: 29px;
    font-weight: 400;
    letter-spacing: 4px;
    text-align: center;
  }

  .placeholder {
    color: #cecece;
  }

  svg {
    flex: 2;

    color: #ffffff;
    font-size: 29px;
  }
`;

const PasswordContainer = ({ generatedPassword }) => (
  <Container>
    <h2>{generatedPassword}</h2>
    <CopyIcon />
  </Container>
);

PasswordContainer.propTypes = {
  generatedPassword: PropTypes.string,
};
PasswordContainer.defaultProps = {
  generatedPassword: "",
};
export default PasswordContainer;
