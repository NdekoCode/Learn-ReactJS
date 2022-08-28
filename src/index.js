import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/app.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode est un composant qui va automatiquement nous afficher des alert si vous utiliser des fonctions qui sont déprecier ou si vous avez des problèmes avec des effetch des bords, c'est une sorte de mode Debug qui vous donne un peu plus d'infos
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
