import { Provider } from "react-redux";
import { TodoList } from "./components/TodoList";
import store from "./stores/index";

function App() {
  return (
    <Provider store={store}>
      <div className="container py-5">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
