import { Provider } from "react-redux";
import { TodoFilterStore } from "./components/TodoFilter";
import { TodoListStore } from "./components/TodoList";
import store from "./stores/index";

function App() {
  return (
    // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
    <Provider store={store}>
      <div className="container py-5">
        <TodoListStore />
        <TodoFilterStore/>
      </div>
    </Provider>
  );
}

export default App;
