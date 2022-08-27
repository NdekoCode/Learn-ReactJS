// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
const initialValue = [
  {
    id: 1,
    title: "Enregistrer le tutoriel",
    completed: false,
  },
  {
    id: 2,
    totle: "Préparer le tutoriel",
    completed: true,
  },
];
let id = 3;
const ADD_TODO_ACTION = "ADD_TODO_ACTION";
const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }];
    default:
      return state;
  }
};
const state = todoReducer(undefined, {});
// const state = todoReducer(undefined, {
//   type: ADD_TODO_ACTION,
//   payload: { title: "Terminer l'enregistreement" },
// });
console.log(state);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // React.StrictMode est un composant qui va automatiquement nous afficher des alert si vous utiliser des fonctions qui sont déprecier ou si vous avez des problèmes avec des effetch des bords, c'est une sorte de mode Debug qui vous donne un peu plus d'infos
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
