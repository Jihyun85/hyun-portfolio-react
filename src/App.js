import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "./components/styles/GlobalFonts";
import Normalize from "./components/styles/Normalize";
import GlobalReset from "./components/styles/GlobalReset";
import Router from "./Router";
import "./styles/main.scss";
import theme from "./components/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Normalize />
      <GlobalReset />
      <Router />
    </ThemeProvider>
  );
};

export default App;
