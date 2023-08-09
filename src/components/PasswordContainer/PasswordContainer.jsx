import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";
import { FaCopy as CopyIcon } from "react-icons/fa";
import StyledPasswordContainer from "./PasswordContainer.styles.js";
import Tooltip from "../Tooltip/Tooltip.jsx";

const PasswordContainer = ({ password }) => {
  const [tooltipActive, setTooltipActive] = useState(false);

  return (
    <StyledPasswordContainer password={password}>
      <h2>{password}</h2>
      <div className="icon-wrapper">
        <CopyToClipboard onCopy={() => setTooltipActive(true)} text={password}>
          <CopyIcon />
        </CopyToClipboard>
        <Tooltip
          content="Copied!"
          display={tooltipActive}
          resetAnimation={() => setTooltipActive(false)}
        />
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
