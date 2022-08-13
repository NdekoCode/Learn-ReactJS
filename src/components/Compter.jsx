import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    // depend de l’Etat du state du composant sur lequel il s'execute
    window.setInterval(() => increment(), 1000);
  }, []);
  return (
    <div className="compter">
      <button onClick={increment}>Nombre compter:{count}</button>
    </div>
  );
}
