import React from "react";
import styled from "styled-components";
import GlobalStyles from "./globalStyles.js";
import MainComponent from "./components/MainComponent/MainComponent.jsx";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo.jsx";

const Layout = styled.div`
  background-color: #efefef;

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => (
  <>
    <GlobalStyles />
    <Layout>
      <MainComponent />
      <ProjectInfo />
    </Layout>
  </>
);

export default App;
