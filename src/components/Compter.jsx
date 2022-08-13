import React, { useState } from "react";
import "../assets/css/Compter.css";
function useIncrement() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  return [count, increment];
}
export function Compter() {
  let [state, setState] = useState({ count: 1 });
  const handleClick = (evt) => {
    evt.preventDefault();
    setState((state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    });
  };
  return (
    <div className="compter">
      <button onClick={handleClick}>
        Nombre compter:{state.count} {JSON.stringify(state)}
      </button>
    </div>
  );
}
