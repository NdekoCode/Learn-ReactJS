import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { filterReducer } from "./reducers/filterReducer";
// Pour utiliser Redux on utilise la fonction createStore à laquel on doit passer un ou des reducer
export default createStore(
  // combineReducers() Permet de combiner plusieurs reducer qu'on va passer à redux
  combineReducers({
    // Le reducer pour les todos
    todos: todoReducer,
    // Le reducer pour filtrer les todos
    filter: filterReducer,
  }),
  //   La configuration nécessaire pour que notre extension redux devtools puisse marcher
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
