// Sera un fichier qui va exporter des fonctions selector pour notre Etat todos: dans le store
// Va contenir les selecteurs de notre todos, ça sera simplement des fonctions
/**
 * @description Une fonction qui prendra en paramètre l'Etat et nous retournera ce que l'on souhaite obtenir dans cet Etat, c-à-d il va parcourir notre store et extraire ce qui a comme clé "todos" dans notre cas il va extraire nos todos dans l'Etat et nous les envoyer
 * @author NdekoCode
 * @export
 * @param {Object} todos le contenus de notre todos que l'on extrait dans notre store
 * @return {Object}
 */
export const todoSelector = ({ todos }) => todos;

export const filteredTodoSelector = ({todos,filter})=>{
    if(filter===null){
        return todos;
    }
    return todos.filter((todo)=>todo.completed===filter);
}