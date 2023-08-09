import styled, { keyframes } from "styled-components";

const showCopy = keyframes`
    from {
        transform: translateX(-10px);
        opacity: 0;
    }
    25%,75% {
        opacity: 1;
    }
    to  {
        transform: translateX(0);
        opacity: 0;
    }
`;

const StyledTooltip = styled.span`
  position: absolute;
  right: -75%;
  top: 0;

  opacity: 0;

  background-color: #efefef;
  color: #000;
  border-radius: 6px;
  padding: 4px 11px;
  font-size: 17px;
  box-shadow: 0px 0px 10px 0px rgba(12, 12, 12, 0.35);

  animation: ${showCopy} 800ms linear;
`;

export default StyledTooltip;
