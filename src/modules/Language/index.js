/*
 *
 * Language
 *
 */

import * as rootActions from "./actions";
import rootReducer from "./reducer";

const Language = {
  actions: {
    ...rootActions
  },
  reducer: rootReducer
};

export default Language;
