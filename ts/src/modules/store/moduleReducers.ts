/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from "redux";

// import your reducers
import Language from "../Language";

/**
 * Creates the main reducer
 */
export default function createReducer() {
  return combineReducers({
    // inject imported reducers here
    Language: Language.reducer
  });
}
