import { Provider } from "react-redux";
import { Home } from "./components/Home";
import TodoList from "./components/TodoList";
import store from "./stores/index";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
