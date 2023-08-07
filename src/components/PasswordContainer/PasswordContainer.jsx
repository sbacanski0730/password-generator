import React from "react";
import PropTypes from "prop-types";
import { FaCopy as CopyIcon } from "react-icons/fa";
import StyledPasswordContainer from "./PasswordContainer.styles.js";
import Tooltip from "../Tooltip/Tooltip.jsx";

const PasswordContainer = ({ password }) => {
  const copyClick = () => {
    console.log("navigator: ", navigator.clipboard.writeText);

    navigator.clipboard.writeText("This is in clipboard");
  };

  return (
    <StyledPasswordContainer password={password}>
      <h2>{password}</h2>
      <div className="icon-wrapper">
        <CopyIcon onClick={copyClick} />
        <Tooltip content="Copied!" />
      </div>
    </StyledPasswordContainer>
  );
};

PasswordContainer.propTypes = {
  password: PropTypes.string,
};
PasswordContainer.defaultProps = {
  password: "",
};
export default PasswordContainer;
