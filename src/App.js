import React from "react";
import GlobalStyles from "./globalStyles.js";
import MainLayout from "./MainLayout.jsx";
import MainComponent from "./MainComponent.jsx";

function App() {
  return (
    <div>
      <GlobalStyles />
      <MainLayout>
        <MainComponent />
      </MainLayout>
    </div>
  );
}

export default App;
