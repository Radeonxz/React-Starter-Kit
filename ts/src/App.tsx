import { Provider } from "react-redux";

// import configureStore, sagas, app container wrapper
import configureStore from "./modules/store/configureStore";
import moduleSagas from "./modules/store/moduleSagas";

import WelcomeContainer from "./containers/WelcomeContainer";
import AppContainer from "./containers/AppContainer";

const App = () => {
	const store = configureStore();
	store.runSaga(moduleSagas);

	return (
		<Provider store={store}>
			<AppContainer />
			<WelcomeContainer />
		</Provider>
	);
};

export default App;
