import React, { useState } from "react";
import "../assets/css/Compter.css";
export function Compter() {
  let [state, setState] = useState({ id: 1 });
  const handleClick = (evt) => {
    evt.preventDefault();
    setState((state) => {
      return {
        ...state,
        count: 10,
      };
    });
  };
  return (
    <div className="compter">
      <button onClick={handleClick}>
        Nombre compter: {JSON.stringify(state)}
      </button>
    </div>
  );
}
