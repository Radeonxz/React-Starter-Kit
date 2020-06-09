/*
 *
 * Language
 *
 */

import * as rootActions from "./actions";
import rootReducer from "./reducer";
import * as rootSelectors from "./selectors";

const Language = {
  actions: {
    ...rootActions
  },
  reducer: rootReducer,
  selectors: {
    ...rootSelectors
  }
};

export default Language;
