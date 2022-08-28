import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodoAction } from "../stores/todoActions";
import { todoSelector } from "../stores/todoSelectors";
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
//C'est ici où l'on utilise le store qu'on passe en paramètre dans Provider directement dans le fichier App.js

export const TodoListStore = () => {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback(
    (todo) => {
      dispatch(toggleTodoAction(todo));
    },
    [dispatch]
  );
  return <TodoList todos={todos} onToggle={onToggle} />;
};
