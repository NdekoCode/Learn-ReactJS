import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux"
import { addTodoAction } from "../stores/actions/todoActions";

/**
 * Ce composant va nous permettre de parler de la partie asychrone de redux
 */
export const AddTodoForm = ({onSubmit})=>{
    const dispatch = useDispatch();
    const handleSubmit = useCallback((evt)=>{
        evt.preventDefault();
        dispatch(addTodoAction(input.current.value));
        input.current.value = "";
        input.current.focus();

    },[dispatch]);
    const input = useRef(null);
    return (<form onSubmit={handleSubmit} className="d-flex my-3 me-auto">
        <div>
            <input type="text" className="form-control rounded-0 rounded-start" placeholder="Entrez ce que vous vouler faire" ref={input}/>
        </div>
        <button className="btn btn-info rounded-0 rounded-end">Ajouter une tache</button>
    </form>)

}