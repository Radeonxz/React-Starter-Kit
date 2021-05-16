/**
 * AppRoutes
 */
import { Switch, Route } from "react-router-dom";

// import pages
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default AppRoutes;
