// Les types d'actions à utiliser dans notre filterReducer
// NB: C'est sont les types d'action d'un reducer qui determine quel store est utiliser , voilà pourquoi on ne peut pas avoir des store qui utilise les memes type d'action, un type d'action n'appartient qu'à un seul store specifique
/**
 * Le type d'action pour mettre à jour les filtre
 */
export const UPDATE_FILTER = "UPDATE_FILTER";
export function filterReducer(state=null,action){
    switch(action.type){
        case UPDATE_FILTER:
        return action.payload;
        default:
        return state;
    }
}