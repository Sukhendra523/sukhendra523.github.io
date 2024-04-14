import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
const AppWrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
