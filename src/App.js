import React from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles.js";
import MainComponent from "./components/MainComponent/MainComponent.jsx";

const Layout = styled.div`
  background-color: #efefef;

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <MainComponent />
      </Layout>
    </>
  );
};

export default App;
