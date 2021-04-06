/**
 * AppRoutes
 */
import { Switch, Route } from "react-router-dom";

// import pages
import HomePage from "../../pages/HomePage";

const AppRoutes = () => (
	<Switch>
		<Route exact path="/">
			<HomePage />
		</Route>
	</Switch>
);

export default AppRoutes;
