import React from "react";
import { Provider } from "react-redux";

// import configureStore, sagas, app container wrapper
import configureStore from "./modules/store/configureStore";
import moduleSagas from "./modules/store/moduleSagas";
import AppContainer from "./containers/AppContainer";
import LanguageProviderContainer from "./containers/LanguageProviderContainer";
import ThemeProviderContainer from "./containers/ThemeProviderContainer";

// import i18n messages
import { translationMessages } from "./localization/i18n";

const App = () => {
  const store = configureStore();
  store.runSaga(moduleSagas);

  return (
    <Provider store={store}>
      <LanguageProviderContainer messages={translationMessages}>
        <ThemeProviderContainer>
          <AppContainer />
        </ThemeProviderContainer>
      </LanguageProviderContainer>
    </Provider>
  );
};

export default App;
