/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from "redux";

// import your reducers

/**
 * Creates the main reducer
 */
export default function createReducer() {
  return combineReducers({
    // inject imported reducers here
  });
}
