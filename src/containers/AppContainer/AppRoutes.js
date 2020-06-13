import React from "react";
import { Switch, Route } from "react-router-dom";

// import page container
import WelcomeContainer from "../WelcomeContainer";

// import Labs from "./labs";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <WelcomeContainer />
    </Route>
    <Route path="/myprojects">
      <WelcomeContainer />
    </Route>
  </Switch>
);

export default AppRoutes;