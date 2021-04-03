/**
 * NotFound
 */
import { NavLink } from "react-router-dom";
import "./styled/NotFound.css";

const NotFound = () => {
	return (
		<div className="container">
			<div className="wrapper">
				<h1>404</h1>
				<p>Page Not Found</p>
				<NavLink className="App-link" to="/">
					To Home Page
				</NavLink>
			</div>
		</div>
	);
};

export default NotFound;
