/**
 * La valeur initial de notre todo
 */
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
// L'identifiant de départ que l'on va incrementer à la suite
let id = 2;
// Les types d'actions à utiliser dans notre todoReducer
// NB: C'est sont les types d'action d'un reducer qui determine quel store est utiliser , voilà pourquoi on ne peut pas avoir des store qui utilise les memes type d'action, un type d'action n'appartient qu'à un seul store specifique
/**
 * Le type d'action pour ajouter un todo
 */
export const ADD_TODO_ACTION = "ADD_TODO_ACTION";

/**
 * Le type d'action pour modifier un todo
 */
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";

/**
 * Le type d'action pour supprimer un todo
 */
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";

/**
 * @description Le reducer pour le todoList, ce Reducer comme les autres va prendre en paramètre un Etat et une Action, l'Action qu'on passe en paramètre contiendra le type d'action à faire
 * @author NdekoCode
 * @export
 * @param {Object} [state=initialValue] L'Etat que l'on va passer à notre reducer pour les todos LIst
 * @param {Object} action L'Action à executer pour manipuler ou faire des interactions sur le state et pour cela il a deux clé: [type] et [payload]
 * @param {String} [action.type] Contient le type de la modification à apporter à notre Etat(state)
 * @param {Object} [action.payload] Contient la modification à apporter à l'Etat
 * @return {Object} L'Etat(state) un reducer retourne toujours un etat
 */
export function todoReducer(state = initialValue, action) {
  // Dans notre reducer on utilise toujour un switch case pour faire correspondre les différents type d'action aux actions à executer
  // Dans les manipulations que l'on va faire on va toujours faire une transformation immutable
  switch (action.type) {
    case ADD_TODO_ACTION:
    //  On garder l'ancien etat auquel on ajoute un nouveau identifiant et une nouvelle donnée qui est ce qui est donnée dans le payload
      return [...state, { id: ++id, completed: false, ...action.payload }];
    case UPDATE_TODO_ACTION:
      // On parcours alors l'ensemble de nos element et trouver l'element qui correspond à ce qui sera envoyer dans le payload, l'element qui sera envoyer dans le payload aura le meme id avec l'un de nos element et donc pour le trouver on doit parcourir notre Etat:
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
      // Par defaut on retourne seulement notre Etat initial
      return state;
  }
}
