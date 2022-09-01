import { combineReducers, createStore } from "redux";
import { postReducer } from "./rootReducer";

const store = createStore(combineReducers({posts:postReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;