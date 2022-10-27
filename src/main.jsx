import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
// import { MakeAnimation } from "./components/MakeAnimation";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NewApp from "./NewApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode est un composant qui va automatiquement nous afficher des alert si vous utiliser des fonctions qui sont déprecier ou si vous avez des problèmes avec des effetch des bords, c'est une sorte de mode Debug qui vous donne un peu plus d'infos
  <React.StrictMode>
    <BrowserRouter>
      <NewApp></NewApp>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
