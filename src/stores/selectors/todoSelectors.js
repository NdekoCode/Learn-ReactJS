// Sera un fichier qui va exporter des fonctions selector pour notre Etat todos: dans le store
import { createSelector } from "reselect";
import { filterSelector } from "./filterSelectors";
// Va contenir les selecteurs de notre todos, ça sera simplement des fonctions
/**
 * @description Une fonction qui prendra en paramètre l'Etat et nous retournera ce que l'on souhaite obtenir dans cet Etat, c-à-d il va parcourir notre store et extraire ce qui a comme clé "todos" dans notre cas il va extraire nos todos dans l'Etat et nous les envoyer
 * @author NdekoCode
 * @export
 * @param {Object} todos le contenus de notre todos que l'on extrait dans notre store
 * @return {Object}
 */
export const todoSelector = ({ todos }) => todos;
// On créer une version mémoriser de notre selecteur "filteredTodoSelector" avec la dependance "reselect" 
// Cette fonction ne sera rappeler que si l'une des selecteurs que on luis passe en paramètre à changer
export const filteredTodoSelector =  createSelector(
    // Les selecteurs qui sont des dépendances à ma fonction
    todoSelector,
    filterSelector,
    // Ma fonction à executer qui prend en paramètre les dépendances en premier et en sécond paramètre , cette fonction prendra en parametre le resulat chacun des selecteurs qui aurait été mis avant( le resultat de  todoSelector et de filterSelector)
    (todos,filter)=>{

    if(filter===null){
        return todos;
    }
    return todos.filter((todo)=>todo.completed===filter); 
    }
);
// export const filteredTodoSelector = ({todos,filter})=>{ 
//     if(filter===null){
//         return todos;
//     }
//     return todos.filter((todo)=>todo.completed===filter);
// }
