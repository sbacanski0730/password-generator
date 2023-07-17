import styled from "styled-components";
import checkImage from "../../assets/check-mark.svg";

const StyledFormField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  user-select: none;

  padding: 10px 15px;

  label {
    font-size: 20px;
    flex: 18;
    font-family: "Azeret Mono", monospace;

    margin-left: 10px;
  }

  input {
    flex: 2;

    &[type="number"] {
      font-size: 25px;
      border: 0;
      background: none;
      max-width: 50px;
      text-align: center;

      appearance: textfield;
      -moz-appearance: textfield;
      -webkit-appearance: textfield;

      &:focus-visible {
        outline: none;
      }
    }

    &[type="checkbox"] {
      position: relative;

      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;

      height: 25px;
      width: 25px;
    }

    &[type="checkbox"]::after {
      content: "";
      position: absolute;
      left: 25%;
      top: 0;

      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;

      height: 25px;
      width: 25px;
      border: 1px solid #121212;
      border-radius: 6px;
      outline: none;
      cursor: pointer;
    }

    &[type="checkbox"]:checked::after {
      background-image: url(${checkImage});
      background-size: 70%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default StyledFormField;
