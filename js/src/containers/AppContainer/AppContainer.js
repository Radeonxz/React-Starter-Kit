/**
 * AppContainer
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";

// import containers
import AppRoutes from "./AppRoutes";

const AppContainer = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppContainer;
