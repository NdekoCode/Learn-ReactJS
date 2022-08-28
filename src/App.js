import { Provider } from "react-redux";
import { TodoListStore } from "./components/TodoList";
import store from "./stores/index";

function App() {
  return (
    <Provider store={store}>
      <div className="container py-5">
        <TodoListStore />
      </div>
    </Provider>
  );
}

export default App;
