const TodoItem = ({ todo, onToggle, onDelete }) => {
  console.log(todo);
  return (
    <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
      <input
        className="form-check-input me-2"
        type="checkbox"
        name={todo.title}
        id={todo.id}
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button className="btn btn-danger m-1 py-0 ms-3 cursor-pointer" onClick={() => onDelete(todo)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
