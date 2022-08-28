import { connect } from "react-redux";
import { UPDATE_TODO_ACTION } from "../stores/todoReducer";
import Decorator from "./Decorator";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, onToggle }) => {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="d-flex justify-content-center align-items-center">
        <Decorator />
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
};
export const TodoListStore = connect(
  (state) => ({ todos: state.todos }),

  (dispatch) => ({
    onToggle: (todo) =>
      dispatch({
        type: UPDATE_TODO_ACTION,
        payload: { ...todo, completed: !todo.completed },
      }),
  })
)(TodoList);
export default TodoList;
