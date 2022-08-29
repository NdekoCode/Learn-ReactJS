import { connect } from "react-redux";
import { setFilterAction } from "../stores/actions/filterActions";
import { filterSelector } from "../stores/selectors/filterSelectors";
export function TodoFilter({ value,onChange }) {
  return (
    <div>
      <button disabled={value === null} onClick={() => onChange(null)}>Aucun filtre 
    {value}</button>
      <button disabled={value === true} onClick={() => onChange(true)}>Completer 
    {value}</button>
      <button disabled={value === false} onClick={() => onChange(false)}>Non completer 
    {value}</button>
    </div>
  );
}
// Dans connect on met null en premier paramètre car on a pas l'intention de récuperer des 
export const TodoFilterStore = connect(
  (state)=>({value:filterSelector(state)}),
  // Le deuxième paramètre de connect prend en paramètre un dispatch pour pouvoir envoyer une action, et souvent dispatch c'est une fonction qui renvois un objet contenant la fonction qui va l'utiliser
  (dispatch)=>({
    // onChange: est une fonction qui prend en paramètre une valeur et cette valeur est envoyer par le dispatch à la fonction d'action qui va faire la manipulation sur l'Etat
    onChange: (value)=>dispatch(setFilterAction(value))
  }))(TodoFilter);