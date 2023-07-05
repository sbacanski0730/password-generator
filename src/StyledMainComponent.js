import styled from "styled-components";

const StyledMainComponent = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  padding: 24px 30px;

  h1 {
    /* display: block; */
    border: 1px solid red;
    margin: 0;
  }

  .password-container {
    border: 1px dashed black;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default StyledMainComponent;
