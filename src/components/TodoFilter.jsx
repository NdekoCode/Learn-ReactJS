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
// Dans connect on met null car on a pas l'intention de récuperer des props
export const TodoFilterStore = connect(
    null, 
    (dispatch) => ({
  onChange: () => null,
}))(TodoFilter);
