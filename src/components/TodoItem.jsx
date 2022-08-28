const TodoItem = ({ todo, onToggle }) => {
  return (
    <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
      <input
        className="form-check-input me-2"
        type="checkbox"
        name={todo.title}
        id={todo.id}
        checked={todo.completed}
        onChange={() => {
          onToggle(todo);
          console.log(todo.completed);
        }}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
    </li>
  );
};

export default TodoItem;
