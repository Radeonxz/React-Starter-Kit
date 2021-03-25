/*
 * Theme
 */
import * as rootActions from "./actions";
import rootReducer from "./reducer";
import * as rootSelectors from "./selectors";

const Theme = {
  actions: {
    ...rootActions
  },
  reducer: rootReducer,
  selectors: {
    ...rootSelectors
  }
};

export default Theme;
