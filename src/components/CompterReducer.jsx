import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state <= 0) {
        //  Tu retourne l'Eta précedent
        return state;
      }
      return state - 1;
    default:
      throw new Error("L'action " + action.type + " est inconnus");
  }
}
export function CompterReducer() {
  const [count, dispatcher] = useReducer(reducer, 0);
  return (
    <div>
      <p>Compteur: {count}</p>
      <button
        className="btn btn-success m-1"
        onClick={() => dispatcher({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="btn btn-success m-1"
        onClick={() => dispatcher({ type: "decrement" })}
      >
        Decrement
      </button>
    </div>
  );
}
