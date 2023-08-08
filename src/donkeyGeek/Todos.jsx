import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Acheter du lait",
      completed: false,
    },
    {
      id: 1,
      text: "Acheter du pain",
      completed: false,
    },
    {
      id: 1,
      text: "Acheter du fromage",
      completed: false,
    },
    {
      id: 1,
      text: "Acheter du chocolat",
      completed: true,
    },
  ]);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
