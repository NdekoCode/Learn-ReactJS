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

export function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }];

    default:
      return state;
  }
}
