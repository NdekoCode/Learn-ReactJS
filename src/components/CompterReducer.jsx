import React, { useReducer } from "react";
function init(initialValue) {
  return {
    count: initialValue,
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload || 1 };
    case "decrement":
      if (state.count <= 0) {
        //  Tu retourne l'Eta précedent
        return state;
      }
      return { count: state.count - action.payload || 1 };
    case "reset":
      return init(0);
    default:
      throw new Error("L'action " + action.type + " est inconnus");
  }
}
export function CompterReducer() {
  const [{ count }, dispatcher] = useReducer(reducer, 0, init);
  return (
    <div>
      <p>Compteur: {JSON.stringify(count)}</p>
      <button
        className="btn btn-success m-1"
        onClick={() => dispatcher({ type: "increment", payload: 10 })}
      >
        Increment
      </button>
      <button
        className="btn btn-success m-1"
        onClick={() => dispatcher({ type: "decrement", payload: 10 })}
      >
        Decrement
      </button>
      <button
        className="btn btn-success m-1"
        onClick={() => dispatcher({ type: "reset" })}
      >
        Reinitialiser
      </button>
      <Child />
    </div>
  );
}
function Child() {
  console.log("render");
  return <div>BUmrang</div>;
}
