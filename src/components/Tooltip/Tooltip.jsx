import React from "react";
import PropTypes from "prop-types";
import StyledTooltip from "./Tooltip.style.js";

const Tooltip = ({ display, content, resetAnimation }) =>
  display && (
    <StyledTooltip onAnimationEnd={() => resetAnimation()}>
      {content}
    </StyledTooltip>
  );

Tooltip.propTypes = {
  display: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  resetAnimation: PropTypes.func.isRequired,
};

export default Tooltip;
