import { Provider } from "react-redux";
// import { MakeAnimation } from "./components/MakeAnimation";
import store from "./stores/index";
import "./index.css"
import { FormUser } from "./components/FormUser";

function App() {
  return (
    // Pour utiliser redux dans le composant principale on doit le faire dans un Provider ensuite tous les composant enfant de ce composant pourrons avoir accées aux données qu'on a paser dans le props store
    <Provider store={store}>
      <div className="container py-5">
      <FormUser/>
      </div>
    </Provider>
  );
}

export default App;
