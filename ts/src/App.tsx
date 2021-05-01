import { Provider } from "react-redux";

// import configureStore, sagas, app container wrapper
import configureStore from "./modules/store/configureStore";
import moduleSagas from "./modules/store/moduleSagas";

import WelcomeContainer from "./containers/WelcomeContainer";
import AppContainer from "./containers/AppContainer";
import LanguageProviderContainer from "./containers/LanguageProviderContainer";
import ThemeProviderContainer from "./containers/ThemeProviderContainer";

const App = () => {
  const store = configureStore();
  store.runSaga(moduleSagas);

  return (
    <Provider store={store}>
      <LanguageProviderContainer messages={{}}>
        <ThemeProviderContainer>
          <AppContainer />
          <WelcomeContainer />
        </ThemeProviderContainer>
      </LanguageProviderContainer>
    </Provider>
  );
};

export default App;
