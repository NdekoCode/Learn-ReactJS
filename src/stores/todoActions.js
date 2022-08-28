import { UPDATE_TODO_ACTION } from "./todoReducer";
export const toggleTodoAction = (todo) => {
  console.log(todo);
  return {
    type: UPDATE_TODO_ACTION,
    // payload sera un object qui contiendra d'abord ce que l'on a dans le todo et ajoutera la nouvelle valeur de completed
    payload: {
      ...todo,
      completed: !todo.completed,
    },
  };
};