/**
 * AppContainer
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";

// import containers
import NavigationContainer from "../NavigationContainer";
import AppRoutes from "./AppRoutes";

const AppContainer = () => {
  return (
    <BrowserRouter>
      <>
        <NavigationContainer />
        <AppRoutes />
      </>
    </BrowserRouter>
  );
};

export default AppContainer;
