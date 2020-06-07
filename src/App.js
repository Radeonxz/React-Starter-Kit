import React from "react";
import { Provider } from "react-redux";

// import configureStore, sagas, app container wrapper
import configureStore from "./modules/store/configureStore";
import moduleSagas from "./modules/store/moduleSagas";
import AppContainer from "./containers/AppContainer";

const App = () => {
  const store = configureStore();
  store.runSaga(moduleSagas);

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
