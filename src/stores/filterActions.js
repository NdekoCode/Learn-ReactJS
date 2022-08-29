import { UPDATE_FILTER } from "./filterReducer";
// Va prendre en parametre l'Etat du filtre et au niveau du payload ça donnera la valeur qui peut etre: null, false ou true
export const setFilterAction = (value)=>({
    type: UPDATE_FILTER,
    payload: value
})