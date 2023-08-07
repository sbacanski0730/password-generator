import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTooltip = styled.span`
  position: absolute;
  right: -75%;
  top: 0;

  /* background-color: #f9f9f9; */
  background-color: #efefef;
  color: #000;
  border-radius: 6px;
  padding: 4px 11px;
  font-size: 17px;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.25);
`;

const Tooltip = ({ display, content }) =>
  display && <StyledTooltip>{content}</StyledTooltip>;

Tooltip.propTypes = {
  display: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  display: true,
};

export default Tooltip;
