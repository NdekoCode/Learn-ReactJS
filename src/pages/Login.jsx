// import { MakeAnimation } from "./components/MakeAnimation";
import "../index.css"
import { FormUser } from "../components/FormUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = (props) =>{
    const history = useNavigate();
  useEffect(() => {
    const timer = window.setTimeout(()=>{
        history("/");
    },2000);
    return () => {
        clearTimeout(timer);
    };
  }, [history]);
  return (
    // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
      <div className="container py-5">
      <FormUser/>
      </div>
  );
}

