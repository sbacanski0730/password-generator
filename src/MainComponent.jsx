import React from "react";
import { PiCopyThin } from "react-icons/pi";
import StyledMainComponent from "./StyledMainComponent.js";

function MainComponent() {
  return (
    <StyledMainComponent>
      <h1>Password Generator</h1>
      <div className="password-container">
        <p>random Generated Password</p>
        <PiCopyThin />
      </div>
      <form onSubmit={() => console.log("Hello")}>
        <label htmlFor="length">Password Generator</label>
        <input type="text" name="length" id="length" />
      </form>
    </StyledMainComponent>
  );
}

export default MainComponent;
