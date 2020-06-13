/**
 * AppRoutes
 */
import React from "react";
import { Switch, Route } from "react-router-dom";

// import page container
import WelcomeContainer from "../WelcomeContainer";
import NotFoundContainer from "../NotFoundContainer";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <WelcomeContainer />
    </Route>
    <Route path="*">
      <NotFoundContainer />
    </Route>
  </Switch>
);

export default AppRoutes;
