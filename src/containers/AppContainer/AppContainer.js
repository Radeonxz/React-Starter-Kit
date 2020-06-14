/**
 * AppContainer
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";

// import containers
import ThemeProviderContainer from "../ThemeProviderContainer";
import AppRoutes from "./AppRoutes";

const AppContainer = () => {
  return (
    <BrowserRouter>
      <ThemeProviderContainer>
        <AppRoutes />
      </ThemeProviderContainer>
    </BrowserRouter>
  );
};

export default AppContainer;
