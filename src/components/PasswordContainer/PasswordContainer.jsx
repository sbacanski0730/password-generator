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
  min-height: 64px;

  h2 {
    flex: 8;

    font-size: ${(props) => {
      if (props.password.length >= 25) return "15px";
      if (props.password.length >= 20) return "20px";
      if (props.password.length >= 18) return "23px";
      if (props.password.length >= 15) return "26px";
      return "29px";
    }};

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

const PasswordContainer = ({ password }) => (
  <Container password={password}>
    <h2>{password}</h2>
    <CopyIcon />
  </Container>
);

PasswordContainer.propTypes = {
  password: PropTypes.string,
};
PasswordContainer.defaultProps = {
  password: "",
};
export default PasswordContainer;
