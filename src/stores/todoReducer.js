const initialValue = [
  {
    id: 1,
    title: "Enregistrer le tutoriel",
    completed: false,
  },
  {
    id: 2,
    title: "Préparer le tutoriel",
    completed: true,
  },
];
let id = 3;
export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";

export function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }];
    case UPDATE_TODO_ACTION:
      //On va faire une transformation immutable car on va recevoir quelque chose en paramètre que l'on souhaite mettre à jour sur notre todo
      // On parcours alors l'ensemble de nos element et trouver l'element qui correspond à ce qui sera envoyer dans le payload, l'element qui sera envoyer dans le payload aura le meme id avec l'un de nos element et donc pour le trouver:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          // On retourne un object qui contiendra d'abord ce que l'on a dans le store et ajoutera ce que l'on a dans le payload
          return { ...todo, ...action.payload };
        }
        // Dans le cas contraire si on ne trouve rien alors on retourne seulement la todo
        return todo;
      });
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}
