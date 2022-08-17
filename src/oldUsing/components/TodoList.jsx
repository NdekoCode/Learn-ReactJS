import React from "react";
import "../assets/css/loader.css";
import { useTodos } from "../hooks/Hooks";

export function TodoList() {
  const [todos, loading] = useTodos();
  if (loading) {
    return (
      <div className="loadingContainer">
        <div className="loading">
          <span className="loadWords">Loading...</span>
          <span className="loading__anim"></span>
        </div>
      </div>
    );
  }
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  );
}
