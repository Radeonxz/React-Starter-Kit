/**
 * AppRoutes
 */
import React from "react";
import { Switch, Route } from "react-router-dom";

// import pages
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/React-Starter-Kit">
      <HomePage />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default AppRoutes;
