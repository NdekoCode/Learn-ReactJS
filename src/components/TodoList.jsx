import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "../stores/actions/todoActions";
import { todoSelector } from "../stores/selectors/todoSelectors";
import Decorator from "./Decorator";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="d-flex justify-content-center align-items-center">
        <Decorator />
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
//C'est ici où l'on utilise le store qu'on passe en paramètre dans Provider directement dans le fichier App.js
// On utilise un composant d'ordre supérieur
export const TodoListStore = () => {
    // On importe nos todos depuis notre selecteur, useSelector lui envoyera le store qui est passer dans le fichier App.js d'une manière implicite
  const todos = useSelector(todoSelector);
  // On importe le dispatcheur qui permet d'envoyer une action à notre reducer
  const dispatch = useDispatch();
  // On initialise une fonction qui va utiliser dispatch à fin de faire l'action de modification d'un "todo" et on envois cet action à l'aide du dispatcheur et on utilise généralement useCallback() pour éviter qu’il ne soit régénérer systématiquement
  const onToggle = useCallback(
    (todo) => {
      dispatch(toggleTodoAction(todo));
    },
    [dispatch]
  );

  // Encore avec ce dispatche on initialise une fonction qui va utiliser l'action de suppression d'un todos et on envois cet action à l'aide du dispatcheur et on utilise useCallback() pour éviter qu’il ne soit régénérer systématiquement
  const onDelete = useCallback(
    (todo) => dispatch(deleteTodoAction(todo)),
    [dispatch]
  );
  // Pour on passe toutes ces données à notre composant pour qu'il les utilisent
  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
};
