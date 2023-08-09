import styled from "styled-components";

const StyledPasswordContainer = styled.div`
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

  .icon-wrapper {
    flex: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    color: #ffffffdd;
    font-size: 29px;
    transition: color 100ms linear;

    &:hover {
      cursor: pointer;
      color: #ffffff;
    }
  }
`;

export default StyledPasswordContainer;
