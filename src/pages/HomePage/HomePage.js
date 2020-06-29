/**
 * HomePage
 */
import React from "react";

import Dropdown from "../../components/Dropdown";

// import containers
// import NavigationContainer from "../../containers/NavigationContainer";
import WelcomeContainer from "../../containers/WelcomeContainer";

const HomePage = () => {
  return (
    <>
      {/* <NavigationContainer /> */}
      <Dropdown />
      <WelcomeContainer />
    </>
  );
};

export default HomePage;
