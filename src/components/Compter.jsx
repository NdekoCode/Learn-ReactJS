import React, { useState } from "react";
import "../assets/css/Compter.css";
function useIncrement(init = 0, step = 1) {
  const [count, setCount] = useState(init);
  const increment = () => {
    setCount((count) => count + step);
  };
  return [count, increment];
}
export function Compter() {
  let [count, increment] = useIncrement(3, 2);
  return (
    <div className="compter">
      <button onClick={increment}>Nombre compter:{count}</button>
    </div>
  );
}
