import { connect } from "react-redux";
export function TodoFilter({ onChange }) {
  return (
    <div>
      <button onClick={() => onChange(null)}>Aucun filtre</button>
      <button onClick={() => onChange(true)}>Completer</button>
      <button onClick={() => onChange(false)}>Non completer</button>
    </div>
  );
}
// Dans connect on met null en premier paramètre car on a pas l'intention de récuperer des 
export const TodoFilterStore = connect(null,
  // Le deuxième paramètre de connect prend en paramètre un dispatch pour pouvoir envoyer une action, et souvent dispatch c'est une fonction qui renvois un objet contenant la fonction qui va l'utiliser
  (dispatch)=>({
    onChange: ()=>{}
  }))(TodoFilter)