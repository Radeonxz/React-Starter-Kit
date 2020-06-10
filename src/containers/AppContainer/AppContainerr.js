/**
 * AppContainer
 */
import React from "react";

// import containers
import NavigationContainer from "../NavigationContainer";
import WelcomeContainer from "../WelcomeContainer";

const AppContainer = () => {
  return (
    <>
      <NavigationContainer />
      <WelcomeContainer />
    </>
  );
};

export default AppContainer;
