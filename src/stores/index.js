import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export default createStore(
  // Notre Reducer
  combineReducers({
    todos: todoReducer,
    filter: (state = 0, action) => state,
  }),
  //   La configuration pour notre extension redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
