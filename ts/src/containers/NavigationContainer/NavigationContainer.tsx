/**
 * NavigationContainer
 */

// import components
import Navigation from "../../components/Navigation";
import { NavigationProps } from "../../components/Navigation/Navigation.model";

const NavigationContainer = (
	props: JSX.IntrinsicAttributes & NavigationProps
) => {
	return <Navigation {...props} />;
};

export default NavigationContainer;
