import { Provider } from "react-redux";
import { TodoFilterStore } from "./components/TodoFilter";
import { TodoListStore } from "./components/TodoList";
import store from "./stores/index";

function App() {
  return (
    <Provider store={store}>
      <div className="container py-5">
        <TodoListStore />
        <TodoFilterStore/>
      </div>
    </Provider>
  );
}

export default App;
