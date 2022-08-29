import { UPDATE_TODO_ACTION, DELETE_TODO_ACTION } from "../reducers/todoReducer";

/**
 * @description Permet d'envoyer une action de modification à notre todoReducer
 * @param {Object} todo La todo qu'on veut modifier 
 * @returns
 */
export const toggleTodoAction = (todo) => {
  return {
    // Le type d'action à envoyer
    type: UPDATE_TODO_ACTION,
    // payload sera un object qui contiendra d'abord ce que l'on a dans le todo passer en paramètre et ajoutera la nouvelle valeur de completed
    payload: {
      ...todo,
      completed: !todo.completed,
    },
  };
};
/**
 * @description Permet d'envoyer une action de suppression à notre todoReducer pour supprimer un todo
 * @param {Object} todo La todo qu'on veut supprimer 
 * @returns
 */
export const deleteTodoAction = (todo) => {
  return {
    type: DELETE_TODO_ACTION,
    // Va juste envoyer le todo à supprimer
    payload: {
      ...todo,
    },
  };
};
