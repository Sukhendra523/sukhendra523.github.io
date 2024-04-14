import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import NavBar from "./components/NavBar";
import BodyWrapper from "./components/BodyWrapper";
import BannerSection from "./components/Sections/BannerSection";
const AppWrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppWrapper>
        <BrowserRouter>
          <NavBar />
          <BodyWrapper>
            <BannerSection />
          </BodyWrapper>
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
